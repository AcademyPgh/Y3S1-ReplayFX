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
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';

const fullWidth = Dimensions.get('window').width;

export default class ScheduleScreen extends React.Component {

  constructor(props) {
    super(props);

    this.displayEvent = this.displayEvent.bind(this);
    this.setFavorite = this.setFavorite.bind(this);

  }

  setFavorite(event, shouldBeFavorite) {
    this.props.onSetFavorite(event, shouldBeFavorite);
  }

  displayEvent(event) {
    this.props.navigation.navigate('EventDetails', {eventInfo: event});
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

  render() {

    return(
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'white'}}>
        <SectionList 
          sections={this.props.eventList} 
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

  render() {
    const event = this.props.event;

    const iconName = this.props.isFavorite ? 'star' : 'star-o';

    return (
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableOpacity style={styles.starContainer} onPress={this.pressStar} >
          <Icon name={iconName} size={scale(40)} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.eventTextContainer} onPress={this.pressText}>
          <Text style={styles.Time}>{event.startTime12 + '-' + event.endTime12}</Text>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.Location}>{event.location}</Text>                
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventTitle: {
    paddingVertical: 1,
    color: 'black',
    fontWeight: 'bold',
    fontSize: scale(18),

  },
  Time: {
    paddingVertical: 1,
    color: '#9ca4ab',
    fontSize: scale(16),
    
  },
  Location: {
    paddingVertical: 1,
    color: '#9ca4ab',
    fontSize: scale(16),   
  },
  container: {
    flex: 1,
    //borderWidth: StyleSheet.hairlineWidth * 4,
    //borderColor: '#9ca4ab',
    flexDirection: 'row',   
    paddingVertical: 2, 
  },
  starContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
  },
  eventTextContainer: {
    flex: 4,
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