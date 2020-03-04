import React, { Component } from 'react';
import { WebView, Linking, View} from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';

export default class LinkedMap extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  componentDidMount() {
    setTimeout(() => { this.props.navigation.navigate('Home', {}) }, 1000);
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
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}
