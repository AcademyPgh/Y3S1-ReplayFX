import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';
import ScheduleScreen from './ScheduleScreen';
import { homeButtonHeader } from '../src/utils/Headers';
import moment from 'moment';
import PushController from '../src/utils/PushController';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';
import { getConventionPersistKey, persistData } from '../src/utils/Persist';

const debug = [];

export default class ScheduleScreenContainer extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params, routeName } = navigation.state;

      const title = navigation.getParam('title', 'SCHEDULE');

      return {
        ...homeButtonHeader(navigation),
        title: title,
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
      this.setupFavoriteFilter = this.setupFavoriteFilter.bind(this);
      this.isDateFilter = this.isDateFilter.bind(this);
      this.loadFavorites = this.loadFavorites.bind(this);
      this.addFavorite = this.addFavorite.bind(this);
      this.removeFavorite = this.removeFavorite.bind(this);
      this.setFavorite = this.setFavorite.bind(this);
      this.setTitle = this.setTitle.bind(this);

      const conventionID = this.props.screenProps.apiData.id;
      this.favoritesKey = getConventionPersistKey(conventionID) + ":favoriteEvents";

      this.getEventDays(this.props.screenProps.apiData.events);
      this.setupTabs(this.eventDays, this.props.screenProps.apiData.eventTypes);
      this.setupEventFilters(this.props.screenProps.apiData.events);
      
      let filter = this.props.navigation.getParam('scheduleFilter', '');
      filter = this.getFilter(filter);
      
      this.state = {
        filter: filter,
        showSectionHeaders: true, //!this.isDateFilter(filter),
        favorites: [],
      };

      this.loadFavorites();

      this.tabLayout = {};
    }

    // this function doesn't need to be called because react navigation appears to reload the component entirely when re-navigating to it
    // componentWillReceiveProps(nextProps) {
    //   const eventDataChanged = nextProps.screenProps.dataLoadedTimestamp > this.props.screenProps.dataLoadedTimeStamp;
    //   const filterChanged = nextProps.navigation.getParam('scheduleFilter') != this.state.filter;
  
    //   const events = nextProps.screenProps.apiData.events;
    //   const eventCategories = nextProps.screenProps.apiData.eventCategories;
  
    //   if (eventDataChanged) {
    //     this.getEventDays(events);
    //     this.setupTabs(this.eventDays, eventCategories);
    //     this.setupEventFilters(events);
    //   }
  
    //   if (filterChanged || eventDataChanged) {
    //     this.updateFilter(nextProps.navigation.getParam('scheduleFilter'));
    //   }
    // }

    componentWillUpdate(nextProps, nextState) {
      if (nextState.filter == 'my-schedule' && this.state.filter != 'my-schedule') {
        this.setupFavoriteFilter(nextState.favorites, nextProps.screenProps.apiData.events);
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.selectTab(this.state.filter, true);
      }, 250);
    }

    //handle favorites
    loadFavorites() {
      AsyncStorage.getItem(this.favoritesKey)
      .then((favorites) => {
        if (favorites) {
          favorites = JSON.parse(favorites);
          this.setState({favorites: favorites});
          this.setupFavoriteFilter(favorites, this.props.screenProps.apiData.events);
        }
      }).catch((err) => {
        //Alert.alert(err);
      });
    }

    persistFavorites(favorites) {
      persistData(this.favoritesKey, favorites);
    }

    setFavorite(event, shouldBeFavorite) {
      if (shouldBeFavorite) {
        this.addFavorite(event);
      } else {
        this.removeFavorite(event);
      }
    }

    addFavorite(event) {
      const eventId = event.id;
      favorites = this.state.favorites;

      if (!favorites.includes(eventId)) {
        favorites.push(eventId);
        PushController.addNotification(event);
        this.persistFavorites(favorites);
        this.setState({favorites: favorites});
      }
    }

    removeFavorite(event) {
      const eventId = event.id;
      favorites = this.state.favorites;

      if (favorites.includes(eventId)) {
        eventIndex = favorites.indexOf(eventId);
        favorites.splice(eventIndex, 1);
        PushController.removeNotification(eventId);
        this.persistFavorites(favorites);
        this.setState({favorites: favorites});
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
        const month = m.format("MMM");
        const dateNum = m.format("DD");
  
        return {key: index.toString(), date: m.toDate(), dayOfWeek: day, dayOfMonth: dateNum, month: month};
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
          name: category.name,
          text: category.displayName.toUpperCase().replace(" ", "\n")
        };
        this.tabs.push(tab);
      });

      if(eventDays.length > 0)
      {
        this.month = eventDays[0].month.toUpperCase();
      }

    }

    setupFavoriteFilter(favorites, events) {

      const sections = {};
      //set up the sections based on day
      this.eventDays.forEach((eventDay) => {
        sections[eventDay.key] = {
          title: `${eventDay.dayOfWeek} ${eventDay.month} ${eventDay.dayOfMonth}`,
          data: []
        };
      });

      const favoriteEvents = sections;

      favorites = favorites.map((eventId) => {

        const event = events.find((event) => { return event.id == eventId; });
        
        if (event) {
          return event;
        }
      });

      //sort favorites by start time, then later by date
      favorites.sort((a, b) => { 
        if (a.startTime < b.startTime) {
          return -1;
        } 
        else if (a.startTime > b.startTime) {
          return 1;
        } else {
          return 0;
        }
      });

      favorites.forEach((event) => {

        //TODO: We should probably clear out old favorites that aren't valid anymore at some point
        if (event) {
          //figure out date key for event
          const key = this.eventDays.find((day) => {return this.getDateString(day.date) == this.getDateString(event.date);}).key;

          //put event into correct date section
          favoriteEvents[key].data.push(event);
        }
      });

      //now flatten the favorites down to just an array of title and data, removing the keys and empty sections
      this.filters['my-schedule'] = Object.keys(favoriteEvents)
        .filter(key => favoriteEvents[key].data.length > 0)
        .map(sectionKey => favoriteEvents[sectionKey]);
    }

    setupEventFilters(events) {
      this.filters = {};

      //create a filter for each tab, giving it a section headers object to section out dates
      this.tabs.forEach((tab) => {
        const sections = {};

        //create the section headers
        this.eventDays.forEach((eventDay) => {
          sections[eventDay.key] = {
            title: `${eventDay.dayOfWeek} ${eventDay.month} ${eventDay.dayOfMonth}`,
            data: []
          };
        });
        this.filters[tab.name] = sections;
      });

      //loop through each event, adding it to filters where it belongs
      events.forEach((event) => {

        //put event in correct day filter
        const key = this.eventDays.find((day) => {return this.getDateString(day.date) == this.getDateString(event.date);}).key;
        this.filters[key][key].data.push(event);

        //put event in each category it belongs to
        event.eventTypes.forEach((eventType) => {
          this.filters[eventType.name][key].data.push(event);
        });
      });

      //now flatten the filters down to just an array of title and data, removing the keys
      Object.keys(this.filters).forEach((filterName) => {
        this.filters[filterName] = Object.keys(this.filters[filterName])
          .filter(sectionKey => this.filters[filterName][sectionKey].data.length > 0)
          .map(sectionKey => this.filters[filterName][sectionKey]);
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
      const isDateFilter = this.isDateFilter(filter);
      //this.setState({showSectionHeaders: !isDateFilter});
    }

    setTitle(filter) {
      const isDateFilter = this.isDateFilter(filter);
      let title = 'SCHEDULE';
      if (!isDateFilter) {
        const tab = this.tabs.find((tab) => tab.name == filter);
        if (tab) {
          const tabText = tab.text.replace("\n", " ");
          title = tabText;
        }
      }
      this.props.navigation.setParams({ title: title });
    }

    isDateFilter(filter) {
      return this.eventDays.some((day) => filter == day.key);
    }

    selectTab(tabName, animate = true) {
      this.scrollToTab(tabName, animate);
      this.updateFilter(tabName);
      this.setTitle(tabName);
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
    }

    scrollToTab(tabName, animate = true) {
      const scrollHalfWidth = this.scrollWidth * 0.5;
      const tab = this.tabLayout[tabName];

      //if tab doesn't exist just return so user doesn't get an error
      if (!tab) { return; }

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
          <View style={{flexDirection:'row', height:verticalScale(50), borderStyle: 'solid', borderColor: 'white', borderTopWidth: (StyleSheet.hairlineWidth), borderBottomWidth: (StyleSheet.hairlineWidth)}}>
            
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#272727'}}>
              <Text style={{fontSize: verticalScale(24), color:'white'}}>{this.month}</Text>
            </View>

            <View style={{flex:4, backgroundColor:'#272727'}}>
              <ScrollView ref={this.setTabScroll} onLayout={this.layoutScroll} onContentSizeChange={this.handleContentSizeChange} horizontal={true} contentContainerStyle={{backgroundColor: '#272727', alignItems: 'center'}} style={{backgroundColor: '#272727'}}>
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
            {/* <ScrollView style={{flex:2}}><Text>{JSON.stringify(this.props.navigation)}</Text><Text>{JSON.stringify(this.state)}</Text></ScrollView> */}
            <ScheduleScreen screenProps={this.props.screenProps} eventList={this.filters[this.state.filter]} favorites={this.state.favorites} onSetFavorite={this.setFavorite} showSectionHeaders={this.state.showSectionHeaders} navigation={this.props.navigation} />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1, padding: verticalScale(4), paddingHorizontal: scale(15)
    },
    tabLabel: {
      fontSize: verticalScale(16),
      textAlign: 'center',
    },
    tabLabelFocused: {
      color: 'white',
    },
    tabLabelUnfocused: {
      color: 'grey',
    }
  });