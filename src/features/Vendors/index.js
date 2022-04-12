// USING SETTINGS FROM GUEST FOR TESTING PURPOSES


import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Dimensions } from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';
import { scale  } from '../../utils/Scaling';
import Promo from '../../components/Promo';
import { styles } from './styles';

const fullWidth = Dimensions.get('window').width;

export default class Guests extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const title = navigation.getParam('title', 'GUESTS');

    return {
      ...homeButtonHeader(navigation),
      title: title,
    };
  }

  constructor(props) {
    super(props);

    this.displayGuest = this.displayGuest.bind(this);
    this.displayEventById = this.displayEventById.bind(this);
  }

  displayGuest(guest) {
    this.props.navigation.navigate('GuestDetails', {guestInfo: guest, title: guest.name});
  }

  keyExtractor = (item, index) => item.id.toString();

  renderListItem = ({item, index, section}) => (
    <GuestItem 
      guest={item} 
      displayGuest={this.displayGuest} 
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

  processGuestSections(guestList) {
    if (!guestList) {
      guestList = [];
    }
    const filter = this.props.navigation.getParam('guestFilter', null);
    const title = this.props.navigation.getParam('name', '');
    if(filter)
    {
      return[{name: title, data: guestList.filter(item => 
        item.guestTypes.some(x => x.id === filter))}]
    }
    else
    {
      return [{title: 'Guests', data: guestList}];
    }
  }

  render() {

    return(
      
      <View style={styles.vendorContainer}>
        <SectionList 
          sections={this.processGuestSections(this.props.screenProps.apiData.guests)} 
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

class GuestItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.pressText = this.pressText.bind(this);
  }

  pressText() {
    this.props.displayGuest(this.props.guest);
  }

  render() {
    const guest = this.props.guest;

    return (
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableOpacity style={styles.vendorTextContainer} onPress={this.pressText}>
          <Text style={styles.vendorTitle}>{guest.name}</Text>
          {guest.description && 
          <Text numberOfLines={3} style={styles.vendorDescription}>{guest.description}</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}


// ACTUAL VENDOR COMPONENT

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, SectionList, TouchableOpacity, Dimensions } from 'react-native';
// import { homeButtonHeader } from '../../utils/Headers';
// import { scale  } from '../../utils/Scaling';
// import Promo from '../../components/Promo';
// import { styles } from './styles';

// const fullWidth = Dimensions.get('window').width;

// export default class Vendors extends Component {
//   static navigationOptions = ({ navigation, navigationOptions }) => {
//     const { params } = navigation.state;

//     const title = navigation.getParam('title', 'VENDORS');

//     return {
//       ...homeButtonHeader(navigation),
//       title: title,
//     };
//   }

//   constructor(props) {
//     super(props);

//     this.displayVendor = this.displayVendor.bind(this);
//     this.displayEventById = this.displayEventById.bind(this);
//   }

//   displayVendor(vendor) {
//     this.props.navigation.navigate('VendorDetails', {vendorInfo: vendor, title: vendor.title});
//   }

//   keyExtractor = (item, index) => item.id.toString();

//   renderListItem = ({item, index, section}) => (
//     <VendorItem 
//       vendor={item} 
//       displayVendor={this.displayVendor} 
//     />
//   );

//   renderSectionHeader = ({section: {title}}) => (
//     this.props.showSectionHeaders && <View style={styles.sectionHeader}><Text style={{fontWeight: 'bold', paddingLeft: scale(8)}}>{title}</Text></View>
//   );

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: StyleSheet.hairlineWidth * 2,
//           width: "100%",
//           backgroundColor: "#9ca4ab",
//         }}
//       />
//     );
//   };

//   displayEventById(event_id) {
//     this.props.navigation.navigate('EventDetails', {eventId: event_id});
//   }

//   processVendorSections(vendorList) {
//     if (!vendorList) {
//       vendorList = [];
//     }
//     const filter = this.props.navigation.getParam('vendorFilter', null);
//     const title = this.props.navigation.getParam('title', '');
//     if(filter)
//     {
//       return[{title: title, data: vendorList.filter(item => 
//         item.vendorTypes.some(x => x.id === filter))}]
//     }
//     else
//     {
//       return [{title: 'Vendors', data: vendorList}];
//     }
//   }

//   render() {

//     return(
      
//       <View style={styles.vendorContainer}>
//         <SectionList 
//           sections={this.processVendorSections(this.props.screenProps.apiData.vendors)} 
//           renderItem={this.renderListItem} 
//           renderSectionHeader={this.renderSectionHeader}
//           keyExtractor={this.keyExtractor}
//           ListHeaderComponent={
//             <Promo promos={this.props.screenProps.apiData.promos} displayEventById={this.displayEventById} width={fullWidth} styles={styles}/>
//           }
//           ItemSeparatorComponent={this.renderSeparator}
//           SectionSeparatorComponent={this.renderSeparator}
//         />
//       </View>
//     );
//   }
// }

// class VendorItem extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.pressText = this.pressText.bind(this);
//   }

//   pressText() {
//     this.props.displayVendor(this.props.vendor);
//   }

//   render() {
//     const vendor = this.props.vendor;

//     return (
//       <View style={[styles.container, {backgroundColor: 'white', }]}>
//         <TouchableOpacity style={styles.vendorTextContainer} onPress={this.pressText}>
//           <Text style={styles.vendorTitle}>{vendor.title}</Text>
//           {vendor.description && 
//           <Text numberOfLines={3} style={styles.vendorDescription}>{vendor.description}</Text>
//           }
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
