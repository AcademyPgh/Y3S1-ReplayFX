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
        return this.createButton(url, "#526080", "facebook", "Facebook");
        // backgroundColor="#3b5998"
    }
    if(url.includes("twitter"))
    {
        return this.createButton(url, "#5ba9c8", "twitter", "Twitter");
        //backgroundColor="#00acee"
    }
    if(url.includes("instagram"))
    {
        return this.createButton(url, "#835b9a", "instagram", "Instagram");
        // backgroundColor="#8a3ab9"
    }
    if(url.includes("bandcamp"))
    {
        return this.createButton(url, "738e96", "bandcamp", "Bandcamp");
        // backgroundColor="#629aa9"
    }
    if(url.includes("spotify"))
    {
        return this.createButton(url, "#469160", "spotify", "Spotify");
        // backgroundColor="#1db954"
    }

    return this.createButton(url, "#c6535c", "globe", "Homepage");
        // backgroundColor="#ff1b2d"
  }

//   createButton(url, color, name, text)
//   {
//       return (<Icon.Button
//         name={name}
//         // backgroundColor="#ff1b2d"
//         backgroundColor={color}
//         onPress={() => this.openGuestWebsite(url)}
//         iconStyle={styles.icon}
//       >{text}</Icon.Button>) 
//   }

  createButton(url, color, name, text)
  {
      return (<TouchableOpacity
        onPress={() => this.openGuestWebsite(url)}
      >
          <Icon
            name={name}
            color={color}
            style={styles.icon}
            size={30}
          ></Icon>
      </TouchableOpacity>)
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