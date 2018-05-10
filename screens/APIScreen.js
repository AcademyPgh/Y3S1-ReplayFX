import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';

// const apiCalls = {
//   eventCategories: 'http://replayfxcalendar.azurewebsites.net/public/categories',
//   events: 'http://replayfxcalendar.azurewebsites.net/public',
//   gameTypes: 'http://replayfxcalendar.azurewebsites.net/public/gametypes',
//   games: 'http://replayfxcalendar.azurewebsites.net/public/games',
// }

const apiCalls = [
  {key: 'events', url: 'http://replayfxcalendar.azurewebsites.net/public'},
  {key: 'games', url: 'http://replayfxcalendar.azurewebsites.net/public/games'},
  {key: 'eventCategories', url: 'http://replayfxcalendar.azurewebsites.net/public/categories'},
  {key: 'gameTypes', url: 'http://replayfxcalendar.azurewebsites.net/public/gametypes'},

]

export default class APIScreen extends React.Component {
  constructor(props){
    super(props);

    this.apiData = {};

    //load the apiData object with the apiCalls keys and a null value
    apiCalls.forEach((obj) => { this.apiData[obj.key] = null; });

    this.loadAPIData = this.loadAPIData.bind(this);
    this.handleDataLoaded = this.handleDataLoaded.bind(this);
  }

  handleDataLoaded(apiData) {
    if (apiCalls.every((obj) => this.apiData[obj.key] != null)) {
      this.props.dataLoaded(this.apiData);
    } else {
      //TODO: handle failed requests - try again? when do we decide to go to local storage?
      //for now, send an empty array back - will have to load sample data
      this.props.dataLoaded({});
    }
  }

  componentDidMount()
  {
    this.loadAPIData();
  }

  loadAPIData() {
    //axios.all([this.getData('<eventurl>'), this.getData('<categoriesurl>')])
    //axios.all([this.getEventCategories(), this.getEvents(), this.getGameTypes(), this.getGames()])

    //filter array beforehand
    filteredCalls = apiCalls.filter((obj) => this.apiData[obj.key] == null);

    axios.all(filteredCalls.map((obj) => this.getData(obj.url)))
      .then((results) => {
        results.map((resp, index) => {
          let key = filteredCalls[index].key;
          this.apiData[key] = resp ? resp.data : null;
        });
        // let apiData = {
        //   eventCategories: eventCategories ? eventCategories.data.length : null,
        //   events: events ? events.data.length : null,
        //   gameTypes: gameTypes ? gameTypes.data.length : null,
        //   games: games ? games.data.length : null,
        // };
        this.handleDataLoaded(this.apiData);
      });
  }

  getData(url) {
    return axios.get(url).catch(() => null);
  }
  

  //http://replayfxcalendar.azurewebsites.net/public
    render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
          <Text style={styles.text}>Loading...</Text>
        </View>
     )
    }
  
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 32,
      color: 'white',
    },
    error: {
      fontSize: 32,
    },
  });