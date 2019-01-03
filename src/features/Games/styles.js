
import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
    Font: {
      paddingBottom: verticalScale(5),
      color: '#969696',
      fontSize: scale(28),
      fontFamily: Fonts.Light,
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
