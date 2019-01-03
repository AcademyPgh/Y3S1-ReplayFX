/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../../utils/Scaling';
import { styles } from './Games.styles';

export default class Games extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
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
      <ScrollView style={styles.background}> 
        {
          this.props.screenProps.apiData.gameTypes.map(gameType => {
            return (
              <TouchableOpacity key={gameType.id} onPress={() => {                  
                this.props.navigation.navigate('GamesList', {gameType: gameType})}}>

                <View style={styles.container}>
                  <View>
                    <Text style={styles.Font}>{gameType.name.toUpperCase()}</Text>
                  </View>
                  <View>
                    <Icon name={'chevron-right'} style={styles.navigationChevron} />
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
