import React, { Component } from 'react';
import {View, KeyboardAvoidingView, ScrollView} from 'react-native';
import { styles } from './styles';
import {GetUserToken} from '../../components/Auth';
import {getConventionFeedURL, getConventionFeedPostURL} from '../../utils/API';
import Post from './Post';
import { homeButtonHeader } from '../../utils/Headers';
import { scale } from '../../utils/Scaling';
import Input from './input';

export default class SocialFeed extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const homeButton = homeButtonHeader(navigation);
        return {
          ...homeButton,
          headerTitleStyle: {
            ...navigationOptions.headerTitleStyle,
            fontSize: scale(18)
          },
        };
      }

      
    constructor(props){
        super(props);
        this.state = {
            feed: [],
            readyToPost: true,
            userText: ""
        }

        this.postThatPost = this.postThatPost.bind(this);
        this.getPosts = this.getPosts.bind(this);
    }

    getPosts() {
        GetUserToken
        .then(token => {
            this.setState({token});
            fetch(getConventionFeedURL(this.props.screenProps.apiData))
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.setState({feed: res});
            })
            .catch((err) => {
                console.log(err);
            })
        });
    }

    componentDidMount() {
        this.getPosts();
    }

    postThatPost(text) {
        GetUserToken
        .then(token => {
            this.setState({token});
            fetch(getConventionFeedPostURL(this.props.screenProps.apiData), { 
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    //post: {
                        Text: text
                    //}
                })
            })
            .then((res) => {
                this.setState({readToPost: true});
                if (res.status == 200)
                {
                    return res.json();
                }
                else if (res.status == 401)
                {
                    throw new Error('Unauthorized API Call');
                }
                else
                {
                    console.log(res);
                    throw new Error('API Call failed!');
                }
            })
            .then((res) => {
                console.log(res);
                this.getPosts();
            })
            .catch((err) => {
                console.log(err);
            })
        });
    }

    render()
    {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    {this.state.feed.map((row, index) => {
                        return <Post post={row} key={index}/>
                    })}
                </ScrollView>
                <Input post={this.postThatPost} />
                <View style={{height: 50}}></View>
            </View>)
    }
}
