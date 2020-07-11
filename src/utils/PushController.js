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

        const message = eventInfo.title + " is starting soon!";
        let extraData = {id: id, eventId: eventInfo.id};

        let dataKey = 'tag';

        //add the start time to the start of the event date, then subtract 15 minutes for the notification
        const startTime = eventInfo.startTime.substring(0, 5)
        // const date = moment(eventInfo.date).startOf('day').add(moment.duration(startTime)).subtract(15, 'minutes').toDate();
        const date = moment(Date.now() + (5 * 1000)).toDate(); // in 60 seconds, for testing

        if (eventInfo.startTime === null || eventInfo.startTime === undefined || date < Date.now()) {
            console.log("not adding, it is in the past");
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

        console.log("added", details);
        PushNotification.localNotificationSchedule(details);
    }

    static removeNotification(eventId) {
        PushNotification.cancelLocalNotifications({id: eventId.toString()});
    }
}