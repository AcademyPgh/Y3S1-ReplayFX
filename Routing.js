import { StackNavigator, } from 'react-navigation';

import { Fonts } from './src/utils/Fonts';
import { scale } from './src/utils/Scaling';

import LandingScreen from './screens/LandingScreen';
import LoadConventionsScreen from './screens/LoadConventionsScreen';
import SelectConventionScreen from './screens/SelectConventionScreen';
import HomeScreen from './screens/HomeScreen';
import SponsorsNav from './src/features/Sponsors/navigation';
import GamesNav from './src/features/Games/Games.navigation';
import VendorsNav from './src/features/Vendors/navigation';
import StaticMap from './src/features/StaticMap/navigation';
import ScheduleNav from './src/features/Schedule/navigation';
import ProfileNav from './src/features/Profile/navigation';

var showLandingPage = false;

export default RootStack = StackNavigator(
    {
      Landing: {
        screen: LandingScreen,
        navigationOptions: {
          title: 'LANDING PAGE',
        }
      },
      LoadConventions: {
        screen: LoadConventionsScreen,
        navigationOptions: {
          title: 'Load Conventions',
          header: null
        }
      },
      SelectConvention: {
        screen: SelectConventionScreen,
        navigationOptions: {
          title: 'Select Convention',
        }
      },
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'HOME',
          header: null
        }
      },
      ...ScheduleNav,
      ...SponsorsNav,
      ...GamesNav,
      ...VendorsNav,
      ...StaticMap,
      ...ProfileNav,
      
      // Featured: {
      //   screen: ScheduleScreenContainer,
      //   initialRouteParams: { scheduleFilter: 'featured' },
      //   navigationOptions: {
      //     title: 'Featured'
      //   }
      // },
      
    },
    {
      initialRouteName: (showLandingPage ? 'Landing' : 'LoadConventions'),
      navigationOptions: {
        //title: 'Home',
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'normal',
          fontSize: scale(24),
          fontFamily: Fonts.NunitoLight,
          textAlign: 'center',
          flex: 1,
          padding: 0,
          margin: 0,
        },
      },
      headerMode: 'screen',
    }
  );