import React, { Component } from 'react';
import { View, ScrollView, Linking, TouchableOpacity, Dimensions } from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import { homeButtonHeader } from '../../utils/Headers';
import { styles } from './styles';

const fullWidth = Dimensions.get('window').width;

export default class Sponsors extends Component {
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
        <View style={styles.container1} key={sponsorInfo.id}>
          <TouchableOpacity onPress={() => this.openVendorWebsite(sponsorInfo.url)} >
            <ScalableImage width={fullWidth * .80}
                    source={{uri: sponsorInfo.imageUrl}}
            />
          </TouchableOpacity>
        </View>
      );
    }
    
    render() {
      const sponsors = this.props.screenProps.apiData.sponsors;

      return (  
        <ScrollView style={styles.sponsorBackground}> 
          {
            sponsors.map(sponsor => this.renderSponsor(sponsor))
          }
        </ScrollView> 
      );
    }
  }