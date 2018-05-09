import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
} from 'react-native';
import axios from 'axios';

export default class APIScreen extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      eventCategories: [],
      replayEvents:[],
      games: [],
      gameTypes: [],
    };
  }
  componentDidMount()
  {
    this.loadEventCategories();
    this.loadEvents();
    this.loadGames();
    this.loadGameTypes();
  }
  loadEventCategories() {
    axios
      .get("http://replayfxcalendar.azurewebsites.net/public/categories")
      .then((res) => {
        let temp = res.data;
        this.setState({ eventCategories: temp });
      });
  }

  loadEvents()
  {
    axios
    .get ("http://replayfxcalendar.azurewebsites.net/public")
    .then((res) => {
      let temp = res.data;
      this.setState({ replayEvents: temp});
    });
  }

  loadGames()
  {
    axios
      .get("http://replayfxcalendar.azurewebsites.net/public/games")
      .then((res) => {
        let temp = res.data;
        this.setState({ games: temp});
      });
  }
  loadGameTypes()
  {
    axios
    .get("http://replayfxcalendar.azurewebsites.net/public/gametypes")
    .then((res) => {
      let temp = res.data;
      this.setState({ gameTypes: temp});
    });
  }
  //http://replayfxcalendar.azurewebsites.net/public
    render() {
      const { params } = this.props.navigation.state;
      //const filter = params.scheduleFilter ? params.scheduleFilter : null;
      const filter = this.props.filter;
      
      return (
        <View>
        <Text>This is some text</Text>
        <ScrollView>
        <Text style={styles.text}>{JSON.stringify(this.state.games)}</Text>
        </ScrollView>
         </View>
     )
    }}
  const styles = StyleSheet.create({
    text: {
      fontSize: 24,
    },
  });