import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Linking } from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';
import { styles } from './styles';

export default class LinkedMap extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  constructor(props) {
    super(props);

    this.openTracker = this.openTracker.bind(this);
  }

  componentDidMount()
  {
    //this.openTracker();
  }

  openTracker()
  {
    url = this.props.screenProps.apiData.trackingUrl;
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
    const uri = this.props.screenProps.apiData.trackingUrl;
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.openTracker}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Open Shuttle Tracker</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Go Back</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  }
}
