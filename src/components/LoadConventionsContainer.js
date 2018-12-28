import React, { Component } from 'react';
import ConventionListLoader from './ConventionListLoader';

export default class LoadConventionsContainer extends React.Component {

    render() {
        return <ConventionListLoader onConventionsLoaded={this.props.onConventionsLoaded} />;
    }
}