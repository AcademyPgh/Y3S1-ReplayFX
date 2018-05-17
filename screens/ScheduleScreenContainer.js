import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import ScheduleScreen from './ScheduleScreen';

const tabs = [
  { name: 'thur', text: `THUR\n26` },
  { name: 'fri', text: `FRI\n27` },
  { name: 'sat', text: `SAT\n28` },
  { name: 'sun', text: `SUN\n28` },
  { name: 'my-schedule', text: `MY\nSCHEDULE` },
  { name: 'featured', text: `FEATURED` },
  { name: 'games', text: `OPEN\nPLAY` },
  { name: 'competitions', text: `COMPETE` },
  { name: 'music', text: `LIVE\nMUSIC` },
  { name: 'seminar', text: `SEMINARS` },
  { name: 'vendors', text: `VENDORS` },
];

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

    _tabScroll: ?ScrollView;
    

    constructor(props) {
      super(props);
  
      const { params } = this.props.navigation.state;

      let filter = '';
      if (params && params.scheduleFilter) {
        filter = params.scheduleFilter;
      }

      filter = this._getFilter(filter);
      
      this.state = {
        filter: filter,
      };

      this._tabLayout = {};

      this.updateFilter = this.updateFilter.bind(this);
      this.selectTab = this.selectTab.bind(this);
      this._scrollToTab = this._scrollToTab.bind(this);
    }

    componentDidMount() {
      //this.selectTab("music");
      debug.push("componentDidMount");
    }

    _getFilter(newFilter) {
      let filter = newFilter;
      if (newFilter == '' || newFilter == 'schedule') {
        filter = 'fri';
      }
      return filter;
    }

    updateFilter(newFilter) {
      const filter = this._getFilter(newFilter);
      this.setState({filter: filter});
    }

    selectTab(tabName, animate = true) {
      this.setState({debug: debug});
      this._scrollToTab(tabName, animate);
      this.updateFilter(tabName);
      //TODO: focus tab so that its text is white, unfocused tabs should be grey
    }

    _setTabScroll = (el) => {
      this._tabScroll = el;
    };

    _layoutTab(e, tab) {
      if (!this._tabLayout[tab.name]) {
        this._tabLayout[tab.name] = {text: tab.text, width: e.nativeEvent.layout.width, x: e.nativeEvent.layout.x};
        //debug.push("_layoutTab:" + tab.name);
      }
    }

    _layoutScroll = (e) => {
      this._scrollWidth = e.nativeEvent.layout.width;
      //debug.push("_layoutScroll");
      this.selectTab(this.state.filter, true);
    }

    _scrollToTab(tabName, animate = true) {
      const scrollHalfWidth = this._scrollWidth * 0.5;
      const tab = this._tabLayout[tabName];
      const tabCenter = tab.x + (tab.width * 0.5);

      let scrollPos = tabCenter - scrollHalfWidth;

      scrollPos = scrollPos < 0 ? 0 : scrollPos;

      this._tabScroll.scrollTo({x: scrollPos, animated: animate});
    }

    _handleContentSizeChange = (contentHeight, contentWidth) => {
      this._scrollContentWidth = contentWidth;
      //debug.push("_handleContentSizeChange");
    };
  
    render() {
      return (
        <View style={{flex:1}}>
          <View style={{flex:1, flexDirection:'row', height:'10%', borderStyle: 'solid', borderColor: 'white', borderTopWidth: (StyleSheet.hairlineWidth*1), borderBottomWidth: (StyleSheet.hairlineWidth * 2)}}>
            
            <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#272727'}}>
              <Text style={{fontSize: 24, color:'white'}}>JULY</Text>
            </View>

            <View style={{flex:4, backgroundColor:'#272727'}}>
              <ScrollView ref={this._setTabScroll} onLayout={this._layoutScroll} onContentSizeChange={this._handleContentSizeChange} horizontal={true} contentContainerStyle={{alignItems: 'center'}}>
                {tabs.map((tab) => (
                  <TouchableHighlight 
                  key={tab.name}
                  style={styles.tab}
                  onLayout={(e) => {this._layoutTab(e, tab)}}
                  onPress={() => {
                    this.selectTab(tab.name);
                  }}>
                  <Text style={{color:'white', textAlign:'center'}}>{tab.text}</Text>
                </TouchableHighlight>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={{flex:10}}>
            {/*<View style={{flex:1}}><Text>{JSON.stringify(this.state)}</Text></View>*/}
            <ScheduleScreen screenProps={this.props.screenProps} filter={this.state.filter} updateFilter={this.updateFilter} navigation={this.props.navigation} />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1, padding: 4, paddingHorizontal: 15
    },
  });