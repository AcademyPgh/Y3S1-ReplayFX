
import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
    Font: {
      color: Colors.LightGray,
      fontSize: scale(28),
      fontFamily: Fonts.Light,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(20),
      borderWidth: Layout.BorderSmallSize,
      borderColor: Colors.BlueGray,
      backgroundColor: Colors.ContainerBackground,
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
