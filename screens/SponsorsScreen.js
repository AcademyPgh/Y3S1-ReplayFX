import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { homeButtonHeader } from '../src/utils/Headers';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';

export default class SponsorsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return homeButtonHeader(navigation);
    }
  
    render() {
      return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?      
        <View style={styles.background}> 
            <View style={styles.container1}>
                <Image style={{height: '100%', resizeMode: 'contain'}} source={require('../Images/eBay_Logo_small.png')}/>
            </View>
  
           <View style={styles.container1}>
                <Image style={{height: '100%', resizeMode: 'contain'}}  source={require('../Images/lfgtranspred.png')}/>
            </View>
  
             <View style={styles.container1}>
                <Image style={{height: '100%', resizeMode: 'contain'}}  source={require('../Images/AcademyTranspRed.png')}/>
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