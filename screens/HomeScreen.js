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

          {/* TODO: Header image will need to be specific to convention */}
          <View style={{elevation: 4, backgroundColor: '#CCC'}}>
            <ScalableImage style={styles.headerImage} width={Dimensions.get('window').width}
                source={{uri: props.screenProps.apiData.headerImageUrl}} />
          </View>
          {/* TODO: Links will need to be specific to convention features */}
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

          <View style={[styles.container,]}>    
            <Text style={styles.text}
              onPress={() => {       
              this.props.navigation.navigate('Map', {});
              }}>
              MAP
            </Text>
          </View>
          
          {this.props.screenProps.apiData.eventTypes.map((category) => {
            return (
              <View style={[styles.container,]} key={category.name}>
                <Text style={styles.text}
                  onPress={() => {
                  /* 1. Navigate to the Featured route with params */
                  this.props.navigation.navigate('Schedule', {scheduleFilter: category.name, title: category.displayName.toUpperCase()});
                  }}>
                  {category.displayName.toUpperCase()}
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

  headerImage: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: -2,
  }


})