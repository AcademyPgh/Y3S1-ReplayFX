import React, { Component } from 'react';
import {View, Text} from 'react-native';

import { goToConventionList, goHome } from '../src/utils/Navigation';
import LoadConventionsContainer from '../src/components/LoadConventionsContainer';
import LoadConventionContainer from '../src/components/LoadConventionContainer';

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

    this.handleConventionLoaded = this.handleConventionLoaded.bind(this);
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

  handleConventionLoaded = (conventionData) => {
    if (this.props.screenProps.onConventionDataLoaded) {
      this.props.screenProps.onConventionDataLoaded(conventionData);
      goHome(this.props.navigation);
    }
  }

  render() {
    //return <APILoader dataLoaded={this.props.dataLoaded} />;
    if (this.props.screenProps.singleConvention)
    {
      return (<LoadConventionContainer conventionToLoad={this.props.screenProps.selectedConvention} onConventionLoaded={this.handleConventionLoaded} onBack={goHome} />);
    }
    else if (this.state.fetching) {
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