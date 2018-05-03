import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import ScheduleScreen from './ScheduleScreen';

const tabs = [
  { key: 'thur', text: `THUR\n26` },
  { key: 'fri', text: `FRI\n27` },
  { key: 'sat', text: `SAT\n28` },
  { key: 'sun', text: `SUN\n28` },
  { key: 'my-schedule', text: `MY\nSCHEDULE` },
  { key: 'featured', text: `FEATURED` },
  { key: 'open-play', text: `OPEN\nPLAY` },
  { key: 'compete', text: `COMPETE` },
  { key: 'live-music', text: `LIVE\nMUSIC` },
  { key: 'seminars', text: `SEMINARS` },
  { key: 'vendors', text: `VENDORS` },
];

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
          <View style={{flex:1, flexDirection:'row', height:'10%', borderStyle: 'solid', borderColor: 'white', borderTopWidth: (StyleSheet.hairlineWidth*1), borderBottomWidth: (StyleSheet.hairlineWidth * 2)}}>
            
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#272727'}}>
              <Text style={{fontSize: 24, color:'white'}}>JULY</Text>
            </View>

            <View style={{flex:4, backgroundColor:'#272727'}}>
              <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center'}}>
                {tabs.map((tab) => (
                  <TouchableHighlight 
                  style={styles.tab}
                  onPress={() => {
                    /* 1. Navigate to the Schedule route with params */
                    this.updateFilter(tab.key);
                  }}>
                  <Text style={{color:'white', textAlign:'center'}}>{tab.text}</Text>
                </TouchableHighlight>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={{flex:10}}>
            <ScheduleScreen filter={this.state.filter} updateFilter={this.updateFilter} navigation={this.props.navigation} />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1, padding: 4, paddingHorizontal: 15
    },
  });