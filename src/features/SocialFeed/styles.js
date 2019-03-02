import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
    textBox: {
        height: 40,
        borderColor: 'transparent',
        borderWidth: 1,
        flex: 5
    },
    touchBox: {
        height: 40,
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        height: 56,
        flexDirection: 'row', 
        borderColor: '#A0A0A0',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 5
    },
    postText: {
        fontSize: scale(22),
        color: '#000',
        fontFamily: Fonts.Light
    },
    postTime: {
        alignItems: 'flex-end'
    },
    postName: {
        fontSize: scale(14),
        color: '#000000',
        fontFamily: Fonts.Heavy
    },
    postDate: {
        fontSize: scale(12),
        color: '#000000',
        fontFamily: Fonts.Medium
    },
    postContainer: {
        backgroundColor: 'white', 
        borderRadius: 5,
        margin: 5,
        padding: 5, 
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    }
});