import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import { apiGetConventionList } from '../../config';
import { persistPrefix } from '../utils/Persist';

const persistKey = persistPrefix + "conventionList";
const url = apiGetConventionList;

export default class ConventionListLoader extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        localConventionList: null,
    };

    this.mounted = false;

    this.handleConventionsLoaded = this.handleConventionsLoaded.bind(this);
    this.handleRequestFailed = this.handleRequestFailed.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.fetchData();
  }

  handleConventionsLoaded(conventionList) {
    if (conventionList) {
      this.persistData(conventionList);
      this.handleFinished(conventionList, true);
    } else {
      this.handleRequestFailed();
    }
  }

  handleRequestFailed() {
    if (this.mounted) {
        if (this.state.localConventionList) {
            this.handleFinished(this.state.localConventionList, false);
        }
    }
  }

  handleFinished(conventionList, loadSuccessful) {
    if (this.props.onConventionsLoaded) {
        this.props.onConventionsLoaded(conventionList, loadSuccessful);
    }
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  persistData(conventionList) {
      AsyncStorage.setItem(persistKey, JSON.stringify(conventionList));
  }

  fetchData() {
    AsyncStorage.getItem(persistKey)
      .then((conventionList) => {
        if (this.mounted) {
            this.setState({localConventionList: conventionList});
        }
      }).catch((err) => {
        //Alert.alert(err);
      });
  }

  render() {
    return <Loader loadingText="Loading conventions..." url={url} onLoaded={this.handleConventionsLoaded} onFailed={this.handleRequestFailed} maxAutoRetries={0} />;
  }
  
}