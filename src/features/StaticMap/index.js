import React, { Component } from 'react';
import { Dimensions, View} from 'react-native';
import { homeButtonHeader } from '../../utils/Headers';
import ImageZoom from 'react-native-image-pan-zoom';
import ScalableImage from 'react-native-scalable-image';

import PhotoView from 'react-native-photo-view-ex';

export default class StaticMap extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return homeButtonHeader(navigation);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (  
      <View style={{flex: 1}}>
        <PhotoView
          style={{ flex: 1, width: '100%', height: '100%' }}
          source={{uri: this.props.screenProps.apiData.mapImageUrl}}
          minimumZoomScale={1}
          maximumZoomScale={9} />
        {/* <ImageZoom cropWidth={Dimensions.get("window").width}
              cropHeight={Dimensions.get("window").height}
              imageWidth={Dimensions.get("window").width}
              imageHeight={Dimensions.get("window").height}>
          <ScalableImage width={Dimensions.get("window").width} 
            source={{uri: this.props.screenProps.apiData.mapImageUrl}}
          />
        </ImageZoom> */}
      </View>
    );
  }
}