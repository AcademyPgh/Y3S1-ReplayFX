import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class LandingScreen extends React.Component {
  
    render() {
      props = this.props;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Landing Screen</Text>
          <Text>Props: {JSON.stringify(props)}</Text>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Home"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Home');
              }}
            />
            <Button
              title="Schedule"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule');
              }}
            />
            <Button
              title="Games"
              onPress={() => {
                /* 1. Navigate to the Games route with no params */
                this.props.navigation.navigate('Games', {
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Featured"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'featured',
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Open Play"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'open-play',
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Compete"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'compete',
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Live Music"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'live-music',
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Seminars"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'seminars',
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Games Main"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('GamesMain', {
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Sponsors"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Sponsors', {
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Pinball Details"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('PinballDetails', {
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Arcade List"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('ArcadeList', {
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Pinball List"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('PinballList', {
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="Event Details"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('EventDetails', {
                  appData: 'appDataFromHome'
                });
              }}
            />
            <Button
              title="API Test"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('APITest', {
                  appData: 'appDataFromHome'
                });
              }}
            />
          </View>
          
        </View>
      );
    }
  }