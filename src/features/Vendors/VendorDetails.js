import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './styles';
import URLButtons from '../../components/URLButtons';

export default class VendorDetails extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const title = navigation.getParam('title', 'VENDORS');

    return {
      ...homeButtonHeader(navigation),
      title: title,
    };
  }

  render() {
    const width = Dimensions.get('window').width;
    let vendorInfo = this.props.navigation.getParam("vendorInfo");

    if (!vendorInfo) {
      const vendorId = this.props.navigation.getParam("vendorId");
      if (vendorId) {
        vendorInfo = this.props.screenProps.apiData.vendors.find(vendor => vendor.id == vendorId);
      }
    }

    if (!vendorInfo) {
      Alert.alert("Vendor not found!");
      this.props.navigation.goBack();
      return null;
    }

    let titleNumLines = 2;
    let titleFontSize = 25;
    let titleLetterSpacing = 2;

    const titleLength = vendorInfo.title.length;
    
    if (titleLength > 32) {
      titleNumLines = 2;
      titleFontSize = 18;
      titleLetterSpacing = 0;
    }

    const vendorLocation = vendorInfo.location || '';
    const locationLength = vendorLocation.length;

    let locationFontSize = 38;
    let locationNumLines = 1;

      //need to adjust font size ourselves - adjustsFontSizeToFit is iOS only
    if (locationLength > 30) {
      locationFontSize = 24;
      locationNumLines = 5;
    } else if (locationLength > 4) {
      locationFontSize = 32;
      locationNumLines = 3;
    }

    let vendorDescription = vendorInfo.description || '';

    if (vendorDescription.length > 0) {
      vendorDescription += "\n\n";
    }

    // Create new variable for ExtendedDescription from the api
    let vendorExtendedDescription = vendorInfo.extendedDescription || '';

    if (vendorExtendedDescription.length > 0) {
      vendorExtendedDescription += "\n\n";
    }

    // Old combination of vendorDescription with extendedDescription
    // vendorDescription += (vendorInfo.extendedDescription || '');

    let urlStyle = vendorLocation.length > 0 ?
      {...styles.urlContainer, ...styles.notTheBottom} :
      styles.urlContainer;

    vendorInfo.url = vendorInfo.url || "";
    const vendorUrls = vendorInfo.url.split(",");

    return (
        <View style={{flex: 1,}}>
          <ScrollView>
            {vendorInfo.imageUrl && 
            <ScalableImage 
            width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={{uri: vendorInfo.imageUrl}}>   
            </ScalableImage>
            }

          <View style={styles.detailsContainer}>

            {vendorDescription.length > 0 && 
              <Text style={styles.vendorBio}>{vendorDescription}{"\n"}</Text>
            }

            {vendorExtendedDescription.length > 0 &&
              <Text style={styles.vendoBioText}>{vendorExtendedDescription}</Text>
            }
          </View>

          </ScrollView>

          {vendorInfo.url && 
              <URLButtons url={vendorInfo.url} urlStyle={styles.urlContainer}/>
          }
          

          {vendorLocation.length > 0 &&
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: scale(locationFontSize)}]}>{vendorLocation}</Text>
          </View>
          }
        </View>
  );}}