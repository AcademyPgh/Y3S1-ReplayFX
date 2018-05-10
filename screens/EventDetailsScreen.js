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

export default class EventDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      headerRight: (
        <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
      ),
    };
  }
  render() {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
          
            <ImageBackground
                style={styles.headerImage}
                source={require('../Images/PinballGamePageImage.jpg')}>         
            <Text style={styles.headerText1}>LEARN</Text>
            <Text 
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.headerText2}>SEMINAR - TOONTOWN
            </Text>
            </ImageBackground>          
          
          <ScrollView style={styles.detailsContainer}>
              <Text>
                <Text style={styles.bolded}>Date: </Text>
                <Text style={styles.descriptions}>July 28</Text>
              </Text>

              <Text>
                <Text style={styles.bolded}>Time: </Text>
                <Text style={styles.descriptions}>3:30 PM - 4:30 PM</Text>
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
                <Text style={styles.gameBio}>Description: </Text>
                <Text style={styles.gameBioText}>The annual celebration of all things Toontown is right here at ReplayFX! Get an exclusive look at upcoming content from the Toontown Rewritten Team, and hear from gaming industry experts Jesse Schell and Shawn Patton from the Pittsburgh-based entertainment studio, Schell Games. Stop by our booth to find out if you have what it takes to be “Toon Enough”!</Text>
              </Text>          
          </ScrollView>

          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
            <Text style={{fontSize: 44, fontFamily: 'Avenir-Black', textAlign: 'center',}}>Location</Text>
            <Text 
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.locationDetails}>4th Floor Auditorium</Text>
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
      marginLeft: 20,
      marginRight: 20,
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

    locationDetails: {
      marginLeft: 20, 
      marginRight: 20, 
      fontSize: 95, 
      fontFamily: 'Avenir-Black', 
      textAlign: 'center', 
      textAlignVertical: "center",
    },

});