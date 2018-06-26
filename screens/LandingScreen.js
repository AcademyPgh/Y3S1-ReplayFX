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

      const sampleGame = {
        "replayGameLocations": [
            {
                "id": 89,
                "location": "Pinburgh Set 17"
            },
            {
              "id": 89,
              "location": "Pinburgh Set 46"
          }
          ,
            {
              "id": 89,
              "location": "D6"
          }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 255,
        "gameTitle": "Alien Poker",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Williams",
        "genre": "Fantasy - Outer Space - Cards - Gambling",
        "players": "4",
        "image": "17607f50-273b-4034-acc5-fe88e730ddf7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/17607f50-273b-4034-acc5-fe88e730ddf7.jpg"
    };

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
                  title: 'FEATURED'
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
                this.props.navigation.navigate('GameDetails', {gameInfo: sampleGame});
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