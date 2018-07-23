import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View} from 'react-native';
import { Fonts } from '../src/utils/Fonts';
import { homeButtonHeader } from '../src/utils/Headers';
import { scale, verticalScale, moderateScale } from '../src/utils/Scaling';
import ImageZoom from 'react-native-image-pan-zoom';

export default class MapScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    const homeButton = homeButtonHeader(navigation);
    return {
      ...homeButton,
      headerTitleStyle: {
        ...navigationOptions.headerTitleStyle,
        fontSize: scale(18)
      },
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (  
      <View style={{flex: 1}}>
        <ImageZoom cropWidth={Dimensions.get("window").width}
              cropHeight={Dimensions.get("window").height}
              imageWidth={Dimensions.get("window").width}
              imageHeight={Dimensions.get("window").height}>
        <Image 
          style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, resizeMode: 'contain'}}
          source={require('../Images/replayfx-map.jpg')}/>
        </ImageZoom>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  
  Font: {
    paddingBottom: verticalScale(5),
    color: '#969696',
    fontSize: scale(28),
    fontFamily: Fonts.NunitoLight,
  },

  

  container: {
    flex: 1,
    paddingVertical: verticalScale(10),
    borderWidth: .5,
    borderColor: '#9ca4ab',
    flexDirection: 'row',
   

    
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: scale(20),
  },
  text:{
    justifyContent: 'center',
    paddingLeft: scale(20),
    flex: 1
  },
  background:{
    borderWidth: .5,
    backgroundColor: '#f3f3f3',
    borderColor: '#9ca4ab',
   

  },

    
});


