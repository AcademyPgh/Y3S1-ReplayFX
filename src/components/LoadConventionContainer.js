import React, { Component } from 'react';
import ConventionLoader from './ConventionLoader';

export default class LoadConventionContainer extends React.Component {

    render() {
        return <ConventionLoader convention={this.props.conventionToLoad} onConventionLoaded={this.props.onConventionLoaded} onBack={this.props.onBack} />;
    }
}