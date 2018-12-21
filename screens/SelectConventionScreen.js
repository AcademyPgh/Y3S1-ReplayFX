import React, { Component } from 'react';
import ConventionPicker from '../src/components/ConventionPicker';

export default class SelectConventionScreen extends React.Component {

    render() {
        //return <ConventionLoader onConventionLoaded={this.props.onConventionLoaded} />;
        return <ConventionPicker conventionList={this.props.conventionList} 
                    isLocalList={this.props.isLocalList} 
                    onConventionSelected={this.props.onConventionSelected}
        />;
    }
}