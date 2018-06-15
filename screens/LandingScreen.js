import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
} from 'react-native';

export default class LandingScreen extends React.Component {
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Landing Screen</Text>
          <View style={{flex: 1}}>
            <ScrollView>
              <Text>Props: {JSON.stringify(this.props).substr(0, 1000)}</Text>
            </ScrollView>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Go Home"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Home');
              }}
            />
            <Button
              title="Schedule"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'featured',
                });
              }}
            />
            <Button
              title="Featured"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'featured',
                });
              }}
            />
            <Button
              title="Open Play"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'games',
                });
              }}
            />
            <Button
              title="Compete"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'competitions',
                });
              }}
            />
            <Button
              title="Live Music"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'music',
                });
              }}
            />
            <Button
              title="Seminars"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'seminar',
                });
              }}
            />
            <Button
              title="Games Main"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('GamesMain');
              }}
            />
            <Button
              title="Sponsors"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Sponsors');
              }}
            />
            <Button
              title="Vendors"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('Schedule', {
                  scheduleFilter: 'vendors',
                });
              }}
            />
            <Button
              title="Game Details"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('GameDetails', {gameInfo: this.props.screenProps.apiData.games[0]});
              }}
            />
            <Button
              title="Arcade List"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('GamesList', {gameType: this.props.screenProps.apiData.gameTypes[0]});
              }}
            />
            <Button
              title="Pinball List"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('GamesList', {gameType: this.props.screenProps.apiData.gameTypes[1]});
              }}
            />
            <Button
              title="Event Details"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('EventDetails', {eventInfo: this.props.screenProps.apiData.events[0]});
              }}
            />
            <Button
              title="API Test"
              onPress={() => {
                /* 1. Navigate to the Schedule route with params */
                this.props.navigation.navigate('APITest');
              }}
            />
          </View>
          
        </View>
      );
    }
  }
