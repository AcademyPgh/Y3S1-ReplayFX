import React, { Component } from 'react';
import ConventionLoader from '../src/components/ConventionLoader';

export default class LoadConventionScreen extends React.Component {

    render() {
        return <ConventionLoader convention={this.props.conventionToLoad} onConventionLoaded={this.props.onConventionLoaded} onBack={this.props.onBack} />;
    }
}