import Vendors from './index';
import VendorDetails from './VendorDetails';

export default {
    VendorsList: {
        screen: Vendors,
        initialRouteParams: { },
        navigationOptions: {
          headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
        }
      },
      VendorDetails: {
        screen: VendorDetails,
        initialRouteParams: { },
        navigationOptions: {
          headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
        }
      },
};