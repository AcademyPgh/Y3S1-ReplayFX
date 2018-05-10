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
  {key: 'eventCategories', url: 'http://replayfxcalendar.azurewebsites.net/public/categories'},
  {key: 'events', url: 'http://replayfxcalendar.azurewebsites.net/public'},
  {key: 'gameTypes', url: 'http://replayfxcalendar.azurewebsites.net/public/gametypes'},
  {key: 'games', url: 'http://replayfxcalendar.azurewebsites.net/public/games'},
]

export default class APIScreen extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      err: null,
    }

    this.apiData = {
      eventCategories: null,
      events: null,
      gameTypes: null,
      games: null,
    };
    this.loadAPIData = this.loadAPIData.bind(this);
    this.handleDataLoaded = this.handleDataLoaded.bind(this);
  }

  handleDataLoaded(apiData) {
    this.props.dataLoaded(apiData);
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
          this.apiData[key] = resp ? resp.data.length : null;
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

  // getEventCategories() {
  //   return axios.get("http://replayfxcalendar.azurewebsites.net/public/categories").catch(() => null);
  // }
  // getEvents()
  // {
  //   return axios.get ("http://replayfxcalendar.azurewebsites.net/public").catch(() => null);
  // }
  // getGameTypes()
  // {
  //   return axios.get("http://replayfxcalendar.azurewebsites.net/public/gametypes").catch(() => null);
  // }
  // getGames()
  // {
  //   return axios.get("http://replayfxcalendar.azurewebsites.net/public/games").catch(() => null);
  // }
  

  //http://replayfxcalendar.azurewebsites.net/public
    render() {
      const err = this.state.err;
      return (
        <View>
          <Text style={styles.text}>Loading...</Text>
          {err}
        </View>
     )
    }
  
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 32,
    },
    error: {
      fontSize: 32,
    },
  });