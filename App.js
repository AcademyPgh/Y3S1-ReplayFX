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
import {events, games, eventCategories, gameTypes} from './api-samples/sampleData';

import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import GameListScreen from './screens/GameListScreen';
import ScheduleScreenContainer from './screens/ScheduleScreenContainer';
import SponsorsScreen from './screens/SponsorsScreen';
import PinballDetailsScreen from './screens/PinballDetailsScreen';
import GamesMain from './screens/GamesMain';
import ArcadeDetailsScreen from './screens/ArcadeDetailsScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import ArcadeListScreen from'./screens/ArcadeListScreen';
import PinballListScreen from'./screens/PinballListScreen';
import APIScreen from './screens/APIScreen';

var showLandingPage = true;

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const skipAPILoad = true;

    let apiData = null;

    if (skipAPILoad) {
      //load sample api data
      apiData = {
        source: 'sample',
        events: events,
        games: games,
        eventCategories: eventCategories,
        gameTypes: gameTypes
      }
    }

    this.state = {
      apiLoaded: skipAPILoad,
      apiData: apiData
    }
  }

  handleAPILoaded (apiData) {
    if (this.state.apiData == null || apiData != null) {
      this.setState({
        apiLoaded: true, 
        apiData: apiData,
      });
    }
  }

  render() {
    let content = <APIScreen dataLoaded={(apiData) => {this.handleAPILoaded(apiData)}}/>;

    if (this.state.apiLoaded) {
      content = <RootStack screenProps={{apiData: this.state.apiData}}/>;
    }

    return (
      content
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
    ArcadeDetails: {
      screen: ArcadeDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Arcade Detail',
      }
    },
    EventDetails: {
      screen: EventDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Event Detail',
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
    initialRouteName: (showLandingPage ? 'Landing' : 'Home'),
    navigationOptions: {
      //title: 'Home',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,

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