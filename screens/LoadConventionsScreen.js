import React, { Component } from 'react';
import {Text} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import { goHome } from '../src/utils/Navigation';

import LoadConventionsContainer from '../src/components/LoadConventionsContainer';

export class LoadConventionsScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      conventionList: null,
      isLocalList: false,
    };
  }

  handleConventionsLoaded = (conventions, isLocalData) => {
    this.setState({
      conventionList: conventions,
      isLocalList: isLocalData,
    });

    this.props.navigation.navigate({
      routeName: 'SelectConvention',
      params: {conventionList: conventions, isLocalList: isLocalData},
      key: 'SelectConvention'
    });
  }

  render() {
    //return <APILoader dataLoaded={this.props.dataLoaded} />;
    if (!this.state.conventionList) {
      return (
        <LoadConventionsContainer onConventionsLoaded={this.handleConventionsLoaded} />
      );
    } else {
      return <Text>Conventions loaded: {JSON.stringify(this.state.conventionList)}</Text>;
    }
  }
}

export default withNavigationFocus(LoadConventionsScreen);