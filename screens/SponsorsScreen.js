import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class SponsorsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Props: {JSON.stringify(this.props)}</Text>
          <Text>Sponsors Screen</Text>
          <Button
            title="Home"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.popToTop();
            }}
          />
          <Button
            title="Schedule"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Schedule', {
                filter: 'none',
              });
            }}
          />
        </View>
      );
    }
  }