import React, { Component } from 'react';
import { WebView } from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';

export default class LinkedMap extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  constructor(props) {
    super(props);
  }

  render() {
    const uri = this.props.screenProps.apiData.trackingUrl;
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
      />
    );
  }
}
