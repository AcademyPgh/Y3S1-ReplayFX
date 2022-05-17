import Guests from './index';
import GuestDetails from './GuestDetails';

export default {
    GuestsList: {
        screen: Guests,
        initialRouteParams: { },
        navigationOptions: {
          headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
        }
      },
      GuestDetails: {
        screen: GuestDetails,
        initialRouteParams: { },
        navigationOptions: {
          headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
        }
      },
};