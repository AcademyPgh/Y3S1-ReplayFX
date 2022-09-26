import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './styles';
<<<<<<< HEAD
=======
import URLButtons from '../../components/URLButtons';
import moment from 'moment';
>>>>>>> millvale-music-festival


export default class GuestDetails extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const title = navigation.getParam('title', 'GUESTS');

    return {
      ...homeButtonHeader(navigation),
      title: title,
    };
  }

<<<<<<< HEAD
  openGuestWebsite = (url) => {
    if (url) {

      // check for http in url
      if (!url.includes('http://') || !url.includes('https://')){
        url = 'https://' + url
      }

      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }
=======
  constructor(props)
  {
    super(props);

    this.getConnections = this.getConnections.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getVendor = this.getVendor.bind(this);
  }

  getConnections(guest)
  {
    let connections = []; 
    guest.connections.forEach(conn => {
      console.log(conn);
      if(conn.type == "event")
      {
        const event = this.getEvent(conn.id);
        connections.push(<TouchableOpacity
          onPress={() => this.goToEvent(event)}
        >
          <View style={styles.event}>
            <Text style={styles.linkTitle}>{event.title}</Text>
            <Text style={styles.linkDate}>{moment(event.date).format('ddd, MMM DD')} {event.startTime12}</Text>
            <Text style={styles.linkLocation}>{event.location}</Text>
          </View>
        </TouchableOpacity>)
      }
      if(conn.type == "vendor")
      {
        const vendor = this.getVendor(conn.id);
        connections.push(<TouchableOpacity
          onPress={() => this.goToVendor(vendor)}
        >
          <View style={styles.vendor}>
            <Text style={styles.linkTitle}>{vendor.title}</Text>
            <Text style={styles.linkLocation}>{vendor.location}</Text>
          </View>
        </TouchableOpacity>)
      }
    });
    return <View>
      {connections}
      </View>
  }

  goToEvent(event)
  {
    this.props.navigation.navigate('EventDetails', {eventInfo: event});
  }

  goToVendor(vendor)
  {
    this.props.navigation.navigate('VendorDetails', {vendorInfo: vendor,  title: vendor.title});
  }

  getEvent(id)
  {
    return this.props.screenProps.apiData.events.find(e => e.id == id);
  }

  getVendor(id)
  {
    return this.props.screenProps.apiData.vendors.find(v => v.id == id);
>>>>>>> millvale-music-festival
  }

  render() {
    const width = Dimensions.get('window').width;
    let guestInfo = this.props.navigation.getParam("guestInfo");

    if (!guestInfo) {
      const guestId = this.props.navigation.getParam("guestId");
      if (guestId) {
        guestInfo = this.props.screenProps.apiData.guests.find(guest => guest.id == guestId);
      }
    }

    if (!guestInfo) {
      Alert.alert("Guest not found!");
      this.props.navigation.goBack();
      return null;
    }

    let titleNumLines = 2;
    let titleFontSize = 25;
    let titleLetterSpacing = 2;

    const titleLength = guestInfo.name.length;
    
    if (titleLength > 32) {
      titleNumLines = 2;
      titleFontSize = 18;
      titleLetterSpacing = 0;
    }

<<<<<<< HEAD
    const guestLocation = guestInfo.location || '';
    // const locationLength = guestLocation.length;

    // let locationFontSize = 38;
    // let locationNumLines = 1;

      //need to adjust font size ourselves - adjustsFontSizeToFit is iOS only
    // if (locationLength > 30) {
    //   locationFontSize = 24;
    //   locationNumLines = 5;
    // } else if (locationLength > 4) {
    //   locationFontSize = 32;
    //   locationNumLines = 3;
    // }

=======
    
>>>>>>> millvale-music-festival
    let guestDescription = guestInfo.description || '';

    // if (guestDescription.length > 0) {
    //   guestDescription += "\n\n";
    // }

    // Create new variable for ExtendedDescription from the api
    let guestExtendedDescription = guestInfo.extendedDescription || '';

    // if (guestExtendedDescription.length > 0) {
    //   guestExtendedDescription += "\n\n";
    // }

    // Old combination of guestDescription with extendedDescription
    // guestDescription += (guestInfo.extendedDescription || '');

<<<<<<< HEAD
    let urlStyle = guestLocation.length > 0 ?
      {...styles.urlContainer, ...styles.notTheBottom} :
      styles.urlContainer;

      guestInfo.url = guestInfo.url || "";
    const guestUrls = guestInfo.url.split(", ");
=======
    let urlStyle = {...styles.urlContainer, ...styles.notTheBottom};

    //   guestInfo.url = guestInfo.url || "";
    // const guestUrls = guestInfo.url.split(", ");
>>>>>>> millvale-music-festival

    return (
        <View style={styles.mainContainer}>
          <ScrollView>
<<<<<<< HEAD
=======
            {guestInfo.imageUrl && 
>>>>>>> millvale-music-festival
            <ScalableImage 
            width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={{uri: guestInfo.imageUrl}}>   
            </ScalableImage>
<<<<<<< HEAD

          <View style={styles.detailsContainer}>

            {guestDescription.length > 0 && 
              <Text style={styles.vendorBio}>{guestDescription}{"\n"}</Text>
            }

            {guestExtendedDescription.length > 0 &&
              <Text style={styles.vendoBioText}>{guestExtendedDescription}</Text>
            }
          </View>

          </ScrollView>
          {guestInfo.url &&
            <View style={urlStyle}>
              {guestUrls.map((url) => {
              return (
                <View>
                  <TouchableOpacity 
                    onPress={() => this.openGuestWebsite(url)}
                  >
                    {/* Add
                        if (url.includes("facebook")
                          <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        else ...)*/}
                    <Text style={styles.website}>{url}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
            </View>
          }

          {/* Old location data from vendor component */}
          {/* {guestLocation.length > 0 &&
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: scale(locationFontSize)}]}>{guestLocation}</Text>
          </View>
          } */}
=======
            }

          <View style={styles.detailsContainer}>
              <Text style={styles.vendorBio}>{guestInfo.description}{"\n"}</Text>
              <Text style={styles.vendorBioText}>{guestInfo.extendedDescription}</Text>
          </View>

          {this.getConnections(guestInfo)}

          {guestInfo.url && 
              <URLButtons url={guestInfo.url} urlStyle={styles.urlContainer}/>
          }


          </ScrollView>
          
>>>>>>> millvale-music-festival

        </View>
  );}}