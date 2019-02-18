import Vendors from './index';
import VendorDetails from './VendorDetails';

export default {
    VendorsList: {
        screen: Vendors,
        initialRouteParams: { },
        navigationOptions: {
          title: 'VENDORS',
        }
      },
      VendorDetails: {
        screen: VendorDetails,
        initialRouteParams: { },
        navigationOptions: {
          title: 'VENDORS',
        }
      },
};