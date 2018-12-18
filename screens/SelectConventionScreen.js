import React, { Component } from 'react';
import ConventionsLoader from '../src/components/ConventionsLoader';

export default class SelectConventionScreen extends React.Component {

    handleConventionLoaded = (conventionData, loadSuccessful) => {
        //TODO: Navigate to SelectConventionScreen
    }

    render() {
        return <ConventionLoader onConventionLoaded={this.handleConventionLoaded} />;
    }
}