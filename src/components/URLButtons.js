import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native';

import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class URLButtons extends Component {
  openGuestWebsite = (url) => {
    if (url) {

      // check for http in url
      if (!url.includes('http://') && !url.includes('https://')){
        url = 'https://' + url
      }

      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }
  }

  getCorrectIcon(url) {
    url = url.toLowerCase();
    if(url.includes("facebook") || url.includes("fb.me"))
    {
        return (<Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={() => this.openGuestWebsite(url)}
        style={styles.icon}
      >Facebook</Icon.Button>)
    }
    if(url.includes("twitter"))
    {
        return (<Icon.Button
        name="twitter"
        backgroundColor="#00acee"
        onPress={() => this.openGuestWebsite(url)}
        style={styles.icon}
      >Twitter</Icon.Button>)
    }
    if(url.includes("instagram"))
    {
        return (<Icon.Button
        name="instagram"
        backgroundColor="#8a3ab9"
        onPress={() => this.openGuestWebsite(url)}
        style={styles.icon}
      >Instagram</Icon.Button>)
    }
    if(url.includes("bandcamp"))
    {
        return (<Icon.Button
        name="bandcamp"
        backgroundColor="#629aa9"
        onPress={() => this.openGuestWebsite(url)}
        style={styles.icon}
      >Bandcamp</Icon.Button>)
    }
    if(url.includes("spotify"))
    {
        return (<Icon.Button
        name="spotify"
        backgroundColor="#1db954"
        onPress={() => this.openGuestWebsite(url)}
        style={styles.icon}
      >Spotify</Icon.Button>)
    }

    return (<Icon.Button
        name="opera"
        backgroundColor="#ff1b2d"
        onPress={() => this.openGuestWebsite(url)}
        style={styles.icon}
      >Homepage</Icon.Button>) 

  }

  render() {

    let urlStyle = this.props.urlStyle;

    

    const urls = this.props.url || "";
    if (urls == "")
        return "";
        
    const guestUrls = urls.split(",");

    return (
        <View style={urlStyle}>
            {guestUrls.map((url) => {
            return (
                <View style={styles.iconContainer}>
                    {this.getCorrectIcon(url)}
                </View>
            );
        })}
        </View>
    );
    }
}