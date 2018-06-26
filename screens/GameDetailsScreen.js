import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  AppRegistry,
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import { Fonts } from '../src/utils/Fonts';
import { homeButtonHeader } from '../src/utils/Headers';

export default class GameDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  arcadeImage = require('../Images/ArcadeGamePageImage.jpg');
  pinballImage = require('../Images/PinballGamePageImage.jpg');

  render() {
    let gameInfo = this.props.navigation.getParam("gameInfo");

    if (!gameInfo) {
      const gameId = this.props.navigation.getParam("gameId");
      if (gameId) {
        gameInfo = this.props.screenProps.apiData.games.find(game => game.id == gameId);
      }
    } 

    if (!gameInfo) {
      Alert.alert("Game not found!");
      this.props.navigation.goBack();
      return null;
    }

    let image = this.arcadeImage;

    if (gameInfo.replayGameType.name == 'Pinball') {
      image = this.pinballImage;
    }

    let gameLocation = gameInfo.replayGameLocations.map((loc) => { return loc.location; }).join(', ');

    let locationFontSize = 95;
    let numLines = 1;

    const locationLength = gameLocation.length;

    if (Platform.OS == 'android') {
      //need to adjust font size ourselves - adjustsFontSizeToFit is iOS only
      if (locationLength > 30) {
        locationFontSize = 28;
        numLines = 5;
      } else if (locationLength > 4) {
        locationFontSize = 44;
        numLines = 3;
      }
    }

    return (
        <View style={styles.container}>
          
         
            <ScalableImage width={Dimensions.get('window').width}
              background
              source={image}>         
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.headerTextInput}>{gameInfo.gameTitle.toUpperCase()}</Text>
            <Text style={styles.headerText}>{gameInfo.replayGameType.name.toUpperCase()}</Text>
            </ScalableImage>          
          
            <ScrollView style={styles.detailsContainer}>
              <Text>
                <Text style={styles.titles}>Release Date: </Text>
                <Text style={styles.descriptions}>{gameInfo.releaseDate}</Text>
              </Text>

              <Text>
                <Text style={styles.titles}>Developer: </Text>
                <Text style={styles.descriptions}>{gameInfo.developer}</Text>
              </Text>

              <Text>
                <Text style={styles.titles}>Genre: </Text>
                <Text style={styles.descriptions}>{gameInfo.genre}</Text>
                </Text>

              <Text>
                <Text style={styles.titles}>Number of Players: </Text>
                <Text style={styles.descriptions}>{gameInfo.players}</Text>
              </Text>

              <Text style={{marginTop: 5.5}}>
                <Text style={styles.gameBioTitle}>Game Bio: </Text>
                <Text style={styles.gameBioInput}>{gameInfo.overview}{"\n"}</Text>
              </Text>                   
          </ScrollView>

          <View>
            <View style={styles.locationBorder}/>
            <Text style={styles.location}>Location</Text>
            <Text numberOfLines={numLines} adjustsFontSizeToFit style={[styles.locationInput, {fontSize: locationFontSize}]}>{gameLocation}</Text>
            <View style={styles.locationBorder}/>
          </View>

        </View>
  );}}
  
  const styles=StyleSheet.create({
    
    container: {
      flex: 1,
    },
   
    headerImage: {
      width: undefined,
      height: undefined,
    },
    
    headerTextInput: {
      fontSize: 25,
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },

    headerText: {
      fontSize: 25,
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingBottom: 20,
    },

    detailsContainer: {
        padding: 20,
    },  
          
    titles: {
      fontFamily: Fonts.AvenirBlack,
      color: '#000000',
      fontSize: 16,
      letterSpacing: 1,
      lineHeight: 28,
    },
      
    descriptions: {
      fontFamily: Fonts.AvenirMedium,
      color: '#000000',
      fontSize: 16,
      lineHeight: 28,
    }, 

    gameBioTitle: {
      fontFamily: Fonts.AvenirBlack, 
      color: '#000000',
      fontSize: 16, 
      letterSpacing: 1, 
      lineHeight: 18,
    },

    gameBioInput: {
      fontFamily: Fonts.AvenirMedium,
      color: '#000000', 
      fontSize: 16, 
      letterSpacing: .5, 
      lineHeight: 18,

    },

    locationBorder: {
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      margin: 10
    },

    location: {
      fontSize: 44, 
      fontFamily: Fonts.AvenirBlack, 
      color: '#000000',
      textAlign: 'center',
    },

    locationInput: {
      fontSize: 95, 
      fontFamily: Fonts.AvenirBlack,
      color: '#000000',
      textAlign: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },

});