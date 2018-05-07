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
                <Text style={styles.gameBioText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. read more.</Text>
              </Text>          
          </ScrollView>

          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
            <Text style={{fontSize: 44, fontFamily: 'Avenir-Black', textAlign: 'center',}}>Location</Text>
            <Text style={{fontSize: 95, fontFamily: 'Avenir-Black', textAlign: 'center', lineHeight: 105,}}>D1</Text>
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
      paddingTop: 20
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

});