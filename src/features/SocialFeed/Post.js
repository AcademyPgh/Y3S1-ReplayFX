import React, { Component } from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import { styles } from './styles';

export default class Post extends Component {
    render()
    {
        const post = this.props.post;
        const date = moment(post.postedOn);
        let dateString = "1/1/00";
        if (date > moment().add(-1, 'day'))
        {
            dateString = date.fromNow();
        }
        else
        {
            dateString = date.format('MM/DD/YY h:mm');
        }
        const dateOptions = {hour12: true}
        return (
            <View style={styles.postContainer}>
                <Text style={styles.postText}>{post.text}</Text>
                <View style={styles.postTime}>
                    <Text style={styles.postDate}>{dateString} by <Text style={styles.postName}>{post.postedBy.displayName}</Text></Text>
                </View>
            </View>)
    }
}
