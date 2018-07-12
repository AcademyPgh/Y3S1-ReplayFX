import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';
import { homeButtonHeader } from '../src/utils/Headers';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';

export default class SponsorsScreen extends React.Component {
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
      return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?      
        <View style={styles.background}> 
            <View style={styles.container1}>
              <TouchableOpacity onPress={() => this.openVendorWebsite('https://www.ebay.com')} >
                <Image style={{height: '100%', resizeMode: 'contain'}} source={require('../Images/eBay_Logo_small.png')}/>
              </TouchableOpacity>
            </View>
  
            <View style={styles.container1}>
              <TouchableOpacity onPress={() => this.openVendorWebsite('https://www.lfgpgh.com')} >
                <Image style={{height: '100%', resizeMode: 'contain'}}  source={require('../Images/lfgtranspred.png')}/>
              </TouchableOpacity>
            </View>
  
            <View style={styles.container1}>
              <TouchableOpacity onPress={() => this.openVendorWebsite('https://www.academypgh.com')} >
                <Image style={{height: '100%', resizeMode: 'contain'}}  source={require('../Images/AcademyTranspRed.png')}/>
              </TouchableOpacity>
            </View>
        </View> 
        
        
      );
    }
  }
  
   
  
  const styles = StyleSheet.create({
    
   
   
     
    container1: {
      paddingVertical: verticalScale(10),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9ca4ab',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    imgcontainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    background:{
      flex: 1,
      backgroundColor: 'whitesmoke',
      borderColor: '#9ca4ab',
    },
  
      
  });