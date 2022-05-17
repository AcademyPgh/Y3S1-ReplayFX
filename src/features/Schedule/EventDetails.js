import React, { Component } from 'react';
import { ImageBackground, Platform, Text, View, Dimensions, ScrollView, Alert, TouchableOpacity, Linking} from 'react-native';
import Image from 'react-native-scalable-image';
import moment from 'moment';

import { Fonts } from '../../utils/Fonts';
import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './styles'; 
import URLButtons from '../../components/URLButtons';


export default class EventDetails extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  getTime(event) {
    let splitter = "-";
    if (event.startTime12 === null || event.endTime12 === null)
    {
      splitter = "";
    }
    const start = event.startTime12 === null ? "" : event.startTime12;
    const end = event.endTime12 === null ? "" : event.endTime12
    return `${start}${splitter}${end}`;
  }

  openWebsite = (url) => {
    if (url) {
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }
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
    let titleLetterSpacing = 2;

    const titleLength = eventInfo.title.length;
    
    if (titleLength > 32) {
      titleNumLines = 2;
      titleFontSize = 18;
      titleLetterSpacing = 0;
    }

    const eventLocation = eventInfo.location || '';
    const locationLength = eventLocation.length;

    // let locationFontSize = 38;
    let locationFontSize = 24;
    let locationNumLines = 1;

    if (Platform.OS == 'android') {
      //need to adjust font size ourselves - adjustsFontSizeToFit is iOS only
      if (locationLength > 30) {
        locationFontSize = 24;
        locationNumLines = 5;
      } else if (locationLength > 4) {
        locationFontSize = 32;
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
          <ScrollView>
            <Image width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={require('../../../Images/PinballGamePageImage.jpg')}>   
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>      
                {/*<Text style={styles.headerText1}>LEARN</Text>*/}
                <Text 
                  numberOfLines={titleNumLines} 
                  adjustsFontSizeToFit 
                  style={[styles.headerText2, {fontSize: scale(titleFontSize), letterSpacing: titleLetterSpacing}]}>{eventInfo.title.toUpperCase()}
                </Text>
                {/* <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly'}}>
                  {eventInfo.eventTypes.map((tag) => {
                    return (<View style={styles.tags}><Text style={styles.tagText}>{tag.displayName}</Text></View>)
                  })}
                </View> */}
              </View>
            </Image>

          {/* <ScrollView style={styles.detailsContainer}> */}
          <View style={styles.detailsContainer}>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly'}}>
              {eventInfo.eventTypes.map((tag) => {
                return (<View style={styles.tags}><Text style={styles.tagText}>{tag.displayName}</Text></View>)
              })}
            </View>
            <Text>
                <Text style={styles.bolded}>Date: </Text>
                <Text style={styles.descriptions}>{moment(eventInfo.date).format('ddd, MMM DD')}</Text>
            </Text>
            {(eventInfo.startTime12 || eventInfo.endTime12) &&
              <Text>
                  <Text style={styles.bolded}>Time: </Text>
                  <Text style={styles.descriptions}>{this.getTime(eventInfo)}</Text>
              </Text>
            }
            {eventInfo.imageUrl &&
              <Image width={Dimensions.get('window').width/2}
                style={styles.eventImage}
                source={{uri: eventInfo.imageUrl}}
              />
            }
            {eventDescription.length > 0 && 
              <Text style={{marginTop: verticalScale(5.5), marginBottom: verticalScale(1)}}>
                <Text style={styles.gameBio}>Description: </Text>
                <Text style={styles.gameBioText}>{eventDescription}</Text>
              </Text>
            }
            {eventInfo.url && 
              <URLButtons url={eventInfo.url} urlStyle={styles.urlContainer}/>
            }
            </View>
          </ScrollView>

          {eventLocation.length > 0 &&
          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: verticalScale(10),}}/>
            <Text style={{fontSize: scale(28), fontFamily: Fonts.AvenirBlack, textAlign: 'center', color: 'black',}}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: scale(locationFontSize)}]}>{eventLocation}</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: verticalScale(10),}}/>
          </View>
          }

        </View>
  );}}