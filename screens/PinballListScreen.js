import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TextInput,
  ListView,
  Button
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class PinballListSceen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;

      return {
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }

  render() {
    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

  
    
    return (
      <View style={{
        flex: 1,
      }}>
        
        <View style={{
          flex: 1,
          backgroundColor: 'powderblue',
        }}>
          <Image 
          style={styles.stretch}
          source={require('../Images/PinballMainPageImage.jpg')}/>
        </View>

  
        <View style={{}}>
          <TextInput
            style={{height: 60, borderColor: '#f3f3f3', backgroundColor: 'white', borderWidth: 12, padding: 5, textDecorationLine: 'none', fontSize: 20, fontFamily: 'Arial', color: 'gray', paddingLeft: 25}}
            placeholder="Search"
            onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 1, fontSize: 42}}>
            </Text>
        </View> 

        <View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>1-9</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>A</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>B</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>C</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>D</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>E</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>F</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>G</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>H</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>I</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>J</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>K</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>L</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>M</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>N</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>O</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>P</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>Q</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>R</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>S</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>T</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>U</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>V</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>W</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>X</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>Y</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>Z</Text></View>

      </View>
      </ScrollView>
      </View>

        
        <View style={{
          flex: 4, 
         }}>
          <ScrollView>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>18 Wheeler: American Pro Trucker</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>My game name3</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>18 Wheeler: American Pro Trucker</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>My game name3</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>18 Wheeler: American Pro Trucker</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>My game name3</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>18 Wheeler: American Pro Trucker</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>My game name3</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
          </ScrollView>
        </View>
    </View>
    );
  }
}

const styles=StyleSheet.create({
  stretch: {
   flex: 1,
   width: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   letter: {
    backgroundColor: '#555555',
    alignItems: 'center',
     borderRightWidth: 0,
     borderLeftWidth: .5,
     borderRightColor: 'black',
     borderLeftColor: 'black',
  },
  scrollLetterText: {
    fontSize: 20,
    fontFamily: 'arial',
    color: '#e3e4e4',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 9,
    paddingRight: 9, 
  },
   item1: {
    padding: 5,
    fontSize: 18,
    fontFamily: 'Arial',
    borderColor: 'black',
    borderWidth: .5
  },
  item2: {
    backgroundColor: '#f3f3f3',
  },
});
