import React, { Component } from 'react';
<<<<<<< HEAD
import { TouchableOpacity, View, Text, Linking } from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';
import { styles } from './styles';

export default class LinkedMap extends Component {
  static navigationOptions = ({ navigation }) => {
=======
import { WebView, Linking, View} from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';

export default class LinkedMap extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
>>>>>>> master
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.urls = this.props.screenProps.apiData.trackingUrl.split(" ");
    this.openTracker = this.openTracker.bind(this);
  }

  componentDidMount()
  {
    //this.openTracker();
  }

  openTracker(i)
  {
    url = this.urls[i];
    Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
  }

  render() {
     return (
      <View style={styles.container}>
      {this.urls.map((url, index) => {
        return (<TouchableOpacity onPress={() => this.openTracker(index)} key={index}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>Open Shuttle {index + 1} Tracker</Text>
          </View>
        </TouchableOpacity>)
      })}
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Go Back</Text>
        </View>
      </TouchableOpacity>
      </View>
=======
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
>>>>>>> master
    );
  }
}
