import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default class Post extends Component {
    render()
    {
        const post = this.props.post;
        return (
            <View>
                <Text>{post.text} by {post.postedBy.displayName}</Text>
                <Text>{post.postedOn}</Text>
            </View>)
    }
}
