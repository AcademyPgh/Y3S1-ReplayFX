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

export default class ScheduleScreen extends React.Component {

  render() {
    {/*const star = (<
      Icon name="star-outlined"
      size={30}
      color="yellow"
      on
    />);

    const starFilled = (<
      Icon name="star"
      size={30}
      color="yellow"
      border="grey"
      on
    />);*/}

    return(
      
      <View style={{flex: 1, flexDirection: 'column'}}>
        
        
      
        <View style={{flex: 9}}>
      <ScrollView> 
        <View style={styles.promoContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/PromoSpot.jpg')} style={{flex:9}}/>
        </View>
         <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
           {/*{star}*/}
           </View>
         
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Hello World</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
         </View>
        
          <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Hola Mundo</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
         </View>
        
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>שלום עולם</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Selam Dünya</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Привет мир</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>你好，世界</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Bonjour le Monde</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Bonjour le Monde</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Saluton Mondo</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Hello Mond</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Hello Mond</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
       <View style={[styles.container, {backgroundColor: 'white', }]}>
          <View style={styles.imgContainer}>
          <Image source={require('/Users/ohadcadji/Documents/Academy Pgh Notes/React_Native/Y3S1-ReplayFX/Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'}]}/>
          </View>
          <View style={styles.text}>   
          <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
          <Text style={styles.eventTitle}>Chào thế Giới</Text>
          <Text style={styles.Location}>4th Floor</Text>
          </View>
        </View>
        </ScrollView> 
        </View>
      </View>
      
    );
  }
}




const styles = StyleSheet.create({
  

  eventTitle: {
    paddingBottom: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
   
  },
  Time: {
    paddingBottom: 5,
    color: '#9ca4ab',
    fontSize: 16,
    
  },
  Location: {
    color: '#9ca4ab',
    fontSize: 16,   
  },

  topText: {
    justifyContent: 'center',
    color: 'blue',
    fontSize: 18,
  },

  container: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: .5,
    borderColor: '#9ca4ab',
    flexDirection: 'row',    
  },

  imgContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    paddingLeft: 40,
    alignItems: 'center',   
  },

  text: {
    justifyContent: 'center',
    paddingLeft: 40,
  },
  
  topContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    flexDirection: 'row',
  },

  dateContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#e2e2e2',
    flexDirection: 'row',
  },

  promoContainer: {
    flex: 1,
    //width: null,
    //maxWidth: 100,
    //justifyContent: 'center',
    //flexDirection: 'row',
    //alignItems: 'center',   
    //resizeMode: 'contain',
  },


});