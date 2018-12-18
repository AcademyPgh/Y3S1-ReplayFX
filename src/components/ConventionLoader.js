import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import { apiGetConventionList } from '../../config';
import { getConventionPersistKey } from '../utils/Persist';

const url = apiGetConventionList;

export default class ConventionLoader extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        localData: null,
    };

    this.mounted = false;

    //TODO: Insert convention ID
    this.persistKey = getConventionPersistKey(this.props.convention);

    this.handleConventionLoaded = this.handleConventionsLoaded.bind(this);
    this.handleRequestFailed = this.handleRequestFailed.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.fetchData();
  }

  handleConventionLoaded(conventionData) {
    if (conventionData) {
      this.persistData(conventionData);
      this.handleFinished(conventionData, true);
    } else {
      this.handleRequestFailed();
    }
  }

  handleRequestFailed() {
    if (this.mounted) {
        if (this.state.localData) {
            this.handleFinished(this.state.localData, false);
        }
    }
  }

  handleFinished(conventionData, loadSuccessful) {
    if (this.props.onConventionLoaded) {
        this.props.onConventionLoaded(conventionData, loadSuccessful);
    }
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  persistData(conventionData) {
      AsyncStorage.setItem(this.persistKey, JSON.stringify(conventionData));
  }

  fetchData() {
    AsyncStorage.getItem(this.persistKey)
      .then((conventionData) => {
        if (this.mounted) {
            this.setState({localData: conventionData});
        }
      }).catch((err) => {
        //Alert.alert(err);
      });
  }

  render() {
    return <Loader loadingText="Loading convention..." url={url} onLoaded={this.handleConventionLoaded} onFailed={this.handleRequestFailed} maxAutoRetries={3} />;
  }
  
}