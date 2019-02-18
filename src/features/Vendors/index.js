import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Dimensions } from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';
import { scale  } from '../../utils/Scaling';
import Promo from '../../components/Promo';
import { styles } from './styles';

const fullWidth = Dimensions.get('window').width;

export default class Vendors extends Component {
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
      
      <View style={styles.vendorContainer}>
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
