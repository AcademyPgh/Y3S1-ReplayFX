import React, { Component } from 'react';
import APILoader from '../src/components/APILoader';

export default class APIScreen extends React.Component {
  render() {
    return <APILoader dataLoaded={this.props.dataLoaded} />;
  }
}