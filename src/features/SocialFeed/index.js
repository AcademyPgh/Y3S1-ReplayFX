import React, { Component } from 'react';
import {View, ScrollView, Text} from 'react-native';
import { styles } from './styles';
import {GetUserToken} from '../../components/Auth';
import {getConventionFeedURL, getConventionFeedPostURL} from '../../utils/API';
import Post from './Post';
import { homeButtonHeader } from '../../utils/Headers';
import { scale } from '../../utils/Scaling';
import Input from './input';
import Spinner from './Spinner';

export default class SocialFeed extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const homeButton = homeButtonHeader(navigation);
        return {
          ...homeButton,
          headerTitleStyle: {
            ...navigationOptions.headerTitleStyle,
            fontSize: scale(25)
          },
        };
      }

      
    constructor(props){
        super(props);
        this.state = {
            feed: [],
            readyToPost: true,
            userText: "",
            loaded: false
        }

        this.postThatPost = this.postThatPost.bind(this);
        this.getPosts = this.getPosts.bind(this);
    }

    getPosts() {
        fetch(getConventionFeedURL(this.props.screenProps.apiData))
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((res) => {
            console.log(res);
            this.setState({feed: res, loaded: true});
        })
        .catch((err) => {
            //setTimeout(this.getPosts, 1000); // this can make it weird/angry
        })
    }

    componentDidMount() {
        this.getPosts();
        let timer = setInterval(this.getPosts, 10000);
        this.setState({timer})
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
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
                this.setState({readyToPost: true});
                console.log(res);
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
                //console.log(res);
                this.getPosts();
            })
            .catch((err) => {
                console.log(err);
            })
        });
    }

    render()
    {
        let posts = null;
        if(this.state.feed.length > 0)
        {
            posts = (<View style={{flex: 1}}>
                <ScrollView style={{backgroundColor: 'whitesmoke'}}>
                    {this.state.feed.map((row, index) => {
                        return <Post post={row} key={index}/>
                    })}
                </ScrollView>
                <Input post={this.postThatPost} />
                <View style={{height: 50}}></View>
            </View>);
        }
        else
        {
            posts = (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Loading social feed...</Text>
                <Spinner size={45} />
                <View style={{height: 50}}></View>
            </View>);
        }
        return posts;
    }
}
