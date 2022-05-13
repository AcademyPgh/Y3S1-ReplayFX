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

    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.alphaSections = alphabet.split('');
    this.alphaSections.unshift('0-9');

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

  renderSectionHeader = ({section}) => {
    return (<View style={styles.sectionHeader}><Text style={{fontWeight: 'bold', paddingLeft: scale(8)}}>{section.title}</Text></View>);
};

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

    let sections = {};
    this.alphaSections.forEach(alpha => {
      sections[alpha] = [];
    });

    guestList.forEach(guest => {
      const name = guest.name;
      const firstchar = name[0];
      const targetSection = sections[firstchar.toUpperCase()];

      if (targetSection) {
        targetSection.push(guest);
      } else {
        sections[this.alphaSections[0]].push(guest);
      }
    })

    let sectionStartIndex = 0;

    const endResult = Object.keys(sections).map(key => {
      const result = {title: key, startIndex: sectionStartIndex, data: sections[key]};
      sectionStartIndex += sections[key].length;
      return result;
    });
    // {
    //   return[{name: title, data: guestList.filter(item => 
    //     item.guestTypes.some(x => x.id === filter))}]
    // }
    // else
    // {
    //   return [{title: 'Guests', data: guestList}];
    // }

    return endResult;
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
          <Text numberOfLines={3} style={styles.vendorDescription}>{guest.description}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
