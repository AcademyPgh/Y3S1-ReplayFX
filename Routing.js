import { StackNavigator, } from 'react-navigation';

import { Fonts } from './src/utils/Fonts';
import { scale } from './src/utils/Scaling';

import LandingScreen from './screens/LandingScreen';
import LoadConventionsScreen from './screens/LoadConventionsScreen';
import SelectConventionScreen from './screens/SelectConventionScreen';
import HomeScreen from './screens/HomeScreen';
import ScheduleScreenContainer from './screens/ScheduleScreenContainer';
import SponsorsScreen from './screens/SponsorsScreen';
import GamesNav from './src/features/Games/Games.navigation';
import EventDetailsScreen from './screens/EventDetailsScreen';
import VendorsScreen from './screens/VendorsScreen';
import VendorDetailsScreen from './screens/VendorDetailsScreen';
import MapScreen from './screens/MapScreen';

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
      Schedule: {
        screen: ScheduleScreenContainer,
        navigationOptions: {
          //title: 'SCHEDULE'
        }
      },
      EventDetails: {
        screen: EventDetailsScreen,
        initialRouteParams: { },
        navigationOptions: {
          title: 'SCHEDULE',
        }
      },
      Sponsors: {
        screen: SponsorsScreen,
        initialRouteParams: { },
        navigationOptions: {
          title: 'SPONSORS',
        }
      },
      ...GamesNav,
      VendorsList: {
        screen: VendorsScreen,
        initialRouteParams: { },
        navigationOptions: {
          title: 'VENDORS',
        }
      },
      VendorDetails: {
        screen: VendorDetailsScreen,
        initialRouteParams: { },
        navigationOptions: {
          title: 'VENDORS',
        }
      },
      Map: {
        screen: MapScreen,
        initialRouteParams: { },
        navigationOptions: {
          title: 'MAP',
        }
      },
      
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