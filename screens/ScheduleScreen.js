import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableHighlight,
  Alert,

  
} from 'react-native';

export default class ScheduleScreen extends React.Component {

  constructor(props) {
    super(props);
    this.PressText=this.PressText.bind(this);
  }

  PressStar() {
    Alert.alert('You tapped the button!');
  }

  PressText() {
    this.props.navigation.navigate('Schedule');  
  }

  render() {

    return(
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'pink'}}>
        
        
      <ScrollView> 
       
          <View style={{flex: 1}}>
          <Image
          style={styles.promoContainer}
          source={require('../Images/PromoSpot.jpg')}/>
          </View>
          
        
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
              <Image style={styles.starbutton}
              source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>            
        <View style={styles.text}>
          <View style={styles.textContainer}>
            <TouchableHighlight onPress={this.PressText}>
              <View>                            
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Hello World</Text>
                <Text style={styles.Location}>4th Floor</Text>            
              </View>                    
            </TouchableHighlight>
          </View>
        </View>

      </View>
        
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
              <Image style={styles.starbutton}
              source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>
          <View style={styles.textContainer}>
            <TouchableHighlight onPress={this.PressText}>
              <View>     
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Hola Mundo</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>
        
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
            <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>
          <View style={styles.textContainer}> 
            <TouchableHighlight onPress={this.PressText}>
              <View>    
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>שלום עולם</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>
        
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
            <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>
          <View style={styles.textContainer}>   
            <TouchableHighlight onPress={this.PressText}>
              <View>  
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Selam Dünya</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>

      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
            <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>  
          <View style={styles.textContainer}> 
            <TouchableHighlight onPress={this.PressText}>
              <View>  
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Привет мир</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>

      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
            <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>
          <View style={styles.textContainer}> 
            <TouchableHighlight onPress={this.PressText}>
              <View>
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>你好，世界</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>

      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
              <Image style={styles.starbutton}
              source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>
          <View style={styles.textContainer}>
            <TouchableHighlight onPress={this.PressText}>
              <View>     
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Bonjour le Monde</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>

      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
            <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>
          <View style={styles.textContainer}>   
            <TouchableHighlight onPress={this.PressText}>
              <View>  
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Bonjour le Monde</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>          
          </View>
        </View>

      </View>

      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
            <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>

        <View style={styles.text}>
          <View style={styles.textContainer}>  
            <TouchableHighlight onPress={this.PressText}>
             <View>   
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Saluton Mondo</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>

      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableHighlight onPress={this.PressStar} >
          <View style={styles.starContainer}>            
            <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
          </View>
        </TouchableHighlight>
          
        <View style={styles.text}>
          <View style={styles.textContainer}>
            <TouchableHighlight onPress={this.PressText}>
              <View>     
                <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                <Text style={styles.eventTitle}>Hello Mond</Text>
                <Text style={styles.Location}>4th Floor</Text>
              </View>         
            </TouchableHighlight>
          </View>
        </View>

      </View>

        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <TouchableHighlight onPress={this.PressStar} >
            <View style={styles.starContainer}>            
              <Image style={styles.starbutton}
              source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
            </View>
          </TouchableHighlight>

          <View style={styles.text}>
            <View style={styles.textContainer}>  
             <TouchableHighlight onPress={this.PressText}>
                <View>   
                  <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                  <Text style={styles.eventTitle}>Hello Mond</Text>
                  <Text style={styles.Location}>4th Floor</Text>
                </View>         
              </TouchableHighlight>
            </View>
          </View>

        </View>

        <View style={[styles.container, {backgroundColor: 'white', }]}>
          <TouchableHighlight onPress={this.PressStar} >
            <View style={styles.starContainer}>            
              <Image style={styles.starbutton}
              source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
            </View>
          </TouchableHighlight>

          <View style={styles.text}>
            <View style={styles.textContainer}>
              <TouchableHighlight onPress={this.PressText}>
                <View>     
                  <Text style={styles.Time}>7:00 PM-9:00 PM</Text>
                  <Text style={styles.eventTitle}>Chào thế Giới</Text>
                  <Text style={styles.Location}>4th Floor</Text>
                </View>         
              </TouchableHighlight>
            </View>
          </View>

        </View>
        
      </ScrollView> 
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

  starContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    paddingLeft: 40,
    alignItems: 'center',   
  },

  starbutton: {
    backgroundColor: '#859a9b',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    paddingLeft: 40,
    alignItems: 'center',   
  },

  text: {
    flex: 5,
    justifyContent: 'center',
    paddingLeft: 40,
  },

  textContainer: {
    width: '50%',
    borderRadius: 20,
    padding: 0,
  },

  promoContainer: {  
    width: '100%',
    resizeMode: 'contain',
  },

});