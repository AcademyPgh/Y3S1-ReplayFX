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
  Alert,
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import moment from 'moment';

import { Fonts } from '../src/utils/Fonts';
import { homeButtonHeader } from '../src/utils/Headers';

export default class EventDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  render() {
    const width = Dimensions.get('window').width;
    let eventInfo = this.props.navigation.getParam("eventInfo");

    if (!eventInfo) {
      const eventId = this.props.navigation.getParam("eventId");
      if (eventId) {
        eventInfo = this.props.screenProps.apiData.events.find(event => event.id == eventId);
      }
    }

    if (!eventInfo) {
      Alert.alert("Event not found!");
      this.props.navigation.goBack();
      return null;
    }

    let titleNumLines = 2;
    let titleFontSize = 25;

    const titleLength = eventInfo.title.length;
    
    if (titleLength > 32) {
      titleNumLines = 2;
      titleFontSize = 18;
    }

    const eventLocation = eventInfo.location || '';
    const locationLength = eventLocation.length;

    let locationFontSize = 95;
    let locationNumLines = 1;

    if (Platform.OS == 'android') {
      //need to adjust font size ourselves - adjustsFontSizeToFit is iOS only
      if (locationLength > 30) {
        locationFontSize = 28;
        locationNumLines = 5;
      } else if (locationLength > 4) {
        locationFontSize = 44;
        locationNumLines = 3;
      }
    }

    let eventDescription = eventInfo.description || '';

    if (eventDescription.length > 0) {
      eventDescription += "\n\n";
    }

    eventDescription += (eventInfo.extendedDescription || '');

    return (
        <View style={{flex: 1}}>
          
            <ScalableImage width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={require('../Images/PinballGamePageImage.jpg')}>   
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>      
                {/*<Text style={styles.headerText1}>LEARN</Text>*/}
                <Text 
                  numberOfLines={titleNumLines} 
                  adjustsFontSizeToFit 
                  style={[styles.headerText2, {fontSize: titleFontSize}]}>{eventInfo.title.toUpperCase()}
                </Text>
              </View>
            </ScalableImage>

          <ScrollView style={styles.detailsContainer}>

            <Text>
                <Text style={styles.bolded}>Date: </Text>
                <Text style={styles.descriptions}>{moment(eventInfo.date).format('ddd, MMM DD')}</Text>
            </Text>

            <Text>
                <Text style={styles.bolded}>Time: </Text>
                <Text style={styles.descriptions}>{eventInfo.startTime12 + " - " + eventInfo.endTime12}</Text>
            </Text>

            {eventDescription.length > 0 && 
              <Text style={{marginTop: 5.5, marginBottom: 18}}>
                <Text style={styles.gameBio}>Description: </Text>
                <Text style={styles.gameBioText}>{eventDescription + "\n"}</Text>
              </Text>
            }
          </ScrollView>

          {eventLocation.length > 0 &&
          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
            <Text style={{fontSize: 44, fontFamily: Fonts.AvenirBlack, textAlign: 'center', color: 'black',}}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: locationFontSize}]}>{eventLocation}</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
          </View>
          }

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
      paddingTop: 12
    },

    headerText2: {
      fontSize: 25,
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
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