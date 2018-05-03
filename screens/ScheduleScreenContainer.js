import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView
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

    constructor(props) {
      super(props);
  
      const { params } = this.props.navigation.state;

      let filter = '';
      if (params && params.scheduleFilter) {
        filter = params.scheduleFilter;
      }

      filter = this._getFilter(filter);
  
      this.state = {
        filter: filter,
      };

      this.updateFilter = this.updateFilter.bind(this);
    }

    _getFilter(newFilter) {
      let filter = newFilter;
      if (newFilter == '' || newFilter == 'schedule') {
        filter = 'fri';
      }
      return filter;
    }

    updateFilter(newFilter) {
      const filter = this._getFilter(newFilter);
      this.setState({filter: filter});
    }
  
    render() {
      return (
        <View style={{flex:1}}>
          <View style={{flex:1, flexDirection:'row', backgroundColor: 'pink', height:'10%'}}>
            
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
              <Text>JULY</Text>
            </View>

            <View style={{flex:4}}>
              <ScrollView horizontal={true}>
                <Button
                  title='THUR'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('thur');
                  }}
                />
                <Button
                  title='FRI'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('fri');
                  }}
                />
                <Button
                  title='SAT'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('sat');
                  }}
                />
                <Button
                  title='SUN'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('sun');
                  }}
                />
                <Button
                  title='MY SCHEDULE'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('my-schedule');
                  }}
                />
                <Button
                  title='FEATURED'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('featured');
                  }}
                />
                <Button
                  title='OPEN PLAY'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('open-play');
                  }}
                />
                <Button
                  title='COMPETE'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('compete');
                  }}
                />
                <Button
                  title='LIVE MUSIC'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('live-music');
                  }}
                />
                <Button
                  title='SEMINARS'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('seminars');
                  }}
                />
                <Button
                  title='VENDORS'
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter('vendors');
                  }}
                />

          
              </ScrollView>
            </View>
          </View>
          <View style={{flex:8}}>
            <ScheduleScreen filter={this.state.filter} updateFilter={this.updateFilter} navigation={this.props.navigation} />
          </View>
        </View>
      );
    }
  }