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
  Linking,
  TouchableOpacity,
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import moment from 'moment';

import { Fonts } from '../src/utils/Fonts';
import { homeButtonHeader } from '../src/utils/Headers';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';

export default class VendorDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  openVendorWebsite = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
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

    vendorDescription += (vendorInfo.extendedDescription || '');

    return (
        <View style={{flex: 1}}>
          
            <ScalableImage width={Dimensions.get('window').width}
                background
                style={styles.headerImage}
                source={require('../Images/ArcadeGamePageImage.jpg')}>   
              <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>      
                {/*<Text style={styles.headerText1}>LEARN</Text>*/}
                <Text 
                  numberOfLines={titleNumLines} 
                  adjustsFontSizeToFit 
                  style={[styles.headerText2, {fontSize: scale(titleFontSize), letterSpacing: titleLetterSpacing}]}>{vendorInfo.title.toUpperCase()}
                </Text>
              </View>
            </ScalableImage>

          <ScrollView style={styles.detailsContainer}>

            {vendorInfo.imageUrl && 
              <View style={{alignItems: 'center', margin: scale(10), marginTop: 0,}}>
                <ScalableImage width={Dimensions.get('window').width - scale(40)}
                  source={{uri: vendorInfo.imageUrl}} />
              </View>
            }

            {vendorDescription.length > 0 && 
              <Text style={styles.vendorBioText}>{vendorDescription}{"\n"}</Text>
            }


          </ScrollView>

          {vendorInfo.url && 
          <View>

            <View style={{borderTopColor: 'black', borderTopWidth: 1, margin: verticalScale(10), marginBottom: verticalScale(-10), paddingVertical: verticalScale(5), justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity 
                onPress={() => this.openVendorWebsite(vendorInfo.url)}
              >
                <Text style={styles.website}>{vendorInfo.url}</Text>
              </TouchableOpacity>
            </View>
          </View>
          }

          {vendorLocation.length > 0 &&
          <View style={{borderColor: 'black', borderBottomWidth: 1, borderTopWidth: 1, margin: verticalScale(10), paddingVertical: 0,}}>
            <Text style={{fontSize: scale(28), fontFamily: Fonts.AvenirBlack, textAlign: 'center', color: 'black',}}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: scale(locationFontSize)}]}>{vendorLocation}</Text>
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
      fontSize: scale(25),
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingTop: verticalScale(12)
    },

    headerText2: {
      fontSize: scale(25),
      fontFamily: Fonts.AvenirBlack,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      marginLeft: scale(20),
      marginRight: scale(20),
    },

    detailsContainer: {
        padding: scale(20),
    },  
          
    bolded: {
      fontFamily: Fonts.AvenirBlack,
      fontSize: scale(16),
      letterSpacing: 1,
      lineHeight: scale(28),
      color: '#000000',
    },
      
    descriptions: {
      fontFamily: Fonts.AvenirMedium,
      fontSize: scale(16),
      lineHeight: scale(28),
      color: '#000000',
    }, 

    vendorBio: {
      fontFamily: Fonts.AvenirBlack, 
      fontSize: scale(16), 
      letterSpacing: 1, 
      lineHeight: scale(18),
      color: '#000000',
    },

    vendorBioText: {
      fontFamily: Fonts.AvenirMedium, 
      fontSize: scale(16), 
      letterSpacing: .5, 
      lineHeight: scale(18),
      color: '#000000',
      marginTop: 5,
      marginBottom: verticalScale(18),
    },

    website: {
      textAlign: 'center',
      fontFamily: Fonts.AvenirBlack,
      fontSize: scale(18),
      color: '#6c588d',
    },

    locationDetails: {
      marginLeft: scale(12), 
      marginRight: scale(12), 
      fontSize: scale(38), 
      fontFamily: Fonts.AvenirBlack, 
      textAlign: 'center', 
      textAlignVertical: "center",
      color: '#000000',
    },

});