import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableHighlight,
  Alert,
  Dimensions

  
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';

const fullWidth = Dimensions.get('window').width;

export default class ScheduleScreen extends React.Component {

  constructor(props) {
    super(props);

    this.filterEvents(this.props.screenProps.apiData.events, this.props.filter);

    this.PressText=this.PressText.bind(this);
    this.PressStar=this.PressStar.bind(this);

    this.filterEvents = this.filterEvents.bind(this);
    this.getEventDays = this.getEventDays.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const eventDataChanged = nextProps.screenProps.dataLoadedTimestamp > this.props.screenProps.dataLoadedTimeStamp;
    const filterChanged = nextProps.filter != this.props.filter;

    const events = nextProps.screenProps.apiData.events;

    //TODO: Move the filtering to the screen container so it only happens once and passes the correct events based on filter
    if (eventDataChanged) {
      this.getEventDays(events);
    }

    if (filterChanged || eventDataChanged) {
      this.filterEvents(events, nextProps.filter);
    }
  }

  PressStar() {
    //Alert.alert('You tapped the button!');
    // if (this.state.filter == 'vendors') {
    //   this.setState({filter: 'featured'});
    // } else {
    //   this.setState({filter: 'vendors'});
    // }
  }

  PressText() {
    this.props.navigation.navigate('Schedule');
  }

  getEventDays(events) {

    //TODO: I don't think Javascript handles timezones well - UTC? Local?
    const dates = events.map(event => { return new Date(new Date(event.date).setHours(0,0,0,0)) })
                    .filter((date, index, self) => { return self.indexOf(date) == index; }).sort();
    
    this.eventDays = dates.map((date, index) => { 

      const day = date.toLocaleDateString('en-US', {day: 'short'});
      const dateNum = date.getDate();

      return {key: index, date: date, dayOfWeek: day, dayOfMonth: dateNum};
    });
  }

  filterEvents(events, filter) {

    let filteredEvents = events
      .filter( (event) => {        
        return event.replayEventTypes.some( (eventType) => {
          return eventType.name == filter;
        });
      });

    this.eventList = filteredEvents;
  }

  render() {

    return(
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'black'}}>




        {/* <ScrollView> 
          <ScalableImage width={fullWidth}
          style={styles.promoContainer}
          source={require('../Images/PromoSpot.jpg')}/>

        
        {
          this.eventList
            .filter( (event) => {
              //return event.title.includes('Pinburgh');

              //go into the replayEventTypes array
              //check the name of each eventType in the array
              //if the name == 'featured', return true.
              //otherwise, return false
              
              return event.replayEventTypes.some( (eventType) => {
                return eventType.name == this.props.filter;
              });
            })
            .slice(0, 100)
            .map( (event) => {
              return (
                <EventItem key={event.id} event={event} />
              );
          })

        }
      
        
      </ScrollView>  */}
    </View>      
    );
  }
}

class EventItem extends React.Component {

  render() {
    const event = this.props.event;

    return (
      <View key={event.id} style={[styles.container, {backgroundColor: 'white', }]}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableHighlight onPress={this.PressStar} >
            <View style={styles.starContainer}>            
                <Image style={styles.starbutton}
                source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
            </View>
          </TouchableHighlight>   
        </View>       
        <View style={{flex: 4}}>  
          <TouchableHighlight >{/*onPress={this.PressText}>*/}
            <View style={{flex: 1}}>                            
              <Text style={styles.Time}>{event.startTime12 + '-' + event.endTime12}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.Location}>{event.location}</Text>            
            </View>                    
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventTitle: {
    paddingVertical: 2,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,

  },
  Time: {
    paddingVertical: 2,
    color: '#9ca4ab',
    fontSize: 16,
    
  },
  Location: {
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
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: '#9ca4ab',
    flexDirection: 'row',   
    paddingVertical: 5, 
  },
  starContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    paddingLeft: 40,
    alignItems: 'center',   
  },
  starbutton: {
    backgroundColor: '#859a9b',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    paddingLeft: 40,
    alignItems: 'center',   
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
});