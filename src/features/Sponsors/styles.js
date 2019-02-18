import { StyleSheet } from 'react-native';
import { verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
    container1: {
      paddingVertical: verticalScale(10),
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9ca4ab',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    sponsorBackground:{
      flex: 1,
      backgroundColor: 'whitesmoke',
      borderColor: '#9ca4ab',
    },
  });