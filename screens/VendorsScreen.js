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
      vendorList = [
        {id: 1, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 2, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions', extendedDescription: 'Here is an extended description that is also pretty basic. I don"t think there"s anything more for you to see here.'},
        {id: 3, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 4, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 5, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 6, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 7, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 8, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 9, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 10, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 11, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 12, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 13, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 14, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 15, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 16, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 17, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 18, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 19, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 20, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 21, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 22, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 23, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 24, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 25, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 26, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 27, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 28, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        {id: 29, title: "Jiiiiiiiim's Games", description: 'This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', extendedDescription: 'This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will! This is the remix to description! This is a long description that might need to go for several lines so that we can test that multiple lines work in the list. Hopefully they do! We"ll find out, won"t we! Now we will!', location: 'D2'},
        {id: 30, title: "Joooooooohn's Games Long Name That is Pretty Long Cuz Vendors are Dumb", description: 'This is a normal length description. Pretty average, to be honest.', location: 'Pinburgh Main Stage, in the back by concessions'},
        
      ];
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
    fontSize: 16,
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