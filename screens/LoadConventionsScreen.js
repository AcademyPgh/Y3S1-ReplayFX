import React, { Component } from 'react';
import {View, Text} from 'react-native';

import { goToConventionList } from '../src/utils/Navigation';
import LoadConventionsContainer from '../src/components/LoadConventionsContainer';

export class LoadConventionsScreen extends React.Component {
  constructor(props){
    super(props);

    this.debug = false;

    this.state = {
      fetching: false,
      hasFetched: false,
      conventionList: null,
      isLocalList: null,
    };
  }

  componentWillMount() {
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', this.handleWillFocus);
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  handleWillFocus = () => {
    this.setState({fetching: true, hasFetched: false});
  }

  handleConventionsLoaded = (conventions, isLocalData) => {
    this.setState({
      conventionList: conventions,
      isLocalList: isLocalData,
      fetching: false,
      hasFetched: true,
    });

    goToConventionList(this.props.navigation, conventions, isLocalData);
  }

  render() {
    //return <APILoader dataLoaded={this.props.dataLoaded} />;
    if (this.state.fetching) {
      return (
        <LoadConventionsContainer onConventionsLoaded={this.handleConventionsLoaded} />
      );
    } else if (this.state.hasFetched && this.debug) {
      return <Text>Conventions loaded: {JSON.stringify(this.state.conventionList)}</Text>;
    } else {
      return <View style={{flex: 1, backgroundColor: 'black'}} />;
    }
  }
}

export default LoadConventionsScreen;