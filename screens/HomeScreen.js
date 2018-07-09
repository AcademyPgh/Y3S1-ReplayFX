import React, { Component } from 'react';
import { AppRegistry, StatusBar, ScrollView, Dimensions, Image, ImageBackground, Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import ScalableImage from 'react-native-scalable-image';
import { Fonts } from '../src/utils/Fonts';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';

export default class HomeScreen extends Component {
   
  render() {

    props = this.props;  

    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    //Alert.alert('SW:' + ScreenWidth + ',SH:' + ScreenHeight + ',scl:' + scale(30));
    return (

    <View style={{flex:1}}> 
      <StatusBar backgroundColor="black" barStyle="light-content"/>

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

          <View style={[styles.container,]}>

            <Text style={styles.text}
              onPress={() => {
              /* 1. Navigate to the Schedule route with params */
              this.props.navigation.navigate('Schedule', {scheduleFilter: 'my-schedule', title: 'MY SCHEDULE'});
              }}>
              MY SCHEDULE
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
              VENDORS
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
   marginHorizontal: scale(20),
   flex: 1,
   fontSize: scale(30),
   fontFamily: Fonts.NunitoLight,
   color: 'black',
   borderBottomWidth: StyleSheet.hairlineWidth * 2,
   borderColor: 'black',
   borderStyle: 'solid'
 },

  container: {
   flex: 1,
   paddingVertical: verticalScale(12),   
 },



})