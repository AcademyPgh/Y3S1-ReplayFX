import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../utils/common.styles';
import { scale, verticalScale } from '../../utils/Scaling';

export const styles = StyleSheet.create({
  vendorContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    backgroundColor: 'white'
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
  },

  // details
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
    color: '#000000',
  }, 

  vendorBio: {
    fontFamily: Fonts.Heavy, 
    fontSize: scale(16), 
    letterSpacing: 1, 
    lineHeight: scale(18),
    color: '#000000',
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

  website: {
    textAlign: 'center',
    fontFamily: Fonts.Heavy,
    fontSize: scale(18),
    color: '#6c588d',
  },

  locationDetails: {
    marginLeft: scale(12), 
    marginRight: scale(12), 
    fontSize: scale(38), 
    fontFamily: Fonts.Heavy, 
    textAlign: 'center', 
    textAlignVertical: "center",
    color: '#000000',
  },

  urlContainer: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    margin: verticalScale(10),
    paddingVertical: verticalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  notTheBottom: {
    marginBottom: verticalScale(-10),
    borderBottomWidth: 0,
  },

  locationContainer: {
    borderColor: 'black', 
    borderBottomWidth: 1, 
    borderTopWidth: 1, 
    margin: verticalScale(10), 
    paddingVertical: 0,
  },

  locationText: {
    fontSize: scale(28), 
    fontFamily: Fonts.Heavy, 
    textAlign: 'center', 
    color: 'black',
  }
});