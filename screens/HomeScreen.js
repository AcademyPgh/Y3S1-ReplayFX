import React, { Component } from 'react';
import { StatusBar, ScrollView, Dimensions, Text, View, StyleSheet, RefreshControl, AsyncStorage } from 'react-native'
import ScalableImage from 'react-native-scalable-image';
import { Fonts } from '../src/utils/Fonts';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';
import { loadConvention } from '../src/utils/DataRequest';
import EmailModal from '../src/components/EmailModal';
import messaging from '@react-native-firebase/messaging';
import Spacer from '../src/components/Spacer.ios';

export default class HomeScreen extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      refreshing: false,
      emailVisible: false,
      showEmailCTA: false
    }

    this.onRefresh = this.onRefresh.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.submitModal = this.submitModal.bind(this);
  }

  componentDidMount()
  {
    if(this.state.showEmailCTA) {
      this.checkEmail();
    }
  }

  hideModal() {
    this.setState({emailVisible: !this.state.emailVisible});
  }

  submitModal() {
    const storeName = "hasEmailed";
    const emailStatus = {
      hasSubmitted: true,
      totalRequests: 1
    }
    AsyncStorage.setItem(storeName, JSON.stringify(emailStatus));
    this.hideModal();
  }

  checkEmail() {
    const storeName = "hasEmailed";
    AsyncStorage.getItem(storeName).then(hasEmailed => {
      let emailStatus = JSON.parse(hasEmailed);
      if(emailStatus === null || emailStatus === undefined)
      {
        emailStatus = {
          hasSubmitted: false,
          totalRequests: 0
        }
      }
      if(!emailStatus.hasSubmitted)
      {
        emailStatus.totalRequests = emailStatus.totalRequests + 1;
        if (emailStatus.totalRequests % 5 === 0 | emailStatus.totalRequests === 1)
        {
          this.setState({emailVisible: true})
        }
      }
      AsyncStorage.setItem(storeName, JSON.stringify(emailStatus));
    });

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

  subVendorMenu() {
    return this.props.screenProps.apiData.vendorTypes.filter(item => item.isMenu)
  }

  subScheduleMenu() {
    return this.props.screenProps.apiData.eventMenus.filter(item => item.isMenu);
  }

  buildMenu(menu) {
    let finalMenu = [];
    menu.forEach((menuItem) => {
      if(menuItem.type == 'EventMenu')
      {
        finalMenu = [...finalMenu, ...this.subMenu().map(item => {return {type: 'Schedule', title: item.displayName, options: {title: item.displayName, scheduleFilter: item.name}}})];
      }
      else if(menuItem.type == 'VendorMenu')
      {
        finalMenu = [...finalMenu, ...this.subVendorMenu().map(item => {return {type: 'VendorsList', title: item.displayName, options: {title: item.displayName, vendorFilter: item.id}}})];
      }
      else if(menuItem.type == 'TabSchedule')
      {
        finalMenu = [...finalMenu, ...this.subScheduleMenu().map(item => {return {type: 'Schedule', title: item.displayName, options: {title: item.displayName, tabs: item.id, days: false, favorites: true}}})];
      }
      else
      {
        finalMenu.push(menuItem);
      }
    });
    
    finalMenu.push({type: 'GuestsList', title: 'Acts'})
    return finalMenu;
  }
   
  render() {
    // const exampleMenu = 
    //   [
    //     {type: 'Schedule', title: 'Schedule'},
    //     {type: 'Schedule', title: 'My Schedule', options: {title: 'MY SCHEDULE', scheduleFilter: 'my-schedule'}},
    //     //{type: 'GamesMain', title: 'Games',},
    //     // {type: 'SocialFeed', title: 'Social Wall'},
    //     {type: 'VendorsList', title: 'Vendors'},
    //     {type: 'EventMenu'},
    //     //{type: 'Profile', title: 'Profile'},
    //     {type: 'Sponsors', title: 'Sponsors'},
    //     {type: 'VendorMenu'},
    //     {type: 'StaticMap', title: 'Map'},
    //   ];

    const menu = this.buildMenu(this.props.screenProps.apiData.menu);

    props = this.props;  

    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

    //Alert.alert('SW:' + ScreenWidth + ',SH:' + ScreenHeight + ',scl:' + scale(30));
    return (

    <View style={{flex:1}}> 
      <StatusBar backgroundColor="black" barStyle="light-content"/>

        {/*<ImageBackground source={require('../Images/Background.jpg')} style={{flex:1}}>*/}
        <EmailModal 
          visible={this.state.emailVisible}
          onSubmit={this.submitModal} 
          onRequestClose={this.hideModal}
          screenProps={this.props.screenProps}
          />
        <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />}
        > 

          <Spacer></Spacer>

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
   fontSize: scale(24),
   fontFamily: Fonts.NunitoLight,
   color: '#121212',
   borderBottomWidth: StyleSheet.hairlineWidth * 2,
   borderColor: 'black',
   borderStyle: 'solid',
   //textTransform: 'uppercase'
 },

  container: {
   flex: 1,
   paddingVertical: verticalScale(12), 
    
   backgroundColor: '#F2F2F2' 
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