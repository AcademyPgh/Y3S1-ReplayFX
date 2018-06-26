import React from 'react';
import {
  Alert,
  Platform,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import moment from 'moment';

export default class PushController {
    static addNotification(eventInfo) {

        const id = eventInfo.id.toString();

        //const title = "ReplayFX: Starting Soon!"
        const message = eventInfo.title + " is starting soon!";
        let extraData = {id: id, eventId: eventInfo.id};

        let dataKey = 'tag';

        //const date = moment(eventInfo.date).add(moment.duration(eventInfo.startTime)).subtract(15, 'minutes').toDate();

        const date = moment("2018-06-26T00:00:00").add(moment.duration("20:21")).toDate();

        Alert.alert(date.toString());

        if (date < Date.now()) {
            return; //don't schedule anything if it's in the past
        }

        if (Platform.OS == 'ios') {
            dataKey = 'userInfo';
        } else {
            extraData = JSON.stringify(extraData);
        }

        let details = {
            id: id,
            //title: title,
            message: message,
            date: date,
        }

        details[dataKey] = extraData;

        PushNotification.localNotificationSchedule(details);
    }

    static removeNotification(eventId) {
        PushNotification.cancelLocalNotifications({id: eventId.toString()});
    }
}