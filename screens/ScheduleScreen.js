import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class ScheduleScreen extends React.Component {

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    //const filter = params.scheduleFilter ? params.scheduleFilter : null;
    const filter = this.props.filter;

    return (
      <View style={{ backgroundColor: 'powderblue', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Schedule Screen</Text>
        <Text>This.Props: {JSON.stringify(this.props)}</Text>
        <Text>props.filter: {filter}</Text>
        <Text>params: {JSON.stringify({params})}</Text>
        <Button
          title="Home"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.popToTop();
          }}
        />
        <Button
          title="Games"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Games');
          }}
        />
        <Button
          title="My Schedule"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            // this.props.navigation.navigate('Schedule', {
            //   scheduleFilter: 'my-schedule',
            //   appData: 'appDataFromSchedule'
            // });
            this.props.updateFilter('my-schedule');
            //setState({filter: 'my-schedule'});
          }}
        />
        <Button
          title="Featured"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Schedule', {
              scheduleFilter: 'featured',
              appData: 'appDataFromSchedule'
            });
          }}
        />
      </View>
    );
  }
}