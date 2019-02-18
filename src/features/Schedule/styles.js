import { StyleSheet } from 'react-native';
import { verticalScale, scale } from '../../utils/Scaling';
import { Fonts, Colors } from '../../utils/common.styles';

export   const styles = StyleSheet.create({
    tab: {
      flex: 1, padding: verticalScale(4), paddingHorizontal: scale(15)
    },
    tabLabel: {
      fontSize: verticalScale(16),
      textAlign: 'center',
    },
    tabLabelFocused: {
      color: 'white',
    },
    tabLabelUnfocused: {
      color: 'grey',
    },
    headerImage: {
        width: undefined,
        height: undefined,
      },
  
      eventImage: {
        alignSelf: 'center',
        borderRadius: 5,
      },
      
      headerText1: {
        fontSize: scale(25),
        fontFamily: Fonts.Heavy,
        color: '#ffffff',
        textAlign: 'center',
        letterSpacing: 2,
        paddingTop: verticalScale(12)
      },
  
      headerText2: {
        fontSize: scale(25),
        fontFamily: Fonts.Heavy,
        color: '#ffffff',
        textAlign: 'center',
        letterSpacing: 2,
        marginLeft: scale(20),
        marginRight: scale(20),
      },
  
      detailsContainer: {
          padding: scale(20),
      },  
            
      bolded: {
        fontFamily: Fonts.Heavy,
        fontSize: scale(16),
        letterSpacing: 1,
        lineHeight: scale(28),
        color: '#000000',
      },
        
      descriptions: {
        fontFamily: Fonts.Medium,
        fontSize: scale(16),
        lineHeight: scale(28),
        color: '#000000',
      }, 
  
      gameBio: {
        fontFamily: Fonts.Heavy, 
        fontSize: scale(16), 
        letterSpacing: 1, 
        lineHeight: scale(18),
        color: '#000000',
      },
  
      gameBioText: {
        fontFamily: Fonts.Medium, 
        fontSize: scale(16), 
        letterSpacing: .5, 
        lineHeight: scale(18),
        color: '#000000',
      },
  
      locationDetails: {
        marginLeft: scale(12), 
        marginRight: scale(12), 
        fontSize: scale(38), 
        //lineHeight: 110, 
        fontFamily: Fonts.Heavy, 
        textAlign: 'center', 
        textAlignVertical: "center",
        color: '#000000',
      },
  });