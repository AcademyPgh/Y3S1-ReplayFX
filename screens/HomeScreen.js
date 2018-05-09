import React, { Component } from 'react';
import { AppRegistry, ScrollView, Dimensions, Image, ImageBackground, Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
   
  render() {

    props = this.props;  

   let ScreenHeight = Dimensions.get("window").height;
   let ScreenWidth = Dimensions.get("window").width;

     return (

       <View style={{flex:1}}> 
       
       
         <View style={{flex: 1,}}>

           <Image 
           style={styles.stretch}
           source={require('../Images/HomePage.png')}/>
         </View>

         <View style={{flex: 3}}>


             <ImageBackground source={require('../Images/Background.jpg')} style={{flex:1}}>
               
             <ScrollView> 

                  <ScrollView> 
       <View style={styles.promoContainer}>
       </View>
          <View style={[styles.container,]}>
          <View style={styles.imgContainer}>
          </View>
         {/*<Text style={styles.text}>props: {JSON.stringify(props)}</Text>*/}
          <Text style={styles.text}
                onPress={() => {
                  /* 1. Navigate to the Schedule route with params */
                  this.props.navigation.navigate('Schedule');
                }}>SCHEDULE</Text>
        </View>
       
        <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
         {/*<Text style={styles.text}>props: {JSON.stringify(props)}</Text>*/}
          <Text style={styles.text}
                onPress={() => {
                  /* 1. Navigate to the Schedule route with params */
                  this.props.navigation.navigate('GamesMain');
                }}>VIEW GAMES</Text>
          </View>
       
       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
         {/*<Text style={styles.text}>props: {JSON.stringify(props)}</Text>*/}
          <Text style={styles.text}
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.props.navigation.navigate('Schedule', {
                      scheduleFilter: 'Featured',
                      appData: 'appDataFromHome'
                    });
                  }}
                >FEATURED</Text>
          </View>
       
       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
          
         <Text style={styles.text}>OPEN PLAY</Text>
         
       </View>
       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
         <Text style={styles.text}>COMPETE</Text>
       </View>

       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
         <Text style={styles.text}>LIVE MUSIC</Text>
       </View>

       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>  
         <Text style={styles.text}>SEMINARS</Text>
       </View>

       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
         <Text style={styles.text}>VENDORS</Text>
       </View>

       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
         <Text style={styles.text}>SPONSORS</Text>
       </View>

       <View style={[styles.container,]}>
         <View style={styles.imgContainer}>
         </View>
         <Text style={styles.text}></Text>
       </View>
     
       </ScrollView> 
              
               </ScrollView> 
             </ImageBackground>
           </View>
           
         </View>
     );
  }
}


 


const styles = StyleSheet.create ({

  stretch: {
   flex: 1,
   width: '100%',
   height: 100
  },

  text: {
   justifyContent: 'center',
   paddingLeft: 20,
   flex: 1,
   fontSize: 30,
 },

  container: {
   flex: 1,
   paddingVertical: 15,
   borderWidth: .5,
   borderColor: '#9ca4ab',
   flexDirection: 'row',   
   
 },



})