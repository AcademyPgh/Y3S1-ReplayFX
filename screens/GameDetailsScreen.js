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
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';

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

    let image = gameInfo.gameType.headerImageUrl;

    let titleNumLines = 2;
    let titleFontSize = 25;
    let titleLetterSpacing = 2;

    const titleLength = gameInfo.gameTitle.length;
    
    if (titleLength > 32) {
      titleNumLines = 2;
      titleFontSize = 18;
      titleLetterSpacing = 0;
    }

    let gameLocation = gameInfo.gameLocations.map((loc) => { return loc.location; }).join(', ') || '';

    let locationFontSize = 38;
    let locationNumLines = 1;

    const locationLength = gameLocation.length;

    if (Platform.OS == 'android') {
      //need to adjust font size ourselves - adjustsFontSizeToFit is iOS only
      if (locationLength > 30) {
        locationFontSize = 26;
        locationNumLines = 5;
      } else if (locationLength > 4) {
        locationFontSize = 32;
        locationNumLines = 3;
      }
    }

    return (
        <View style={styles.container}>
            <ScalableImage width={Dimensions.get('window').width}
              background
              source={{uri: image}}
              blurRadius={3}>      
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(20, 20, 20, .2)', }}>   
                <Text numberOfLines={titleNumLines} adjustsFontSizeToFit style={[styles.headerTextInput, {fontSize: scale(titleFontSize), letterSpacing: titleLetterSpacing}]}>{gameInfo.gameTitle.toUpperCase()}</Text>
                <Text style={styles.headerText}>{gameInfo.gameType.name.toUpperCase()}</Text>
              </View>
            </ScalableImage>
          
            <ScrollView style={styles.detailsContainer}>

              {gameInfo.releaseDate && 
              <Text>
                <Text style={styles.titles}>Release Date: </Text>
                <Text style={styles.descriptions}>{gameInfo.releaseDate}</Text>
              </Text>
              }

              {gameInfo.developer && 
              <Text>
                <Text style={styles.titles}>Developer: </Text>
                <Text style={styles.descriptions}>{gameInfo.developer}</Text>
              </Text>
              }

              {gameInfo.genre && 
              <Text>
                <Text style={styles.titles}>Genre: </Text>
                <Text style={styles.descriptions}>{gameInfo.genre}</Text>
                </Text>
              }

              {gameInfo.players && 
              <Text>
                <Text style={styles.titles}>Number of Players: </Text>
                <Text style={styles.descriptions}>{gameInfo.players}</Text>
              </Text>
              }

              {gameInfo.overview && 
              <Text style={{marginTop: verticalScale(5.5), marginBottom: verticalScale(18)}}>
                <Text style={styles.gameBioTitle}>Game Bio: </Text>
                <Text style={styles.gameBioInput}>{gameInfo.overview}{"\n"}</Text>
              </Text>
              }
          </ScrollView>

          {gameLocation.length > 0 &&
          <View>
            <View style={styles.locationBorder}/>
            <Text style={styles.location}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationInput, {fontSize: scale(locationFontSize)}]}>{gameLocation}</Text>
            <View style={styles.locationBorder}/>
          </View>
          }

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
      fontSize: scale(25),
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingTop: verticalScale(12),
      paddingLeft: scale(10),
      paddingRight: scale(10),
    },

    headerText: {
      fontSize: scale(25),
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingBottom: verticalScale(12),
      marginTop: verticalScale(-8),
    },

    detailsContainer: {
        padding: scale(20),
    },  
          
    titles: {
      fontFamily: Fonts.AvenirBlack,
      color: '#000000',
      fontSize: scale(16),
      letterSpacing: 1,
      lineHeight: scale(28),
    },
      
    descriptions: {
      fontFamily: Fonts.AvenirMedium,
      color: '#000000',
      fontSize: scale(16),
      lineHeight: scale(28),
    }, 

    gameBioTitle: {
      fontFamily: Fonts.AvenirBlack, 
      color: '#000000',
      fontSize: scale(16), 
      letterSpacing: 1, 
      lineHeight: scale(18),
    },

    gameBioInput: {
      fontFamily: Fonts.AvenirMedium,
      color: '#000000', 
      fontSize: scale(16), 
      letterSpacing: .5, 
      lineHeight: scale(18),
    },

    locationBorder: {
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      margin: verticalScale(10)
    },

    location: {
      fontSize: scale(28), 
      fontFamily: Fonts.AvenirBlack, 
      color: '#000000',
      textAlign: 'center',
    },

    locationInput: {
      fontSize: scale(38), 
      fontFamily: Fonts.AvenirBlack,
      color: '#000000',
      textAlign: 'center',
      paddingLeft: scale(10),
      paddingRight: scale(10),
    },

});