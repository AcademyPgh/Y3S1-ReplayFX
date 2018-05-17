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
  Alert
} from 'react-native';
import { Fonts } from '../src/utils/Fonts';

export default class PinballDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      headerRight: (
        <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
      ),
    };
  }
  render() {
    
    return (
        <View style={styles.container}>
          
         
            <ImageBackground
                style={styles.headerImage}
                source={require('../Images/PinballGamePageImage.jpg')}>         
            <Text style={styles.headerText1}>AC/DC PREMIUM</Text>
            <Text style={styles.headerText2}>PINBALL</Text>
            </ImageBackground>          
          
            <ScrollView style={styles.detailsContainer}>
              <Text>
                <Text style={styles.bolded}>Release Date: </Text>
                <Text style={styles.descriptions}>2012</Text>
              </Text>

              <Text>
                <Text style={styles.bolded}>Developer: </Text>
                <Text style={styles.descriptions}>Stern</Text>
              </Text>

              <Text>
                <Text style={styles.bolded}>Genre: </Text>
                <Text style={styles.descriptions}>Music</Text>
                </Text>

              <Text>
                <Text style={styles.bolded}>Number of Players: </Text>
                <Text style={styles.descriptions}>4</Text>
              </Text>

              <Text style={{marginTop: 5.5}}>
                <Text style={styles.gameBio}>Game Bio: </Text>
                <Text style={styles.gameBioText}> g elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more.</Text>
              </Text>      
          </ScrollView>

          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
            <Text style={{fontSize: 44, fontFamily: Fonts.AvenirBlack, textAlign: 'center',}}>Location</Text>
            <Text style={{fontSize: 95, fontFamily: Fonts.AvenirBlack, textAlign: 'center', lineHeight: 105,}}>D1</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
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
    
    headerText1: {
      fontSize: 25,
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingTop: 20
    },

    headerText2: {
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
          
    bolded: {
      fontFamily: Fonts.AvenirBlack,
      fontSize: 16,
      letterSpacing: 1,
      lineHeight: 28,
    },
      
    descriptions: {
      fontFamily: Fonts.AvenirMedium,
      fontSize: 16,
      lineHeight: 28,
    }, 

    gameBio: {
      fontFamily: Fonts.AvenirBlack, 
      fontSize: 16, 
      letterSpacing: 1, 
      lineHeight: 18,
    },

    gameBioText: {
      fontFamily: Fonts.AvenirMedium, 
      fontSize: 16, 
      letterSpacing: .5, 
      lineHeight: 18,
    },

});

const game = {
      "replayGameLocations": [
          {
              "id": 55,
              "location": "H2"
          }
      ],
      "replayGameType": {
          "id": 1,
          "name": "Arcade"
      },
      "id": 8,
      "gameTitle": "18 Wheeler: American Pro Trucker",
      "overview": "The main purpose of the game is to make it to the finish line with the truck's cargo. Players are given a set amount of time, but can ram into special vans that will add three seconds to the timer. There are several characters to choose from, each with a unique truck and attributes.The game starts out in Key West and players travel across the United States, ending in San Francisco. After Stage 1, the game gives the player a choice of trailer. One trailer is harder to haul, but provides a bigger payoff while the other choice is easier to haul but provides a smaller payoff. Money is deducted from the total when the trailer is hit. Players can sound the truck's horn to make other cars on the road yield and slipstream behind large vehicles to gain a momentary speed boost.In addition to the time limit, players also compete with the \"Lizard Tail\", a rival trucker. Crossing the finish line before the Lizard Tail yields additional money. In between levels, players can park the truck in a mini game to earn more cash.",
      "releaseDate": "2001",
      "developer": "Sega-AM2",
      "genre": "Action Racing",
      "players": "1",
      "image": "0fdb3cbd-2561-4605-8db3-9388fa26fa4c.jpg",
      "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0fdb3cbd-2561-4605-8db3-9388fa26fa4c.jpg"
  };