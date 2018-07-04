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

const fullWidth = Dimensions.get('window').width;

export default class VendorsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  constructor(props) {
    super(props);

    this.displayVendor = this.displayVendor.bind(this);
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
    this.props.showSectionHeaders && <View style={styles.sectionHeader}><Text style={{fontWeight: 'bold', paddingLeft: 8}}>{title}</Text></View>
  );

  renderSeparator = () => {
    return (
      <View
        style={{
          height: StyleSheet.hairlineWidth * 4,
          width: "100%",
          backgroundColor: "#9ca4ab",
        }}
      />
    );
  };

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
            <ScalableImage width={fullWidth}
              style={styles.promoContainer}
              source={require('../Images/PromoSpot.jpg')}
            />
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
          <Text numberOfLines={3} style={styles.vendorDescription}>{vendor.description}</Text>
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
    fontSize: 24,
  },
  vendorDescription: {
    color: '#9ca4ab',
    fontSize: 16,   
  },

  topText: {
    justifyContent: 'center',
    color: 'blue',
    fontSize: 18,
  },
  container: {
    flex: 1,
    paddingVertical: 5, 
  },
  vendorTextContainer: {
    flex: 1,
    paddingHorizontal: 8,
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