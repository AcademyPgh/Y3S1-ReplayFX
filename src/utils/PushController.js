import React from 'react';
import {
  Alert,
  Platform,
} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class PushController {
    static addNotification(eventId) {

        const message = "Event: " + eventId;
        let extraData = {id: eventId, eventId: eventId};

        let dataKey = 'tag';
        const date = new Date(Date.now() + (5 * 1000));

        if (Platform.OS == 'ios') {
            dataKey = 'userInfo';
        } else {
            extraData = JSON.stringify(extraData);
        }

        let details = {
            message: message,
            date: date,
        }

        details[dataKey] = extraData;

        PushNotification.localNotificationSchedule(details);
    }

    static removeNotification() {
        //Alert.alert("Remove notification!");
    }
}