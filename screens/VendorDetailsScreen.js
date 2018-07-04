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

    let locationFontSize = 95;
    let locationNumLines = 1;
    let locationLineHeight = 110;

    if (Platform.OS == 'android') {
      //need to adjust font size ourselves - adjustsFontSizeToFit is iOS only
      if (locationLength > 30) {
        locationFontSize = 28;
        locationNumLines = 5;
        locationLineHeight = undefined;
      } else if (locationLength > 4) {
        locationFontSize = 44;
        locationNumLines = 3;
        locationLineHeight = undefined;
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

            {vendorInfo.imageUrl && 
              <View style={{alignItems: 'center', margin: 10, marginTop: 0,}}>
                <ScalableImage width={Dimensions.get('window').width - 40}
                  source={{uri: vendorInfo.imageUrl}} />
              </View>
            }

            {vendorDescription && 
              <Text style={styles.vendorBioText}>{vendorDescription}{"\n"}</Text>
            }

          </ScrollView>

          {vendorInfo.url && 
          <View>

            <View style={{borderTopColor: 'black', borderTopWidth: 1, margin: 10, marginBottom: -10, paddingVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity 
                onPress={() => this.openVendorWebsite(vendorInfo.url)}
              >
                <Text style={styles.website}>{vendorInfo.url}</Text>
              </TouchableOpacity>
            </View>
          </View>
          }

          {vendorLocation.length > 0 &&
          <View style={{borderColor: 'black', borderBottomWidth: 1, borderTopWidth: 1, margin: 10, paddingVertical: 0,}}>
            <Text style={{fontSize: 44, fontFamily: Fonts.AvenirBlack, textAlign: 'center', color: 'black',}}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: locationFontSize, lineHeight: locationLineHeight}]}>{vendorLocation}</Text>
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
      marginTop: 5,
      marginBottom: 18,
    },

    website: {
      textAlign: 'center',
      fontFamily: Fonts.AvenirBlack,
      fontSize: 18,
      color: '#6c588d',
    },

    locationDetails: {
      marginLeft: 20, 
      marginRight: 20, 
      fontSize: 95, 
      lineHeight: undefined, 
      fontFamily: Fonts.AvenirBlack, 
      textAlign: 'center', 
      textAlignVertical: "center",
      color: '#000000',
    },

});