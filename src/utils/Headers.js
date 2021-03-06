import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, verticalScale, moderateScale } from './Scaling';
import { goHome } from './Navigation';

export const homeButtonHeader = (navigation) => {
    return {
    headerRight: (
        <TouchableOpacity onPress={() => {goHome(navigation)}} style={{paddingRight: scale(10)}}>
          <Icon name="home" size={40} color='white' />
        </TouchableOpacity>
      ),
    };
}

