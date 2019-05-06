import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

const fontSize = 20;

export const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.Heavy,
        fontSize,
    },
    buttonContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        backgroundColor: 'whitesmoke'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});