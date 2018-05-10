import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableHighlight,
  Alert,

  
} from 'react-native';

export default class ScheduleScreen extends React.Component {

  constructor(props) {
    super(props);

    //this.eventList = this.props.screenProps.apiData.events;

    this.PressText=this.PressText.bind(this);
    this.PressStar=this.PressStar.bind(this);
  }

  PressStar() {
    //Alert.alert('You tapped the button!');
    // if (this.state.filter == 'vendors') {
    //   this.setState({filter: 'featured'});
    // } else {
    //   this.setState({filter: 'vendors'});
    // }
  }

  PressText() {
    this.props.navigation.navigate('Schedule');  
  }


  render() {

    return(
      
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'black'}}>
      <ScrollView> 
        <View style={{flex: 1}}>
          <Image
          style={styles.promoContainer}
          source={require('../Images/PromoSpot.jpg')}/>
        </View>

        {
          eventList
            .filter( (event) => {
              //return event.title.includes('Pinburgh');

              //go into the replayEventTypes array
              //check the name of each eventType in the array
              //if the name == 'featured', return true.
              //otherwise, return false
              
              return event.replayEventTypes.some( (eventType) => {
                return eventType.name == this.props.filter;
              });
            })
            .slice(0, 10)
            .map( (event) => {
              return (
                <EventItem key={event.id} event={event} />
              );
          })

        }
        
      
        
      </ScrollView> 
    </View>      
    );
  }
}

class EventItem extends React.Component {

  render() {
    const event = this.props.event;

    return (
      <View key={event.id} style={[styles.container, {backgroundColor: 'white', }]}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableHighlight onPress={this.PressStar} >
            <View style={styles.starContainer}>            
                <Image style={styles.starbutton}
                source={require('../Images/Star.jpg')} style={[{width: 40, height: 40}, {flexDirection: 'row'},]}/>                            
            </View>
          </TouchableHighlight>   
        </View>       
        <View style={{flex: 4}}>  
          <TouchableHighlight >{/*onPress={this.PressText}>*/}
            <View style={{flex: 1}}>                            
              <Text style={styles.Time}>{event.startTime12 + '-' + event.endTime12}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.Location}>{event.location}</Text>            
            </View>                    
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  

  eventTitle: {
    paddingVertical: 2,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,

  },
  Time: {
    paddingVertical: 2,
    color: '#9ca4ab',
    fontSize: 16,
    
  },
  Location: {
    color: '#9ca4ab',
    fontSize: 16,   
  },

  topText: {
    justifyContent: 'center',
    color: 'blue',
    fontSize: 18,
  },

  container: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: '#9ca4ab',
    flexDirection: 'row',   
    paddingVertical: 5, 
  },

  starContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    paddingLeft: 40,
    alignItems: 'center',   
  },

  starbutton: {
    backgroundColor: '#859a9b',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 20,
    paddingLeft: 40,
    alignItems: 'center',   
  },

  text: {

  },

  textContainer: {
    // width: '50%',
    // borderRadius: 20,
    // padding: 0,
  },

  promoContainer: {  
    width: '100%',
    resizeMode: 'contain',
  },

});

