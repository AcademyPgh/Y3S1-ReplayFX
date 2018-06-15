import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const homeButtonHeader = (navigation) => {
    return {
    headerRight: (
        <TouchableOpacity onPress={() => {navigation.popToTop()}} style={{paddingRight: 10}}>
          <Icon name="home" size={40} color='white' />
        </TouchableOpacity>
      ),
    };
}