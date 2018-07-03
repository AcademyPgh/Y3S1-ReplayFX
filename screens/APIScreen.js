import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import { Fonts } from '../src/utils/Fonts';
import { apiCalls } from '../config';

const persistKey = "@ReplayFX:apiData";

export default class APIScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      err: null,
    }

    this.debug = false;
    this.apiData = {source: null};
    this.liveDataLoaded = false;
    this.currentRetry = 0;
    this.maxRetries = 3;
    this.mounted = false;

    this.err = [];

    //load the apiData object with the apiCalls keys and a null value
    apiCalls.forEach((obj) => { this.apiData[obj.key] = null; });

    this.loadAPIData = this.loadAPIData.bind(this);
    this.handleDataLoaded = this.handleDataLoaded.bind(this);
    this._fetchData = this._fetchData.bind(this);
    this.getData = this.getData.bind(this);

    this._fetchData();
  }

  handleDataLoaded(apiData) {
    if (apiCalls.every((obj) => this.apiData[obj.key] != null)) {
      this._persistData(apiData);
      this.apiData.source = "web";
      this.props.dataLoaded(this.apiData);
      this.liveDataLoaded = true;
    } else {
      //TODO: handle failed requests - try again? when do we decide to go to local storage?
      //for now, send an empty array back - will have to load sample data
      //this.props.dataLoaded(null);
     
      if (this.mounted) {
        this.setState({err: "Couldn't connect to server."});
      } else {
        //auto-retry
        this.currentRetry++;
        if (this.currentRetry <= this.maxRetries) {
          setTimeout(this.loadAPIData, 5000);
        }
      }
    }
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  _persistData(apiData) {
      AsyncStorage.setItem(persistKey, JSON.stringify(apiData));
  }

  _fetchData() {
    AsyncStorage.getItem(persistKey)
      .then((apiData) => {
        if (apiData && !this.liveDataLoaded) {
          apiData = JSON.parse(apiData);
          apiData.source = "local";
          this.props.dataLoaded(apiData);
        }
      }).catch((err) => {
        //Alert.alert(err);
      });
  }

  componentDidMount()
  {
    this.loadAPIData();
  }

  loadAPIData() {
    //axios.all([this.getData('<eventurl>'), this.getData('<categoriesurl>')])
    //axios.all([this.getEventCategories(), this.getEvents(), this.getGameTypes(), this.getGames()])
    if (this.mounted) {
      this.setState({err: null});
    }

    //filter array beforehand - only call ones that have failed
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
      }, (errors) => {
        this.setState({err: errors});
      }
    );
  }

  getData(url) {
    return axios.get(url, {timeout: 10000}).catch((reason) => { this.err.push(reason); return null; });
    //return axios.get(url, {url: url, timeout: 10000});
  }
  

  //http://replayfxcalendar.azurewebsites.net/public
    render() {
      let debugData = null;
      if (this.debug) {
        debugData = 
          <View style={{flex: 1}}>
            <Text style={{color: 'white'}}>State={JSON.stringify(this.state)}</Text>
            <Text style={{color: 'white'}}>Props={JSON.stringify(this.props)}</Text>
            <Text style={{color: 'white'}}>apiData={JSON.stringify(this.apiData)}</Text>
          </View>;
      }

      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>          
          <Text style={styles.text}>{this.state.err ? this.state.err : 'Loading...'}</Text>
          {
            this.state.err &&
              <TouchableOpacity style={styles.button} onPress={this.loadAPIData}>
                <Text style={styles.text}>Retry</Text>
              </TouchableOpacity>
          }
          {debugData}
        </View>
     )
    }
  
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      color: 'whitesmoke',
      fontFamily: Fonts.AvenirBlack,
    },
    button: {
      backgroundColor: 'black',
      borderColor: 'whitesmoke',
      borderWidth: StyleSheet.hairlineWidth * 10,
      padding: 12,
      margin: 12,
      borderRadius: 12,
    }
  });