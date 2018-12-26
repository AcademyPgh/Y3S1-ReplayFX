/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import codePush, {InstallMode} from 'react-native-code-push';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  Alert,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { createNavigator, TabRouter, StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import PushNotification from 'react-native-push-notification';

import {events, games, eventCategories, gameTypes} from './api-samples/sampleData';
import { Fonts } from './src/utils/Fonts';
import NavigationService from './src/utils/NavigationService';
import { scale, verticalScale, moderateScale } from './src/utils/Scaling';

import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import GamesListScreen from './screens/GamesListScreen';
import ScheduleScreenContainer from './screens/ScheduleScreenContainer';
import SponsorsScreen from './screens/SponsorsScreen';
import GamesMain from './screens/GamesMain';
import GameDetailsScreen from './screens/GameDetailsScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import VendorsScreen from './screens/VendorsScreen';
import VendorDetailsScreen from './screens/VendorDetailsScreen';
import APIScreen from './screens/APIScreen';
import MapScreen from './screens/MapScreen';



var showLandingPage = false;

class App extends React.Component {

  constructor(props) {
    super(props);

    const skipAPILoad = false;

    let apiData = {hashtag: 'osgapp'};

    // if (skipAPILoad) {
    //   //load sample api data
    //   apiData = {
    //     source: 'sample',
    //     events: events,
    //     games: games,
    //     eventCategories: eventCategories,
    //     gameTypes: gameTypes
    //   }
    // }

    this.state = {
      apiLoaded: skipAPILoad,
      apiData: apiData,
      dataLoadedTimestamp: new Date()
    }

    //AsyncStorage.clear();

    //this.handleNotification = this.handleNotification.bind(this);
  }

  componentDidMount() {
    PushNotification.configure({

        // (required) Called when a remote or local notification is opened or received
        onNotification: this.handleNotification,
    });
    codePush.sync({installMode: InstallMode.ON_NEXT_RESUME});
  }

  handleNotification (notification) {

    if (notification) {

      if (!notification.userInteraction) { return; }
      
      let dataKey = 'tag';
      if (Platform.OS === 'ios') {
        dataKey = 'data';
      }
    
      const data = notification[dataKey];

      if (data) {
        if (Platform.OS === 'android') {
          data = JSON.parse(data);
        }

        if (data.eventId) {
          NavigationService.navigate('EventDetails', {eventId: data.eventId});
        }
      }
    }

      // process the notification

      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
      // notification.finish(PushNotificationIOS.FetchResult.NoData);
  }

  handleAPILoaded = (apiData) => {
    if (this.state.apiData == null || apiData != null) {
      this.setState({
        apiLoaded: true, 
        apiData: apiData,
        dataLoadedTimestamp: new Date()
      });
    }
  }

  render() {
    let content = null;
    
    if (!this.state.apiLoaded) {
      content = <APIScreen onDataLoaded={this.handleAPILoaded} />;
    } else {
      content = (
          <RootStack 
            ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
            screenProps={{apiData: this.state.apiData, dataLoadedTimestamp: this.state.dataLoadedTimestamp}}
          />
      );
    }

    //TODO: Hashtag will need to be pulled from convention information.
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        {content}
        <View style={[styles.footer,]}>
          <Text style={styles.footerText}>#{this.state.apiData.hashtag.toUpperCase()}</Text>
        </View> 
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Landing: {
      screen: LandingScreen,
      navigationOptions: {
        title: 'LANDING PAGE',
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'HOME',
        header: null
      }
    },
    Schedule: {
      screen: ScheduleScreenContainer,
      navigationOptions: {
        //title: 'SCHEDULE'
      }
    },
    EventDetails: {
      screen: EventDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'SCHEDULE',
      }
    },
    Sponsors: {
      screen: SponsorsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'SPONSORS',
      }
    },
    GamesMain: {
      screen: GamesMain,
      initialRouteParams: { },
      navigationOptions: {
        title: 'CHOOSE PLATFORM',
      }
    },
    GamesList: {
      screen: GamesListScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'GAMES',
      }
    },
    GameDetails: {
      screen: GameDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'GAMES',
      }
    },
    VendorsList: {
      screen: VendorsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'VENDORS',
      }
    },
    VendorDetails: {
      screen: VendorDetailsScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'VENDORS',
      }
    },
    Map: {
      screen: MapScreen,
      initialRouteParams: { },
      navigationOptions: {
        title: 'MAP',
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
        fontWeight: 'normal',
        fontSize: scale(24),
        fontFamily: Fonts.NunitoLight,
        textAlign: 'center',
        flex: 1,
        padding: 0,
        margin: 0,
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
  footerText: {
    fontSize: scale(30),
    color: 'white',
    textAlign: 'center',
    fontFamily: Fonts.AvenirMedium,
        
  },
  footer: {
    height: verticalScale(50),
    paddingVertical: verticalScale(5),
    backgroundColor: '#000000',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    
  },
});

export default codePush(App);