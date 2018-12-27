import { StackNavigator, } from 'react-navigation';

import { Fonts } from './src/utils/Fonts';
import { scale, verticalScale, moderateScale } from './src/utils/Scaling';

import LandingScreen from './screens/LandingScreen';
import LoadConventionsScreen from './screens/LoadConventionsScreen';
import SelectConventionScreen from './screens/SelectConventionScreen';
import HomeScreen from './screens/HomeScreen';
import GamesListScreen from './screens/GamesListScreen';
import ScheduleScreenContainer from './screens/ScheduleScreenContainer';
import SponsorsScreen from './screens/SponsorsScreen';
import GamesMain from './screens/GamesMain';
import GameDetailsScreen from './screens/GameDetailsScreen';
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
      GamesMain: {
        screen: GamesMain,
        initialRouteParams: { },
        navigationOptions: {
          title: 'CHOOSE PLATFORM',
        }
      },
      GamesList: {
        screen: GamesListScreen,
        initialRouteParams: { },
        navigationOptions: {
          title: 'GAMES',
        }
      },
      GameDetails: {
        screen: GameDetailsScreen,
        initialRouteParams: { },
        navigationOptions: {
          title: 'GAMES',
        }
      },
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
    }
  );