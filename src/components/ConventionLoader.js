import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getConventionDataURL } from '../utils/API';
import { getConventionPersistKey, persistData } from '../utils/Persist';
import Loader from './Loader';

export default class ConventionLoader extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        localData: null,
    };

    this.mounted = false;

    this.persistKey = getConventionPersistKey(this.props.convention.id);
    this.url = getConventionDataURL(this.props.convention);

    this.handleConventionLoaded = this.handleConventionLoaded.bind(this);
    this.handleRequestFailed = this.handleRequestFailed.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.fetchData();
  }

  handleConventionLoaded(conventionData) {
    if (conventionData) {
      this.persistConventionData(conventionData);
      this.handleFinished(conventionData, false);
    } else {
      this.handleRequestFailed();
    }
  }

  handleRequestFailed() {
    // local data should have already been sent up as soon as it was loaded
    // if (this.mounted) {
    //     if (this.state.localData) {
    //         this.handleFinished(this.state.localData, true);
    //     }
    // }
  }

  handleFinished(conventionData, isLocalData) {
    if (this.props.onConventionLoaded) {
        this.props.onConventionLoaded(conventionData, isLocalData);
    }
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  persistConventionData(conventionData) {
      persistData(this.persistKey, conventionData);
  }

  fetchData() {
    AsyncStorage.getItem(this.persistKey)
      .then((conventionData) => {
        if (this.mounted && conventionData) {
            const localData = JSON.parse(conventionData);
            this.setState({localData: localData});
            this.handleFinished(localData, true);
        }
      }).catch((err) => {
        //Alert.alert(err);
      });
  }

  render() {
    return <Loader loadingText="Loading convention..." url={this.url} onLoaded={this.handleConventionLoaded} onFailed={this.handleRequestFailed} onBack={this.props.onBack} maxAutoRetries={3} />;
  }
  
}