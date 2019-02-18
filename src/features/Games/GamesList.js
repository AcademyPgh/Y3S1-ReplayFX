import React, { Component } from 'react';
import { Text, View, Dimensions, SectionList, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale } from '../../utils/Scaling';
import { styles } from './Games.styles';
import AlphaBar from './AlphaBar';

const ROW_HEIGHT = verticalScale(35);

export default class GamesList extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  constructor(props) {
    super(props);

    this.games = this.props.screenProps.apiData.games;

    this.state = {
      searchFilter: '',
    };

    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.alphaSections = alphabet.split('');
    this.alphaSections.unshift('0-9');

    this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
  }

  showGameDetails(game) {
    this.props.navigation.navigate("GameDetails", {gameInfo: game});
  }

  handleChangeSearchText(text) {
    this.setState({searchFilter: text});
  }

  clearSearchText = () => {
    this.setState({searchFilter: ''});
  };

  handleAlphaBarPress = (text) => {

    const sectionIndex = this.alphaSections.indexOf(text);

    this.sectionList.scrollToLocation({animated: false, sectionIndex: sectionIndex, itemIndex: 0});
  }

  filterGames = (games) => {

    const validGameType = this.props.navigation.getParam('gameType', null);

    return games.filter(game =>{
      const gameType = game.gameType.id;
      const isValidType = validGameType ? validGameType.id == gameType : true;

      let matchesSearch = false;
      const searchTerm = this.state.searchFilter.toLowerCase();
      if (searchTerm.length == 0) {
        matchesSearch = true;
      } else {
        matchesSearch = game.gameTitle.toLowerCase().includes(searchTerm);
      }

      return isValidType && matchesSearch;
    })
  }

  keyExtractor = (item, index) => item.id.toString();

  renderGame = ({item, index, section}) => {
    const totalIndex = section.startIndex + index;
    let style = [styles.item1];
    if (totalIndex % 2 != 0) {
        style.push(styles.item2);
    }
    return (
      <TouchableOpacity key={item.id} onPress={() => {this.showGameDetails(item)}}>
        <View style={style}><Text numberOfLines={1} style={styles.itemText}>{item.gameTitle}</Text></View>
      </TouchableOpacity>
    );
  };

  setSectionList = (el) => {
    this.sectionList = el;
  }

  getItemLayout = sectionListGetItemLayout({
    // The height of the row with rowData at the given sectionIndex and rowIndex
    getItemHeight: (rowData, sectionIndex, rowIndex) => ROW_HEIGHT,
  })

  render() {
    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    let displayedGames = this.filterGames(this.games);

    //convert our alphaSections array into an object with a key for each section
    let sectionedGames = {};
    
    this.alphaSections.forEach(section => {
      sectionedGames[section] = [];
    });

    //put games into sections based on first character
    //if first character isn't found in sections, push into first section
    displayedGames.forEach(game => {
      const gameTitle = game.gameTitle;
      const firstchar = gameTitle[0];
      const targetSection = sectionedGames[firstchar.toUpperCase()];

      if (targetSection) {
        targetSection.push(game);
      } else {
        sectionedGames[this.alphaSections[0]].push(game);
      }
    });

    //used to track total index across sections
    let sectionStartIndex = 0;

    //now flatten the sections down to just an array of title and data, removing the keys
    sectionedGames = Object.keys(sectionedGames).map(sectionKey => { 
      const result = {title: sectionKey, startIndex: sectionStartIndex, data: sectionedGames[sectionKey]};
      sectionStartIndex += sectionedGames[sectionKey].length;
      return result;
    });

    const gameType = this.props.navigation.getParam('gameType', null);

    let image = gameType.headerImageUrl;

    return (
      <View style={styles.listContainer}>
        <ScalableImage width={Dimensions.get('window').width}
          source={{uri: image}}/>

        <View style={styles.searchContainer}>
          <View style={styles.searchView}>
            <Icon name={'search'} size={verticalScale(24)} color='lightgray' />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor='lightgray'
            onChangeText={this.handleChangeSearchText}
            underlineColorAndroid='transparent'
            value={this.state.searchFilter}
          />
          {this.state.searchFilter.length > 0 && 
            <TouchableOpacity style={styles.searchClear} onPress={this.clearSearchText}>
              <Icon name={'remove'} size={verticalScale(24)} color='gray' />
            </TouchableOpacity>
          }
        </View>

        <View>
          <AlphaBar onPress={this.handleAlphaBarPress}/>
        </View>

        <View style={{
          flex: 8, 
         }}>
          <SectionList 
            ref={this.setSectionList}
            sections={sectionedGames} 
            renderItem={this.renderGame} 
            keyExtractor={this.keyExtractor}
            getItemLayout={this.getItemLayout}
            initialNumToRender={20}
          />
        </View>
    </View>
    );
  }
}

