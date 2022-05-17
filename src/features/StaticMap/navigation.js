import StaticMap from './index';

export default {
    StaticMap: {
        screen: StaticMap,
        initialRouteParams: { },
        navigationOptions: {
          title: 'MAP',
          headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
        }
      }
};