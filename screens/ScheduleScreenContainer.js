import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ScheduleScreen from './ScheduleScreen';
import moment from 'moment';

// const tabs = [
//   { name: 'thur', text: `THUR\n26` },
//   { name: 'fri', text: `FRI\n27` },
//   { name: 'sat', text: `SAT\n28` },
//   { name: 'sun', text: `SUN\n28` },
//   { name: 'my-schedule', text: `MY\nSCHEDULE` },
//   { name: 'featured', text: `FEATURED` },
//   { name: 'games', text: `OPEN\nPLAY` },
//   { name: 'competitions', text: `COMPETE` },
//   { name: 'music', text: `LIVE\nMUSIC` },
//   { name: 'seminar', text: `SEMINARS` },
//   { name: 'vendors', text: `VENDORS` },
// ];

const debug = [];

export default class ScheduleScreenContainer extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params, routeName } = navigation.state;
  
      //TODO: default filter to current/first day (thur/fri/sat)?
      // let filter = 'my-schedule';

      // if (params) {
      //   filter = params.scheduleFilter;
      // } 

      // navigation.setParams({scheduleFilter: filter});

      return {
        headerRight: (
          <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
        ),
      };
    }

    tabScroll: ?ScrollView;

    constructor(props) {
      super(props);

      this.updateFilter = this.updateFilter.bind(this);
      this.selectTab = this.selectTab.bind(this);
      this.scrollToTab = this.scrollToTab.bind(this);
      this.getEventDays = this.getEventDays.bind(this);
      this.setupTabs = this.setupTabs.bind(this);
      this.setupEventFilters = this.setupEventFilters.bind(this);

      this.getEventDays(this.props.screenProps.apiData.events);
      this.setupTabs(this.eventDays, this.props.screenProps.apiData.eventCategories);
      this.setupEventFilters(this.props.screenProps.apiData.events);

      let filter = this.props.navigation.getParam('scheduleFilter', '');
      filter = this.getFilter(filter);
      
      this.state = {
        filter: filter,
      };

      this.tabLayout = {};
    }

    componentWillReceiveProps(nextProps) {
      const eventDataChanged = nextProps.screenProps.dataLoadedTimestamp > this.props.screenProps.dataLoadedTimeStamp;
      const filterChanged = nextProps.navigation.state.getParam('filter') != this.state.filter;
  
      const events = nextProps.screenProps.apiData.events;
      const eventCategories = nextProps.screenProps.apiData.eventCategories;
  
      //TODO: Move the filtering to the screen container so it only happens once and passes the correct events based on filter
      if (eventDataChanged) {
        this.getEventDays(events);
        this.setupTabs(this.eventDays, eventCategories);
        this.setupEventFilters(events);
      }
  
      if (filterChanged || eventDataChanged) {
        this.filterEvents(events, nextProps.filter);
      }
    }

    getDateString(date) {
      return moment(date).startOf('day').toString();
    }

    getEventDays(events) {

      //TODO: I don't think Javascript handles timezones well - UTC? Local?
      const dates = events.map(event => { return this.getDateString(event.date); })
                      .filter((date, index, self) => { return self.indexOf(date) == index; })
                      .sort((a, b) => { return moment(a) - moment(b) });
      
      this.eventDays = dates.map((date, index) => { 
        
        const m = moment(date);
        const day =  m.format("ddd");
        const dateNum = m.date();
  
        return {key: index.toString(), date: m.toDate(), dayOfWeek: day, dayOfMonth: dateNum};
      });
    }

    setupTabs(eventDays, eventCategories) {
      this.tabs = [];

      eventDays.forEach((day) => { 
        const tab = {
          name: day.key,
          text: day.dayOfWeek.toUpperCase() + "\n" + day.dayOfMonth
        };
        this.tabs.push(tab);
      });

      this.tabs.push({ name: 'my-schedule', text: `MY\nSCHEDULE` });

      eventCategories.forEach((category) => {
        const tab = {
          name: category.Name,
          text: category.DisplayName.toUpperCase().replace(" ", "\n")
        };
        this.tabs.push(tab);
      });

    }

    setupEventFilters(events) {
      this.filters = {};

      this.tabs.forEach((tab) => {
        this.filters[tab.name] = [];
      });

      //loop through each event, adding it to filters where it belongs
      events.forEach((event) => {

        //put event in correct day filter
        const key = this.eventDays.find((day) => {return this.getDateString(day.date) == this.getDateString(event.date);}).key;
        this.filters[key].push(event);

        //TODO: if event is starred, add to my-schedule filter

        //put event in each category it belongs to
        event.replayEventTypes.forEach((eventType) => {
          this.filters[eventType.name].push(event);
        });
      });
    }

    getFilter(newFilter) {
      let filter = newFilter;
      const validFilters = Object.keys(this.filters);
      if (!validFilters.includes(newFilter)) {
        filter = validFilters[0];
      }
      return filter;
    }

    updateFilter(newFilter) {
      const filter = this.getFilter(newFilter);
      this.setState({filter: filter});
    }

    selectTab(tabName, animate = true) {
      this.scrollToTab(tabName, animate);
      this.updateFilter(tabName);
      //TODO: focus tab so that its text is white, unfocused tabs should be grey
    }

    setTabScroll = (el) => {
      this.tabScroll = el;
    };

    layoutTab(e, tab) {
      if (!this.tabLayout[tab.name]) {
        this.tabLayout[tab.name] = {text: tab.text, width: e.nativeEvent.layout.width, x: e.nativeEvent.layout.x};
      }
    }

    layoutScroll = (e) => {
      this.scrollWidth = e.nativeEvent.layout.width;
      this.selectTab(this.state.filter, true);
    }

    scrollToTab(tabName, animate = true) {
      const scrollHalfWidth = this.scrollWidth * 0.5;
      const tab = this.tabLayout[tabName];
      const tabCenter = tab.x + (tab.width * 0.5);

      let scrollPos = tabCenter - scrollHalfWidth;

      scrollPos = scrollPos < 0 ? 0 : scrollPos;

      this.tabScroll.scrollTo({x: scrollPos, animated: animate});
    }

    handleContentSizeChange = (contentHeight, contentWidth) => {
      this.scrollContentWidth = contentWidth;
    };
  
    render() {
      return (
        <View style={{flex:1}}>
          <View style={{flex:1, flexDirection:'row', height:'10%', borderStyle: 'solid', borderColor: 'white', borderTopWidth: (StyleSheet.hairlineWidth*1), borderBottomWidth: (StyleSheet.hairlineWidth * 2)}}>
            
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#272727'}}>
              <Text style={{fontSize: 24, color:'white'}}>JULY</Text>
            </View>

            <View style={{flex:4, backgroundColor:'#272727'}}>
              <ScrollView ref={this.setTabScroll} onLayout={this.layoutScroll} onContentSizeChange={this.handleContentSizeChange} horizontal={true} contentContainerStyle={{alignItems: 'center'}}>
                {this.tabs.map((tab) => (
                  <TouchableOpacity 
                  key={tab.name}
                  style={styles.tab}
                  onLayout={(e) => {this.layoutTab(e, tab)}}
                  onPress={() => {
                    this.selectTab(tab.name);
                  }}>
                  <Text 
                    style={[styles.tabLabel, 
                      (tab.name == this.state.filter ? styles.tabLabelFocused : styles.tabLabelUnfocused)]}>
                    {tab.text}
                  </Text>
                </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={{flex:10}}>
            {/*<ScrollView style={{flex:1}}><Text>{JSON.stringify(this.state.filter)}</Text></ScrollView>*/}
            <ScheduleScreen screenProps={this.props.screenProps} eventList={this.filters[this.state.filter]} updateFilter={this.updateFilter} navigation={this.props.navigation} />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1, padding: 4, paddingHorizontal: 15
    },
    tabLabel: {
      textAlign: 'center',
    },
    tabLabelFocused: {
      color: 'white',
    },
    tabLabelUnfocused: {
      color: 'grey',
    }
  });