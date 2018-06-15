import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SectionList,
  ScrollView,
  TextInput,
  ListView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

const ROW_HEIGHT = 35;

export default class GamesListScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;

      return {
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
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
      const gameType = game.replayGameType.id;
      const isValidType = validGameType ? validGameType.Id == gameType : true;

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
        <View style={style}><Text style={styles.itemText}>{item.gameTitle}</Text></View>
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

  arcadeImage = require('../Images/ArcadeMainPageImage.jpg');
  pinballImage = require('../Images/PinballMainPageImage.jpg');

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

    let image = this.arcadeImage;

    if (gameType && gameType.Name == 'Pinball') {
      image = this.pinballImage;
    }
    
    return (
      <View style={{
        flex: 1, backgroundColor: 'whitesmoke'
      }}>
        <ScalableImage width={Dimensions.get('window').width}
          source={image}/>

        <View style={{height: 34, margin: 8, borderRadius: 8, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <View style={{width: 40, height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={'search'} size={24} color='lightgray' />
          </View>
          <TextInput
            style={{flex: 1, height: '100%', padding: 0, textDecorationLine: 'none', fontSize: 20, fontFamily: 'Arial', color: 'gray'}}
            placeholder="Search"
            placeholderTextColor='lightgray'
            onChangeText={this.handleChangeSearchText}
            underlineColorAndroid='transparent'
            value={this.state.searchFilter}
          />
          {this.state.searchFilter.length > 0 && 
            <TouchableOpacity style={{width: 40, height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={this.clearSearchText}>
              <Icon name={'remove'} size={24} color='gray' />
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

class AlphaBar extends React.Component{
  constructor(props) {
    super(props);

    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.buttons = alphabet.split('');
    this.buttons.unshift('0-9');

    this.buttonLayout = {};
  }

  alphaScroll: ?ScrollView;

  setScroll = (el) => {
    this.alphaScroll = el;
  }

  layoutScroll = (e) => {
    this.scrollWidth = e.nativeEvent.layout.width;
  }

  handleContentSizeChange = (contentHeight, contentWidth) => {
    this.scrollContentWidth = contentWidth;
  };

  layoutButton = (e, key) => {
    if (!this.buttonLayout[key]) {
      this.buttonLayout[key] = {width: e.nativeEvent.layout.width, x: e.nativeEvent.layout.x};
    }
  }

  scrollToButton = (key, animate = true) => {
    const scrollHalfWidth = this.scrollWidth * 0.5;
    const button = this.buttonLayout[key];
    const buttonCenter = button.x + (button.width * 0.5);

    let scrollPos = buttonCenter - scrollHalfWidth;

    scrollPos = scrollPos < 0 ? 0 : scrollPos;

    this.alphaScroll.scrollTo({x: scrollPos, animated: animate});
  }

  handlePress = (key) => {
    this.scrollToButton(key, true);
    this.props.onPress(key);
  }

  render() {
    return ( 
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} ref={this.setScroll} onLayout={this.layoutScroll} onContentSizeChange={this.handleContentSizeChange}>
        <View style={{flexDirection: 'row'}}>
          {this.buttons.map(text => {
            let style = [styles.letter];
            if (text.length > 1) {
              style.push(styles.wideLetter);
            }
            return (
              <TouchableHighlight style={style}
                key={text}
                onLayout={(e) => {this.layoutButton(e, text)}}
                onPress={() => this.handlePress(text)}>
                  <Text style={styles.scrollLetterText}>{text}</Text>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
 
const styles=StyleSheet.create({
  stretch: {
   flex: 1,
   width: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  letter: {
    backgroundColor: '#555555',
    alignItems: 'center',
    borderLeftWidth: StyleSheet.hairlineWidth * 3,
    borderLeftColor: 'black',
    width: 35,
    margin: 0,
  },
  wideLetter: {
    width: 48
  },
  scrollLetterText: {
    fontSize: 24,
    fontFamily: 'arial',
    textAlign: 'center',
    color: '#e3e4e4',
    paddingBottom: 3,
    paddingTop: 3,
  },
   item1: {
    height: ROW_HEIGHT,
    paddingHorizontal: 5,
    borderBottomWidth: StyleSheet.hairlineWidth * 4,
    borderColor: '#9ca4ab',
    justifyContent: 'center',
  },
  item2: {
    backgroundColor: '#dddddd',
  },
  itemText: {
    fontSize: 18,
    fontFamily: 'Arial',
  }
});