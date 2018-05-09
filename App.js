/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { createNavigator, TabRouter, StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import GameListScreen from './screens/GameListScreen';
import ScheduleScreenContainer from './screens/ScheduleScreenContainer';
import SponsorsScreen from './screens/SponsorsScreen';
import PinballDetailsScreen from './screens/PinballDetailsScreen';
import GamesMain from './screens/GamesMain';
import ArcadeListScreen from'./screens/ArcadeListScreen';
import PinballListScreen from'./screens/PinballListScreen';
import APIScreen from './screens/APIScreen';

export default class App extends React.Component {

  loadEvents() {
    
  }

  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = StackNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: {
        title: 'Landing Page',
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null
      }
    },
    Schedule: {
      screen: ScheduleScreenContainer,
      initialRouteParams: { scheduleFilter: 'thur' },
      navigationOptions: {
        title: 'Schedule'
      }
    },
    Games: {
      screen: GameListScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Games',
      }
    },
    Sponsors: {
      screen: SponsorsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Sponsors',
      }
    },
    PinballDetails: {
      screen: PinballDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Pinball Detail',
      }
    },

    GamesMain: {
      screen: GamesMain,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Choose Your Platform',
      }
    },
    ArcadeList: {
      screen: ArcadeListScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Arcade List',
      }
    },
    PinballList: {
      screen: PinballListScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Pinball List',
      }
    },
    APITest: {
      screen: APIScreen,
      navigationOptions: {
        title: 'API Test',
      }
    },
    
    // Featured: {
    //   screen: ScheduleScreenContainer,
    //   initialRouteParams: { scheduleFilter: 'featured' },
    //   navigationOptions: {
    //     title: 'Featured'
    //   }
    // },
    
  },
  {
    initialRouteName: 'Landing',
    navigationOptions: {
      //title: 'Home',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 32,

        textAlign: 'center',
        flex: 1
      },
    },
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

