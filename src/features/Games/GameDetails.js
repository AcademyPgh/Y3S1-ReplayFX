import React, { Component } from 'react';
import { Platform, Text, View, Dimensions, ScrollView } from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './Games.styles';

export default class GameDetails extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

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
              <View style={styles.detailTitleHeader}>   
                <Text numberOfLines={titleNumLines} adjustsFontSizeToFit style={[styles.headerTextInput, {fontSize: scale(titleFontSize), letterSpacing: titleLetterSpacing}]}>{gameInfo.gameTitle.toUpperCase()}</Text>
                <Text style={styles.headerText}>{gameInfo.gameType.name.toUpperCase()}</Text>
              </View>
            </ScalableImage>
          
            <ScrollView style={styles.detailsContainer}>

              {gameInfo.releaseDate && 
              <View style={styles.titleContainer}>
                <Text style={styles.titles}>Release Date: </Text>
                <Text style={styles.descriptions}>{gameInfo.releaseDate}</Text>
              </View>
              }

              {gameInfo.developer && 
              <View style={styles.titleContainer}>
                <Text style={styles.titles}>Developer: </Text>
                <Text style={styles.descriptions}>{gameInfo.developer}</Text>
              </View>
              }

              {gameInfo.genre && 
              <View style={styles.titleContainer}>
                <Text style={styles.titles}>Genre: </Text>
                <Text style={styles.descriptions}>{gameInfo.genre}</Text>
              </View>
              }

              {gameInfo.players && 
              <View style={styles.titleContainer}>
                <Text style={styles.titles}>Number of Players: </Text>
                <Text style={styles.descriptions}>{gameInfo.players}</Text>
              </View>
              }

              {gameInfo.imageUrl &&
              <ScalableImage width={Dimensions.get('window').width/2}
                style={styles.gameImage}
                source={{uri: gameInfo.imageUrl}}
              />
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