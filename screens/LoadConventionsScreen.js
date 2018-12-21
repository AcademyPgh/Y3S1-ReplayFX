import React, { Component } from 'react';
import ConventionListLoader from '../src/components/ConventionListLoader';

export default class LoadConventionsScreen extends React.Component {

    render() {
        return <ConventionListLoader onConventionsLoaded={this.props.onConventionsLoaded} />;
    }
}