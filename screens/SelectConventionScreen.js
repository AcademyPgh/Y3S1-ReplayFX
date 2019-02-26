import React, { Component } from 'react';
import {Text, View, Alert} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import { goHome } from '../src/utils/Navigation';

import LoadConventionContainer from '../src/components/LoadConventionContainer';
import SelectConventionContainer from '../src/components/SelectConventionContainer';

export class SelectConventionScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {

    navigationOptions = {
      ...navigationOptions,
      headerRight: (<View />)
    };
    
    if (navigation.getParam('hideHeader', false)) {
      return { header: null };
    } else {
      return navigationOptions;
    }
  }

  constructor(props){
    super(props);

    this.selectConvention = "selectConvention";
    this.loadConvention = "loadConvention";

    // Force load specific convention
    this.state = {
      currStep: this.loadConvention,
      selectedConvention: {id: 5},
      singleConvention: true
    };
  }

  componentWillMount() {
    if (!this.state.singleConvention) {
      this.willFocusSubscription = this.props.navigation.addListener('willFocus', this.handleWillFocus);
      this.didBlurSubscription = this.props.navigation.addListener('didBlur', this.handleDidBlur);
    }
  }

  componentWillUnmount() {
    if (!this.state.singleConvention) {
      this.willFocusSubscription.remove();
      this.didBlurSubscription.remove();
    }
  }

  handleWillFocus = () => {
    this.displayConventionSelection();
  }

  handleDidBlur = () => {
    this.displayConventionSelection();
  }

  handleConventionSelected = (convention) => {
    this.setState({
      currStep: this.loadConvention,
      selectedConvention: convention,
    });
    this.props.navigation.setParams({'hideHeader': true});
  }

  handleConventionLoaded = (conventionData) => {
    if (this.props.screenProps.onConventionDataLoaded) {
      this.props.screenProps.onConventionDataLoaded(conventionData);
    }

    if ((this.state.currStep == this.loadConvention) && this.props.navigation.isFocused) {
      goHome(this.props.navigation);
      this.displayConventionSelection();
    }
  }
  
  displayConventionSelection = () => {
    this.setState({currStep: this.selectConvention});
    this.props.navigation.setParams({'hideHeader': false});
  }

  render() {

    const conventionList = this.props.navigation.getParam('conventionList', []);
    const isLocalList = this.props.navigation.getParam('isLocalList', false);

    //return <APILoader dataLoaded={this.props.dataLoaded} />;
    if (this.state.currStep == this.selectConvention) {
      return (
        <SelectConventionContainer conventionList={conventionList} isLocalList={isLocalList} onConventionSelected={this.handleConventionSelected} />
      );
    } else if (this.state.currStep == this.loadConvention) {
      return (
        <LoadConventionContainer conventionToLoad={this.state.selectedConvention} onConventionLoaded={this.handleConventionLoaded} onBack={this.displayConventionSelection} />
      );
    } else {
        return <View style={{flex: 1, backgroundColor: 'black'}} />;
    }
  }
}

export default withNavigationFocus(SelectConventionScreen);