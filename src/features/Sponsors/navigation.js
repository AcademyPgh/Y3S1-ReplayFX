import Sponsors from './index';

export default {
    Sponsors: {
        screen: Sponsors,
        initialRouteParams: { },
        navigationOptions: {
          title: 'SPONSORS',
          headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
        }
      }
};