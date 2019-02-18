import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native';
import ScalableImage from 'react-native-scalable-image';

import { homeButtonHeader } from '../../utils/Headers';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './styles';

export default class VendorDetails extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  openVendorWebsite = (url) => {
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
                // TODO Update this to a custom image per convention
                source={require('../../../Images/ArcadeGamePageImage.jpg')}>   
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
                <TouchableOpacity onPress={() => this.openVendorWebsite(vendorInfo.url)} >
                  <ScalableImage width={Dimensions.get('window').width - scale(40)}
                    source={{uri: vendorInfo.imageUrl}} />
                </TouchableOpacity>
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
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Location</Text>
            <Text numberOfLines={locationNumLines} adjustsFontSizeToFit style={[styles.locationDetails, {fontSize: scale(locationFontSize)}]}>{vendorLocation}</Text>
          </View>
          }

        </View>
  );}}