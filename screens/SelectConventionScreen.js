import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import { goHome } from '../src/utils/Navigation';

import LoadConventionContainer from '../src/components/LoadConventionContainer';
import SelectConventionContainer from '../src/components/SelectConventionContainer';

export class SelectConventionScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedConvention: null,
      conventionData: null,
    };
  }

  handleConventionSelected = (convention) => {
    this.setState({
      selectedConvention: convention,
    });
  }

  handleConventionLoaded = (conventionData) => {
    this.setState({
        conventionData: conventionData,
    });

    if (this.props.screenProps.onConventionDataLoaded) {
      this.props.screenProps.onConventionDataLoaded(conventionData);
    }

    goHome(this.props.navigation);

    this.handleBackToConventionSelection();
  }
  
  handleBackToConventionSelection = () => {
    this.setState({selectedConvention: null, conventionData: null});
  }

  render() {

    const conventionList = this.props.navigation.getParam('conventionList', []);
    const isLocalList = this.props.navigation.getParam('isLocalList', false);

    //return <APILoader dataLoaded={this.props.dataLoaded} />;
    if (!this.state.selectedConvention) {
      return (
        <SelectConventionContainer conventionList={conventionList} isLocalList={isLocalList} onConventionSelected={this.handleConventionSelected} />
      );
    } else if (!this.state.conventionData) {
      return (
        <LoadConventionContainer conventionToLoad={this.state.selectedConvention} onConventionLoaded={this.handleConventionLoaded} onBack={this.handleBackToConventionSelection} />
      );
    } else {
        return <View style={{flex: 1, backgroundColor: 'black'}} />;
      return <Text>Convention loaded: {JSON.stringify(this.state.conventionData)}</Text>;
    }
  }
}

export default withNavigationFocus(SelectConventionScreen);