
import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

const ROW_HEIGHT = verticalScale(35);

export const styles = StyleSheet.create({
    // index

    Font: {
      color: Colors.LightGray,
      fontSize: scale(28),
      fontFamily: Fonts.Light,
    },
    indexContainer: {
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
    },

    // list

    listContainer: {
      flex: 1, 
      backgroundColor: 'whitesmoke'
    },
    searchContainer: {
      height: verticalScale(34), 
      margin: scale(8), 
      borderRadius: scale(8), 
      backgroundColor: 'white', 
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      alignItems: 'center'
    },
    searchView: {
      width: verticalScale(40), 
      height: '100%', 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    searchInput: {
      flex: 1, 
      height: '100%', 
      padding: 0, 
      textDecorationLine: 'none', 
      fontSize: scale(20), 
      fontFamily: Fonts.Light, 
      color: 'gray'
    },
    searchClear: {
      width: verticalScale(40), 
      height: '100%', 
      justifyContent: 'center', 
      alignItems: 'center'
    },

    stretch: {
      flex: 1,
      width: '100%',
     },
     letter: {
       backgroundColor: '#555555',
       alignItems: 'center',
       borderLeftWidth: StyleSheet.hairlineWidth * 3,
       borderLeftColor: 'black',
       width: scale(35),
       margin: 0,
     },
     wideLetter: {
       width: scale(48)
     },
     scrollLetterText: {
       fontSize: scale(24),
       fontFamily: Fonts.Light,
       textAlign: 'center',
       color: '#e3e4e4',
       paddingBottom: verticalScale(3),
       paddingTop: verticalScale(3),
     },
     item1: {
       height: ROW_HEIGHT,
       paddingHorizontal: scale(5),
       borderBottomWidth: StyleSheet.hairlineWidth * 2,
       borderColor: '#9ca4ab',
       justifyContent: 'center',
     },
     item2: {
       backgroundColor: '#dddddd',
     },
     itemText: {
       fontSize: scale(18),
       fontFamily: Fonts.Light,
       paddingRight: scale(12)
     },

     // detail

     container: {
      flex: 1,
    },
   
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
    },

    gameImage: {
      borderColor: '#AAA',
      alignSelf: 'center',
      borderRadius: 5,
    },

    headerImage: {
      width: undefined,
      height: undefined,
    },
    
    headerTextInput: {
      fontSize: scale(25),
      fontFamily: Fonts.Heavy,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingTop: verticalScale(12),
      paddingLeft: scale(10),
      paddingRight: scale(10),
    },

    headerText: {
      fontSize: scale(20),
      fontFamily: Fonts.Heavy,
      color: '#ffffff',
      textAlign: 'center',
      letterSpacing: 2,
      paddingBottom: verticalScale(12),
      marginTop: verticalScale(-8),
      fontWeight: 'bold',
    },

    detailsContainer: {
        padding: scale(20),
    },  
          
    titles: {
      fontFamily: Fonts.Heavy,
      color: '#000000',
      fontSize: scale(16),
      letterSpacing: 1,
      lineHeight: scale(28),
    },
      
    descriptions: {
      fontFamily: Fonts.Medium,
      color: '#000000',
      fontSize: scale(16),
      lineHeight: scale(28),
    }, 

    gameBioTitle: {
      fontFamily: Fonts.Heavy, 
      color: '#000000',
      fontSize: scale(16), 
      letterSpacing: 1, 
      lineHeight: scale(18),
    },

    gameBioInput: {
      fontFamily: Fonts.Medium,
      color: '#000000', 
      fontSize: scale(16), 
      letterSpacing: .5, 
      lineHeight: scale(18),
    },

    locationBorder: {
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      margin: verticalScale(10)
    },

    location: {
      fontSize: scale(28), 
      fontFamily: Fonts.Heavy, 
      color: '#000000',
      textAlign: 'center',
    },

    locationInput: {
      fontSize: scale(38), 
      fontFamily: Fonts.Heavy,
      color: '#000000',
      textAlign: 'center',
      paddingLeft: scale(10),
      paddingRight: scale(10),
    },

    detailTitleHeader: {
      flex: 1, 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgba(20, 20, 20, .2)'
    }
  });
