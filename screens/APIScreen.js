import React, { Component } from 'react';
import {
 Platform,
 StyleSheet,
 Text,
 Button,
 View,
 ScrollView,
} from 'react-native';
import axios from 'axios';

export default class APIScreen extends React.Component {
 constructor(props){
   super(props);
   
   this.state = {
     events:[]
   };
 }
 componentDidMount()
 {
   this.loadEvents();
 }

 loadEvents()
 {
   axios
   .get ("http://replayfxcalendar.azurewebsites.net/public")
   .then((res) => {
     let temp = res.data;
     this.setState({ events: temp});
   });
 }
 //http://replayfxcalendar.azurewebsites.net/public
render() {
     const { params } = this.props.navigation.state;
     //const filter = params.scheduleFilter ? params.scheduleFilter : null;
     const filter = this.props.filter;
     
     return (
        <View>
            <Text>This is some text</Text>
            <ScrollView>
            <Text style={styles.text}>{JSON.stringify(this.state.events)}</Text>
            </ScrollView>
            {/* <View>
            {this.state.events.map((event, index) => {
                return (
                <View>
                    <Text>{event.title}</Text>
                </View>
                );
                })
            })
            </View> */}
        </View>
    )
 };
}

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
    },
  });