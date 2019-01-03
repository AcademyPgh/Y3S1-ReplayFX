
import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
    Font: {
      paddingBottom: verticalScale(5),
      color: Colors.LightGray,
      fontSize: scale(28),
      fontFamily: Fonts.Light,
    },
    text:{
      justifyContent: 'center',
      paddingLeft: scale(20),
      flex: 1
    },
    container: {
      flex: 1,
      paddingVertical: verticalScale(10),
      borderWidth: Layout.BorderSmallSize,
      borderColor: Colors.BlueGray,
      flexDirection: 'row',
      backgroundColor: Colors.ContainerBackground,
    },
    imgcontainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: scale(20),
    },
    background:{
      borderWidth: Layout.BorderSmallSize,
      backgroundColor: Colors.NegativeSpace,
      borderColor: Colors.BlueGray,
    },
    navigationChevron:{
      color: Colors.LightGray,
      fontSize: scale(30),
    }
  });
