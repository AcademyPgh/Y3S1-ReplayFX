/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Button, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import { homeButtonHeader } from '../src/utils/Headers';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../src/utils/Scaling';
import { styles } from '../src/features/Games/styles';

export default class GamesMain extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const homeButton = homeButtonHeader(navigation);
    return {
      ...homeButton,
      headerTitleStyle: {
        ...navigationOptions.headerTitleStyle,
        fontSize: scale(18)
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
              <TouchableOpacity key={gameType.id} onPress={() => {                  
                this.props.navigation.navigate('GamesList', {gameType: gameType})}}>

                <View style={[styles.container, {backgroundColor: 'whitesmoke', }]}>
                  <View style={styles.text}>
                    <Text style={styles.Font}>{gameType.name.toUpperCase()}</Text>
                  </View>
                  <View style={styles.imgcontainer}>
                    <Icon name={'chevron-right'} size={scale(30)} color='#969696' />
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
