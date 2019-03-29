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
import PushNotification from 'react-native-push-notification';

import { Fonts } from './src/utils/Fonts';
import NavigationService from './src/utils/NavigationService';
import { scale, verticalScale, moderateScale } from './src/utils/Scaling';
import SettingsButton from './src/components/SettingsButton';

import RootStack from './Routing';

class App extends React.Component {

  constructor(props) {
    super(props);

    let apiData = null;

    this.state = {
      apiData: apiData,
      dataLoadedTimestamp: new Date(),
      singleConvention: false,
      selectedConvention: {}  // ex: {id: 5}
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
    
      let data = notification[dataKey];

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
        apiData: apiData,
        dataLoadedTimestamp: new Date()
      });
    }
  }

  render() {
    let content = (
        <RootStack 
          ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
          screenProps={{apiData: this.state.apiData, 
            dataLoadedTimestamp: this.state.dataLoadedTimestamp,
            onConventionDataLoaded: this.handleAPILoaded,
            singleConvention: this.state.singleConvention,
            selectedConvention: this.state.selectedConvention
          }}
        />
    );

    let hashTag = "#OSGAPP";
    let settingsButton = null;

    if (this.state.apiData) {
      if (this.state.apiData.hashtag) {
      hashTag = "#" + this.state.apiData.hashtag.toUpperCase();
      }
      
      settingsButton = <SettingsButton singleConvention={this.state.singleConvention}/>;
    }

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        {content}
        <View style={[styles.footer,]}>
          <View style={{flex: 1}} />
          <View style={{flex: 4}}>
            <Text style={styles.footerText}>{hashTag}</Text>
          </View>
          <View style={{flex: 1}}>{settingsButton}</View>
        </View> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footerText: {
    fontSize: scale(25),
    color: 'white',
    textAlign: 'center',
    fontFamily: Fonts.AvenirMedium,
  },
  footer: {
    height: verticalScale(50),
    paddingVertical: verticalScale(5),
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default codePush(App);