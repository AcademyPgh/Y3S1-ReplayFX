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
          sections={this.processVendorSections(this.props.screenProps.apiData.guests)} 
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
          <Text style={styles.vendorTitle}>{guest.title}</Text>
          {guest.description && 
          <Text numberOfLines={3} style={styles.vendorDescription}>{guest.description}</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}
