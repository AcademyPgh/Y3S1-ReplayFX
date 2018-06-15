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

export default class EventDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }
  render() {
    const width = Dimensions.get('window').width;
    const eventInfo = this.props.navigation.getParam("eventInfo");
    return (
        <View style={{flex: 1}}>
          
            <ScalableImage width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={require('../Images/PinballGamePageImage.jpg')}>         
            <Text style={styles.headerText1}>LEARN</Text>
            <Text 
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.headerText2}>{eventInfo.title.toUpperCase()}
            </Text>
            </ScalableImage>

          <ScrollView style={styles.detailsContainer}>

            <Text>
                <Text style={styles.bolded}>Date: </Text>
                <Text style={styles.descriptions}>{new Date(eventInfo.date).toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric'} )}</Text>
            </Text>

            <Text>
                <Text style={styles.bolded}>Time: </Text>
                <Text style={styles.descriptions}>{eventInfo.startTime12 + " - " + eventInfo.endTime12}</Text>
            </Text>

              <Text style={{marginTop: 5.5}}>
                <Text style={styles.gameBio}>Description: </Text>
                <Text style={styles.gameBioText}>{eventInfo.description}{"\n"}{"\n"}</Text>
                <Text style={styles.gameBioText}>{eventInfo.extendedDescription}{"\n"}
                </Text>
              </Text>          
          </ScrollView>

          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
            <Text style={{fontSize: 44, fontFamily: Fonts.AvenirBlack, textAlign: 'center', color: 'black',}}>Location</Text>
            <Text 
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.locationDetails}>{eventInfo.location}</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
          </View>

        </View>
  );}}
  
  const styles=StyleSheet.create({
   
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
      marginLeft: 20,
      marginRight: 20,
    },

    detailsContainer: {
        padding: 20,
    },  
          
    bolded: {
      fontFamily: Fonts.AvenirBlack,
      fontSize: 16,
      letterSpacing: 1,
      lineHeight: 28,
      color: '#000000',
    },
      
    descriptions: {
      fontFamily: Fonts.AvenirMedium,
      fontSize: 16,
      lineHeight: 28,
      color: '#000000',
    }, 

    gameBio: {
      fontFamily: Fonts.AvenirBlack, 
      fontSize: 16, 
      letterSpacing: 1, 
      lineHeight: 18,
      color: '#000000',
    },

    gameBioText: {
      fontFamily: Fonts.AvenirMedium, 
      fontSize: 16, 
      letterSpacing: .5, 
      lineHeight: 18,
      color: '#000000',
    },

    locationDetails: {
      marginLeft: 20, 
      marginRight: 20, 
      fontSize: 95, 
      //lineHeight: 110, 
      fontFamily: Fonts.AvenirBlack, 
      textAlign: 'center', 
      textAlignVertical: "center",
      color: '#000000',
    },

});