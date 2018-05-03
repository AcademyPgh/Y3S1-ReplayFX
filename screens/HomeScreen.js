import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class HomeScreen extends React.Component {
  
    render() {
      props = this.props;
      return (
        <View>
          <Text>Lenar's Home Screen</Text>
        </View>
      );
    }
  }