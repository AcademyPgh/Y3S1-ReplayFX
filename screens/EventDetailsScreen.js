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
    const eventInfo = this.props.navigation.getParam("eventInfo");
    return (
        <View style={styles.container}>
          
            <ScalableImage width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={require('../Images/PinballGamePageImage.jpg')}>         
            <Text style={styles.headerText1}>LEARN</Text>
            <Text 
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.headerText2}>SEMINAR - TOONTOWN
            </Text>
            </ScalableImage>
          
          <ScrollView style={styles.detailsContainer}>
              <Text>
                <Text style={styles.descriptions}>{eventInfo.description}</Text>
                </Text>
              
              <Text>
                <Text style={styles.bolded}>Date: </Text>
                <Text style={styles.descriptions}>{new Date(eventInfo.date).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'} )}</Text>
              </Text>

              <Text>
                <Text style={styles.bolded}>Time: </Text>
                <Text style={styles.descriptions}>{eventInfo.startTime12 + " - " + eventInfo.endTime12}</Text>
              </Text>

              <Text style={{marginTop: 5.5}}>
                <Text style={styles.gameBio}>Description: </Text>
                <Text style={styles.gameBioText}>{eventInfo.extendedDescription}</Text>
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