import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import ScheduleScreen from './ScheduleScreen';

export default class ScheduleScreenContainer extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params, routeName } = navigation.state;
  
      //TODO: default filter to current/first day (thur/fri/sat)?
      // let filter = 'my-schedule';

      // if (params) {
      //   filter = params.scheduleFilter;
      // } 

      // navigation.setParams({scheduleFilter: filter});

      return {
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }
  
    render() {
      return (
        <ScheduleScreen navigation={this.props.navigation} />
      );
    }
  }