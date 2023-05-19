import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, verticalScale, moderateScale } from '../../utils/Scaling';
import Promo from '../../components/Promo';
import {styles} from './styles';
import {loadConvention} from '../../utils/DataRequest';
import Analytics from 'appcenter-analytics';

const fullWidth = Dimensions.get('window').width;

export default class Schedule extends Component {

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false
    }

    this.displayEvent = this.displayEvent.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.displayEventById = this.displayEventById.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  setFavorite(event, shouldBeFavorite) {
    this.props.onSetFavorite(event, shouldBeFavorite);
  }

  displayEvent(event) {
    Analytics.trackEvent('Event Detail', { eventId: event.id, event: event.name });
    this.props.navigation.navigate('EventDetails', {eventInfo: event});
  }

  displayEventById(event_id) {
    this.props.navigation.navigate('EventDetails', {eventId: event_id});
  }

  keyExtractor = (item, index) => item.id.toString();

  renderListItem = ({item, index, section}) => (
    <EventItem 
      event={item} 
      displayEvent={this.displayEvent} 
      isFavorite={this.props.favorites.includes(item.id)} 
      onSetFavorite={this.setFavorite}
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

  async onRefresh() {
    this.setState({refreshing: true});
    loadConvention(this.props.screenProps.apiData)
    .then((results) => {
      this.props.screenProps.onConventionDataLoaded(results);
    })
    .finally(() => {
      this.setState({refreshing: false});
    });
  }

  render() {

    return(
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: '#F2F2F2'}}>
        <SectionList 
          sections={this.props.eventList} 
          renderItem={this.renderListItem} 
          renderSectionHeader={this.renderSectionHeader}
          ListEmptyComponent={
            <View style={styles.notifyText}><Text style={styles.emptyText}>{this.props.emptyText}</Text></View>
          }
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={
            <Promo promos={this.props.screenProps.apiData.promos} displayEventById={this.displayEventById} width={fullWidth} styles={styles}/>
          }
          ItemSeparatorComponent={this.renderSeparator}
          SectionSeparatorComponent={this.renderSeparator}
          stickySectionHeadersEnabled
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />
      </View>
    );
  }
}

class EventItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.pressText = this.pressText.bind(this);
    this.pressStar = this.pressStar.bind(this);
  }

  pressStar() {
    this.props.onSetFavorite(this.props.event, !this.props.isFavorite);
  }

  pressText() {
    this.props.displayEvent(this.props.event);
  }

  getTime(event) {
    let splitter = "-";
    if (event.startTime12 === null || event.endTime12 === null)
    {
      splitter = "";
    }
    const start = event.startTime12 === null ? "" : event.startTime12;
    const end = event.endTime12 === null ? "" : event.endTime12
    return `${start}${splitter}${end}`;
  }

  render() {
    const event = this.props.event;

    const iconName = this.props.isFavorite ? 'star' : 'star-o';

    return (
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableOpacity style={styles.starContainer} onPress={this.pressStar} >
          <Icon name={iconName} size={scale(40)} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.eventTextContainer} onPress={this.pressText}>
          <Text style={styles.Time}>{this.getTime(event)}</Text>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.Location}>{event.location}</Text>                
        </TouchableOpacity>
      </View>
    );
  }
}