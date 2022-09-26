import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
  vendorContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    backgroundColor: '#F2F2F2'
  },
  vendorTitle: {
    paddingVertical: 2,
    color: 'black',
    fontWeight: 'bold',
    fontSize: scale(24),
  },
  vendorDescription: {
    color: '#9ca4ab',
    fontSize: scale(16),   
  },

  topText: {
    justifyContent: 'center',
    color: 'blue',
    fontSize: scale(18),
  },
  container: {
    flex: 1,
    paddingVertical: verticalScale(5), 
  },
  vendorTextContainer: {
    flex: 1,
    paddingHorizontal: scale(8),
  },
  promoContainer: {  
    width: '100%',
  },
  sectionHeader: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    alignContent: 'center', 
    justifyContent: 'center'
  },

  // details

  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  headerImage: {
    width: undefined,
    height: undefined,
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
    color: '#F5FCFF',
  }, 

  vendorBio: {
    fontFamily: Fonts.Heavy, 
    fontSize: scale(16), 
    letterSpacing: 1, 
    lineHeight: scale(18),
    color: '#000000',
    textAlign: 'center',
  },

  vendorBioText: {
    fontFamily: Fonts.Medium, 
    fontSize: scale(16), 
    letterSpacing: .5, 
    lineHeight: scale(18),
    color: '#000000',
    marginTop: 5,
    marginBottom: verticalScale(18),
  },

  // locationDetails: {
  //   marginLeft: scale(12), 
  //   marginRight: scale(12), 
  //   fontSize: scale(38), 
  //   fontFamily: Fonts.Heavy, 
  //   textAlign: 'center', 
  //   textAlignVertical: "center",
  //   color: '#000000',
  // },

  urlContainer: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    margin: verticalScale(10),
    paddingVertical: verticalScale(5),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

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

  vendor: {
    margin: verticalScale(10),
    padding: verticalScale(10),
    backgroundColor: '#cccccc'
  },
  event: {
    margin:verticalScale(10),
    padding: verticalScale(10)
  },

  linkTitle: {
    fontFamily: Fonts.Heavy, 
    fontSize: scale(16), 
    letterSpacing: 1, 
    lineHeight: scale(18),
    color: '#000000',
  },
  linkLocation: {
    fontFamily: Fonts.Medium, 
    fontSize: scale(14), 
    letterSpacing: 1, 
    lineHeight: scale(16),
    color: '#000000',
  },
  linkDate: {
    fontFamily: Fonts.Medium, 
    fontSize: scale(14), 
    letterSpacing: 1, 
    lineHeight: scale(16),
    color: '#333333',
  }
});