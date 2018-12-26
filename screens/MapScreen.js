import React, { Component } from 'react';
import { Dimensions, View} from 'react-native';
import { homeButtonHeader } from '../src/utils/Headers';
import ImageZoom from 'react-native-image-pan-zoom';
import ScalableImage from 'react-native-scalable-image';
import Auth from '../src/components/Auth';

export default class MapScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  constructor(props) {
    super(props);
  }

  //TODO: Map will need to be specific to a convention
  render() {
    return (  
      <View style={{flex: 1}}>
        <Auth />
        <ImageZoom cropWidth={Dimensions.get("window").width}
              cropHeight={Dimensions.get("window").height}
              imageWidth={Dimensions.get("window").width}
              imageHeight={Dimensions.get("window").height}>
          <ScalableImage width={Dimensions.get("window").width} 
            source={{uri: this.props.screenProps.apiData.mapImageUrl}}
          />
        </ImageZoom>
      </View>
    );
  }
}