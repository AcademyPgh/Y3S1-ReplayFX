import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
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

export default class ArcadeListScreen extends React.Component {

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

    this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
  }

  showGameDetails(game) {
    //Alert.alert("You booped game id " + game.id + ":" + game.gameTitle + "!");
    
    this.props.navigation.navigate("ArcadeDetails", {gameInfo: game});
  }

  handleChangeSearchText(text) {
    this.setState({searchFilter: text});
  }

  clearSearchText = () => {
    this.setState({searchFilter: ''});
  };

  render() {
    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;
 
    return (
      <View style={{
        flex: 1,
      }}>
        <ScalableImage width={Dimensions.get('window').width}
          source={require('../Images/ArcadeMainPageImage.jpg')}/>

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
          <AlphaBar/>
        </View>

        <View style={{
          flex: 8, 
         }}>
          <ScrollView>
        
            { this.games.filter(game =>{
                const gameType = game.replayGameType;
                const isArcade = gameType.name == 'Arcade';

                let matchesSearch = false;
                const searchTerm = this.state.searchFilter.toLowerCase();
                if (searchTerm.length == 0) {
                  matchesSearch = true;
                } else {
                  matchesSearch = game.gameTitle.toLowerCase().includes(searchTerm);
                }

                return isArcade && matchesSearch;
              })
              .map((game, index) => {
                let style = [styles.item1];
                if (index % 2 != 0){
                    style.push(styles.item2);
                }
                return (
                  <TouchableHighlight key={game.id} onPress={() => {this.showGameDetails(game)}}>
                    <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={style}>{game.gameTitle}</Text></View>
                  </TouchableHighlight>
                );
              })
            }
          </ScrollView>
        </View>
    </View>
    );
  }
}

class AlphaBar extends React.Component{
    render() {
        return ( 
          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>1-9</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>A</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>B</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>C</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>D</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>E</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>F</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>G</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>H</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>I</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>J</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>K</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>L</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>M</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>N</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>O</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>P</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>Q</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>R</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>S</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>T</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>U</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>V</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>W</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>X</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>Y</Text></View>
              <View style={styles.letter}><Text style={styles.scrollLetterText}>Z</Text></View>
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
     borderRightWidth: 0,
     borderLeftWidth: .5,
     borderRightColor: 'black',
     borderLeftColor: 'black',
  },
  scrollLetterText: {
    fontSize: 20,
    fontFamily: 'arial',
    color: '#e3e4e4',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 9,
    paddingRight: 9, 
  },
   item1: {
    padding: 5,
    fontSize: 18,
    fontFamily: 'Arial',
    borderColor: 'black',
    borderWidth: .5
  },
  item2: {
    backgroundColor: '#dddddd',
  },
});