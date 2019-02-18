import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

const fontSize = 20;

export const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontFamily: Fonts.Heavy,
        fontSize,
    },
    text: {
        fontFamily: Fonts.Medium,
        fontSize,
    },
    editText: {
        fontFamily: Fonts.Medium,
        fontSize,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
    },
    keyboardPadding: {
        height: 50,
    },
    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});