import React, { Component } from 'react';
import {Text} from 'react-native';
import LoadConventionsScreen from './LoadConventionsScreen';
import LoadConventionScreen from './LoadConventionScreen';
import SelectConventionScreen from './SelectConventionScreen';

export default class APIScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      conventionList: null,
      isLocalList: false,
      selectedConvention: null,
      conventionData: null,
    };

    this.mounted = false;

  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleConventionsLoaded = (conventions, isLocalData) => {
    this.setState({
      conventionList: conventions,
      isLocalList: isLocalData,
    });
  }

  handleConventionSelected = (convention) => {
    this.setState({
      selectedConvention: convention,
    });
  }

  handleConventionLoaded = (conventionData) => {
    if (this.mounted) {
      this.setState({
        conventionData: conventionData,
      });
    }

    if (this.props.onDataLoaded) {
      this.props.onDataLoaded(conventionData);
    }
  }
  
  handleBackToConventionSelection = () => {
    this.setState({selectedConvention: null, conventionData: null});
  }

  render() {
    //return <APILoader dataLoaded={this.props.dataLoaded} />;
    if (!this.state.conventionList) {
      return (
        <LoadConventionsScreen onConventionsLoaded={this.handleConventionsLoaded} />
      );
    } else if (!this.state.selectedConvention) {
      return (
        <SelectConventionScreen conventionList={this.state.conventionList} isLocalList={this.state.isLocalList} onConventionSelected={this.handleConventionSelected} />
      );
    } else if (!this.state.conventionData) {
      return (
        <LoadConventionScreen conventionToLoad={this.state.selectedConvention} onConventionLoaded={this.handleConventionLoaded} onBack={this.handleBackToConventionSelection} />
      );
    } else {
      return <Text>Convention loaded: {JSON.stringify(this.state.conventionData)}</Text>;
    }
  }
}