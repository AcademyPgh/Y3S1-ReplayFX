import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import ScalableImage from 'react-native-scalable-image';

const fullWidth = Dimensions.get('window').width;

export default class ScheduleScreen extends React.Component {

  constructor(props) {
    super(props);

    this.displayEvent=this.displayEvent.bind(this);
    this.PressStar=this.PressStar.bind(this);
  }


  PressStar() {
    //Alert.alert('You tapped the button!');
    // if (this.state.filter == 'vendors') {
    //   this.setState({filter: 'featured'});
    // } else {
    //   this.setState({filter: 'vendors'});
    // }
  }

  displayEvent(event) {
    this.props.navigation.navigate('EventDetails', {eventInfo: event});
  }

  keyExtractor = (item, index) => item.id.toString();

  renderListItem = ({item}) => (
    <EventItem event={item} displayEvent={this.displayEvent}/>
  );

  render() {

    return(
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'white'}}>

        <FlatList 
          data={this.props.eventList} 
          renderItem={this.renderListItem} 
          keyExtractor={this.keyExtractor}
          ListHeaderComponent={
            <ScalableImage width={fullWidth}
              style={styles.promoContainer}
              source={require('../Images/PromoSpot.jpg')}
            />
          }
        />
    </View>
    );
  }
}

class EventItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.pressText = this.pressText.bind(this);
  }

  pressStar() {
    Alert.alert('Clicked star in function!');
  }

  pressText() {
    this.props.displayEvent(this.props.event);
  }

  render() {
    const event = this.props.event;

    return (
      <View style={[styles.container, {backgroundColor: 'white', }]}>
        <TouchableOpacity style={styles.starContainer} onPress={this.pressStar} >
          <Image style={styles.starbutton}
            source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
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
});