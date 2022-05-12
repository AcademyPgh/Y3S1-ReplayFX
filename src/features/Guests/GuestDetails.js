import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './styles';
import URLButtons from '../../components/URLButtons';


export default class GuestDetails extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const title = navigation.getParam('title', 'GUESTS');

    return {
      ...homeButtonHeader(navigation),
      title: title,
    };
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

          {guestInfo.url && 
              <URLButtons url={guestInfo.url} urlStyle={styles.urlContainer}/>
          }

          </ScrollView>
          

        </View>
  );}}