import React, { Component } from 'react';
import ConventionListLoader from '../src/components/ConventionListLoader';

export default class LoadConventionsScreen extends React.Component {

    handleConventionsLoaded = (conventionList, loadSuccessful) => {

    }

    render() {
        return <ConventionListLoader onConventionsLoaded={this.handleConventionsLoaded} />;
    }
}