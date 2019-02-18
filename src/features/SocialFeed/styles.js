import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
    textBox: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        flex: 5
    },
    touchBox: {
        height: 40,
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1, 
        flexDirection: 'row', 
        padding: 5
    },
    postText: {
        fontSize: 30
    },
    postTime: {
        alignItems: 'flex-end',
    },
    postContainer: {
        backgroundColor: 'white', 
        borderTopLeftRadius: 5,
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