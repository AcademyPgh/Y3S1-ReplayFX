import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import { homeButtonHeader } from '../src/utils/Headers';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';

const fullWidth = Dimensions.get('window').width;

export default class SponsorsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return homeButtonHeader(navigation);
    }
  
    openVendorWebsite = (url) => {
      if (url) {
        Linking.canOpenURL(url).then(supported => {
          if (!supported) {
            console.log('Can\'t handle url: ' + url);
          } else {
            return Linking.openURL(url);
          }
        }).catch(err => console.error('An error occurred', err));
      }
    }

    renderSponsor = (sponsorInfo) => {
      return (
        <View style={styles.container1}>
          <TouchableOpacity onPress={() => this.openVendorWebsite(sponsorInfo.url)} >
            <ScalableImage width={fullWidth * .80}
                    source={{uri: sponsorInfo.imageUrl}}
            />
          </TouchableOpacity>
        </View>
      );
    }
    
    // TODO: Sponsors need to be specific to convention
    render() {
      const sponsors = this.props.screenProps.apiData.sponsors;

      return (  
        <ScrollView style={styles.background}> 
          {
            sponsors.map(sponsor => this.renderSponsor(sponsor))
          }
        </ScrollView> 
      );
    }
  }

  const styles = StyleSheet.create({
    container1: {
      paddingVertical: verticalScale(10),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9ca4ab',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    background:{
      flex: 1,
      backgroundColor: 'whitesmoke',
      borderColor: '#9ca4ab',
    },
  });