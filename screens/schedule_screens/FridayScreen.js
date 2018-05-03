import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import ScheduleScreen from '../ScheduleScreen';

export default class FridayScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        title: 'Schedule',
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }
  
    render() {
      return (
        <ScheduleScreen filter="friday" navigation={this.props.navigation} />
      );
    }
  }