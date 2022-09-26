import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../utils/common.styles';
import { scale, verticalScale } from '../utils/Scaling';

export const styles = StyleSheet.create({
  website: {
    textAlign: 'center',
    fontFamily: Fonts.Heavy,
    fontSize: scale(18),
    color: '#6c588d',
  },

  notTheBottom: {
    marginBottom: verticalScale(-10),
    borderBottomWidth: 0,
  },
  icon: {
      minWidth: scale(20)
  },
  iconContainer: {
      padding: verticalScale(5)
  },
  spacer: {
    height: 34,
    backgroundColor: '#000000'
  }
});