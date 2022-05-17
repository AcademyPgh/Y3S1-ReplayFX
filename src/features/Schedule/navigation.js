import ScheduleContainer from './index';
import EventDetails from './EventDetails';

export default {
  Schedule: {
    screen: ScheduleContainer,
    navigationOptions: {
      title: 'SCHEDULE',
      headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
    }
  },
  EventDetails: {
    screen: EventDetails,
    initialRouteParams: { },
    navigationOptions: {
      title: 'SCHEDULE',
      headerStatusBarHeight: (Platform.OS === 'ios') ? 30 : 0,
    }
  }
};