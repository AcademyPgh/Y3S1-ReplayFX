/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
import { homeButtonHeader } from '../src/utils/Headers';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GamesMain extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const homeButton = homeButtonHeader(navigation);
    return {
      ...homeButton,
      headerTitleStyle: {
        ...navigationOptions.headerTitleStyle,
        fontSize: 18
      },
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?      
      <ScrollView style={styles.background}> 
        {
          this.props.screenProps.apiData.gameTypes.map(gameType => {
            return (
              <TouchableOpacity key={gameType.Id} onPress={() => {                  
                this.props.navigation.navigate('GamesList', {gameType: gameType})}}>

                <View style={[styles.container, {backgroundColor: 'whitesmoke', }]}>
                  <View style={styles.text}>
                    <Text style={styles.Font}>{gameType.Name.toUpperCase()}</Text>
                  </View>
                  <View style={styles.imgcontainer}>
                    <Icon name={'chevron-right'} size={30} color='#969696' />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  
  
  Font: {
    paddingBottom: 5,
    color: '#969696',
    fontSize: 28,
    fontFamily: Fonts.NunitoLight,
  },

  

  container: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: .5,
    borderColor: '#9ca4ab',
    flexDirection: 'row',
   

    
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  },
  text:{
    justifyContent: 'center',
    paddingLeft: 20,
    flex: 1
  },
  background:{
    height: 300,
    borderWidth: .5,
    backgroundColor: '#f3f3f3',
    borderColor: '#9ca4ab',
   

  },

    
});


