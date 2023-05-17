import React, { Component } from 'react';
import axios from 'axios';

import Loading from './Loading';
import { GetUserToken } from '../components/Auth';

export default class ConventionListLoader extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      err: null,
    }

    this.debug = false;
    this.currentRetry = 0;
    this.maxRetries = this.props.maxAutoRetries || 3;
    this.retryDelay = 1000;
    this.mounted = false;

    this.loadData = this.loadData.bind(this);
    this.handleDataLoaded = this.handleDataLoaded.bind(this);
    this.handleRequestFailed = this.handleRequestFailed.bind(this);
  }

  handleDataLoaded(data) {
    if (data) {
      this.props.onLoaded(data);
    } else {
      this.handleRequestFailed("Unknown error. Response: " + JSON.stringify(data));
    }
  }

  handleRequestFailed(error) {
    if (this.props.onFailed) {
      this.props.onFailed(error);
    }

    if (this.mounted) {
        this.setState({err: error});
    } else {
        //auto-retry
        this.currentRetry++;
        if (this.currentRetry <= this.maxRetries) {
          setTimeout(this.loadData, this.retryDelay);
        }
    }
  }

  UNSAFE_componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount()
  {
    this.loadData();
  }

  async loadData() {
    if (this.mounted) {
      this.setState({err: null});
    }
    
    let token = await GetUserToken({force: false});
    let headers = null;
    if(token)
    {
      headers = { Authorization: 'Bearer ' + token };
    }
    axios.get(this.props.url, {headers, timeout: 10000})
    .then((result) => {
        this.handleDataLoaded(result.data);
    })
    .catch((error) => { 
        this.handleRequestFailed(error);
    });
  }

  render() {
    if (this.state.err) {
      return (
          <Loading text={this.props.loadingText} err={this.state.err} onRetry={this.loadData} onBack={this.props.onBack} />
      );
    } else {
      return <Loading text={this.props.loadingText} />;
    }
  }
  
}