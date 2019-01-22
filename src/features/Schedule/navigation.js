import ScheduleContainer from './index';
import EventDetails from './EventDetails';

export default {
  Schedule: {
    screen: ScheduleContainer,
    navigationOptions: {
      title: 'SCHEDULE'
    }
  },
  EventDetails: {
    screen: EventDetails,
    initialRouteParams: { },
    navigationOptions: {
      title: 'SCHEDULE',
    }
  }
};