import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, verticalScale, moderateScale } from './Scaling';

export const homeButtonHeader = (navigation) => {
    return {
    headerRight: (
        <TouchableOpacity onPress={() => {navigation.popToTop()}} style={{paddingRight: scale(10)}}>
          <Icon name="home" size={40} color='white' />
        </TouchableOpacity>
      ),
    };
}