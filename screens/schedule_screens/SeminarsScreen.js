import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import ScheduleScreen from '../ScheduleScreen';

export default class SeminarsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        title: 'Seminars',
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }
  
    render() {
      return (
        <ScheduleScreen filter="seminars" navigation={this.props.navigation} />
      );
    }
  }