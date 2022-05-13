import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './styles';
import URLButtons from '../../components/URLButtons';
import moment from 'moment';


export default class GuestDetails extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const title = navigation.getParam('title', 'GUESTS');

    return {
      ...homeButtonHeader(navigation),
      title: title,
    };
  }

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
      return null;
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

    let urlStyle = {...styles.urlContainer, ...styles.notTheBottom};

      guestInfo.url = guestInfo.url || "";
    const guestUrls = guestInfo.url.split(", ");

    return (
        <View style={styles.mainContainer}>
          <ScrollView>
            {guestInfo.imageUrl && 
            <ScalableImage 
            width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={{uri: guestInfo.imageUrl}}>   
            </ScalableImage>
            }

          <View style={styles.detailsContainer}>

            {guestInfo.description && 
              <Text style={styles.vendorBio}>{guestInfo.description}{"\n"}</Text>
            }

            {guestInfo.extendedDescription &&
              <Text style={styles.vendoBioText}>{guestInfo.extendedDescription}</Text>
            }
          </View>

          {this.getConnections(guestInfo)}

          {guestInfo.url && 
              <URLButtons url={guestInfo.url} urlStyle={styles.urlContainer}/>
          }


          </ScrollView>
          

        </View>
  );}}