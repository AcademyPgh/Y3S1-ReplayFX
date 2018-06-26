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
        <ScrollView style={styles.background}> 
          <View style={{flex: 1}}>
            <View style={styles.container1}>
                <View style={styles.imgcontainer}>
                <Image source={require('../Images/pair-logo-red.png')}/>
                </View>
            </View>
  
           <View style={styles.container1}>
                <View style={styles.imgcontainer}>
                <Image source={require('../Images/lfgtranspred.png')}/>
                </View>
            </View>
  
             <View style={styles.container1}>
                <View style={styles.imgcontainer}>
                <Image source={require('../Images/AcademyTranspRed.png')}/>
                </View>
            </View>
           
         </View>
        </ScrollView> 
        
        
      );
    }
  }
  
   
  
  const styles = StyleSheet.create({
    
   
   
     
    container1: {
      paddingVertical: 10,
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