const eventList =
[
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 15,
        "title": "Pinburgh Machine Testing",
        "date": "2017-07-27T00:00:00",
        "startTime": "08:00",
        "endTime": "09:00",
        "description": "Players are permitted to practice on tournament machines and help locate potential problems prior to the tournament beginning.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "ddace281-7876-4e29-b85e-b8c323f2a21c.jpg",
        "startTime12": "08:00 AM",
        "endTime12": "09:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ddace281-7876-4e29-b85e-b8c323f2a21c.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 72,
        "title": "Pinburgh Player Check-in",
        "date": "2017-07-27T00:00:00",
        "startTime": "08:00",
        "endTime": "09:30",
        "description": "Players must report to the Pinburgh desk and Check in.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Pinburgh, Hall B",
        "image": "3c36dd68-ee6c-450f-8675-d9e2641ca9c8.jpg",
        "startTime12": "08:00 AM",
        "endTime12": "09:30 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3c36dd68-ee6c-450f-8675-d9e2641ca9c8.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 2,
                "name": "games",
                "displayName": "Play"
            }
        ],
        "id": 16,
        "title": "Arcade Open",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "01:00",
        "description": "The general admission show floor and arcade inside ReplayFX are open to the public.",
        "extendedDescription": "The ReplayFX Arcade & Video Game Festival will feature the largest public collection of working pinball, arcade, tabletop, and console games anywhere in the solar system, and all games are free to play with the price of admission! Attendees are also invited to attend a series of seminars dedicated to gaming and its associated tech-culture, browse merchandise in the marketplace, watch the world’s greatest pinball wizards compete in the Pinburgh Match-Play Championship, or enjoy a series of fun and wacky daily challenges at no additional cost!  ReplayFX will include multiple live musical performances, a high-energy cosplay contest, inflatable obstacle courses, and more in a show floor packed with over 200,000 square feet of entertainment! ",
        "location": "Hall A, Hall B",
        "image": "97d12c8c-f73e-45a9-aeb5-f38b714d1f8f.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "01:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/97d12c8c-f73e-45a9-aeb5-f38b714d1f8f.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 116,
        "title": "501st Storm Trooper Garrison",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Star Wars Costumes",
        "extendedDescription": "\"...The Legion is an all-volunteer organization formed for the express purpose of bringing together costume enthusiasts under a collective identity within which to operate. The Legion seeks to promote interest in Star Wars through the building and wearing of quality costumes, and to facilitate the use of these costumes for Star Wars-related events as well as contributions to the local community through costumed charity and volunteer work...\"",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 120,
        "title": "Armand's World",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 124,
        "title": "Cap'n Morgan Games",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Retro Video Games",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 128,
        "title": "Comic Wreck",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Buy, Sell, Trade-Comics, Books, Manga & \"stuff\"!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 132,
        "title": "Lularoe Andrea Wittenhagen",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Lularoe is comfortable and beautiful women's clothing with unique designs.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 136,
        "title": "Garner Distributing",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Vintage games and toys.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 140,
        "title": "Time Bomb Toys",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Online designer toy boutique. ",
        "extendedDescription": "Time Bomb Toys is an online designer toy boutique based in Pittsburgh, Pennsylvania. We stock a unique assortment of designer vinyl toys, blind boxes, retro action figures, Halloween masks, and pop culture collectibles.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 144,
        "title": "Warp Zone",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Warp Zone offer cash or trade credit for your video games, toys, and collectables, regardless of whether it’s one item or an entire collection. we also offer video game disc and DVD/blu-ray repair/resurfacing, and a hub for video game system repair and modification.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 148,
        "title": "Miniworld Entertainment",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Miniworld Entertainment where we focus on fun geeky things, like vintage toys, vintage games, vintage trading cards, posters, and jewelry.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 152,
        "title": "Project Pinball",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Project Pinball Charity is an organization that places pinball machines in children’s hospitals to provide recreational relief to patients, family members, and hospital staff. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 156,
        "title": "Game Masters",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pittsburgh's premiere game store! We are family-owned and operated by America's (if not the world's) only blind game store owner. Created with the intent to not only supply games, but to grow a true gaming community and social hub. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 160,
        "title": "GoFigure! Custom FIgures",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Through an intricate process of molding, painting, kit bashing, custom sculpting, and custom sewing, all GoFigure! Custom Action Figures are uniquely crafted by Bryan and Ellie in their lair right here in Pittsburgh’s East End. Each figure is created to specifications that YOU choose, meaning each toy is an absolute one-of-a-kind tiny plastic doppleganger of whoever you want it to resemble. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 164,
        "title": "Coin Taker",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pinball parts and mods",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 168,
        "title": "Double Danger Pinball Accessories",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Double Danger Pinball Accessories is a provider of pinball centric apparel and accessories. It's pinball stuff from pinball players!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 172,
        "title": "Erik Hodson Illustration",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Artist Erik Hodson creator of Melby comics and Chad the Fat Kid.  In addition to his own past work,  Erik is known for his Star Wars cards for Topps and is currently working  other great comic and game projects with a variety writers and creators. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 176,
        "title": "Everyday Geek",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We're an online and convention-based business catering to the pop culture lifestyle!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 180,
        "title": "FarSight Studios",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "FarSight Studios is an independent developer and publisher of multi-platform videogames.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 184,
        "title": "Fudgie Wudgie Jr.",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Gourmet fudge",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 188,
        "title": "Holderman Art Graphics",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Artist, illustrator, and graphic designer for hire. Specialties include posters, illustration, typography, paintings, murals, and logos.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 192,
        "title": "Infirmary Gaming Community",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We travel to conventions, play games together, and create content!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 196,
        "title": "James Settnek Toys and Games",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Video game collector and seller.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 200,
        "title": "Lighted Pinball Mods",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We are manufacturing many original amazing mods, including plasma pop bumpers, lighted speaker panels, glowing instruction cards, over 100 playfield mods, lighted shooter covers and lighted shooter rods.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 204,
        "title": "Looking For Group (LFG)",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 208,
        "title": "LostGamers Studio",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "LostGamers Studio is home to the wild creations of LostGamers Comic's very own Kassie and Jairen - gamers, geeks, otaku, and artists. Our current products include plushies, cosplay accessories, and more! ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 212,
        "title": "Malicious Cosplay",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Cos-maker, seamstress, artist, vlogger, metal head and all around nerd. I like to create things!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 216,
        "title": "Matt3756 (Millenium Magnone)",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Youtuber meet and greet. Claw machines, arcade games, tips and tricks.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 220,
        "title": "Mega Cat Studios",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We are an independent video game development studio with a global team. At our core, we are passionate game developers and artists who seek to create meaningful experiences through our games and services.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 224,
        "title": "Pac-Rats",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Arcade and pop culture magnets, lightboxes, etc.",
        "extendedDescription": "Pac-Rats was born from a love of arcades and a desire to keep their nostalgic appeal alive. Our portfolio spans the arcade and pop culture scene, from classic arcade game signage and light boxes to framed pop culture pieces to retro-themed refrigerator magnets. Our lightboxes are custom made of high-quality materials, and we take great pride in the workmanship of each and every product we make.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 228,
        "title": "Pinball Classics",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "I travel all over the US repairing and delivering games. I carry a large inventory of parts for pinball machines from the 1980's through today's new Stern pinball machines.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 232,
        "title": "PinballSTAR Amusements",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Distributor for Jersey Jack Pinball, Planetary Pinball, Spooky Pinball, VP Cabs, Chicago Gaming",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 236,
        "title": "Pixel Visions",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We feature 3d Perler Bead and sculpture work to fulfill all your nerdy decorating needs.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 240,
        "title": "Plastic Armory Toys",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Vintage games and toys",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 244,
        "title": "Retrocade",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Bar-top arcade machines",
        "extendedDescription": "Rcade specializes in Bar-top arcade machines for your home, office, game room or anywhere. Every one of our arcades comes packed with over 600 of the best classic and new arcade games.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 248,
        "title": "Ramsey Blair Art",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "I am a painter and illustrator influenced by cartoon and comic art as well as classical and abstract forms.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 252,
        "title": "Record Timing",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 257,
        "title": "River Dee Massage",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "A place unlike any other salon or spa.  Feeling your body relaxed helps make your day easier and flow a lot more smoothly.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 261,
        "title": "Temple of Wow!",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 265,
        "title": "TILT Amusements",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pinball for enthusiasts by enthusiasts",
        "extendedDescription": "TILT Amusements is the #1 resource for pinball enthusiasts, venue managers and home pinball seekers to browse, buy, troubleshoot and find out more about pinball machines. Whether you maintain a fleet of machines across multiple states or are looking to purchase your first pinball for your family, TILT is delighted to help. We're owned and operated by pinball enthusiasts, we love pinball, and we want to cultivate that enthusiasm in other people.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 269,
        "title": "Tiltcycle",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Upcycled pinball pop street art",
        "extendedDescription": "My work evokes nostalgia and reminds you of a joyful past. Combining the old with the new, it directs your attention to long forgotten beauty now slated for the landfill. My mission is to preserve and rescue and to leave a legacy of beauty revived. Through the repurpose of broken and discarded materials, I challenge the viewer to focus on the details and in doing so reassign their value to art.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 273,
        "title": "Toonbrian",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We specialize in the art of Caricatures, Face Paint, Henna, and more.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 277,
        "title": "Toontown Rewritten",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Toontown Rewritten is a community revival of Disney's retired multiplayer online game, Toontown Online.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 284,
        "title": "WeCloneU",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "360 Full Body Scans & 3D Printed Portraits ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 288,
        "title": "Wither Studios",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Independent game developer of Crowman and Wolf Boy",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 292,
        "title": "Yatta Creations",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Yatta Creations brings everything you love to life in bead form. See your favorite characters from anime, comics, and gaming rendered in geometrically perfect bead mosaics. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 296,
        "title": "Zombies and Toys",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Our mission is to provide a one-stop place to find the latest news about the undead.  Collectibles, media and the walking dead.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 300,
        "title": "Extra Life Guild",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Extra Life unites thousands of players around the world in a 24 hour gaming marathon to support Children's Miracle Network Hospitals. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 305,
        "title": "Snow Phoenix",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Bringing you Japanese arcades at a whole new level.",
        "extendedDescription": "Snow Phoenix is a brand new mobile arcade from Columbus bringing some of the latest and greatest Japanese arcade games straight from Japan itself to events near you! For the past year we’ve been providing games to events like Ohayocon and MAGFest in our quest for world domination through arcades. We’re still working on the world domination part, but at least we’re having fun doing it!",
        "location": "Vendor",
        "image": "3fea23dd-c337-462f-b9e7-25f47dd7bb52.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3fea23dd-c337-462f-b9e7-25f47dd7bb52.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 281,
        "title": "Wandering Muse",
        "date": "2017-07-27T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Original drawings that are 22\" x 30\", charcoal on cotton fiber paper",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 17,
        "title": "Replay World Champ... Qualifying",
        "date": "2017-07-27T00:00:00",
        "startTime": "10:00",
        "endTime": "00:00",
        "description": "Tournament machines used for the Replay World Championship will be available for qualifying attempts.",
        "extendedDescription": "The Replay World Championship is a 3-day classic arcade tournament with a guaranteed prize pool of over $4,000. The winner of the tournament will be anointed the World Champion of Classic Arcade Games by the Replay Foundation until the tournament takes place again the following year.  Every attendee of ReplayFX will be permitted to play three games in the Replay World Championship for free. Following these three attempts, a single $25 entry fee will earn players 47 additional attempts with which to achieve their highest possible scores across multiple classic arcade titles. The 50 total attempts may be divided by players in whatever fashion they feel offers them the best strategic opportunity to qualify for the final rounds. Players will not be permitted to purchase additional qualifying attempts at any time.",
        "location": "Hall A, RWC Stage",
        "image": "0b6456b5-3054-4fec-a0f8-f06351b5b950.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0b6456b5-3054-4fec-a0f8-f06351b5b950.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 18,
        "title": "Pinburgh - Round 1",
        "date": "2017-07-27T00:00:00",
        "startTime": "10:00",
        "endTime": "12:00",
        "description": "Round 1 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "1f2e2192-8d1c-40a3-b8a1-cf06b87edf75.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "12:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1f2e2192-8d1c-40a3-b8a1-cf06b87edf75.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 102,
        "title": "Katamari Damacy Competition",
        "date": "2017-07-27T00:00:00",
        "startTime": "10:00",
        "endTime": "17:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "234e8eca-1c71-47f0-8bb5-1129f7bcdebf.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/234e8eca-1c71-47f0-8bb5-1129f7bcdebf.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 19,
        "title": "Art & Audio Challenge",
        "date": "2017-07-27T00:00:00",
        "startTime": "12:00",
        "endTime": "18:00",
        "description": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines.  The first player to buzz in with the correct answer wins!",
        "extendedDescription": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines. The first player to buzz in with the correct answer wins!",
        "location": "Hall A, Daily Challenge",
        "image": "7448d720-a1db-45d9-99e7-9bb9942d0908.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7448d720-a1db-45d9-99e7-9bb9942d0908.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 20,
        "title": "Mini Duck Hunt Challenge",
        "date": "2017-07-27T00:00:00",
        "startTime": "12:00",
        "endTime": "18:00",
        "description": "Classic NES Duck Hunt on a 4inch TV screen from 10ft away.  Good Luck!",
        "extendedDescription": "Classic NES Duck Hunt on a 4inch TV screen from 10ft away. Visit the Daily Challenge area inside Hall A for more information!",
        "location": "Hall A, Daily Challenge",
        "image": "8f076621-abd4-4078-ad01-0e3587668abc.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8f076621-abd4-4078-ad01-0e3587668abc.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 21,
        "title": "Pinburgh - Round 2",
        "date": "2017-07-27T00:00:00",
        "startTime": "12:15",
        "endTime": "14:15",
        "description": "Round 2 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "84a0fc9d-a7c1-442f-8a64-5eec2fcc1be2.jpg",
        "startTime12": "12:15 PM",
        "endTime12": "02:15 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/84a0fc9d-a7c1-442f-8a64-5eec2fcc1be2.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 22,
        "title": "Pinburgh - Round 3",
        "date": "2017-07-27T00:00:00",
        "startTime": "14:30",
        "endTime": "16:30",
        "description": "Round 3 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "450f564d-7618-4ec5-8cb3-f5509f7f704d.jpg",
        "startTime12": "02:30 PM",
        "endTime12": "04:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/450f564d-7618-4ec5-8cb3-f5509f7f704d.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 103,
        "title": "Gran Turismo Competition",
        "date": "2017-07-27T00:00:00",
        "startTime": "16:00",
        "endTime": "18:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "accc2073-0d55-4f2a-a95b-f0db7754ab80.jpg",
        "startTime12": "04:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/accc2073-0d55-4f2a-a95b-f0db7754ab80.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 104,
        "title": "Guitar Hero 2 Competition",
        "date": "2017-07-27T00:00:00",
        "startTime": "17:00",
        "endTime": "00:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "cb6632d3-bfda-489c-ab62-66417e6fe6dc.jpg",
        "startTime12": "05:00 PM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cb6632d3-bfda-489c-ab62-66417e6fe6dc.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 24,
        "title": "Pinburgh - Round 4",
        "date": "2017-07-27T00:00:00",
        "startTime": "18:15",
        "endTime": "20:15",
        "description": "Round 4 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "7ca88287-1f65-47d5-9fe3-2d3dd751689b.jpg",
        "startTime12": "06:15 PM",
        "endTime12": "08:15 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7ca88287-1f65-47d5-9fe3-2d3dd751689b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 77,
        "title": "Tricky Towers Stress Competition",
        "date": "2017-07-27T00:00:00",
        "startTime": "19:00",
        "endTime": "21:00",
        "description": "We can't call this a tournament because this game is about 99% stress and 5% Tetris. Tricky Towers is friendly for new comers and old hands alike, especially because no one has heard of it before. Trust us.",
        "extendedDescription": "We can't call this a tournament because this game is about 99% stress and 5% Tetris. Tricky Towers is friendly for new comers and old hands alike, especially because no one has heard of it before. Trust us. Cash prizes and swag for the top competitors!",
        "location": "LFG Tournament Stage",
        "image": "0fd4c97d-4bf8-4258-9bc9-4b3ad05e1b7a.jpeg",
        "startTime12": "07:00 PM",
        "endTime12": "09:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0fd4c97d-4bf8-4258-9bc9-4b3ad05e1b7a.jpeg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            }
        ],
        "id": 25,
        "title": "Prize Raffle",
        "date": "2017-07-27T00:00:00",
        "startTime": "20:00",
        "endTime": "20:30",
        "description": "Numbers are drawn for the daily prize raffles.  The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the evening.",
        "extendedDescription": "Numbers are drawn for the daily prize raffles. The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the evening.",
        "location": "Concourse, Info Desk",
        "image": "b762c683-6d4f-4876-8d69-b04f65b3d7f0.jpg",
        "startTime12": "08:00 PM",
        "endTime12": "08:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b762c683-6d4f-4876-8d69-b04f65b3d7f0.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 26,
        "title": "Pinburgh - Round 5",
        "date": "2017-07-27T00:00:00",
        "startTime": "20:30",
        "endTime": "22:30",
        "description": "Round 5 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "b727fa48-20c3-413a-911a-a7e1195b7bed.jpg",
        "startTime12": "08:30 PM",
        "endTime12": "10:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b727fa48-20c3-413a-911a-a7e1195b7bed.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 76,
        "title": "Guilty Gear Xrd Rev 2 Tournament",
        "date": "2017-07-27T00:00:00",
        "startTime": "21:00",
        "endTime": "23:00",
        "description": "The latest in the Guilty Gear series. Play in our tournament to win cash and prizes!",
        "extendedDescription": "One of the best 2D fighters in now in 3D. Speed that puts Street Fighter to shame, join in our Guilty Gear Xrd Rev 2 Tournament and play for cash prizes and LFG swag.",
        "location": "LFG Tournament Stage",
        "image": "68661832-7f2d-4ae4-93a4-40430dff9671.jpg",
        "startTime12": "09:00 PM",
        "endTime12": "11:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/68661832-7f2d-4ae4-93a4-40430dff9671.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 105,
        "title": "NES Pro Wrestling Competition",
        "date": "2017-07-27T00:00:00",
        "startTime": "22:00",
        "endTime": "00:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "f5c458c5-378b-4b21-8620-e96928bdc016.jpg",
        "startTime12": "10:00 PM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f5c458c5-378b-4b21-8620-e96928bdc016.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 2,
                "name": "games",
                "displayName": "Play"
            }
        ],
        "id": 27,
        "title": "Arcade Open",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "01:00",
        "description": "The general admission show floor and arcade inside ReplayFX are open to the public.",
        "extendedDescription": "The ReplayFX Arcade & Video Game Festival will feature the largest public collection of working pinball, arcade, tabletop, and console games anywhere in the solar system, and all games are free to play with the price of admission! Attendees are also invited to attend a series of seminars dedicated to gaming and its associated tech-culture, browse merchandise in the marketplace, watch the world’s greatest pinball wizards compete in the Pinburgh Match-Play Championship, or enjoy a series of fun and wacky daily challenges at no additional cost!  ReplayFX will include multiple live musical performances, a high-energy cosplay contest, inflatable obstacle courses, and more in a show floor packed with over 200,000 square feet of entertainment! ",
        "location": "Hall A, Hall B",
        "image": "096c91cd-c8fa-4ef4-b415-c622c9c02fd8.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "01:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/096c91cd-c8fa-4ef4-b415-c622c9c02fd8.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 169,
        "title": "Double Danger Pinball Accessories",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Double Danger Pinball Accessories is a provider of pinball centric apparel and accessories. It's pinball stuff from pinball players!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 165,
        "title": "Coin Taker",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pinball parts and mods",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 161,
        "title": "GoFigure! Custom Figures",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Through an intricate process of molding, painting, kit bashing, custom sculpting, and custom sewing, all GoFigure! Custom Action Figures are uniquely crafted by Bryan and Ellie in their lair right here in Pittsburgh’s East End. Each figure is created to specifications that YOU choose, meaning each toy is an absolute one-of-a-kind tiny plastic doppleganger of whoever you want it to resemble. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 157,
        "title": "Game Masters",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pittsburgh's premiere game store! We are family-owned and operated by America's (if not the world's) only blind game store owner. Created with the intent to not only supply games, but to grow a true gaming community and social hub. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 153,
        "title": "Project Pinball",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Project Pinball Charity is an organization that places pinball machines in children’s hospitals to provide recreational relief to patients, family members, and hospital staff. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 149,
        "title": "Miniworld Entertainment",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Miniworld Entertainment where we focus on fun geeky things, like vintage toys, vintage games, vintage trading cards, posters, and jewelry.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 145,
        "title": "Warp Zone",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Warp Zone offer cash or trade credit for your video games, toys, and collectables, regardless of whether it’s one item or an entire collection. we also offer video game disc and DVD/blu-ray repair/resurfacing, and a hub for video game system repair and modification.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 141,
        "title": "Time Bomb Toys",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Online designer toy boutique",
        "extendedDescription": "Time Bomb Toys is an online designer toy boutique based in Pittsburgh, Pennsylvania. We stock a unique assortment of designer vinyl toys, blind boxes, retro action figures, Halloween masks, and pop culture collectibles.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 137,
        "title": "Garner Distributing",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Vintage games and toys.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 133,
        "title": "Lularoe Andrea Wittenhagen",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Lularoe is comfortable and beautiful women's clothing with unique designs",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 129,
        "title": "Comic Wreck",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Buy, Sell, Trade-Comics, Books, Manga & \"stuff\"!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 125,
        "title": "Cap'n Morgan Games",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Retro Video Games",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 121,
        "title": "Armand's World",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 117,
        "title": "501st Storm Trooper Garrison",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Star Wars Costumes",
        "extendedDescription": "\"...The Legion is an all-volunteer organization formed for the express purpose of bringing together costume enthusiasts under a collective identity within which to operate. The Legion seeks to promote interest in Star Wars through the building and wearing of quality costumes, and to facilitate the use of these costumes for Star Wars-related events as well as contributions to the local community through costumed charity and volunteer work...\"",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 301,
        "title": "Extra Life Guild",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Extra Life unites thousands of players around the world in a 24 hour gaming marathon to support Children's Miracle Network Hospitals. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 297,
        "title": "Zombies and Toys",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Our mission is to provide a one-stop place to find the latest news about the undead.  Collectibles, media and the walking dead.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 293,
        "title": "Yatta Creations",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Yatta Creations brings everything you love to life in bead form. See your favorite characters from anime, comics, and gaming rendered in geometrically perfect bead mosaics. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 289,
        "title": "Wither Studios",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Independent game developer of Crowman and Wolf Boy",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 285,
        "title": "WeCloneU",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "360 Full Body Scans & 3D Printed Portraits ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 278,
        "title": "Toontown Rewritten",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Toontown Rewritten is a community revival of Disney's retired multiplayer online game, Toontown Online.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 274,
        "title": "Toonbrian",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We specialize in the art of Caricatures, Face Paint, Henna, and more.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 270,
        "title": "Tiltcycle",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Upcycled pinball pop street art",
        "extendedDescription": "My work evokes nostalgia and reminds you of a joyful past. Combining the old with the new, it directs your attention to long forgotten beauty now slated for the landfill. My mission is to preserve and rescue and to leave a legacy of beauty revived. Through the repurpose of broken and discarded materials, I challenge the viewer to focus on the details and in doing so reassign their value to art.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 266,
        "title": "TILT Amusements",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pinball for enthusiasts by enthusiasts",
        "extendedDescription": "TILT Amusements is the #1 resource for pinball enthusiasts, venue managers and home pinball seekers to browse, buy, troubleshoot and find out more about pinball machines. Whether you maintain a fleet of machines across multiple states or are looking to purchase your first pinball for your family, TILT is delighted to help. We're owned and operated by pinball enthusiasts, we love pinball, and we want to cultivate that enthusiasm in other people.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 262,
        "title": "Temple of Wow!",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 258,
        "title": "River Dee Massage",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "A place unlike any other salon or spa.  Feeling your body relaxed helps make your day easier and flow a lot more smoothly.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 254,
        "title": "Record Timing",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 249,
        "title": "Ramsey Blair Art",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "I am a painter and illustrator influenced by cartoon and comic art as well as classical and abstract forms.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 245,
        "title": "Retrocade",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Bar-top arcade machines",
        "extendedDescription": "Rcade specializes in Bar-top arcade machines for your home, office, game room or anywhere. Every one of our arcades comes packed with over 600 of the best classic and new arcade games.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 241,
        "title": "Plastic Armory Toys",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Vintage games and toys",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 237,
        "title": "Pixel Visions",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We feature 3d Perler Bead and sculpture work to fulfill all your nerdy decorating needs.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 233,
        "title": "PinballSTAR Amusements",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Distributor for Jersey Jack Pinball, Planetary Pinball, Spooky Pinball, VP Cabs, Chicago Gaming",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 229,
        "title": "Pinball Classics",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "I travel all over the US repairing and delivering games. I carry a large inventory of parts for pinball machines from the 1980's through today's new Stern pinball machines.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 225,
        "title": "Pac-Rats",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Arcade and pop culture magnets, lightboxes, etc.",
        "extendedDescription": "Pac-Rats was born from a love of arcades and a desire to keep their nostalgic appeal alive. Our portfolio spans the arcade and pop culture scene, from classic arcade game signage and light boxes to framed pop culture pieces to retro-themed refrigerator magnets. Our lightboxes are custom made of high-quality materials, and we take great pride in the workmanship of each and every product we make.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 221,
        "title": "Mega Cat Studios",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We are an independent video game development studio with a global team. At our core, we are passionate game developers and artists who seek to create meaningful experiences through our games and services.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 217,
        "title": "Matt3756 (Millenium Magnone)",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Youtuber meet and greet. Claw machines, arcade games, tips and tricks.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 213,
        "title": "Malicious Cosplay",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Cos-maker, seamstress, artist, vlogger, metal head and all around nerd. I like to create things!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 209,
        "title": "LostGamers Studio",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "LostGamers Studio is home to the wild creations of LostGamers Comic's very own Kassie and Jairen - gamers, geeks, otaku, and artists. Our current products include plushies, cosplay accessories, and more! ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 205,
        "title": "Looking For Group (LFG)",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 201,
        "title": "Lighted Pinball Mods",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We are manufacturing many original amazing mods, including plasma pop bumpers, lighted speaker panels, glowing instruction cards, over 100 playfield mods, lighted shooter covers and lighted shooter rods.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 197,
        "title": "James Settnek Toys and Games",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Video game collector and seller.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 193,
        "title": "Infirmary Gaming Community",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We travel to conventions, play games together, and create content!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 189,
        "title": "Holderman Art Graphics",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Artist, illustrator, and graphic designer for hire. Specialties include posters, illustration, typography, paintings, murals, and logos.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 185,
        "title": "Fudgie Wudgie Jr.",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Gourmet fudge",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 181,
        "title": "FarSight Studios",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "FarSight Studios is an independent developer and publisher of multi-platform videogames.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 177,
        "title": "Everyday Geek",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We're an online and convention based business catering to the pop culture lifestyle!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 173,
        "title": "Erik Hodson Illustrations",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Artist Erik Hodson creator of Melby comics and Chad the Fat Kid.  In addition to his own past work,  Erik is known for his Star Wars cards for Topps and is currently working  other great comic and game projects with a variety writers and creators. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 282,
        "title": "Wandering Muse",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Original drawings that are 22\" x 30\", charcoal on cotton fiber paper",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 306,
        "title": "Snow Phoenix",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Bringing you Japanese arcades at a whole new level.",
        "extendedDescription": "Snow Phoenix is a brand new mobile arcade from Columbus bringing some of the latest and greatest Japanese arcade games straight from Japan itself to events near you! For the past year we’ve been providing games to events like Ohayocon and MAGFest in our quest for world domination through arcades. We’re still working on the world domination part, but at least we’re having fun doing it!",
        "location": "Vendor",
        "image": "d6c0f94b-07ca-4a7d-a925-bd7a00fb0322.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d6c0f94b-07ca-4a7d-a925-bd7a00fb0322.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 28,
        "title": "Pinburgh Player Check-in",
        "date": "2017-07-28T00:00:00",
        "startTime": "09:30",
        "endTime": "10:00",
        "description": "All Pinburgh players must check in at the Pinburgh tournament desk in order to participate.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "24fe4940-fe89-430d-aa16-0c8b5ff0ab9d.jpg",
        "startTime12": "09:30 AM",
        "endTime12": "10:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/24fe4940-fe89-430d-aa16-0c8b5ff0ab9d.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 29,
        "title": "Replay World Champ... Qualifying",
        "date": "2017-07-28T00:00:00",
        "startTime": "10:00",
        "endTime": "00:00",
        "description": "Tournament machines used for the Replay World Championship will be available for qualifying attempts.",
        "extendedDescription": "The Replay World Championship is a 3-day classic arcade tournament with a guaranteed prize pool of over $4,000. The winner of the tournament will be anointed the World Champion of Classic Arcade Games by the Replay Foundation until the tournament takes place again the following year.  Every attendee of ReplayFX will be permitted to play three games in the Replay World Championship for free. Following these three attempts, a single $25 entry fee will earn players 47 additional attempts with which to achieve their highest possible scores across multiple classic arcade titles. The 50 total attempts may be divided by players in whatever fashion they feel offers them the best strategic opportunity to qualify for the final rounds. Players will not be permitted to purchase additional qualifying attempts at any time.",
        "location": "Hall A, RWC Stage",
        "image": "cf2e18de-2e14-4b36-aeb4-1ec49c410295.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cf2e18de-2e14-4b36-aeb4-1ec49c410295.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 30,
        "title": "Pinburgh - Round 6",
        "date": "2017-07-28T00:00:00",
        "startTime": "10:00",
        "endTime": "12:00",
        "description": "Round 6 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "48d1af3e-0c3f-4e26-93b4-4700cfa3a540.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "12:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/48d1af3e-0c3f-4e26-93b4-4700cfa3a540.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 106,
        "title": "Musha High Score Competition",
        "date": "2017-07-28T00:00:00",
        "startTime": "10:00",
        "endTime": "17:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "3cee5e25-2101-46ef-8d90-42689b5fcb5e.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3cee5e25-2101-46ef-8d90-42689b5fcb5e.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 112,
        "title": "ReplayRx",
        "date": "2017-07-28T00:00:00",
        "startTime": "10:00",
        "endTime": "22:00",
        "description": "Join us for a Dr. Mario Tournament in the Console Lounge!",
        "extendedDescription": "In 1990, Nintendo capitalized on the runaway success of Tetris by releasing Dr. Mario. The two games were similar in that randomized puzzle pieces fell from the top of a narrow playfield and had to be strategically placed by the player to succeed. Dr. Mario differed from Tetris by changing the dynamic of player vs the game to player vs player. Rather than strictly focusing on levels and points, the goal while playing Dr. Mario is to be the first player to clear his or her playfield of dancing viruses. Players can also affect one another’s games pulling off combination chains, which slow opponent progress. ReplayRx intends to bring together Dr. Mario players from throughout the galaxy to determine who is the best!",
        "location": "Console Lounge",
        "image": "7bf16b2d-7009-4c22-9b10-2db6f5620c54.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "10:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7bf16b2d-7009-4c22-9b10-2db6f5620c54.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 31,
        "title": "Art & Audio Challenge",
        "date": "2017-07-28T00:00:00",
        "startTime": "12:00",
        "endTime": "18:00",
        "description": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines.  The first player to buzz in with the correct answer wins!",
        "extendedDescription": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines. The first player to buzz in with the correct answer wins!",
        "location": "Hall A, Daily Challenge",
        "image": "95a6a6ff-c61b-49c2-a6a1-6ad08a169544.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/95a6a6ff-c61b-49c2-a6a1-6ad08a169544.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 32,
        "title": "Attack from the Back",
        "date": "2017-07-28T00:00:00",
        "startTime": "12:00",
        "endTime": "18:00",
        "description": "Pinball in reverse!  Flipper buttons are located behind the game.",
        "extendedDescription": "Pinball in reverse! Flipper buttons are located behind the game.  Visit the Daily Challenge area inside Hall A for more information!",
        "location": "Hall A, Daily Challenge",
        "image": "3ad754bc-0a49-4e99-ba58-3dfb0cc826a4.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3ad754bc-0a49-4e99-ba58-3dfb0cc826a4.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 33,
        "title": "Pinburgh - Round 7",
        "date": "2017-07-28T00:00:00",
        "startTime": "12:15",
        "endTime": "14:15",
        "description": "Round 7 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "9754a3d9-be0a-4dd6-8efe-66dfb3a1997e.jpg",
        "startTime12": "12:15 PM",
        "endTime12": "02:15 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9754a3d9-be0a-4dd6-8efe-66dfb3a1997e.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 34,
        "title": "Pinburgh - Round 8",
        "date": "2017-07-28T00:00:00",
        "startTime": "14:30",
        "endTime": "16:30",
        "description": "Round 8 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "332b0f1d-b7d0-4518-9b41-20d97996edf5.jpg",
        "startTime12": "02:30 PM",
        "endTime12": "04:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/332b0f1d-b7d0-4518-9b41-20d97996edf5.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 93,
        "title": "Seminar - Toontown",
        "date": "2017-07-28T00:00:00",
        "startTime": "15:30",
        "endTime": "16:30",
        "description": "The annual celebration of all things Toontown!",
        "extendedDescription": "The annual celebration of all things Toontown is right here at ReplayFX! Get an exclusive look at upcoming content from the Toontown Rewritten Team, and hear from gaming industry experts Jesse Schell and Shawn Patton from the Pittsburgh-based entertainment studio, Schell Games. Stop by our booth to find out if you have what it takes to be “Toon Enough”!",
        "location": "4th Floor Auditorium",
        "image": "e56c9c0a-432f-4b41-b997-910fda4fbd45.png",
        "startTime12": "03:30 PM",
        "endTime12": "04:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e56c9c0a-432f-4b41-b997-910fda4fbd45.png"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 107,
        "title": "NBA Jam 2 on 2 Competition",
        "date": "2017-07-28T00:00:00",
        "startTime": "16:00",
        "endTime": "18:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "7803c7c5-9ea8-439f-ac20-c97a258a8b2e.jpg",
        "startTime12": "04:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7803c7c5-9ea8-439f-ac20-c97a258a8b2e.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 79,
        "title": "Ultimate Chicken Horse",
        "date": "2017-07-28T00:00:00",
        "startTime": "16:00",
        "endTime": "18:00",
        "description": "It's like Mario but you get to put things in everyone else's way. Cash and prizes to the survivors of this tournament.",
        "extendedDescription": "It's like Mario but you get to put things in everyone else's way. Cash and prizes to the survivors of this tournament.",
        "location": "LFG Tournament Stage",
        "image": "aa387faa-64b6-4538-bd3d-e2f35dc0b3de.png",
        "startTime12": "04:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/aa387faa-64b6-4538-bd3d-e2f35dc0b3de.png"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 108,
        "title": "\"Evil\" Space Invaders",
        "date": "2017-07-28T00:00:00",
        "startTime": "17:00",
        "endTime": "00:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "5808f485-3de6-4cd9-9ab8-041b3ca83fb3.jpg",
        "startTime12": "05:00 PM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5808f485-3de6-4cd9-9ab8-041b3ca83fb3.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 94,
        "title": "Seminar - Super Nintendo CD Prototype",
        "date": "2017-07-28T00:00:00",
        "startTime": "18:00",
        "endTime": "19:00",
        "description": "Terry Diebold discusses the story behind his Super Nintendo CD Prototype",
        "extendedDescription": "In November 2015, it was reported that one of the original Nintendo PlayStation prototypes had been found. The prototype was reportedly left behind by former Sony Interactive Entertainment CEO Ólafur Jóhann Ólafsson during his time at Advanta. A former Advanta worker, Terry Diebold, acquired the device as part of a lot during Advanta’s 2009 bankruptcy auction. The system was later confirmed as operational and the unit plays Super Famicom cartridges as well the test cartridge that accompanied the unit, although the audio output and CD drive were non-functional.  Terry Diebold will be offering a seminar at ReplayFX to discuss, in depth, the story behind this amazing piece of console gaming history.",
        "location": "Hall B Concourse",
        "image": "e08d2c9b-8e1a-4232-a744-9acb909e9a61.jpg",
        "startTime12": "06:00 PM",
        "endTime12": "07:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e08d2c9b-8e1a-4232-a744-9acb909e9a61.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 92,
        "title": "Super Thrash Bros.",
        "date": "2017-07-28T00:00:00",
        "startTime": "18:00",
        "endTime": "19:00",
        "description": "Super Thrash Bros. perform on the music stage inside Hall A!",
        "extendedDescription": "Super Thrash Bros. perform on the music stage inside Hall A!",
        "location": "Hall A, Music Stage",
        "image": "e95ef416-1069-40ee-8f2b-17f23fa0f8f1.jpg",
        "startTime12": "06:00 PM",
        "endTime12": "07:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e95ef416-1069-40ee-8f2b-17f23fa0f8f1.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 36,
        "title": "Pinburgh - Round 9",
        "date": "2017-07-28T00:00:00",
        "startTime": "18:15",
        "endTime": "20:15",
        "description": "Round 9 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "434a48f9-3ca0-4acb-8d24-5f61f4886170.jpg",
        "startTime12": "06:15 PM",
        "endTime12": "08:15 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/434a48f9-3ca0-4acb-8d24-5f61f4886170.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 75,
        "title": "Tekken 7 Tournament",
        "date": "2017-07-28T00:00:00",
        "startTime": "19:00",
        "endTime": "21:00",
        "description": "Join in the King of the Iron Fist tournament to see who is best. A minimum of $200 goes to the winner!",
        "extendedDescription": "Join in the King of the Iron Fist tournament to see who is best. A minimum of $200 goes to the winner! If we reach 32 competitors, we'll be doubling the pot and paying out up to 3rd place. Games will be run on PC and PS4 (if extra stations are needed). Feel free to bring a HitBox or any other USB/PC safe stick. We will have a few controllers available for use as well.",
        "location": "LFG Tournament Stage",
        "image": "341e780b-81ad-41aa-bbd0-21053d69185a.jpg",
        "startTime12": "07:00 PM",
        "endTime12": "09:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/341e780b-81ad-41aa-bbd0-21053d69185a.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 37,
        "title": "Triforce Quartet",
        "date": "2017-07-28T00:00:00",
        "startTime": "19:30",
        "endTime": "20:30",
        "description": "The Triforce Quartet is a traditional string quartet that plays video game music. Cellist Chad Schwartz was able to combine his love for video games, along with years of classical training, to arrange a variety of video game themes that even non-gamers can enjoy.",
        "extendedDescription": "Cellist Chad Schwartz was able to combine his love for video games, along with years of classical training, to arrange a variety of video game themes that even non-gamers can enjoy.",
        "location": "Hall A, Music Stage",
        "image": "8473f18f-30bc-4670-9ab4-e9e4c5360524.png",
        "startTime12": "07:30 PM",
        "endTime12": "08:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8473f18f-30bc-4670-9ab4-e9e4c5360524.png"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            }
        ],
        "id": 38,
        "title": "Prize Raffle",
        "date": "2017-07-28T00:00:00",
        "startTime": "20:00",
        "endTime": "20:30",
        "description": "Numbers are drawn for the daily prize raffles. The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the evening.",
        "extendedDescription": "Numbers are drawn for the daily prize raffles. The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the evening.",
        "location": "Concourse, Info Desk",
        "image": "08a088d2-7c2b-4235-b96a-7f443af5b06b.jpg",
        "startTime12": "08:00 PM",
        "endTime12": "08:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/08a088d2-7c2b-4235-b96a-7f443af5b06b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 39,
        "title": "Pinburgh - Round 10",
        "date": "2017-07-28T00:00:00",
        "startTime": "20:30",
        "endTime": "22:30",
        "description": "Round 10 of Pinburgh commences.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "9f5fd924-a5af-4d19-857f-4f0a4e4da62b.jpg",
        "startTime12": "08:30 PM",
        "endTime12": "10:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9f5fd924-a5af-4d19-857f-4f0a4e4da62b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 40,
        "title": "Bit Brigade",
        "date": "2017-07-28T00:00:00",
        "startTime": "21:00",
        "endTime": "23:00",
        "description": "“The word “play” is probably an understatement- these guys shred through the games as expertly as the band wails on their instruments.” -Nintendo Power (6/06)",
        "extendedDescription": "When Bit Brigade rolls into town, the gamer elite hang up the controller for the evening and see a rock show. With unprecedented attention to detail and post-rock bombast, Bit Brigade meticulously replicates every musical cue, cutscene and boss battle in perfect syncronization with master gamer Noah McCarthy’s inspiring speed-trial run of each level. Composed of members of roadwarrior (both stateside and abroad) mathrock bands Cinemechanica and We Versus The Shark, Bit Brigade elevates game music to its proper place in the foreground of epic technical rock and plays the games like they don’t need the extra lives. Which, for the record, they don’t.",
        "location": "Hall A, Music Stage",
        "image": "5b619e09-a160-45ed-861a-3bfe97349950.jpg",
        "startTime12": "09:00 PM",
        "endTime12": "11:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5b619e09-a160-45ed-861a-3bfe97349950.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 41,
        "title": "Tattoo Assassins Tournament",
        "date": "2017-07-28T00:00:00",
        "startTime": "21:00",
        "endTime": "22:00",
        "description": "Have you ever wanted to compete on the worst fighting game of all time?",
        "extendedDescription": "Tattoo Assassins was considered ground-breaking in its use of high-powered moves, such as farting your opponent to death or shooting laser beams out of your nether regions. This arcade machine was never mass produced, but we are (un?)lucky enough to have two working prototypes that will be on display for the general public. ",
        "location": "Hall A, Daily Challenge",
        "image": "86ff1ba3-c94f-474b-b43d-d57ebdd6eaef.jpg",
        "startTime12": "09:00 PM",
        "endTime12": "10:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/86ff1ba3-c94f-474b-b43d-d57ebdd6eaef.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 78,
        "title": "Duck Game Tournament",
        "date": "2017-07-28T00:00:00",
        "startTime": "21:00",
        "endTime": "23:00",
        "description": "One of two returning tournaments from last year. The fastest duck on the draw wins. Practice all day Thursday and Friday and join us for a great Friday Night Tournament.",
        "extendedDescription": "One of two returning tournaments from last year. The fastest duck on the draw wins. Practice all day Thursday and Friday and join us for a great Friday Night Tournament. Winners will get cash and prizes and the knowledge that they are truly the king of ducks.",
        "location": "LFG Tournament Stage",
        "image": "01ad0f19-5e25-4e39-8f07-74f4e2818ae8.jpg",
        "startTime12": "09:00 PM",
        "endTime12": "11:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/01ad0f19-5e25-4e39-8f07-74f4e2818ae8.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 109,
        "title": "Halo: Combat Evolved 4 on 4",
        "date": "2017-07-28T00:00:00",
        "startTime": "22:00",
        "endTime": "00:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "4f61c471-bc8a-4dc9-a350-b9b366682c30.jpg",
        "startTime12": "10:00 PM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4f61c471-bc8a-4dc9-a350-b9b366682c30.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 42,
        "title": "Pinburgh Tiebreakers",
        "date": "2017-07-28T00:00:00",
        "startTime": "22:45",
        "endTime": "23:45",
        "description": "Tiebreakers to determine finalists for each of the major Pinburgh divisions.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "5b511375-afb2-43bb-8e84-289ee6b6650b.jpg",
        "startTime12": "10:45 PM",
        "endTime12": "11:45 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5b511375-afb2-43bb-8e84-289ee6b6650b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 2,
                "name": "games",
                "displayName": "Play"
            }
        ],
        "id": 44,
        "title": "Arcade Open",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "02:00",
        "description": "The general admission show floor and arcade inside ReplayFX are open to the public.",
        "extendedDescription": "The ReplayFX Arcade & Video Game Festival will feature the largest public collection of working pinball, arcade, tabletop, and console games anywhere in the solar system, and all games are free to play with the price of admission! Attendees are also invited to attend a series of seminars dedicated to gaming and its associated tech-culture, browse merchandise in the marketplace, watch the world’s greatest pinball wizards compete in the Pinburgh Match-Play Championship, or enjoy a series of fun and wacky daily challenges at no additional cost!  ReplayFX will include multiple live musical performances, a high-energy cosplay contest, inflatable obstacle courses, and more in a show floor packed with over 200,000 square feet of entertainment! ",
        "location": "Hall A, Hall B",
        "image": "c2dd62f1-017b-4bd2-a1fb-f02331e733cb.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "02:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c2dd62f1-017b-4bd2-a1fb-f02331e733cb.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 45,
        "title": "Pinburgh Final Rounds Check-in",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "09:25",
        "description": "Players are required to check-in at their respective final round locations.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "31e97807-fd2e-4a24-9184-1fa16877cfeb.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "09:25 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/31e97807-fd2e-4a24-9184-1fa16877cfeb.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 118,
        "title": "501st Storm Trooper Garrison",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Star Wars Costumes",
        "extendedDescription": "\"...The Legion is an all-volunteer organization formed for the express purpose of bringing together costume enthusiasts under a collective identity within which to operate. The Legion seeks to promote interest in Star Wars through the building and wearing of quality costumes, and to facilitate the use of these costumes for Star Wars-related events as well as contributions to the local community through costumed charity and volunteer work...\"",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 122,
        "title": "Armand's World",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 126,
        "title": "Cap'n Morgan Games",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Retro Video Games",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 130,
        "title": "Comic Wreck",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Buy, Sell, Trade-Comics, Books, Manga & \"stuff\"!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 134,
        "title": "Lularoe Andrea Wittenhagen",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Lularoe is comfortable and beautiful women's clothing with unique designs.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 138,
        "title": "Garner Distributing",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Vintage games and toys.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 142,
        "title": "Time Bomb Toys",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Online designer toy boutique",
        "extendedDescription": "Time Bomb Toys is an online designer toy boutique based in Pittsburgh, Pennsylvania. We stock a unique assortment of designer vinyl toys, blind boxes, retro action figures, Halloween masks, and pop culture collectibles.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 146,
        "title": "Warp Zone",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Warp Zone offer cash or trade credit for your video games, toys, and collectables, regardless of whether it’s one item or an entire collection. we also offer video game disc and DVD/blu-ray repair/resurfacing, and a hub for video game system repair and modification.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 150,
        "title": "Miniworld Entertainment",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Miniworld Entertainment where we focus on fun geeky things, like vintage toys, vintage games, vintage trading cards, posters, and jewelry.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 154,
        "title": "Project Pinball",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Project Pinball Charity is an organization that places pinball machines in children’s hospitals to provide recreational relief to patients, family members, and hospital staff. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 158,
        "title": "Game Masters",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pittsburgh's premiere game store! We are family-owned and operated by America's (if not the world's) only blind game store owner. Created with the intent to not only supply games, but to grow a true gaming community and social hub. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 162,
        "title": "GoFigure! Custom Figures",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Through an intricate process of molding, painting, kit bashing, custom sculpting, and custom sewing, all GoFigure! Custom Action Figures are uniquely crafted by Bryan and Ellie in their lair right here in Pittsburgh’s East End. Each figure is created to specifications that YOU choose, meaning each toy is an absolute one-of-a-kind tiny plastic doppleganger of whoever you want it to resemble. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 166,
        "title": "Coin Taker",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pinball parts and mods",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 170,
        "title": "Double Danger Pinball Accessories",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Double Danger Pinball Accessories is a provider of pinball centric apparel and accessories. It's pinball stuff from pinball players!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 174,
        "title": "Erik Hodson Illustrations",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Artist Erik Hodson creator of Melby comics and Chad the Fat Kid.  In addition to his own past work,  Erik is known for his Star Wars cards for Topps and is currently working  other great comic and game projects with a variety writers and creators. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 178,
        "title": "Everyday Geek",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We're an online and convention based business catering to the pop culture lifestyle!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 182,
        "title": "FarSight Studios",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "FarSight Studios is an independent developer and publisher of multi-platform videogames.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 186,
        "title": "Fudgie Wudgie Jr.",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Gourmet fudge",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 190,
        "title": "Holderman Art Graphics",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Artist, illustrator, and graphic designer for hire. Specialties include posters, illustration, typography, paintings, murals, and logos.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 194,
        "title": "Infirmary Gaming Community",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We travel to conventions, play games together, and create content!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 198,
        "title": "James Settnek Toys and Games",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Video game collector and seller.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 202,
        "title": "Lighted Pinball Mods",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We are manufacturing many original amazing mods, including plasma pop bumpers, lighted speaker panels, glowing instruction cards, over 100 playfield mods, lighted shooter covers and lighted shooter rods.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 206,
        "title": "Looking For Group (LFG)",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 210,
        "title": "LostGamers Studio",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "LostGamers Studio is home to the wild creations of LostGamers Comic's very own Kassie and Jairen - gamers, geeks, otaku, and artists. Our current products include plushies, cosplay accessories, and more! ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 214,
        "title": "Malicious Cosplay",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Cos-maker, seamstress, artist, vlogger, metal head and all around nerd. I like to create things!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 218,
        "title": "Matt3756 (Millenium Magnone)",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Youtuber meet and greet. Claw machines, arcade games, tips and tricks.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 222,
        "title": "Mega Cat Studios",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We are an independent video game development studio with a global team. At our core, we are passionate game developers and artists who seek to create meaningful experiences through our games and services.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 226,
        "title": "Pac-Rats",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Arcade and pop culture magnets, lightboxes, etc.",
        "extendedDescription": "Pac-Rats was born from a love of arcades and a desire to keep their nostalgic appeal alive. Our portfolio spans the arcade and pop culture scene, from classic arcade game signage and light boxes to framed pop culture pieces to retro-themed refrigerator magnets. Our lightboxes are custom made of high-quality materials, and we take great pride in the workmanship of each and every product we make.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 230,
        "title": "Pinball Classics",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "I travel all over the US repairing and delivering games. I carry a large inventory of parts for pinball machines from the 1980's through today's new Stern pinball machines.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 234,
        "title": "PinballSTAR Amusements",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Distributor for Jersey Jack Pinball, Planetary Pinball, Spooky Pinball, VP Cabs, Chicago Gaming",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 238,
        "title": "Pixel Visions",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We feature 3d Perler Bead and sculpture work to fulfill all your nerdy decorating needs.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 242,
        "title": "Plastic Armory Toys",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Vintage games and toys",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 246,
        "title": "Retrocade",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Bar-top arcade machines",
        "extendedDescription": "Rcade specializes in Bar-top arcade machines for your home, office, game room or anywhere. Every one of our arcades comes packed with over 600 of the best classic and new arcade games.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 250,
        "title": "Ramsey Blair Art",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "I am a painter and illustrator influenced by cartoon and comic art as well as classical and abstract forms.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 255,
        "title": "Record Timing",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 259,
        "title": "River Dee Massage",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "A place unlike any other salon or spa.  Feeling your body relaxed helps make your day easier and flow a lot more smoothly.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 263,
        "title": "Temple of Wow!",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 267,
        "title": "TILT Amusements",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Pinball for enthusiasts by enthusiasts",
        "extendedDescription": "TILT Amusements is the #1 resource for pinball enthusiasts, venue managers and home pinball seekers to browse, buy, troubleshoot and find out more about pinball machines. Whether you maintain a fleet of machines across multiple states or are looking to purchase your first pinball for your family, TILT is delighted to help. We're owned and operated by pinball enthusiasts, we love pinball, and we want to cultivate that enthusiasm in other people.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 271,
        "title": "Tiltcycle",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Upcycled pinball pop street art",
        "extendedDescription": "My work evokes nostalgia and reminds you of a joyful past. Combining the old with the new, it directs your attention to long forgotten beauty now slated for the landfill. My mission is to preserve and rescue and to leave a legacy of beauty revived. Through the repurpose of broken and discarded materials, I challenge the viewer to focus on the details and in doing so reassign their value to art.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 275,
        "title": "Toonbrian",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "We specialize in the art of Caricatures, Face Paint, Henna, and more.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 279,
        "title": "Toontown Rewritten",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Toontown Rewritten is a community revival of Disney's retired multiplayer online game, Toontown Online.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 286,
        "title": "WeCloneU",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "360 Full Body Scans & 3D Printed Portraits ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 290,
        "title": "Wither Studios",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Independent game developer of Crowman and Wolf Boy",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 294,
        "title": "Yatta Creations",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Yatta Creations brings everything you love to life in bead form. See your favorite characters from anime, comics, and gaming rendered in geometrically perfect bead mosaics. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 298,
        "title": "Zombies and Toys",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Our mission is to provide a one-stop place to find the latest news about the undead.  Collectibles, media and the walking dead.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 302,
        "title": "Extra Life Guild",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Extra Life unites thousands of players around the world in a 24 hour gaming marathon to support Children's Miracle Network Hospitals. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 307,
        "title": "Snow Phoenix",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Bringing you Japanese arcades at a whole new level.",
        "extendedDescription": "Snow Phoenix is a brand new mobile arcade from Columbus bringing some of the latest and greatest Japanese arcade games straight from Japan itself to events near you! For the past year we’ve been providing games to events like Ohayocon and MAGFest in our quest for world domination through arcades. We’re still working on the world domination part, but at least we’re having fun doing it!",
        "location": "Vendor",
        "image": "6ec2eea8-dd1b-4b81-95dc-653d8f40fce4.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6ec2eea8-dd1b-4b81-95dc-653d8f40fce4.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 304,
        "title": "Wandering Muse",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:00",
        "endTime": "00:00",
        "description": "Original drawings that are 22\" x 30\", charcoal on cotton fiber paper",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "12:00 AM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 46,
        "title": "Pinburgh Final Rounds Begin",
        "date": "2017-07-29T00:00:00",
        "startTime": "09:30",
        "endTime": "22:00",
        "description": "The final rounds of the Pinburgh pinball tournament begin.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "06de8799-375b-4e24-a585-336516d97505.jpg",
        "startTime12": "09:30 AM",
        "endTime12": "10:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/06de8799-375b-4e24-a585-336516d97505.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 47,
        "title": "Intergalactic Pinball Champ... - Reg. & Qual.",
        "date": "2017-07-29T00:00:00",
        "startTime": "10:00",
        "endTime": "17:00",
        "description": "Registration and qualifying for the IPC tournament.",
        "extendedDescription": "In addition to the much larger Pinburgh Match-Play Pinball Championship, ReplayFX includes a second WPPR-eligible pinball tournament open to all players. This tournament has been structured in a way to give anyone who desires more competitive pinball during the ReplayFX weekend a chance to continue playing, and also as a way to solicit donations for a group of charities hand-picked by the Replay Foundation staff. The tournament format will be Limited Best Game.  In exchange for a $10 donation toward one of the charities listed below, each player will receive 10 tickets, with each ticket representing one game on a qualifying machine. Players may not purchase additional tickets, which makes this tournament “limited” when compared to other Best Game or “Herb”-style pinball tournaments. The available qualifying bank will consist of 12 pinball machines drawn from all eras.",
        "location": "Hall B, IPC Area",
        "image": "2ce89738-7905-4b74-b348-bb47d7223a6e.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2ce89738-7905-4b74-b348-bb47d7223a6e.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 48,
        "title": "Replay World Champ... Qualifying",
        "date": "2017-07-29T00:00:00",
        "startTime": "10:00",
        "endTime": "17:30",
        "description": "Tournament machines used for the Replay World Championship will be available for qualifying attempts.",
        "extendedDescription": "The Replay World Championship is a 3-day classic arcade tournament with a guaranteed prize pool of over $4,000. The winner of the tournament will be anointed the World Champion of Classic Arcade Games by the Replay Foundation until the tournament takes place again the following year.  Every attendee of ReplayFX will be permitted to play three games in the Replay World Championship for free. Following these three attempts, a single $25 entry fee will earn players 47 additional attempts with which to achieve their highest possible scores across multiple classic arcade titles. The 50 total attempts may be divided by players in whatever fashion they feel offers them the best strategic opportunity to qualify for the final rounds. Players will not be permitted to purchase additional qualifying attempts at any time.",
        "location": "Hall A, RWC Stage",
        "image": "2b6b7347-ec56-414c-af07-54db8eab43e6.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "05:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2b6b7347-ec56-414c-af07-54db8eab43e6.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 110,
        "title": "NES Track & Field Competition",
        "date": "2017-07-29T00:00:00",
        "startTime": "10:00",
        "endTime": "14:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "efa92963-e274-40a5-9836-9ec993ba62e1.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "02:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/efa92963-e274-40a5-9836-9ec993ba62e1.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 113,
        "title": "ReplayRx",
        "date": "2017-07-29T00:00:00",
        "startTime": "10:00",
        "endTime": "22:00",
        "description": "Join us for a Dr. Mario Tournament in the Console Lounge!",
        "extendedDescription": "In 1990, Nintendo capitalized on the runaway success of Tetris by releasing Dr. Mario. The two games were similar in that randomized puzzle pieces fell from the top of a narrow playfield and had to be strategically placed by the player to succeed. Dr. Mario differed from Tetris by changing the dynamic of player vs the game to player vs player. Rather than strictly focusing on levels and points, the goal while playing Dr. Mario is to be the first player to clear his or her playfield of dancing viruses. Players can also affect one another’s games pulling off combination chains, which slow opponent progress. ReplayRx intends to bring together Dr. Mario players from throughout the galaxy to determine who is the best!",
        "location": "Console Lounge",
        "image": "5fad43d3-7f1f-4ec8-853d-574f603fe01b.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "10:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5fad43d3-7f1f-4ec8-853d-574f603fe01b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 85,
        "title": "Battle High 2 A+ Tournament",
        "date": "2017-07-29T00:00:00",
        "startTime": "12:00",
        "endTime": "13:00",
        "description": "Fight in a school themed fighting tournament that was made in Pittsburgh. Meet the developer and win some cool swag and cash in the tournament. Free copies of Battle High and more prizes available!",
        "extendedDescription": "Fight in a school themed fighting tournament that was made in Pittsburgh. Meet the developer and win some cool swag and cash in the tournament. Free copies of Battle High and more prizes available!",
        "location": "LFG Tournament Stage",
        "image": "1ba12915-db2b-4175-b1c8-c69940b0c71b.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "01:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1ba12915-db2b-4175-b1c8-c69940b0c71b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 49,
        "title": "Art & Audio Challenge",
        "date": "2017-07-29T00:00:00",
        "startTime": "12:00",
        "endTime": "18:00",
        "description": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines. The first player to buzz in with the correct answer wins!",
        "extendedDescription": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines. The first player to buzz in with the correct answer wins!",
        "location": "Hall A, Daily Challenge",
        "image": "8f40b9d9-34f3-46e5-9ae9-1214ff3ce811.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8f40b9d9-34f3-46e5-9ae9-1214ff3ce811.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 50,
        "title": "Blindfolded Team Ms. Pac-man",
        "date": "2017-07-29T00:00:00",
        "startTime": "12:00",
        "endTime": "18:00",
        "description": "Two players will team up to play the turbo version of the arcade classic Ms. Pac-Man. ",
        "extendedDescription": "One team member will be tasked with controlling the game while blindfolded. The second team member will instruct the first with verbal cues on where to move. At no point will the blindfolded player be permitted to look at the video game’s screen. At no point will the second, non blind-folded player, be permitted to touch the controls.  Visit the Daily Challenge area inside Hall A for more information!",
        "location": "Hall A, Daily Challenge",
        "image": "98b5f779-1e06-4c53-8716-7c9b9ad0c040.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/98b5f779-1e06-4c53-8716-7c9b9ad0c040.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 91,
        "title": "Inverse Phase",
        "date": "2017-07-29T00:00:00",
        "startTime": "13:00",
        "endTime": "14:00",
        "description": "Inverse Phase performs on the music stage inside Hall A.",
        "extendedDescription": "Inverse Phase performs on the music stage inside Hall A.",
        "location": "Hall A, Music Stage",
        "image": "0c33dd90-692d-43ff-aa4d-158fedaceaf9.jpg",
        "startTime12": "01:00 PM",
        "endTime12": "02:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0c33dd90-692d-43ff-aa4d-158fedaceaf9.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 95,
        "title": "Seminar - Toontown",
        "date": "2017-07-29T00:00:00",
        "startTime": "13:30",
        "endTime": "14:30",
        "description": "MMO Development with the Toontown team",
        "extendedDescription": "Running a Massively Multiplayer Online Game is no easy task — but that didn’t stop this team of volunteers. Learn what Toontown is all about and what makes the game thrive, featuring a Q&A session with the Toontown Team to answer questions from Friday’s panel.",
        "location": "4th Floor Auditorium",
        "image": "3ed068b0-ba44-465d-b718-cbf9ec4cbed4.png",
        "startTime12": "01:30 PM",
        "endTime12": "02:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3ed068b0-ba44-465d-b718-cbf9ec4cbed4.png"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 111,
        "title": "Yar's Revenge Competition",
        "date": "2017-07-29T00:00:00",
        "startTime": "14:00",
        "endTime": "00:00",
        "description": "ReplayFX Console Lounge Tournament Series!",
        "extendedDescription": "A series of retro and modern console competitions spanning the entire ReplayFX weekend! For more information, visit the Console Lounge desk and tell them you want to participate!",
        "location": "Console Lounge",
        "image": "f1ae7ac5-8f71-4647-9ee8-9c5779998d36.jpg",
        "startTime12": "02:00 PM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f1ae7ac5-8f71-4647-9ee8-9c5779998d36.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 84,
        "title": "Made in Pittsburgh Tournaments",
        "date": "2017-07-29T00:00:00",
        "startTime": "14:00",
        "endTime": "16:00",
        "description": "Come see and play games made by local Pittsburgh developers.  Beach Stompers, the winner of the ReplayFX Game Jam will be putting up $100 to the winner.",
        "extendedDescription": "Play games made at the ReplayFX and LFG Game Jam. Win $100 by coming in first place at Beach Stompers, the winner of the game jam. Then stay and prove your might as the best Black Hole Bullet player in the universe.",
        "location": "LFG Tournament Stage",
        "image": "1b37a1ae-f271-481c-8d5f-32a22d979cf9.jpg",
        "startTime12": "02:00 PM",
        "endTime12": "04:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1b37a1ae-f271-481c-8d5f-32a22d979cf9.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 51,
        "title": "Cosplay Contest Prejudging",
        "date": "2017-07-29T00:00:00",
        "startTime": "14:00",
        "endTime": "16:00",
        "description": "All cosplay contestants show off their outfits to the contest judges.",
        "extendedDescription": "Attendees, humanoid or otherwise, are encouraged to wear costumes of their favorite character during the ReplayFX Arcade & Gaming Festival! All cosplayers are encouraged to have fun, be fun, and dress fun! And if you’re going to dress up and show off your stuff on the festival floor, you may as well reserve a spot in our cosplay contest, which will award over $4,000 in cash and prizes! So break out your best Mario, Marty McFly, or Samus Aran, and get ready to strut through those doors in style!",
        "location": "Third Floor Concourse",
        "image": "68882dff-29da-41eb-a04d-ba4dbcfb4e6b.jpg",
        "startTime12": "02:00 PM",
        "endTime12": "04:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/68882dff-29da-41eb-a04d-ba4dbcfb4e6b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 96,
        "title": "Seminar - Jeffrey Wittenhagen",
        "date": "2017-07-29T00:00:00",
        "startTime": "14:45",
        "endTime": "15:45",
        "description": "Jeffrey’s seminar at ReplayFX will focus on his experiences with classic console gaming in addition to his numerous books and projects.",
        "extendedDescription": "Jeffrey Wittenhagen is a gaming author who has been published in Pixel Nation, NES-Bit, Retrogaming Times Monthly, and Nintendo Force (the predecessor to Nintendo Power)! More recently, Jeffrey has produced “The Complete NES: The Ultimate NES Collector’s Book”, a 300+ page volume detailing the artwork, characters, and descriptions of every NES game ever made. Coming soon, Jeffrey will be producing a similar collector volume detailing all aspects of the Super Nintendo.",
        "location": "Hall B Concourse",
        "image": "517b2308-ebea-42af-b4eb-dcbc186a14e8.jpg",
        "startTime12": "02:45 PM",
        "endTime12": "03:45 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/517b2308-ebea-42af-b4eb-dcbc186a14e8.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 90,
        "title": "Mad Gear",
        "date": "2017-07-29T00:00:00",
        "startTime": "15:00",
        "endTime": "16:00",
        "description": "Mad Gear performs on the music stage inside Hall A!",
        "extendedDescription": "Mad Gear performs on the music stage inside Hall A!",
        "location": "Hall A, Music Stage",
        "image": "5daafcde-6dd5-45aa-883b-59b5ed88cdd4.jpg",
        "startTime12": "03:00 PM",
        "endTime12": "04:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5daafcde-6dd5-45aa-883b-59b5ed88cdd4.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 97,
        "title": "Seminar - Classic Game Room",
        "date": "2017-07-29T00:00:00",
        "startTime": "16:00",
        "endTime": "17:00",
        "description": "Mark Bussler discusses his plans to rule the world",
        "extendedDescription": "Mark Bussler, producer and host of the Classic Game Room video game review show, talks about where video games came from, where they are and where they’re going. Mark knows the answers, and if he doesn’t, he’ll make something up about it. Followed by a Q&A. Ask questions about CGR, Mark’s comic books or the El Camino.",
        "location": "Hall B Concourse",
        "image": "1a36b1a7-5298-4a3e-bae0-b21fa28ce094.jpg",
        "startTime12": "04:00 PM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1a36b1a7-5298-4a3e-bae0-b21fa28ce094.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 83,
        "title": "Nidhogg Tournament",
        "date": "2017-07-29T00:00:00",
        "startTime": "16:00",
        "endTime": "17:00",
        "description": "Can you throw yourself to the Nidhogg before your opponent? If so, you can win $50 at this tournament.",
        "extendedDescription": "An intense battle of tug of war mixed with fencing. Last year, the Nidhogg tournament was intense and this year, we'll make it even better. Come to the LFG booth early to practice and be ready to win $50. ",
        "location": "LFG Tournament Stage",
        "image": "1f785b08-6fd2-45ca-9479-11f370cc05c0.jpg",
        "startTime12": "04:00 PM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1f785b08-6fd2-45ca-9479-11f370cc05c0.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 81,
        "title": "Mario Kart 8 Deluxe Tournament",
        "date": "2017-07-29T00:00:00",
        "startTime": "17:00",
        "endTime": "20:00",
        "description": "Think you've got the blue sparks and blue shell that it takes to take 1st place in Mario Kart? Take home our premiere cash prize.",
        "extendedDescription": "Think you've got the blue sparks and blue shell that it takes to take 1st place in Mario Kart? Take home our premiere cash prize.",
        "location": "LFG Tournament Stage",
        "image": "5dbd3c78-48ac-4680-b5f1-a4690ebb8d07.jpg",
        "startTime12": "05:00 PM",
        "endTime12": "08:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5dbd3c78-48ac-4680-b5f1-a4690ebb8d07.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 68,
        "title": "Intergalactic Pinball Champ... - Qual. Break",
        "date": "2017-07-29T00:00:00",
        "startTime": "17:00",
        "endTime": "21:00",
        "description": "Qualifying for the IPC halts until the semi-final and final rounds of Pinburgh finish.",
        "extendedDescription": "In addition to the much larger Pinburgh Match-Play Pinball Championship, ReplayFX includes a second WPPR-eligible pinball tournament open to all players. This tournament has been structured in a way to give anyone who desires more competitive pinball during the ReplayFX weekend a chance to continue playing, and also as a way to solicit donations for a group of charities hand-picked by the Replay Foundation staff. The tournament format will be Limited Best Game.  In exchange for a $10 donation toward one of the charities listed below, each player will receive 10 tickets, with each ticket representing one game on a qualifying machine. Players may not purchase additional tickets, which makes this tournament “limited” when compared to other Best Game or “Herb”-style pinball tournaments. The available qualifying bank will consist of 12 pinball machines drawn from all eras.",
        "location": "Hall B, IPC Area",
        "image": "508736a3-da93-4f8d-8f7e-161448cbe2b6.jpg",
        "startTime12": "05:00 PM",
        "endTime12": "09:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/508736a3-da93-4f8d-8f7e-161448cbe2b6.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 52,
        "title": "Cosplay Contest",
        "date": "2017-07-29T00:00:00",
        "startTime": "17:00",
        "endTime": "17:30",
        "description": "Cosplay contestants show off their talents on the main stage!",
        "extendedDescription": "Attendees, humanoid or otherwise, are encouraged to wear costumes of their favorite character during the ReplayFX Arcade & Gaming Festival! All cosplayers are encouraged to have fun, be fun, and dress fun! And if you’re going to dress up and show off your stuff on the festival floor, you may as well reserve a spot in our cosplay contest, which will award over $4,000 in cash and prizes! So break out your best Mario, Marty McFly, or Samus Aran, and get ready to strut through those doors in style!",
        "location": "Hall A, Music Stage",
        "image": "1c74c2bb-270e-41a6-942e-c56d0d239ca6.jpg",
        "startTime12": "05:00 PM",
        "endTime12": "05:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1c74c2bb-270e-41a6-942e-c56d0d239ca6.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 53,
        "title": "Pinburgh Division A Semifinal Round Begins",
        "date": "2017-07-29T00:00:00",
        "startTime": "17:00",
        "endTime": "22:00",
        "description": "The semifinal and final rounds of Pinburgh's top division commence on the Pinburgh stage.",
        "extendedDescription": "The Pinburgh Match-Play Championship, a PAPA event sponsored by pair Networks Inc., is the largest pinball tournament in the world, featuring 305 pinball machines and 800 players battling the silverball over three days (Thurs – Sat) of competition. Pinburgh will offer plaques for all of the top finishers in each division and a guaranteed $100,000 prize pool.  Pinburgh’s match-play format offers a social experience as players from all over the world compare skills during a series of multiplayer matches spanning the first two days. On Thursday, each player will compete in five rounds, each consisting of four, four-player matches to determine the appropriate skill division for all players. Divisions will be marked as A / B / C / D, with Division A being the most skilled. On Friday, players will compete against other players solely within their own skill division in order to determine seeding for the final rounds. On Saturday, the top 40 in each division will compete in separate divisional finals.",
        "location": "Hall B, Pinburgh",
        "image": "e109eb78-693d-47cd-8361-e1b340d25dad.jpg",
        "startTime12": "05:00 PM",
        "endTime12": "10:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e109eb78-693d-47cd-8361-e1b340d25dad.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 98,
        "title": "Seminar - FarSight Studios",
        "date": "2017-07-29T00:00:00",
        "startTime": "17:15",
        "endTime": "18:15",
        "description": "Sit down with popular game developer FarSight Studios",
        "extendedDescription": "FarSight Studios is an independent developer and publisher of multi-platform videogames. FarSight developed their first game (for the Nintendo Entertainment System) over 25 years ago, and has been making hit games continuously ever since. Located in beautiful Big Bear Lake high up in the mountains of southern California, FarSight’s 8,000 square foot office facility is the home of some of the most talented game developers in the world.  FarSight Studios will be discussing their highly successful Pinball Arcade game alongside other projects.",
        "location": "Hall B Concourse",
        "image": "98bd0c38-b3e1-4ec1-bb22-aba938844a99.jpg",
        "startTime12": "05:15 PM",
        "endTime12": "06:15 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/98bd0c38-b3e1-4ec1-bb22-aba938844a99.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 54,
        "title": "Replay World Champ... Finals Check-in",
        "date": "2017-07-29T00:00:00",
        "startTime": "17:30",
        "endTime": "18:00",
        "description": "All qualified contestants must check-in before starting the final rounds.",
        "extendedDescription": "The Replay World Championship is a 3-day classic arcade tournament with a guaranteed prize pool of over $4,000. The winner of the tournament will be anointed the World Champion of Classic Arcade Games by the Replay Foundation until the tournament takes place again the following year.  Every attendee of ReplayFX will be permitted to play three games in the Replay World Championship for free. Following these three attempts, a single $25 entry fee will earn players 47 additional attempts with which to achieve their highest possible scores across multiple classic arcade titles. The 50 total attempts may be divided by players in whatever fashion they feel offers them the best strategic opportunity to qualify for the final rounds. Players will not be permitted to purchase additional qualifying attempts at any time.",
        "location": "Hall A, RWC Stage",
        "image": "6a80bd49-8eee-49c8-bcfd-2864610dbadd.jpg",
        "startTime12": "05:30 PM",
        "endTime12": "06:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6a80bd49-8eee-49c8-bcfd-2864610dbadd.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 55,
        "title": "Replay World Champ... Final Rounds",
        "date": "2017-07-29T00:00:00",
        "startTime": "18:00",
        "endTime": "02:00",
        "description": "Final Rounds of the Replay World Championship Arcade tournament commence!",
        "extendedDescription": "The Replay World Championship is a 3-day classic arcade tournament with a guaranteed prize pool of over $4,000. The winner of the tournament will be anointed the World Champion of Classic Arcade Games by the Replay Foundation until the tournament takes place again the following year.  Every attendee of ReplayFX will be permitted to play three games in the Replay World Championship for free. Following these three attempts, a single $25 entry fee will earn players 47 additional attempts with which to achieve their highest possible scores across multiple classic arcade titles. The 50 total attempts may be divided by players in whatever fashion they feel offers them the best strategic opportunity to qualify for the final rounds. Players will not be permitted to purchase additional qualifying attempts at any time.",
        "location": "Hall A, RWC Stage",
        "image": "cd0f8437-85a5-4003-99bf-ede02a136616.jpg",
        "startTime12": "06:00 PM",
        "endTime12": "02:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cd0f8437-85a5-4003-99bf-ede02a136616.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 56,
        "title": "Triforce Quartet",
        "date": "2017-07-29T00:00:00",
        "startTime": "18:30",
        "endTime": "19:30",
        "description": "The Triforce Quartet is a traditional string quartet that plays video game music. ",
        "extendedDescription": "Cellist Chad Schwartz was able to combine his love for video games, along with years of classical training, to arrange a variety of video game themes that even non-gamers can enjoy.",
        "location": "Hall A, Music Stage",
        "image": "a9457c50-8272-49bc-9a71-d7dbc9c2df4b.jpg",
        "startTime12": "06:30 PM",
        "endTime12": "07:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a9457c50-8272-49bc-9a71-d7dbc9c2df4b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 99,
        "title": "Seminar - Jersey Jack Pinball",
        "date": "2017-07-29T00:00:00",
        "startTime": "18:30",
        "endTime": "19:30",
        "description": "Jersey Jack discusses his experiences in the pinball industry.",
        "extendedDescription": "Jersey Jack Pinball was founded because of a need that Jack saw in the industry for premium, no-compromise pinball machines. JJP believes games built with passion and games that are fun to play will become treasured for years to come.  Jersey Jack Pinball has produced The Wizard of Oz, The Hobbit, Dialed In!, and have a number of other fast and fun pinball machines on the way.",
        "location": "Hall B Concourse",
        "image": "db8d5169-2f7b-4078-8431-e604e3c18be0.JPG",
        "startTime12": "06:30 PM",
        "endTime12": "07:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/db8d5169-2f7b-4078-8431-e604e3c18be0.JPG"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 100,
        "title": "Seminar - ACAM Presents: Warren Davis",
        "date": "2017-07-29T00:00:00",
        "startTime": "19:45",
        "endTime": "20:45",
        "description": "Notable game designer Warren Davis discusses his history within the gaming industry.",
        "extendedDescription": "Warren Davis spent many years working for Williams, helping to create such games as Joust 2, Terminator 2 and Revolution X. Warren will discuss his years there, working alongside Eugene Jarvis, John Newcomer, Ed Boon, Mark Turmell and others, and creating the video digitization system that allowed actors to be incorporated into games like Mortal Kombat and NBA Jam.  Warren Davis is a former arcade video game developer who worked at such manufacturers as Gottlieb & Midway. Warren’s most popular game was Q*Bert, a quirky & amusing game released by Gottlieb late in 1982. Warren’s laserdisc game, Us Vs. Them, is a popular attraction at ACAM, and attracts huge crowds when ACAM has presented it at game conventions. Combining computer-generated graphics with live-action filmed sequences, the alien invasion-themed Us. Vs. Them is a fantastic example of technology & fun gameplay during the short-lived laserdisc arcade game fad of the mid-1980s.",
        "location": "Hall B Concourse",
        "image": "e1aa9c2a-edc0-4a29-bc65-256e82f7b313.jpg",
        "startTime12": "07:45 PM",
        "endTime12": "08:45 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e1aa9c2a-edc0-4a29-bc65-256e82f7b313.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            }
        ],
        "id": 57,
        "title": "Prize Raffle",
        "date": "2017-07-29T00:00:00",
        "startTime": "20:00",
        "endTime": "20:30",
        "description": "Numbers are drawn for the daily prize raffles. The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the evening.",
        "extendedDescription": "Numbers are drawn for the daily prize raffles. The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the evening.",
        "location": "Concourse, Info Desk",
        "image": "49cefcbe-c8a1-4c6a-83b8-d76b7f0030b4.jpg",
        "startTime12": "08:00 PM",
        "endTime12": "08:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/49cefcbe-c8a1-4c6a-83b8-d76b7f0030b4.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 58,
        "title": "Flashback",
        "date": "2017-07-29T00:00:00",
        "startTime": "20:00",
        "endTime": "22:30",
        "description": "Ripping renditions of popular 70's, 80's and 90's music!",
        "extendedDescription": "Ripping renditions of popular 70's, 80's and 90's music!",
        "location": "Hall A, Music Stage",
        "image": "aafa8222-5870-4192-9845-0026f900a477.jpg",
        "startTime12": "08:00 PM",
        "endTime12": "10:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/aafa8222-5870-4192-9845-0026f900a477.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 101,
        "title": "Seminar - ACAM Presents: Mike Stulir",
        "date": "2017-07-29T00:00:00",
        "startTime": "21:00",
        "endTime": "22:00",
        "description": "From Pong to Pinball - Atari at 45",
        "extendedDescription": "As the company that launched the video game business, Atari was an unbeatable powerhouse in the early days of the industry. On the 45th anniversary of the company, ACAM’s Mike Stulir takes a look at some of their most memorable accomplishments including arcade games, consoles and pinball machines.",
        "location": "Hall B Concourse",
        "image": "2dcf8c69-f47c-4071-a9c8-ee04e4025d4a.jpg",
        "startTime12": "09:00 PM",
        "endTime12": "10:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2dcf8c69-f47c-4071-a9c8-ee04e4025d4a.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 69,
        "title": "Intergalactic Pinball Champ... - Qual. Reopens",
        "date": "2017-07-29T00:00:00",
        "startTime": "21:00",
        "endTime": "01:30",
        "description": "Qualifying reopens for the Intergalactic Pinball Championships.",
        "extendedDescription": "In addition to the much larger Pinburgh Match-Play Pinball Championship, ReplayFX includes a second WPPR-eligible pinball tournament open to all players. This tournament has been structured in a way to give anyone who desires more competitive pinball during the ReplayFX weekend a chance to continue playing, and also as a way to solicit donations for a group of charities hand-picked by the Replay Foundation staff. The tournament format will be Limited Best Game.  In exchange for a $10 donation toward one of the charities listed below, each player will receive 10 tickets, with each ticket representing one game on a qualifying machine. Players may not purchase additional tickets, which makes this tournament “limited” when compared to other Best Game or “Herb”-style pinball tournaments. The available qualifying bank will consist of 12 pinball machines drawn from all eras.",
        "location": "Hall B, IPC Area",
        "image": "c19d8500-570d-4f7f-a81f-7ab4c76d6243.jpg",
        "startTime12": "09:00 PM",
        "endTime12": "01:30 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c19d8500-570d-4f7f-a81f-7ab4c76d6243.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 80,
        "title": "Street Fighter V",
        "date": "2017-07-29T00:00:00",
        "startTime": "21:00",
        "endTime": "23:00",
        "description": "Play Street Fighter V against the best at ReplayFX. Winner takes home $50 and world warrior bragging rights.",
        "extendedDescription": "Play Street Fighter V against the best at ReplayFX. Winner takes home $50 and world warrior bragging rights.",
        "location": "LFG Tournament Stage",
        "image": "ed73f94e-5cf2-4bc1-82f4-9bb8cda1c970.jpg",
        "startTime12": "09:00 PM",
        "endTime12": "11:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ed73f94e-5cf2-4bc1-82f4-9bb8cda1c970.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 59,
        "title": "Dethlehem",
        "date": "2017-07-29T00:00:00",
        "startTime": "23:00",
        "endTime": "00:00",
        "description": "Founded in 2008, Dethlehem is an RPG-inspired heavy metal group that has performed at MagFest and other gaming-related conventions and shows.",
        "extendedDescription": "Founded in 2008, Dethlehem is an RPG-inspired heavy metal group that has performed at MagFest and other gaming-related conventions and shows.",
        "location": "Hall A, Music Stage",
        "image": "71c2a882-7a63-40eb-8ab8-b71ba43bcd7b.jpg",
        "startTime12": "11:00 PM",
        "endTime12": "12:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/71c2a882-7a63-40eb-8ab8-b71ba43bcd7b.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 2,
                "name": "games",
                "displayName": "Play"
            }
        ],
        "id": 60,
        "title": "Arcade Open",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "The general admission show floor and arcade inside ReplayFX are open to the public.",
        "extendedDescription": "The ReplayFX Arcade & Video Game Festival will feature the largest public collection of working pinball, arcade, tabletop, and console games anywhere in the solar system, and all games are free to play with the price of admission! Attendees are also invited to attend a series of seminars dedicated to gaming and its associated tech-culture, browse merchandise in the marketplace, watch the world’s greatest pinball wizards compete in the Pinburgh Match-Play Championship, or enjoy a series of fun and wacky daily challenges at no additional cost!  ReplayFX will include multiple live musical performances, a high-energy cosplay contest, inflatable obstacle courses, and more in a show floor packed with over 200,000 square feet of entertainment! ",
        "location": "Hall A, Hall B",
        "image": "2bfe0977-9be6-4a09-9e33-d9709d55de2c.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2bfe0977-9be6-4a09-9e33-d9709d55de2c.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 61,
        "title": "Intergalactic Pinball Champ... - Finals Check-in",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "09:30",
        "description": "All qualified contestants must check-in before starting the final rounds.",
        "extendedDescription": "In addition to the much larger Pinburgh Match-Play Pinball Championship, ReplayFX includes a second WPPR-eligible pinball tournament open to all players. This tournament has been structured in a way to give anyone who desires more competitive pinball during the ReplayFX weekend a chance to continue playing, and also as a way to solicit donations for a group of charities hand-picked by the Replay Foundation staff. The tournament format will be Limited Best Game.  In exchange for a $10 donation toward one of the charities listed below, each player will receive 10 tickets, with each ticket representing one game on a qualifying machine. Players may not purchase additional tickets, which makes this tournament “limited” when compared to other Best Game or “Herb”-style pinball tournaments. The available qualifying bank will consist of 12 pinball machines drawn from all eras.",
        "location": "Hall B, IPC Area",
        "image": "434bbe2c-0a9f-4126-8248-e1e7be1becb2.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "09:30 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/434bbe2c-0a9f-4126-8248-e1e7be1becb2.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 62,
        "title": "Cornhole Competition Registration",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "09:30",
        "description": "All teams wishing to compete in the cornhole tournament must check-in.",
        "extendedDescription": "Can you throw a bean bag at a hole? If so, you can compete for $500 in prize money!  ReplayFX will feature a bean bag toss competition, also known as cornhole, between two-player teams facing off in a standard head-to-head bracket. Players will alternate turns and throw bags at the opposing boards, which will be placed twenty-seven feet apart at their closest points. Any bean bag that stays on the opposing board will count as one point. Any bean bag that goes through the center hole in the opposing board will count as three points. The first team to score twenty-one points, winning by two or more, will advance in the bracket. The competition is free to enter, and the first-place team will win $300! Second-place will take home $200.",
        "location": "Hall A, Cornhole Area",
        "image": "ed21b8d0-30a1-493e-9b47-d6e095ecabce.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "09:30 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ed21b8d0-30a1-493e-9b47-d6e095ecabce.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 123,
        "title": "Armand's World",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 119,
        "title": "501st Storm Trooper Garrison",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Star Wars Costumes",
        "extendedDescription": "\"...The Legion is an all-volunteer organization formed for the express purpose of bringing together costume enthusiasts under a collective identity within which to operate. The Legion seeks to promote interest in Star Wars through the building and wearing of quality costumes, and to facilitate the use of these costumes for Star Wars-related events as well as contributions to the local community through costumed charity and volunteer work...\"",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 139,
        "title": "Garner Distributing",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Vintage games and toys.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 135,
        "title": "Lularoe Andrea Wittenhagen",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Lularoe is comfortable and beautiful women's clothing with unique designs",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 131,
        "title": "Comic Wreck",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Buy, Sell, Trade-Comics, Books, Manga & \"stuff\"!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 127,
        "title": "Cap'n Morgan Games",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Retro Video Games",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 171,
        "title": "Double Danger Pinball Accessories",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Double Danger Pinball Accessories is a provider of pinball centric apparel and accessories. It's pinball stuff from pinball players!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 167,
        "title": "Coin Taker",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Pinball parts and mods",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 163,
        "title": "GoFIgure! Custom Figures",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Through an intricate process of molding, painting, kit bashing, custom sculpting, and custom sewing, all GoFigure! Custom Action Figures are uniquely crafted by Bryan and Ellie in their lair right here in Pittsburgh’s East End. Each figure is created to specifications that YOU choose, meaning each toy is an absolute one-of-a-kind tiny plastic doppleganger of whoever you want it to resemble. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 159,
        "title": "Game Masters",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Pittsburgh's premiere game store! We are family-owned and operated by America's (if not the world's) only blind game store owner. Created with the intent to not only supply games, but to grow a true gaming community and social hub. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 155,
        "title": "Project Pinball",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Project Pinball Charity is an organization that places pinball machines in children’s hospitals to provide recreational relief to patients, family members, and hospital staff. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 151,
        "title": "Miniworld Entertainment",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Miniworld Entertainment where we focus on fun geeky things, like vintage toys, vintage games, vintage trading cards, posters, and jewelry.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 147,
        "title": "Warp Zone",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Warp Zone offer cash or trade credit for your video games, toys, and collectables, regardless of whether it’s one item or an entire collection. we also offer video game disc and DVD/blu-ray repair/resurfacing, and a hub for video game system repair and modification.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 143,
        "title": "Time Bomb Toys",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Online designer toy boutique",
        "extendedDescription": "Time Bomb Toys is an online designer toy boutique based in Pittsburgh, Pennsylvania. We stock a unique assortment of designer vinyl toys, blind boxes, retro action figures, Halloween masks, and pop culture collectibles.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 303,
        "title": "Extra Life Guild",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Extra Life unites thousands of players around the world in a 24 hour gaming marathon to support Children's Miracle Network Hospitals. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 299,
        "title": "Zombies and Toys",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Our mission is to provide a one-stop place to find the latest news about the undead.  Collectibles, media and the walking dead.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 295,
        "title": "Yatta Creations",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Yatta Creations brings everything you love to life in bead form. See your favorite characters from anime, comics, and gaming rendered in geometrically perfect bead mosaics. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 291,
        "title": "Wither Studios",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Independent game developer of Crowman and Wolf Boy",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 287,
        "title": "WeCloneU",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "360 Full Body Scans & 3D Printed Portraits ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 280,
        "title": "Toontown Rewritten",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Toontown Rewritten is a community revival of Disney's retired multiplayer online game, Toontown Online.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 276,
        "title": "Toonbrian",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "We specialize in the art of Caricatures, Face Paint, Henna, and more.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 272,
        "title": "Tiltcycle",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Upcycled pinball pop street art",
        "extendedDescription": "My work evokes nostalgia and reminds you of a joyful past. Combining the old with the new, it directs your attention to long forgotten beauty now slated for the landfill. My mission is to preserve and rescue and to leave a legacy of beauty revived. Through the repurpose of broken and discarded materials, I challenge the viewer to focus on the details and in doing so reassign their value to art.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 268,
        "title": "TILT Amusements",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Pinball for enthusiasts by enthusiasts",
        "extendedDescription": "TILT Amusements is the #1 resource for pinball enthusiasts, venue managers and home pinball seekers to browse, buy, troubleshoot and find out more about pinball machines. Whether you maintain a fleet of machines across multiple states or are looking to purchase your first pinball for your family, TILT is delighted to help. We're owned and operated by pinball enthusiasts, we love pinball, and we want to cultivate that enthusiasm in other people.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 264,
        "title": "Temple of Wow!",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 260,
        "title": "River Dee Massage",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "A place unlike any other salon or spa.  Feeling your body relaxed helps make your day easier and flow a lot more smoothly.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 256,
        "title": "Record Timing",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 251,
        "title": "Ramsey Blair Art",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "I am a painter and illustrator influenced by cartoon and comic art as well as classical and abstract forms.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 247,
        "title": "Retrocade",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Bar-top arcade machines",
        "extendedDescription": "Rcade specializes in Bar-top arcade machines for your home, office, game room or anywhere. Every one of our arcades comes packed with over 600 of the best classic and new arcade games.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 243,
        "title": "Plastic Armory Toys",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Vintage games and toys",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 239,
        "title": "Pixel Visions",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "We feature 3d Perler Bead and sculpture work to fulfill all your nerdy decorating needs.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 235,
        "title": "PinballSTAR Amusements",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Distributor for Jersey Jack Pinball, Planetary Pinball, Spooky Pinball, VP Cabs, Chicago Gaming",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 231,
        "title": "Pinball Classics",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "I travel all over the US repairing and delivering games. I carry a large inventory of parts for pinball machines from the 1980's through today's new Stern pinball machines.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 227,
        "title": "Pac-Rats",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Arcade and pop culture magnets, lightboxes, etc.",
        "extendedDescription": "Pac-Rats was born from a love of arcades and a desire to keep their nostalgic appeal alive. Our portfolio spans the arcade and pop culture scene, from classic arcade game signage and light boxes to framed pop culture pieces to retro-themed refrigerator magnets. Our lightboxes are custom made of high-quality materials, and we take great pride in the workmanship of each and every product we make.",
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 223,
        "title": "Mega Cat Studios",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "We are an independent video game development studio with a global team. At our core, we are passionate game developers and artists who seek to create meaningful experiences through our games and services.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 219,
        "title": "Matt3756 (Millenium Magnone)",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Youtuber meet and greet. Claw machines, arcade games, tips and tricks.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 215,
        "title": "Malicious Cosplay",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Cos-maker, seamstress, artist, vlogger, metal head and all around nerd. I like to create things!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 211,
        "title": "LostGamers Studio",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "LostGamers Studio is home to the wild creations of LostGamers Comic's very own Kassie and Jairen - gamers, geeks, otaku, and artists. Our current products include plushies, cosplay accessories, and more! ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 207,
        "title": "Looking For Group (LFG)",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": null,
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 203,
        "title": "Lighted Pinball Mods",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "We are manufacturing many original amazing mods, including plasma pop bumpers, lighted speaker panels, glowing instruction cards, over 100 playfield mods, lighted shooter covers and lighted shooter rods.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 199,
        "title": "James Settnek Toys and Games",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Video game collector and seller.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 195,
        "title": "Infirmary Gaming Community",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "We travel to conventions, play games together, and create content!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 191,
        "title": "Holderman Art Graphics",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Artist, illustrator, and graphic designer for hire. Specialties include posters, illustration, typography, paintings, murals, and logos.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 187,
        "title": "Fudgie Wudgie Jr.",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Gourmet fudge",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 183,
        "title": "FarSight Studios",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "FarSight Studios is an independent developer and publisher of multi-platform videogames.",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 179,
        "title": "Everyday Geek",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "We're an online and convention based business catering to the pop culture lifestyle!",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 175,
        "title": "Erik Hodson Illustrations",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Artist Erik Hodson creator of Melby comics and Chad the Fat Kid.  In addition to his own past work,  Erik is known for his Star Wars cards for Topps and is currently working  other great comic and game projects with a variety writers and creators. ",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 283,
        "title": "Wandering Muse",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Original drawings that are 22\" x 30\", charcoal on cotton fiber paper",
        "extendedDescription": null,
        "location": null,
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": null
    },
    {
        "replayEventTypes": [
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 308,
        "title": "Snow Phoenix",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:00",
        "endTime": "17:00",
        "description": "Bringing you Japanese arcades at a whole new level.",
        "extendedDescription": "Snow Phoenix is a brand new mobile arcade from Columbus bringing some of the latest and greatest Japanese arcade games straight from Japan itself to events near you! For the past year we’ve been providing games to events like Ohayocon and MAGFest in our quest for world domination through arcades. We’re still working on the world domination part, but at least we’re having fun doing it!",
        "location": "Vendor",
        "image": "ed15b124-4a02-420e-853b-c8b1fc67c4b4.jpg",
        "startTime12": "09:00 AM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ed15b124-4a02-420e-853b-c8b1fc67c4b4.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 114,
        "title": "ReplayRx",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:30",
        "endTime": "10:00",
        "description": "Check in for ReplayRx Final Rounds!",
        "extendedDescription": "In 1990, Nintendo capitalized on the runaway success of Tetris by releasing Dr. Mario. The two games were similar in that randomized puzzle pieces fell from the top of a narrow playfield and had to be strategically placed by the player to succeed. Dr. Mario differed from Tetris by changing the dynamic of player vs the game to player vs player. Rather than strictly focusing on levels and points, the goal while playing Dr. Mario is to be the first player to clear his or her playfield of dancing viruses. Players can also affect one another’s games pulling off combination chains, which slow opponent progress. ReplayRx intends to bring together Dr. Mario players from throughout the galaxy to determine who is the best!",
        "location": "Console Lounge",
        "image": "c4f756e9-a824-4368-ac69-3b50c5464816.jpg",
        "startTime12": "09:30 AM",
        "endTime12": "10:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c4f756e9-a824-4368-ac69-3b50c5464816.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 63,
        "title": "Cornhole Competition",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:30",
        "endTime": "15:00",
        "description": "Teams of two battle one another in a competition bracket for bean-bag throwing dominance!",
        "extendedDescription": "Can you throw a bean bag at a hole? If so, you can compete for $500 in prize money!  ReplayFX will feature a bean bag toss competition, also known as cornhole, between two-player teams facing off in a standard head-to-head bracket. Players will alternate turns and throw bags at the opposing boards, which will be placed twenty-seven feet apart at their closest points. Any bean bag that stays on the opposing board will count as one point. Any bean bag that goes through the center hole in the opposing board will count as three points. The first team to score twenty-one points, winning by two or more, will advance in the bracket. The competition is free to enter, and the first-place team will win $300! Second-place will take home $200.",
        "location": "Hall A, Cornhole Area",
        "image": "8f56859c-3a68-4c53-9449-e0d8153f8a5d.jpg",
        "startTime12": "09:30 AM",
        "endTime12": "03:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8f56859c-3a68-4c53-9449-e0d8153f8a5d.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 64,
        "title": "Intergalactic Pinball Champ... - Final Round",
        "date": "2017-07-30T00:00:00",
        "startTime": "09:30",
        "endTime": "01:00",
        "description": "Final Rounds of the Intergalactic Pinball Championship commence!",
        "extendedDescription": "In addition to the much larger Pinburgh Match-Play Pinball Championship, ReplayFX includes a second WPPR-eligible pinball tournament open to all players. This tournament has been structured in a way to give anyone who desires more competitive pinball during the ReplayFX weekend a chance to continue playing, and also as a way to solicit donations for a group of charities hand-picked by the Replay Foundation staff. The tournament format will be Limited Best Game.  In exchange for a $10 donation toward one of the charities listed below, each player will receive 10 tickets, with each ticket representing one game on a qualifying machine. Players may not purchase additional tickets, which makes this tournament “limited” when compared to other Best Game or “Herb”-style pinball tournaments. The available qualifying bank will consist of 12 pinball machines drawn from all eras.",
        "location": "Hall B, IPC Area",
        "image": "6534c0b1-f29b-4982-a82e-ea96e1b9057a.jpg",
        "startTime12": "09:30 AM",
        "endTime12": "01:00 AM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6534c0b1-f29b-4982-a82e-ea96e1b9057a.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 115,
        "title": "ReplayRx",
        "date": "2017-07-30T00:00:00",
        "startTime": "10:00",
        "endTime": "15:00",
        "description": "ReplayRx Final Rounds!",
        "extendedDescription": "In 1990, Nintendo capitalized on the runaway success of Tetris by releasing Dr. Mario. The two games were similar in that randomized puzzle pieces fell from the top of a narrow playfield and had to be strategically placed by the player to succeed. Dr. Mario differed from Tetris by changing the dynamic of player vs the game to player vs player. Rather than strictly focusing on levels and points, the goal while playing Dr. Mario is to be the first player to clear his or her playfield of dancing viruses. Players can also affect one another’s games pulling off combination chains, which slow opponent progress. ReplayRx intends to bring together Dr. Mario players from throughout the galaxy to determine who is the best!",
        "location": "Console Lounge",
        "image": "1a0ce50d-a378-4776-91fb-d72f2646435f.jpg",
        "startTime12": "10:00 AM",
        "endTime12": "03:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1a0ce50d-a378-4776-91fb-d72f2646435f.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 65,
        "title": "Art & Audio Challenge",
        "date": "2017-07-30T00:00:00",
        "startTime": "12:00",
        "endTime": "17:00",
        "description": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines. The first player to buzz in with the correct answer wins!",
        "extendedDescription": "A daily competition quizzing players on the sights and sounds of classic video games and pinball machines. The first player to buzz in with the correct answer wins!",
        "location": "Hall A, Daily Challenge",
        "image": "79c8ee86-d220-45b7-a168-28065c8f2d67.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/79c8ee86-d220-45b7-a168-28065c8f2d67.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 7,
                "name": "vendors",
                "displayName": "Shop"
            }
        ],
        "id": 309,
        "title": "The Great Pie Toss!",
        "date": "2017-07-30T00:00:00",
        "startTime": "12:00",
        "endTime": "12:30",
        "description": "Smash a pie in the face of a Toontown staff member!",
        "extendedDescription": "Just like Toons, we love a good old-fashioned pie in the face! Come join the ridiculous fun as people step up to throw pies at the Toontown staff members.  At other events, you can win a ticket to throw a pie!",
        "location": null,
        "image": "77219ffe-602e-490b-b07c-4017a110face.jpg",
        "startTime12": "12:00 PM",
        "endTime12": "12:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/77219ffe-602e-490b-b07c-4017a110face.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            },
            {
                "id": 6,
                "name": "seminar",
                "displayName": "Learn"
            }
        ],
        "id": 88,
        "title": "Seminar - Live Pinball Tutorial",
        "date": "2017-07-30T00:00:00",
        "startTime": "12:30",
        "endTime": "13:30",
        "description": "Bowen Kerins and Andrew Massenkoff offer a live pinball tutorial on the Pinburgh tournament stage.",
        "extendedDescription": "Bowen Kerins and Andrew Massenkoff offer a live pinball tutorial on the Pinburgh tournament stage.",
        "location": "Hall B, Pinburgh Stage",
        "image": "80936c21-a5a5-4147-b5bd-0d27d96ffc7e.jpg",
        "startTime12": "12:30 PM",
        "endTime12": "01:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/80936c21-a5a5-4147-b5bd-0d27d96ffc7e.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 87,
        "title": "Arms Tournament",
        "date": "2017-07-30T00:00:00",
        "startTime": "13:00",
        "endTime": "15:00",
        "description": "Compete in Nintendo's Arms on the Switch and see if you're the best springy armed boxer around. Prizes go to the winner and maybe to the best left hook.",
        "extendedDescription": "Compete in Nintendo's Arms on the Switch and see if you're the best springy armed boxer around. Prizes go to the winner and maybe to the best left hook.",
        "location": "LFG Tournament Stage",
        "image": "c5076066-1086-481d-a0cf-7767407306cd.png",
        "startTime12": "01:00 PM",
        "endTime12": "03:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c5076066-1086-481d-a0cf-7767407306cd.png"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 89,
        "title": "Super Thrash Bros.",
        "date": "2017-07-30T00:00:00",
        "startTime": "14:00",
        "endTime": "15:00",
        "description": "Super Thrash Bros. perform on the music stage in Hall A!",
        "extendedDescription": "Super Thrash Bros. perform on the music stage inside Hall A!",
        "location": "Hall A, Music Stage",
        "image": "e97bd926-e2de-4b7e-9bcb-a6cb34545929.jpg",
        "startTime12": "02:00 PM",
        "endTime12": "03:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e97bd926-e2de-4b7e-9bcb-a6cb34545929.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 3,
                "name": "competitions",
                "displayName": "Compete"
            }
        ],
        "id": 86,
        "title": "Poyo Poyo Tetris Tournament",
        "date": "2017-07-30T00:00:00",
        "startTime": "15:00",
        "endTime": "17:00",
        "description": "Test your might in Poyo Poyo and Tetris at the same time on the Nintendo Switch.",
        "extendedDescription": "Test your might in Poyo Poyo and Tetris at the same time on the Nintendo Switch.",
        "location": "LFG Tournament Stage",
        "image": "cbe247ae-a72c-40f8-b1bb-fe0a166edfd5.jpg",
        "startTime12": "03:00 PM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cbe247ae-a72c-40f8-b1bb-fe0a166edfd5.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            }
        ],
        "id": 66,
        "title": "Prize Raffle",
        "date": "2017-07-30T00:00:00",
        "startTime": "15:00",
        "endTime": "15:30",
        "description": "Numbers are drawn for the daily prize raffles. The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the day.",
        "extendedDescription": "Numbers are drawn for the daily prize raffles. The winning numbers will be posted at the information desk, and all prizes must be picked up by the end of the evening.",
        "location": "Concourse, Info Desk",
        "image": "89791310-56c8-467a-aca5-1f0e6c56c3f7.jpg",
        "startTime12": "03:00 PM",
        "endTime12": "03:30 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/89791310-56c8-467a-aca5-1f0e6c56c3f7.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 1,
                "name": "featured",
                "displayName": "Featured"
            }
        ],
        "id": 67,
        "title": "End of ReplayFX 2017",
        "date": "2017-07-30T00:00:00",
        "startTime": "17:00",
        "endTime": "17:00",
        "description": "So Long... and thanks for all the fish!",
        "extendedDescription": "Don't forget to visit us next year!",
        "location": "Hall A, Hall B",
        "image": "58c3c8d5-1eb4-4ad2-8283-0b28a3b95920.jpg",
        "startTime12": "05:00 PM",
        "endTime12": "05:00 PM",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/58c3c8d5-1eb4-4ad2-8283-0b28a3b95920.jpg"
    },
    {
        "replayEventTypes": [
            {
                "id": 4,
                "name": "music",
                "displayName": "Listen"
            }
        ],
        "id": 310,
        "title": "Test Event",
        "date": "2018-01-03T00:00:00",
        "startTime": "09:00",
        "endTime": "23:00",
        "description": "This is a test description",
        "extendedDescription": "A longer description",
        "location": "Main Hall",
        "image": null,
        "startTime12": "09:00 AM",
        "endTime12": "11:00 PM",
        "imageUrl": null
    }
];