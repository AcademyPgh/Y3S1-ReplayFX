import React, { Component } from 'react';
import { StatusBar, ScrollView, Dimensions, Text, View, StyleSheet, RefreshControl } from 'react-native'
import ScalableImage from 'react-native-scalable-image';
import { Fonts } from '../src/utils/Fonts';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';
import { loadConvention } from '../src/utils/DataRequest';

export default class HomeScreen extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      refreshing: false
    }

    this.onRefresh = this.onRefresh.bind(this);
  }

  getMenuItem(menu){
    return (
      menu.map((menuItem, index) =>
        (<View key={index} style={[styles.container,]}>
          <Text style={styles.text}
            onPress={() => {
            this.props.navigation.navigate(menuItem.type, menuItem.options);
            }}>
            {menuItem.title.toUpperCase()}
          </Text>
        </View>))
    );
  }

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

  subMenu() {
    return this.props.screenProps.apiData.eventTypes.filter(item => item.isMenu)
  }
   
  render() {
    // const menu = this.props.screenProps.apiData.menu;
    const menu = 
      [
        {type: 'Schedule', title: 'Schedule'},
        {type: 'Schedule', title: 'My Schedule', options: {title: 'MY SCHEDULE', scheduleFilter: 'my-schedule'}},
        //{type: 'GamesMain', title: 'Games',},
        {type: 'SocialFeed', title: 'Social Wall'},
        {type: 'VendorsList', title: 'Featured Sponsors'},
        //{type: 'StaticMap', title: 'Map'},
        ...this.subMenu().map(item => {return {type: 'Schedule', title: item.name, options: {title: item.displayName, scheduleFilter: item.name}}}),
        //{type: 'Profile', title: 'Profile'},
        //{type: 'Sponsors', title: 'Sponsors'}
      ];

    props = this.props;  

    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    //Alert.alert('SW:' + ScreenWidth + ',SH:' + ScreenHeight + ',scl:' + scale(30));
    return (

    <View style={{flex:1}}> 
      <StatusBar backgroundColor="black" barStyle="light-content"/>

        {/*<ImageBackground source={require('../Images/Background.jpg')} style={{flex:1}}>*/}

        <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />}
        > 

          <View style={styles.headerImageContainer}>
            <ScalableImage style={styles.headerImage} width={Dimensions.get('window').width}
                source={{uri: props.screenProps.apiData.headerImageUrl}} />
          </View>
          
          {this.getMenuItem(menu)}
        </ScrollView> 

      {/*</ImageBackground>*/}
      </View>
    );
  }
}


 


const styles = StyleSheet.create ({

  text: {
   marginHorizontal: scale(20),
   flex: 1,
   fontSize: scale(30),
   fontFamily: Fonts.NunitoLight,
   color: 'black',
   borderBottomWidth: StyleSheet.hairlineWidth * 2,
   borderColor: 'black',
   borderStyle: 'solid',
   //textTransform: 'uppercase'
 },

  container: {
   flex: 1,
   paddingVertical: verticalScale(12),   
 },

  headerImage: {
    marginTop: -2,
  },

  headerImageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: 'whitesmoke'
  }


})