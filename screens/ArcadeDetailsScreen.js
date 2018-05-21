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

export default class ArcadeDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      headerRight: (
        <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
      ),
    };
  }
  render() {
    const gameInfo = this.props.navigation.getParam("gameInfo");
    return (
        <View style={styles.container}>
          
         
            <ScalableImage width={Dimensions.get('window').width}
              background
              source={require('../Images/ArcadeGamePageImage.jpg')}>         
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.headerText1}>{gameInfo.gameTitle.toUpperCase()}</Text>
            <Text style={styles.headerText2}>ARCADE</Text>
            </ScalableImage>          
          
            <ScrollView style={styles.detailsContainer}>
              <Text>
                <Text style={styles.bolded}>Release Date: </Text>
                <Text style={styles.descriptions}>{gameInfo.releaseDate}</Text>
              </Text>

              <Text>
                <Text style={styles.bolded}>Developer: </Text>
                <Text style={styles.descriptions}>{gameInfo.developer}</Text>
              </Text>

              <Text>
                <Text style={styles.bolded}>Genre: </Text>
                <Text style={styles.descriptions}>{gameInfo.genre}</Text>
                </Text>

              <Text>
                <Text style={styles.bolded}>Number of Players: </Text>
                <Text style={styles.descriptions}>{gameInfo.players}</Text>
              </Text>

              <Text style={{marginTop: 5.5}}>
                <Text style={styles.gameBio}>Game Bio: </Text>
                <Text style={styles.gameBioText}>{gameInfo.overview}</Text>
              </Text>      
          </ScrollView>

          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
            <Text style={styles.location1}>Location</Text>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.location2}>{gameInfo.replayGameLocations.location}</Text>
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
      fontFamily: 'Avenir-Black',
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },

    headerText2: {
      fontSize: 25,
      fontFamily: 'Avenir-Black',
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingBottom: 20,
    },

    detailsContainer: {
        padding: 20,
    },  
          
    bolded: {
      fontFamily: 'Avenir-Black',
      fontSize: 16,
      letterSpacing: 1,
      lineHeight: 28,
    },
      
    descriptions: {
      fontFamily: 'Avenir-Medium',
      fontSize: 16,
      lineHeight: 28,
    }, 

    gameBio: {
      fontFamily: 'Avenir-Black', 
      fontSize: 16, 
      letterSpacing: 1, 
      lineHeight: 18,
    },

    gameBioText: {
      fontFamily: 'Avenir-Medium', 
      fontSize: 16, 
      letterSpacing: .5, 
      lineHeight: 18,
    },

    location1: {
      fontSize: 44, 
      fontFamily: 'Avenir-Black', 
      textAlign: 'center',
    },

    location2: {
      fontSize: 95, 
      fontFamily: 'Avenir-Black',
      textAlign: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },

});