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

export default class SponsorsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }
  
    render() {
      return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?      
        <ScrollView style={styles.background}> 
          
            <View style={styles.container}>
                <View style={styles.imgcontainer}>
                <Image source={require('../Images/PairLogo.jpg')}/>
                </View>
            </View>
  
           <View style={styles.container}>
                <View style={styles.imgcontainer}>
                <Image source={require('../Images/LFGLogo.jpg')}/>
                </View>
            </View>
  
             <View style={styles.container}>
                <View style={styles.imgcontainer}>
                <Image source={require('../Images/AcademyLogo.jpg')}/>
                </View>
            </View>
           
         
          </ScrollView> 
        
        
      );
    }
  }
  
   
  
  const styles = StyleSheet.create({
    
   
   
    container: {
      flex: 3,
      paddingVertical: 10,
      borderWidth: .4,
      borderColor: '#9ca4ab',
      justifyContent: 'center',
      
    },
    
      imgcontainer: {
      justifyContent: 'center',
      flexDirection: 'row',
  
    },
    background:{
      flex: 1,
      backgroundColor: 'whitesmoke',
      borderColor: '#9ca4ab',
     
  
    },
  
      
  });