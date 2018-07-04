import React, { Component } from 'react';
import { AppRegistry, ScrollView, Dimensions, Image, ImageBackground, Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import ScalableImage from 'react-native-scalable-image';
import { Fonts } from '../src/utils/Fonts';

export default class HomeScreen extends Component {
   
  render() {

    props = this.props;  

    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    return (

    <View style={{flex:1}}> 

        {/*<ImageBackground source={require('../Images/Background.jpg')} style={{flex:1}}>*/}

        <ScrollView> 

          <ScalableImage style={{marginTop: -2}} width={Dimensions.get('window').width}
              source={require('../Images/HomePage.png')} />

          <View style={[styles.container,]}>

            <Text style={styles.text}
              onPress={() => {
              /* 1. Navigate to the Schedule route with params */
              this.props.navigation.navigate('Schedule');
              }}>
              SCHEDULE
            </Text>
          </View>

          <View style={[styles.container,]}>
            <Text style={styles.text}
              onPress={() => {
              /* 1. Navigate to the Schedule route with params */
              this.props.navigation.navigate('GamesMain');
              }}>
              VIEW GAMES
            </Text>
          </View>

          {this.props.screenProps.apiData.eventCategories.map((category) => {
            return (
              <View style={[styles.container,]} key={category.Name}>
                <Text style={styles.text}
                  onPress={() => {
                  /* 1. Navigate to the Featured route with params */
                  this.props.navigation.navigate('Schedule', {scheduleFilter: category.Name, title: category.DisplayName.toUpperCase()});
                  }}>
                  {category.DisplayName.toUpperCase()}
                </Text>
              </View>
            );
          })}

          <View style={[styles.container,]}>    
            <Text style={styles.text}
              onPress={() => { 
              /* 1. Navigate to the Sponsors route with params */          
              this.props.navigation.navigate('VendorsList', {});
              }}>
              SHOP
            </Text>
          </View>

          <View style={[styles.container,]}>    
            <Text style={styles.text}
              onPress={() => { 
              /* 1. Navigate to the Sponsors route with params */          
              this.props.navigation.navigate('Sponsors', {});
              }}>
              SPONSORS
            </Text>
          </View>

        </ScrollView> 

      {/*</ImageBackground>*/}
      </View>
    );
  }
}


 


const styles = StyleSheet.create ({

  text: {
   marginHorizontal: 20,
   flex: 1,
   fontSize: 30,
   fontFamily: Fonts.NunitoLight,
   color: 'black',
   borderBottomWidth: StyleSheet.hairlineWidth * 6,
   borderColor: 'black',
 },

  container: {
   flex: 1,
   paddingVertical: 12,   
 },



})