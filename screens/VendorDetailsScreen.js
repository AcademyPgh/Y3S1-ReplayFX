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

export default class VendorDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
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
                  style={[styles.headerText2, {fontSize: titleFontSize, letterSpacing: titleLetterSpacing}]}>{vendorInfo.title.toUpperCase()}
                </Text>
              </View>
            </ScalableImage>

          <ScrollView style={styles.detailsContainer}>
            {vendorDescription.length > 0 && 
              <Text style={{marginTop: 5.5, marginBottom: 18}}>
                { /* <Text style={styles.vendorBio}>Description: </Text> */ }
                <Text style={styles.vendorBioText}>{vendorDescription + "\n"}</Text>
              </Text>
            }
          </ScrollView>

          {vendorLocation.length > 0 &&
          <View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, margin: 10,}}/>
            <Text style={{fontSize: 44, fontFamily: Fonts.AvenirBlack, textAlign: 'center', color: 'black',}}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: locationFontSize}]}>{vendorLocation}</Text>
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

    vendorBio: {
      fontFamily: Fonts.AvenirBlack, 
      fontSize: 16, 
      letterSpacing: 1, 
      lineHeight: 18,
      color: '#000000',
    },

    vendorBioText: {
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