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
import { Fonts } from './src/utils/Fonts';

import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import GamesListScreen from './screens/GamesListScreen';
import ScheduleScreenContainer from './screens/ScheduleScreenContainer';
import SponsorsScreen from './screens/SponsorsScreen';
import GamesMain from './screens/GamesMain';
import GameDetailsScreen from './screens/GameDetailsScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
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
      apiData: apiData,
      dataLoadedTimestamp: new Date()
    }
  }

  handleAPILoaded (apiData) {
    if (this.state.apiData == null || apiData != null) {
      this.setState({
        apiLoaded: true, 
        apiData: apiData,
        dataLoadedTimestamp: new Date()
      });
    }
  }

  render() {
    let content = <APIScreen dataLoaded={(apiData) => {this.handleAPILoaded(apiData)}}/>;

    if (this.state.apiLoaded) {
      content = (
        <View style={{flex: 1}}>
          <RootStack screenProps={{apiData: this.state.apiData, dataLoadedTimestamp: this.state.dataLoadedTimestamp}}/>
          <View style={[styles.footer,]}>
            <Text style={styles.footerText}>#REPLAYFX</Text>
          </View> 
        </View>
      );
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
    GamesList: {
    screen: GamesListScreen,
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
    GamesMain: {
      screen: GamesMain,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Choose Your Platform',
      }
    },
    GameDetails: {
      screen: GameDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Game Detail',
      }
    },
    EventDetails: {
      screen: EventDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'Event Detail',
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
  footerText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: Fonts.AvenirMedium,
        
  },
  footer: {
    height: 50,
    paddingVertical: 5,
    backgroundColor: '#000000',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    
  },
});