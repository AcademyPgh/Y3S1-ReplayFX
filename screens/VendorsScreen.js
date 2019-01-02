import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  SectionList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeButtonHeader } from '../src/utils/Headers';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';
import Promo from '../src/components/Promo';

const fullWidth = Dimensions.get('window').width;

export default class VendorsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  constructor(props) {
    super(props);

    this.displayVendor = this.displayVendor.bind(this);
    this.displayEventById = this.displayEventById.bind(this);
  }

  displayVendor(vendor) {
    this.props.navigation.navigate('VendorDetails', {vendorInfo: vendor});
  }

  keyExtractor = (item, index) => item.id.toString();

  renderListItem = ({item, index, section}) => (
    <VendorItem 
      vendor={item} 
      displayVendor={this.displayVendor} 
    />
  );

  renderSectionHeader = ({section: {title}}) => (
    this.props.showSectionHeaders && <View style={styles.sectionHeader}><Text style={{fontWeight: 'bold', paddingLeft: scale(8)}}>{title}</Text></View>
  );

  renderSeparator = () => {
    return (
      <View
        style={{
          height: StyleSheet.hairlineWidth * 2,
          width: "100%",
          backgroundColor: "#9ca4ab",
        }}
      />
    );
  };

  displayEventById(event_id) {
    this.props.navigation.navigate('EventDetails', {eventId: event_id});
  }

  processVendorSections(vendorList) {
    if (!vendorList) {
      vendorList = [];
    }
    return [{title: 'Vendors', data: vendorList}];
  }

  render() {

    return(
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'white'}}>
        <SectionList 
          sections={this.processVendorSections(this.props.screenProps.apiData.vendors)} 
          renderItem={this.renderListItem} 
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={
            <Promo promos={this.props.screenProps.apiData.promos} displayEventById={this.displayEventById} width={fullWidth} styles={styles}/>
          }
          ItemSeparatorComponent={this.renderSeparator}
          SectionSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

class VendorItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.pressText = this.pressText.bind(this);
  }

  pressText() {
    this.props.displayVendor(this.props.vendor);
  }

  render() {
    const vendor = this.props.vendor;

    return (
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableOpacity style={styles.vendorTextContainer} onPress={this.pressText}>
          <Text style={styles.vendorTitle}>{vendor.title}</Text>
          {vendor.description && 
          <Text numberOfLines={3} style={styles.vendorDescription}>{vendor.description}</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vendorTitle: {
    paddingVertical: 2,
    color: 'black',
    fontWeight: 'bold',
    fontSize: scale(24),
  },
  vendorDescription: {
    color: '#9ca4ab',
    fontSize: scale(16),   
  },

  topText: {
    justifyContent: 'center',
    color: 'blue',
    fontSize: scale(18),
  },
  container: {
    flex: 1,
    paddingVertical: verticalScale(5), 
  },
  vendorTextContainer: {
    flex: 1,
    paddingHorizontal: scale(8),
  },
  text: {

  },
  textContainer: {
    // width: '50%',
    // borderRadius: 20,
    // padding: 0,
  },
  promoContainer: {  
    width: '100%',
    //resizeMode: 'contain',
  },
  sectionHeader: {
    backgroundColor: 'whitesmoke',
    flex: 1,
  }
});