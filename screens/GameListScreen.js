import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TextInput,
  ListView,
  Button,
  TouchableHighlight,
  Alert,
} from 'react-native';


export default class GameListScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      headerRight: (
        <Button onPress={() => {navigation.popToTop()}} title="Home" color="#000" />
      ),
    };
  }

  constructor(props) {
    super(props);

    //this.gameList = this.props.navigation.getParam('gameList');
    this.gameList = gameList;

    this.state = {
      searchFilter: '2001',
    };
  }

  showGameDetails(game) {
    //Alert.alert("You booped game id " + game.id + ":" + game.gameTitle + "!");
    
    this.props.navigation.navigate("PinballDetails", {gameInfo: game});
  }

  render() {
    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

  
    
    return (
      <View style={{
        flex: 1,
      }}>
        <View style={{flex: 1}}>
            <ScrollView>
              <Text>Props: {JSON.stringify(this.props).substr(0, 1000)}</Text>
            </ScrollView>
          </View>
        
        <View style={{
          flex: 1,
          backgroundColor: 'powderblue',
        }}>
          <Image 
          style={styles.stretch}
          source={require('../Images/ArcadeMainPageImage.jpg')}/>
        </View>

  
        <View style={{}}>
          <TextInput
            style={{height: 60, borderColor: '#f3f3f3', backgroundColor: 'white', borderWidth: 12, padding: 5, textDecorationLine: 'none', fontSize: 20, fontFamily: 'Arial', color: 'gray', paddingLeft: 25}}
            placeholder="Search"
            onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 1, fontSize: 42}}>
            </Text>
        </View> 

        <View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>1-9</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>A</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>B</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>C</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>D</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>E</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>F</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>G</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>H</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>I</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>J</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>K</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>L</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>M</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>N</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>O</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>P</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>Q</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>R</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>S</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>T</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>U</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>V</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>W</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>X</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>Y</Text></View>
        <View style={styles.letter}><Text style={styles.scrollLetterText}>Z</Text></View>

      </View>
      </ScrollView>
      </View>

        
        <View style={{
          flex: 4, 
          }}>          

          <ScrollView>
            { this.gameList.filter(game => { return true; }).map(game => {
              return (
                <TouchableHighlight onPress={() => {this.showGameDetails(game)}}>
                  <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>{game.gameTitle}</Text></View>
                </TouchableHighlight>
              );
            })}
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={styles.item1}>My game name3</Text></View>
            <View style={{borderTopWidth: StyleSheet.hairlineWidth}}><Text style={[styles.item1, styles.item2]}>1941</Text></View>
          </ScrollView>
        </View>
    </View>
    );
  }
}

const styles=StyleSheet.create({
  stretch: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 22
    },
    letter: {
    backgroundColor: '#555555',
    alignItems: 'center',
      borderRightWidth: 0,
      borderLeftWidth: .5,
      borderRightColor: 'black',
      borderLeftColor: 'black',
  },
  scrollLetterText: {
    fontSize: 20,
    fontFamily: 'arial',
    color: '#e3e4e4',
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 9,
    paddingRight: 9, 
  },
    item1: {
    padding: 5,
    fontSize: 18,
    fontFamily: 'Arial',
    borderColor: 'black',
    borderWidth: .5
  },
  item2: {
    backgroundColor: '#f3f3f3',
  },
});


const gameList = [
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 8,
        "gameTitle": "18 Wheeler: American Pro Trucker",
        "overview": "The main purpose of the game is to make it to the finish line with the truck's cargo. Players are given a set amount of time, but can ram into special vans that will add three seconds to the timer. There are several characters to choose from, each with a unique truck and attributes.The game starts out in Key West and players travel across the United States, ending in San Francisco. After Stage 1, the game gives the player a choice of trailer. One trailer is harder to haul, but provides a bigger payoff while the other choice is easier to haul but provides a smaller payoff. Money is deducted from the total when the trailer is hit. Players can sound the truck's horn to make other cars on the road yield and slipstream behind large vehicles to gain a momentary speed boost.In addition to the time limit, players also compete with the \"Lizard Tail\", a rival trucker. Crossing the finish line before the Lizard Tail yields additional money. In between levels, players can park the truck in a mini game to earn more cash.",
        "releaseDate": "2001",
        "developer": "Sega-AM2",
        "genre": "Action Racing",
        "players": "1",
        "image": "0fdb3cbd-2561-4605-8db3-9388fa26fa4c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0fdb3cbd-2561-4605-8db3-9388fa26fa4c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 246,
        "gameTitle": "1942",
        "overview": "Control a WWII-style plane over 32 vertically scrolling sea and landscapes. Shoot various types of enemy planes. Collect a variety of weapon power-ups.",
        "releaseDate": "1984",
        "developer": "Capcom",
        "genre": "Scrolling Shooter",
        "players": "1",
        "image": "3c816264-41a3-4e8e-87d5-d41a77ec2660.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3c816264-41a3-4e8e-87d5-d41a77ec2660.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 247,
        "gameTitle": "1945",
        "overview": "This end-of-WWII scrolling shooter features planes flying in formation. There are superweapons and secret weapons like a flying wing.",
        "releaseDate": "1998",
        "developer": "Capcom",
        "genre": "Scrolling Shooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 120,
                "location": "Pinburgh Set 47"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 180,
        "gameTitle": "2001",
        "overview": "2001 features two banks of targets in center of playing field. It was one of the first electronic pinball games to have a Special light.",
        "releaseDate": "1971",
        "developer": "Gottlieb",
        "genre": "Fantasy",
        "players": "1",
        "image": "5813125f-d50f-460e-a4c5-09fff1ab7b52.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5813125f-d50f-460e-a4c5-09fff1ab7b52.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 127,
                "location": "Pinburgh Set 54"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 2,
        "gameTitle": "24",
        "overview": "Custom speech for the Chloe character. No custom speech for the Jack character.",
        "releaseDate": "2009",
        "developer": "Stern",
        "genre": "Television/ Law",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 126,
                "location": "Pinburgh Set 53"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 179,
        "gameTitle": "300",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Gottlieb",
        "genre": "Sports - Bowling",
        "players": "1",
        "image": "c84b834b-6bcf-422e-94be-d53a89300aae.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c84b834b-6bcf-422e-94be-d53a89300aae.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 100,
                "location": "Pinburgh Set 27"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 182,
        "gameTitle": "6 Mill. Dollar Man",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Bally",
        "genre": "Celebrities - Fictional",
        "players": "6",
        "image": "0f7037c9-4015-4066-a134-234311a00a93.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0f7037c9-4015-4066-a134-234311a00a93.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 119,
                "location": "Pinburgh Set 46"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 183,
        "gameTitle": "AC/ DC Premium",
        "overview": null,
        "releaseDate": "2012",
        "developer": "Stern",
        "genre": "Music",
        "players": "4",
        "image": "87948345-ea60-4457-9b52-ad70393b2492.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/87948345-ea60-4457-9b52-ad70393b2492.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 128,
                "location": "Pinburgh Set 55"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 184,
        "gameTitle": "Aces & Kings",
        "overview": null,
        "releaseDate": "1970",
        "developer": "Williams",
        "genre": "Cards/ Gambling",
        "players": "4",
        "image": "d89f91fd-371c-4729-83de-15b855e45e98.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d89f91fd-371c-4729-83de-15b855e45e98.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 73,
                "location": "Pinburgh Set 1"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 185,
        "gameTitle": "Addam's Family",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Bally",
        "genre": "Celebrities - Fictional",
        "players": "4",
        "image": "c7824f4f-15f4-4df3-9130-42709c8780dc.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c7824f4f-15f4-4df3-9130-42709c8780dc.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 138,
                "location": "Pinburgh Set 65"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 186,
        "gameTitle": "Aerobatics",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Zaccaria",
        "genre": null,
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 680,
        "gameTitle": "Aerosmith",
        "overview": null,
        "releaseDate": "2017",
        "developer": "Stern",
        "genre": "Licensed Theme - Music – Singing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 113,
                "location": "Pinburgh Set 40"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 187,
        "gameTitle": "Airborne",
        "overview": null,
        "releaseDate": "1996",
        "developer": "Capcom",
        "genre": "Aviation",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 11,
        "gameTitle": "Ajax",
        "overview": "In this arcade shoot'em up your mission is to infiltrate the alien fortress during 6 levels, and to destroy the fortress and the alien.\r\nSitting in Ajax H.Q., you must pilot the remote controlled drone ship to do this. The drone represents jet fighter (behind view) and helicopter gunship (top-down view). It may be moved on the screen, fire air-to-air and air-to-ground guns and pow bomb. Limitless hordes of mechanoid invaders, whose sole intent is the total domination of the Earth, will try to stop you. Exit from each level is guarded by the powerful boss, who you should eliminate.",
        "releaseDate": "1987",
        "developer": "Konami",
        "genre": "Action",
        "players": "1",
        "image": "fe9e0633-8cce-4f74-82d7-14b3409cec97.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/fe9e0633-8cce-4f74-82d7-14b3409cec97.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 96,
                "location": "Pinburgh Set 23"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 188,
        "gameTitle": "Algar",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 138,
                "location": "Pinburgh Set 65"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 189,
        "gameTitle": "Ali",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": "Sports - Boxing",
        "players": "4",
        "image": "c372277f-45b9-4e43-9acb-298962aa88a5.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c372277f-45b9-4e43-9acb-298962aa88a5.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 89,
                "location": "Pinburgh Set 17"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 255,
        "gameTitle": "Alien Poker",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Williams",
        "genre": "Fantasy - Outer Space - Cards - Gambling",
        "players": "4",
        "image": "17607f50-273b-4034-acc5-fe88e730ddf7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/17607f50-273b-4034-acc5-fe88e730ddf7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 97,
                "location": "Pinburgh Set 24"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 256,
        "gameTitle": "Alien Star",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Gottlieb",
        "genre": "Outer Space - Fantasy",
        "players": "4",
        "image": "1b56fcff-09b1-4e96-95a8-b67bffb248c1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1b56fcff-09b1-4e96-95a8-b67bffb248c1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 564,
        "gameTitle": "Amazing Spiderman, The",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Gottlieb",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "1a890600-b21a-4c51-ab78-4c3032ad7a65.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1a890600-b21a-4c51-ab78-4c3032ad7a65.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 257,
        "gameTitle": "Andromeda",
        "overview": null,
        "releaseDate": "1985",
        "developer": "Game Plan",
        "genre": "Fantasy - Women",
        "players": "4",
        "image": "fc533bb2-2ded-4422-9e59-5182d2c26507.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/fc533bb2-2ded-4422-9e59-5182d2c26507.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 258,
        "gameTitle": "Apollo 13",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Sega",
        "genre": "Disaster - Space",
        "players": "6",
        "image": "23aef559-1410-4d56-a263-254efaba0900.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/23aef559-1410-4d56-a263-254efaba0900.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 73,
                "location": "Pinburgh Set 1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 259,
        "gameTitle": "Aquarius",
        "overview": null,
        "releaseDate": "1970",
        "developer": "Gottlieb",
        "genre": "Astrology",
        "players": "1",
        "image": "c5c46167-4127-4a85-a93d-5febf0ea6254.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c5c46167-4127-4a85-a93d-5febf0ea6254.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 658,
        "gameTitle": "Arcade Stage, D8",
        "overview": "In the game you can choose from a variety of cars to race.\r\nThe machine is capable of recording information - such as how many races you have had, what car you have, which opponents you have bested and what upgrades you have acquired - on a card which can be issued at the time of your choosing a car. There are a range of courses - each of which has its own challenges and opponents.",
        "releaseDate": "2014",
        "developer": "Sega",
        "genre": "Racing",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 96,
                "location": "Pinburgh Set 23"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 262,
        "gameTitle": "Argosy",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Williams",
        "genre": "Boats - Nautical - Ships - Water",
        "players": "4",
        "image": "4d434aa5-8fbb-4f97-8216-23c6e7adbc92.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4d434aa5-8fbb-4f97-8216-23c6e7adbc92.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 12,
        "gameTitle": "Assault",
        "overview": "In Assault, the player's homeland is invaded by aliens. The next course of action is clear: manning a tank and blasting them away!\r\nThe goal of each of the eleven levels is to reach the end (occupied by a fortress) and killing the opposition while avoid being hit by their projectiles - at first the player only has to worry about ground forces, but in later stages the tank is also being shot at from above. The game is shown from an overhead perspective, but the tank is always the center of attention: the level rotates around the tank when it is moved. Because of this, it is possible to move in the wrong direction, but when that happens an arrow pops up and shows the right way.",
        "releaseDate": "1988",
        "developer": "Namco",
        "genre": "Shooter",
        "players": "1",
        "image": "6f6990f9-2dbc-4302-bc88-5eaff1147574.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6f6990f9-2dbc-4302-bc88-5eaff1147574.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 130,
                "location": "Pinburgh Set 57"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 263,
        "gameTitle": "Asteroid Annie & Aliens",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Gottlieb",
        "genre": "Aliens - Outer Space - Fantasy - Playing Cards - Poker",
        "players": "1",
        "image": "8745d061-fd19-4747-94ec-a59e2f0c4e33.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8745d061-fd19-4747-94ec-a59e2f0c4e33.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 34,
                "location": "E3"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 4,
        "gameTitle": "Asteroids",
        "overview": "The objective of Asteroids is to score as many points as possible by destroying asteroids and flying saucers. The player controls a triangular-shaped ship that can rotate left and right, fire shots straight forward, and thrust forward. As the ship moves, momentum is not conserved — the ship eventually comes to a stop again when not thrusting. The player can also send their ship into hyperspace, causing it to disappear and reappear in a random location on the screen (with the risk of self-destructing or appearing on top of an asteroid).",
        "releaseDate": "1979",
        "developer": "Atari",
        "genre": "Action",
        "players": "2",
        "image": "638fc471-984e-4077-9b89-fd79a4b32f44.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/638fc471-984e-4077-9b89-fd79a4b32f44.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 13,
        "gameTitle": "Asteroids Deluxe",
        "overview": "Asteroids Deluxe is an arcade game released in May 1981[1] by Atari Inc. and is the sequel to Asteroids. It was followed by Space Duel in 1982 and Blasteroids in 1987. Key changes in Asteroids Deluxe were designed to combat the saucer-hunting strategy of Asteroids, which allowed experts to play for extended periods.[2] The game is significantly more difficult than the original.[2]\r\n\r\nUnlike Asteroids, Asteroids Deluxe was only ported to one 8-bit system, the BBC Micro in 1984. It was also released for the Atari ST in 1987.[2]",
        "releaseDate": "1980",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": "28ce1ecf-7963-4a9d-b0b2-6f733b0db2fc.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/28ce1ecf-7963-4a9d-b0b2-6f733b0db2fc.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 250,
        "gameTitle": "Asteroids, Cabaret",
        "overview": "The objective of Asteroids is to score as many points as possible by destroying asteroids and flying saucers. The player controls a triangular-shaped ship that can rotate left and right, fire shots straight forward, and thrust forward. As the ship moves, momentum is not conserved — the ship eventually comes to a stop again when not thrusting. The player can also send their ship into hyperspace, causing it to disappear and reappear in a random location on the screen (with the risk of self-destructing or appearing on top of an asteroid).",
        "releaseDate": "1979",
        "developer": "Atari",
        "genre": "Action",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 251,
        "gameTitle": "Asteroids, Cocktail",
        "overview": "The objective of Asteroids is to score as many points as possible by destroying asteroids and flying saucers. The player controls a triangular-shaped ship that can rotate left and right, fire shots straight forward, and thrust forward. As the ship moves, momentum is not conserved — the ship eventually comes to a stop again when not thrusting. The player can also send their ship into hyperspace, causing it to disappear and reappear in a random location on the screen (with the risk of self-destructing or appearing on top of an asteroid).",
        "releaseDate": "1979",
        "developer": "Atari",
        "genre": "Action",
        "players": "2",
        "image": "99c9f9d1-3e9c-4f66-958c-4a95cd7f1a7c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/99c9f9d1-3e9c-4f66-958c-4a95cd7f1a7c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 114,
                "location": "Pinburgh Set 41"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 264,
        "gameTitle": "Atlantis",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Bally",
        "genre": "Myth and Legend - Water Sports",
        "players": "4",
        "image": "4d7ab860-c0f4-4f2b-ac58-6b798c6ed17a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4d7ab860-c0f4-4f2b-ac58-6b798c6ed17a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            },
            {
                "id": 107,
                "location": "Pinburgh Set 34"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 265,
        "gameTitle": "Attack From Mars",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Bally",
        "genre": "Aliens - Martians - Fantasy",
        "players": "4",
        "image": "bddf07a5-5e76-4112-a2b2-4b1a0470cb51.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/bddf07a5-5e76-4112-a2b2-4b1a0470cb51.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 141,
                "location": "Pinburgh Set 68"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 266,
        "gameTitle": "Attila the Hun",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Game Plan",
        "genre": "Historical",
        "players": "4",
        "image": "b6091576-7374-421a-bb53-ce600eba313b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b6091576-7374-421a-bb53-ce600eba313b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 121,
                "location": "Pinburgh Set 48"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 267,
        "gameTitle": "Austin Powers",
        "overview": null,
        "releaseDate": "2001",
        "developer": "Stern",
        "genre": "Spies - Licensed Theme",
        "players": "4",
        "image": "7c98dd81-f676-40ab-ba3e-1cd9f3fd43e8.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7c98dd81-f676-40ab-ba3e-1cd9f3fd43e8.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 103,
                "location": "Pinburgh Set 30"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 268,
        "gameTitle": "Avatar",
        "overview": null,
        "releaseDate": "2010",
        "developer": "Stern",
        "genre": "Fantasy - Licensed Theme",
        "players": "4",
        "image": "53d91765-58ee-4393-ab3c-936826bc97b2.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/53d91765-58ee-4393-ab3c-936826bc97b2.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 77,
                "location": "Pinburgh Set 5"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 269,
        "gameTitle": "Avengers, LE",
        "overview": null,
        "releaseDate": "2012",
        "developer": "Stern",
        "genre": "Comics - Fantasy - Licensed Theme",
        "players": "2",
        "image": "945e8c7f-b208-4c85-a868-91ca3d4a9bd9.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/945e8c7f-b208-4c85-a868-91ca3d4a9bd9.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 122,
                "location": "Pinburgh Set 49"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 270,
        "gameTitle": "Aztec",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Williams",
        "genre": "Historical - World Places",
        "players": "4",
        "image": "a4d9baf0-55a9-443c-ac31-7cfc279832d3.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a4d9baf0-55a9-443c-ac31-7cfc279832d3.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 15,
        "gameTitle": "Baby Pac-Man",
        "overview": "Baby Pac-Man is a hybrid arcade/pinball game released by Bally Midway on October 11, 1982. The cabinet consists of a 13-inch video screen seated above an elevated horizontal pinball game, and the combination fits into roughly the same size space as an upright arcade machine.\r\n\r\nThe development of Baby Pac-Man was not authorized by Namco. It was designed and released entirely by Bally-Midway (as were Pac-Man Plus, Jr. Pac-Man, and Professor Pac-Man), which eventually led to Namco canceling its relationship with Bally-Midway.[1] 7,000 units were produced.[",
        "releaseDate": "1982",
        "developer": "Bally Midway",
        "genre": "Puzzle",
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 272,
        "gameTitle": "Bad Cats",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Williams",
        "genre": "Feline Mischief",
        "players": "4",
        "image": "f95ccc58-d7f8-4624-99c2-b71d2b9c57db.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f95ccc58-d7f8-4624-99c2-b71d2b9c57db.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 273,
        "gameTitle": "Band Wagon",
        "overview": null,
        "releaseDate": "1965",
        "developer": "Bally",
        "genre": "Circus/ Carnival",
        "players": "4",
        "image": "2f1f85b1-2c2b-4e08-b57a-118dad3c42ac.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2f1f85b1-2c2b-4e08-b57a-118dad3c42ac.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 81,
                "location": "Pinburgh Set 9"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 274,
        "gameTitle": "Banzai Run",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Williams",
        "genre": "Sports - Motorcycles/ Motocross",
        "players": "4",
        "image": "e37a39c9-92eb-4448-b960-f7fbb1b7be1c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e37a39c9-92eb-4448-b960-f7fbb1b7be1c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 118,
                "location": "Pinburgh Set 45"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 275,
        "gameTitle": "Barracora",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": "e27e2bb0-c3cb-4972-9cde-a6da9b2a343b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e27e2bb0-c3cb-4972-9cde-a6da9b2a343b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 132,
                "location": "Pinburgh Set 59"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 276,
        "gameTitle": "Batman (Dark Knight)",
        "overview": null,
        "releaseDate": "2011",
        "developer": "Stern",
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 277,
        "gameTitle": "Batman Forever",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Sega",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "6",
        "image": "6169133f-0711-471a-91fb-18beab675fbe.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6169133f-0711-471a-91fb-18beab675fbe.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 16,
        "gameTitle": "Batman Forever",
        "overview": "Brace yourself for endless action with BATMAN FOREVER! BATMAN and ROBIN blast into GOTHAM CITY in a spectacular fighting game! Armed with tons of incredible attacks, fierce combat moves, and an arsenal of gadgets, the DYNAMIC DUO are ready to battle the diabolical minds of TWO-FACE and THE RIDDLER! Without question... it's BATMAN FOREVER!",
        "releaseDate": "1996",
        "developer": "Iguana Entertainment",
        "genre": "Fighting",
        "players": "2",
        "image": "afc32f01-62cc-4a9c-a327-3c081d9f1bad.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/afc32f01-62cc-4a9c-a327-3c081d9f1bad.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 17,
        "gameTitle": "Battletoads",
        "overview": "After her defeat by the Galactic Corporation at the battle of Canis Major, the evil Dark Queen and her renegade space troops retreat to the outer reaches of the universe, hiding out in dark spaces between the stars. Meanwhile, on board the spaceship Vulture, Professor T. Bird and the trio of Battletoads - Rash, Zitz and Pimple - are escorting the Princess Angelica back to her home planet, where her father, the Terran Emperor, awaits her safe arrival. Along the way, Pimple, the biggest Battletoad, takes Angelica out for a cruise in the Toadster to a nearby Leisure Station. However, the Dark Queen ambushes them before they can get there, and they are kidnapped and carried away to Ragnarok's World, the Dark Queen's planet. Professor Bird sends the remaining Battletoads down on Ragnarok to save Pimple and Angelica, knowing it will be a hard battle against the planet's dangerous environments, traps and enemy forces. They have to go a long way from the planet's rough surface to deep caves and landed Gargantua and ultimately to the Tower of Shadows, where the Dark Queen herself awaits.",
        "releaseDate": "1994",
        "developer": "Rare",
        "genre": "Action",
        "players": "3",
        "image": "ff308880-42d0-4a2e-8bf1-5b3b951fee87.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ff308880-42d0-4a2e-8bf1-5b3b951fee87.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 18,
        "gameTitle": "Battlezone",
        "overview": "Battlezone is an arcade game from Atari released in 1980. It displays a wireframe view (using vector graphics rather than raster graphics) on a horizontal black and white (with green and red sectioned color overlay) vector monitor. Due to its novel gameplay and look, this game was very popular for many years.",
        "releaseDate": "1980",
        "developer": "Atari",
        "genre": "Action",
        "players": "1",
        "image": "12a9e542-e812-45e4-bc49-d9c49f055659.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/12a9e542-e812-45e4-bc49-d9c49f055659.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 278,
        "gameTitle": "Baywatch",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Sega",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "6",
        "image": "a90ba864-f56c-4ed0-a756-b259bc544073.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a90ba864-f56c-4ed0-a756-b259bc544073.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 664,
        "gameTitle": "Beat Stream",
        "overview": null,
        "releaseDate": "2016",
        "developer": "Konami",
        "genre": "Music",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 675,
        "gameTitle": "Beat the Clock",
        "overview": "'Beat The Clock' was the first Williams game to have the type of multiball where balls are \"locked\" on the playfield until released by another ball for simultaneous play. This feature was not given a name in the flyer.",
        "releaseDate": "1963",
        "developer": "Williams",
        "genre": "Sports - Racing",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 76,
                "location": "Pinburgh Set 4"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 279,
        "gameTitle": "Big Buck Hunter",
        "overview": null,
        "releaseDate": "2010",
        "developer": "Stern",
        "genre": "Hunting - Licensed Theme - Animals",
        "players": "4",
        "image": "9cb37936-5601-4580-baee-22c5778db4d0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9cb37936-5601-4580-baee-22c5778db4d0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 280,
        "gameTitle": "Big Flipper",
        "overview": null,
        "releaseDate": "1970",
        "developer": "Chicago Coin",
        "genre": "Circus/ Carnival",
        "players": "2",
        "image": "78da09be-60a5-49a4-a945-43aaa00f043d.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/78da09be-60a5-49a4-a945-43aaa00f043d.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 102,
                "location": "Pinburgh Set 29"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 281,
        "gameTitle": "Big Game",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": "Hunting/ Safari",
        "players": "4",
        "image": "59af558f-ccc8-45c4-85dc-b27ba5010ed1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/59af558f-ccc8-45c4-85dc-b27ba5010ed1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 111,
                "location": "Pinburgh Set 38"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 282,
        "gameTitle": "Big Guns",
        "overview": null,
        "releaseDate": "1987",
        "developer": "Williams",
        "genre": "Space Medieval",
        "players": "4",
        "image": "55def213-4cc0-4997-97d1-37c3d60f8bf0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/55def213-4cc0-4997-97d1-37c3d60f8bf0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 139,
                "location": "Pinburgh Set 66"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 284,
        "gameTitle": "Big Hurt",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Gottlieb",
        "genre": "Sports - Baseball",
        "players": "4",
        "image": "b85d4fc1-9743-4639-a388-9707755b78a7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b85d4fc1-9743-4639-a388-9707755b78a7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 102,
                "location": "Pinburgh Set 29"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 285,
        "gameTitle": "Big Indian",
        "overview": "Prior to production, this game was named 'Chief' and then renamed to 'Big Injun'. Sample games were produced as 'Big Injun' and, according to the Encyclopedia of Pinball Vol 1, the Native American employees in Gottlieb's wiring and assembly plant in South Dakota complained about this. So, the name was changed again, to 'Big Indian', stalling production for three months.",
        "releaseDate": "1974",
        "developer": "Gottlieb",
        "genre": "American West - Native American",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 286,
        "gameTitle": "Bird Man",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Sonic",
        "genre": "Sports - Hang Gliding",
        "players": "4",
        "image": "c9b51ad5-12e6-4f6d-80e1-ab0070d352fc.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c9b51ad5-12e6-4f6d-80e1-ab0070d352fc.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 19,
        "gameTitle": "Birdie King 2",
        "overview": "A golf game.",
        "releaseDate": "1983",
        "developer": "Taito",
        "genre": "Sports",
        "players": null,
        "image": "71e81ecd-cb0c-431f-ab2b-172f11095f77.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/71e81ecd-cb0c-431f-ab2b-172f11095f77.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 95,
                "location": "Pinburgh Set 22"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 287,
        "gameTitle": "Black Belt",
        "overview": null,
        "releaseDate": "1986",
        "developer": "Bally",
        "genre": "Martial Arts",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 288,
        "gameTitle": "Black Hole",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Gottlieb",
        "genre": "Outer Space",
        "players": "4",
        "image": "8fa7f02e-2804-425b-bd51-283eac399b27.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8fa7f02e-2804-425b-bd51-283eac399b27.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 289,
        "gameTitle": "Black Jack",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Bally",
        "genre": "Cards/ Gambling",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 78,
                "location": "Pinburgh Set 6"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 290,
        "gameTitle": "Black Knight",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Williams",
        "genre": "Historical - Knights",
        "players": "4",
        "image": "32230e09-6734-454b-8b97-be0e01c9fa91.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/32230e09-6734-454b-8b97-be0e01c9fa91.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 291,
        "gameTitle": "Black Knight 2000",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Williams",
        "genre": "Historical - Knights",
        "players": "4",
        "image": "bd450f8e-4637-41ae-87f5-98db7aad2a0a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/bd450f8e-4637-41ae-87f5-98db7aad2a0a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 107,
                "location": "Pinburgh Set 34"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 292,
        "gameTitle": "Black Pyramid",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Bally",
        "genre": "Adventure - Supernatural",
        "players": "4",
        "image": "e76457e0-b1cf-4ca9-8ca9-9cd482494996.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e76457e0-b1cf-4ca9-8ca9-9cd482494996.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 20,
        "gameTitle": "Black Widow",
        "overview": "Black Widow is a vector arcade game developed by Atari released in 1982. The player takes the role of a Black widow spider defending a web from invading bugs. The player must move the spider around the web while simultaneously shooting/avoiding various bugs and collecting the bonuses that appear after the enemies are eliminated. The spider is controlled through two joysticks: the left one is used to move the spider, and the right one to control the shot direction.",
        "releaseDate": "1982",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": "d31de707-6c7b-41e1-ba8c-3b82900000ac.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d31de707-6c7b-41e1-ba8c-3b82900000ac.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 137,
                "location": "Pinburgh Set 64"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 294,
        "gameTitle": "Blackwater 100",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Bally",
        "genre": "Sports - Motorcycles/ Motocross",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 252,
        "gameTitle": "Blast City Cabinet - Pandora's Box",
        "overview": "In the game, players must travel around the world to different cities solving various kinds of puzzles to capture the seven \"tricksters\" - Maui, Puck, Eris, Coyote, Monkey, Anansi and Raven. Each trickster has a challenge puzzle after finding all the missing box pieces, acquired by solving the puzzle with each piece behind it in each city. The location of the pieces is randomized each game. The game offers sporadic bonuses. Hints are used to find where one piece goes if the player needs help figuring it out. ",
        "releaseDate": "1999",
        "developer": "Microsoft",
        "genre": "Puzzle",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 21,
        "gameTitle": "Blasteroids",
        "overview": "The Player controls a spaceship viewed from \"above\" in a 2D representation of space, by rotating the ship, and using thrust to give the ship momentum. To slow down or completely stop moving, the player has to rotate the ship to face the direction it came from, and generate the right amount of thrust to nullify its momentum. The ship has a limited amount of fuel to generate thrust with. This fuel comes in the form of \"Energy\" that is also used for the ship's Shields which protect it against collisions and enemy fire. Once all Energy is gone, the player's ship is destroyed. The ship can shoot to destroy asteroids and enemy ships. The ship can also be transformed at will into 3 different versions, namely the \"Speeder\", the fastest version, the \"Fighter\", which has the most firepower, and the \"Warrior\", which has extra armour.",
        "releaseDate": "1987",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": "b39e42e4-704f-4ff2-98f6-cc958cca3102.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b39e42e4-704f-4ff2-98f6-cc958cca3102.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 22,
        "gameTitle": "Bloxeed",
        "overview": "A Tetris-like game with additional twists and tools.",
        "releaseDate": "1990",
        "developer": "Sega",
        "genre": "Puzzle",
        "players": "2",
        "image": "ce277edc-89b8-43ad-8ef8-2de581b5a278.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ce277edc-89b8-43ad-8ef8-2de581b5a278.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 296,
        "gameTitle": "Bonanza",
        "overview": null,
        "releaseDate": "1964",
        "developer": "Gottlieb",
        "genre": "TV Show, Western",
        "players": "2",
        "image": "c8f6daf3-eb76-45c7-81dd-4b2dcbc40a0a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c8f6daf3-eb76-45c7-81dd-4b2dcbc40a0a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 297,
        "gameTitle": "Bone Busters",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Gottlieb",
        "genre": "Haunted, Skeletons, Supernatural",
        "players": "4",
        "image": "229dca47-9d3e-44ba-a4b2-c19d34960687.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/229dca47-9d3e-44ba-a4b2-c19d34960687.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 24,
        "gameTitle": "Bosconian",
        "overview": "The object of Bosconian is to score as many points as possible by destroying enemy bases and ships. The player controls a small fighter ship that can move in eight directions and can fire both forward and backward. Each level consists of a number of green space stations that must all be destroyed to advance to the next level (a semi-transparent mini-map helps identify their location). Each station consists of six cannons arranged in a hexagon, surrounding a central core. The player must either destroy all six cannons or shoot the core to destroy a station, and in later levels the core is capable of defending itself.\r\nAdditionally, the player must avoid or destroy asteroids, mines, and a variety of enemy missiles and ships that attempt to collide with the player's ship. Enemies occasionally launch formation attacks — destroying the leader causes all remaining enemies to disperse, but destroying all enemies in a formation scores extra bonus points. A spy ship (worth a random bonus value) also appears occasionally, which must be destroyed or the enemies will go berserk.",
        "releaseDate": "1981",
        "developer": "Midway",
        "genre": "Shooter",
        "players": "1",
        "image": "dab1d0b3-746f-4d43-aff0-11e0404853de.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/dab1d0b3-746f-4d43-aff0-11e0404853de.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 25,
        "gameTitle": "Bottom of the Ninth",
        "overview": "One or two players choose a ballclub from cities like New York, Chicago, Los Angeles, Atlanta, or Boston and compete either against the computer or each other in this baseball game. A wide variety of picthes can be thrown and batters can change their stance and angle of swing.",
        "releaseDate": "1989",
        "developer": "Konami",
        "genre": "Sports",
        "players": "2",
        "image": "35f86510-5213-4d97-8902-0ffbab16ccdd.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/35f86510-5213-4d97-8902-0ffbab16ccdd.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 26,
        "gameTitle": "Breakout",
        "overview": "Move a paddle back and forth at the bottom of the screen to rebound a ball back into a brick wall, knocking bricks out one by one. There are three separate games: double -- same as Breakout, knock down bricks and when they are all gone a new wall forms cavity -- two other balls are inside the wall, when they have an escape route you can hit them as well progressive -- as the wall is destroyed, new bricks are added and the entire wall shifts down toward your paddle. The sound effects are just simple beeps.",
        "releaseDate": "1976",
        "developer": "Atari",
        "genre": null,
        "players": null,
        "image": "5eb9d5f8-b883-498c-a882-4b3121cd7a48.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5eb9d5f8-b883-498c-a882-4b3121cd7a48.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 89,
                "location": "Pinburgh Set 17"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 298,
        "gameTitle": "Breakshot",
        "overview": null,
        "releaseDate": "1996",
        "developer": "Capcom",
        "genre": "Pool",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 27,
        "gameTitle": "Bubbles",
        "overview": "Bubbles is an action game with puzzle elements where the player controls the protagonist, a soap bubble, from a top-down perspective. The object is to clean a kitchen sink by maneuvering the bubble over ants, crumbs, and grease to absorb them. The bubble will grow larger the more objects it absorbs. The player is impeded by enemies—brushes, razor blades, roaches, and sponges—that are deadly to the character. Except for razors, enemies also compete with the player to absorb objects in the sink. Once the bubble reaches a certain size, it will acquire a smiling face and become invulnerable against brushes and sponges; contact with those will reduce the bubble's size to the point it becomes vulnerable again. After all the objects are gone, the player will progress to the next level if the bubble is large enough. If the bubble is not large enough at that point, or if the player enters the drain while the bubble's too small, a life is lost. Once the bubble becomes large enough, the drain in the center of the sink will begin to flash green, signaling the player to enter it to progress to the next level.",
        "releaseDate": "1982",
        "developer": "Williams Electronics",
        "genre": "Platform",
        "players": "2",
        "image": "83046230-ce86-416f-97f2-87428dddbfd1.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/83046230-ce86-416f-97f2-87428dddbfd1.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 127,
                "location": "Pinburgh Set 54"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 299,
        "gameTitle": "Buck Rogers",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Gottlieb",
        "genre": "Fantasy - Outer Space",
        "players": "1",
        "image": "6b2400c5-8302-4ad2-9fa5-3bed2c75296d.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6b2400c5-8302-4ad2-9fa5-3bed2c75296d.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 28,
        "gameTitle": "Bump 'n' Jump",
        "overview": "In Bump 'n' Jump, the girlfriend of the protagonist has been kidnapped by the Black Army Corps, and he must race to save her. The goal in is to drive from the beginning of a level to the end while bumping enemy vehicles into obstacles and jumping over various large obstacles such as overpasses, and large rivers.",
        "releaseDate": "1982",
        "developer": "Bally Midway",
        "genre": "Racing",
        "players": "1",
        "image": "a2a14947-231b-4fe4-a52a-1306e5839728.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a2a14947-231b-4fe4-a52a-1306e5839728.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 29,
        "gameTitle": "Burgertime",
        "overview": "The object of the game is to complete a number of hamburgers while avoiding enemy foods.\r\n\r\nWhen main protagonist, chef Peter Pepper, the player's character, walks the length of an ingredient (bun, meat patty, tomato, etc.), it falls one level. If it lands atop another ingredient, the latter in turn falls one level. A burger is completed when all vertically aligned ingredients have been dropped out of the maze and onto a waiting plate. Once all burgers are completed, the game level is finished.\r\n\r\nWhile making burgers, the player must avoid the antagonists, three types of enemies: Mr. Hot Dog, Mr. Pickle, and Mr. Egg. Enemies can be dodged, stunned, crushed with a falling ingredient, or dropped by luring them onto an ingredient and then causing it to fall. In this last case, the piece will fall two extra levels for every enemy caught on it. Enemies that have been crushed or dropped return to the maze after a few seconds. Dropped enemies award larger point values than crushed ones; therefore, to obtain a high score, the player must attract more than one enemy onto an ingredient just before dropping it.\r\n\r\nPeter Pepper has pepper shots to shake on nearby enemies to stun and render them harmless for a few seconds. Extra shots are obtained by collecting bonus foods, such as coffee, an ice cream cone, or French fries, which appear in the center of the maze when a certain number of ingredients have dropped.\r\n\r\nThere are six screens of increasing difficulty, with more burgers and enemies, burgers that have more parts, and/or layouts that make it easier for Peter Pepper to be cornered and harder for him to reach the ingredients. Completing all six screens takes the player back to the first one.",
        "releaseDate": "1982",
        "developer": "Bally Midway",
        "genre": "Puzzle",
        "players": "2",
        "image": "4269d613-03a8-4fb7-89ca-d4facd1da254.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4269d613-03a8-4fb7-89ca-d4facd1da254.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 140,
                "location": "Pinburgh Set 67"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 300,
        "gameTitle": "Butterfly",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Sonic",
        "genre": "Fantasy",
        "players": "4",
        "image": "542dbe6b-1e8f-4a0a-b718-5534fccda1e0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/542dbe6b-1e8f-4a0a-b718-5534fccda1e0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 90,
                "location": "Pinburgh Set 18"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 301,
        "gameTitle": "Cactus Canyon",
        "overview": null,
        "releaseDate": "1999",
        "developer": "Bally",
        "genre": "American West",
        "players": "4",
        "image": "8b1d9627-5459-4e23-b9d7-ba0ef3284c99.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8b1d9627-5459-4e23-b9d7-ba0ef3284c99.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 118,
                "location": "Pinburgh Set 45"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 302,
        "gameTitle": "Cactus Jack's",
        "overview": null,
        "releaseDate": "1991",
        "developer": "Gottlieb",
        "genre": "Music - Singing - Dancing - Comedy - Country and Western",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 115,
                "location": "Pinburgh Set 42"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 303,
        "gameTitle": "Captain Fantastic",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Bally",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "28e7ae84-998a-4efd-90f6-89fabc2701b1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/28e7ae84-998a-4efd-90f6-89fabc2701b1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 304,
        "gameTitle": "Car Hop",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Gottlieb",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 89,
                "location": "Pinburgh Set 17"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 305,
        "gameTitle": "Card Whiz",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Gottlieb",
        "genre": "Cards/ Gambling",
        "players": "2",
        "image": "47db5829-5cac-4e25-8b74-bbbe77890741.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/47db5829-5cac-4e25-8b74-bbbe77890741.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 33,
        "gameTitle": "CarnEvil",
        "overview": "CarnEvil is set in the fictional town of Greely Valley, Iowa, wherein the protagonist (called \"Jacob\" in the manual) takes a tour through the town cemetery. According to the story's premise, if a golden token is inserted into the mouth of the jester's head on top of the tombstone of \"Professor Ludwig von Tökkentäkker\", a haunted amusement park will appear after long absence.\r\nJacob and his friend Lisa investigate this legend, and fulfill the conditions of the premise; whereupon the jester's head comes to life and raises the undead carnival from the ground, all trying to take their brains. During this process, Jacob obtains a shotgun from the shooting gallery at the entrance to fight through hordes of monsters, zombies, and insects.\r\nJacob faces enemies in the three attractions - the Haunted House, Rickety Town, and Freak Show - and must defeat a strong 'boss character' at the end of each, as well as periodic sub-bosses. After escaping all three areas, he enters the Big Top, and fights clowns and circus animals to reach the center ring, whence he is taken to Tökkentäkker's zeppelin to face Tökkentäkker and his jester Umlaut. Tökkentäkker is defeated when the player strikes him into the zeppelin's propellers, causing both to collapse. Thereafter Jacob wakes in the cemetery, which has returned to normal. Seeing the token emerge from Tökkentäkker's tombstone, he re-inserts it while Lisa orders him not to do so.",
        "releaseDate": "1999",
        "developer": "Midway Games",
        "genre": "Shooter",
        "players": "2",
        "image": "1980ecbf-628d-4de4-95dc-669471d2da10.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1980ecbf-628d-4de4-95dc-669471d2da10.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 34,
        "gameTitle": "Carrier Air Wing",
        "overview": "The 1990s was a decade of great change marked by growing friendships between old enemies and never before seen levels of co-operation between powerful nations of the world. However, in 1997, using new weapons designed in secrecy, the Middle Eastern country of Rabu threatened to destroy this fragile peace.\r\nRabu's proported goal is to purge the world of sin and force a new morality, with her allies. Rabu quickly claimed the Middle East, then spread into both southern Asia and parts of Europe. Their weaponery is terrifyingly eeficient at manufacturing death. They seemed unstoppable. When they gassed Tokyo in 1999, U.S. intervention became unavoidable. If Rabu is allowed to use Japan's manufacturing facilities, there will be no end to the nightmare.\r\nHoping to protect world peace, the USS Carl Vinson (CVN-70) heads out to the sea.",
        "releaseDate": "1990",
        "developer": "Capcom",
        "genre": "Shooter",
        "players": "2",
        "image": "a2b74d5e-3580-4517-9c15-55554675f9a0.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a2b74d5e-3580-4517-9c15-55554675f9a0.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 104,
                "location": "Pinburgh Set 31"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 306,
        "gameTitle": "Casanova",
        "overview": null,
        "releaseDate": "1966",
        "developer": "Williams",
        "genre": "Historical Characters - Romance",
        "players": "2",
        "image": "d0a59d5e-54e2-4dcf-ace4-1f7a87e614e5.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d0a59d5e-54e2-4dcf-ace4-1f7a87e614e5.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 307,
        "gameTitle": "Catacomb",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Stern",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 308,
        "gameTitle": "Centaur",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Bally",
        "genre": "Fantasy - Motorcycles",
        "players": "4",
        "image": "52027950-2d84-49e1-b94c-6c990c7e8785.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/52027950-2d84-49e1-b94c-6c990c7e8785.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 124,
                "location": "Pinburgh Set 51"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 309,
        "gameTitle": "Centigrade 37",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Gottlieb",
        "genre": "Fantasy - Science Fiction",
        "players": "1",
        "image": "04e98b9e-fe40-4411-935a-011aa050fea7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/04e98b9e-fe40-4411-935a-011aa050fea7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 35,
        "gameTitle": "Centipede",
        "overview": "Centipede is a vertically oriented shoot 'em up arcade game produced by Atari, Inc. in 1980. The game was designed by Ed Logg and Dona Bailey. The player defends against centipedes, spiders, scorpions and fleas, completing a round after eliminating the centipede that winds down the playing field.\r\n\r\nThe centipede starts at the top of the screen, traveling either left or right. When it hits a mushroom or the edge of the screen, it drops one level and switches direction. Thus, more mushrooms on the screen cause the centipede to descend more rapidly. The player can destroy mushrooms by shooting them, but each takes four hits to destroy.\r\n\r\n\r\nCentipede-Arcade\r\nIf the centipede reaches the bottom of the screen, it moves back and forth within the player area and one-segment \"head\" centipedes are periodically added. This continues until the player has eliminated both the original centipede and all heads. When all the centipede's segments are destroyed, a new centipede forms at the top of the screen. Every time a centipede is eliminated, however, the next one is one segment shorter and is accompanied by one additional, fast-moving \"head\" centipede.",
        "releaseDate": "1979",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "1",
        "image": "228908ca-dfe1-4af5-9693-dd045ff226d8.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/228908ca-dfe1-4af5-9693-dd045ff226d8.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            },
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 36,
        "gameTitle": "Centipede",
        "overview": "Centipede is a vertically oriented shoot 'em up arcade game produced by Atari, Inc. in 1980. The game was designed by Ed Logg and Dona Bailey. The player defends against centipedes, spiders, scorpions and fleas, completing a round after eliminating the centipede that winds down the playing field.\r\n\r\nThe centipede starts at the top of the screen, traveling either left or right. When it hits a mushroom or the edge of the screen, it drops one level and switches direction. Thus, more mushrooms on the screen cause the centipede to descend more rapidly. The player can destroy mushrooms by shooting them, but each takes four hits to destroy.\r\n\r\n\r\nCentipede-Arcade\r\nIf the centipede reaches the bottom of the screen, it moves back and forth within the player area and one-segment \"head\" centipedes are periodically added. This continues until the player has eliminated both the original centipede and all heads. When all the centipede's segments are destroyed, a new centipede forms at the top of the screen. Every time a centipede is eliminated, however, the next one is one segment shorter and is accompanied by one additional, fast-moving \"head\" centipede.",
        "releaseDate": "1980",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "1",
        "image": "82afc52c-4570-4857-a06e-623be15165ce.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/82afc52c-4570-4857-a06e-623be15165ce.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 253,
        "gameTitle": "Centipede, Cabaret",
        "overview": "Centipede is a vertically oriented shoot 'em up arcade game produced by Atari, Inc. in 1980. The game was designed by Ed Logg and Dona Bailey. The player defends against centipedes, spiders, scorpions and fleas, completing a round after eliminating the centipede that winds down the playing field.\r\n\r\nThe centipede starts at the top of the screen, traveling either left or right. When it hits a mushroom or the edge of the screen, it drops one level and switches direction. Thus, more mushrooms on the screen cause the centipede to descend more rapidly. The player can destroy mushrooms by shooting them, but each takes four hits to destroy.\r\n\r\n\r\nCentipede-Arcade\r\nIf the centipede reaches the bottom of the screen, it moves back and forth within the player area and one-segment \"head\" centipedes are periodically added. This continues until the player has eliminated both the original centipede and all heads. When all the centipede's segments are destroyed, a new centipede forms at the top of the screen. Every time a centipede is eliminated, however, the next one is one segment shorter and is accompanied by one additional, fast-moving \"head\" centipede.",
        "releaseDate": "1980",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 37,
        "gameTitle": "Centipede/ Millipede/ Missile Command Combo",
        "overview": null,
        "releaseDate": null,
        "developer": null,
        "genre": null,
        "players": null,
        "image": "de5b2785-010c-4c5d-841c-e3204a3a4214.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/de5b2785-010c-4c5d-841c-e3204a3a4214.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 38,
        "gameTitle": "Champion Baseball",
        "overview": "Player chooses team and plays baseball against computer. Game ends when player is tied or losing at the end of an inning or nine innings have been played.",
        "releaseDate": "1983",
        "developer": "Sega",
        "genre": "Sports",
        "players": "1",
        "image": "cbf9d167-cb2c-4b83-a5c1-4bc78199d244.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cbf9d167-cb2c-4b83-a5c1-4bc78199d244.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 124,
                "location": "Pinburgh Set 51"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 313,
        "gameTitle": "Checkpoint",
        "overview": null,
        "releaseDate": "1991",
        "developer": "Data East",
        "genre": "Sports - Auto Racing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 83,
                "location": "Pinburgh Set 11"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 314,
        "gameTitle": "Cheetah",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": "Jungle - Fantasy",
        "players": "4",
        "image": "49eba17f-d431-4dfa-abec-58fc65118187.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/49eba17f-d431-4dfa-abec-58fc65118187.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 39,
        "gameTitle": "Choplifter",
        "overview": "Choplifter is a 1982 Apple II game developed by Dan Gorlin and published by Brøderbund. It was ported to other home computers and, in 1985, Sega released a coin-operated arcade game remake, which in turn received several home ports of its own. While many arcade games have been ported to home computers and consumer consoles, Choplifter was one of the few games (Lode Runner is another) to take the reverse route: first appearing on a home system and being ported to the arcade.",
        "releaseDate": "1985",
        "developer": "Dan Gorlin",
        "genre": "Shooter",
        "players": "1",
        "image": "dc5a3422-7c6b-4e1a-a226-d76eb1ad32f4.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/dc5a3422-7c6b-4e1a-a226-d76eb1ad32f4.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            },
            {
                "id": 85,
                "location": "Pinburgh Set 13"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 315,
        "gameTitle": "Cirqus Voltaire",
        "overview": null,
        "releaseDate": "1997",
        "developer": "Bally",
        "genre": "Circus/ Carnival",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 139,
                "location": "Pinburgh Set 66"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 316,
        "gameTitle": "City Slicker",
        "overview": null,
        "releaseDate": "1987",
        "developer": "Bally",
        "genre": "Cops and Robbers",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 99,
                "location": "Pinburgh Set 26"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 317,
        "gameTitle": "Class of 1812",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Gottlieb",
        "genre": "Adventure - Supernatural",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 318,
        "gameTitle": "Cleopatra",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Gottlieb",
        "genre": "Historical",
        "players": "4",
        "image": "776bd28c-7668-4aab-a352-b3bdacdb18bf.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/776bd28c-7668-4aab-a352-b3bdacdb18bf.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 319,
        "gameTitle": "Clown",
        "overview": null,
        "releaseDate": "1985",
        "developer": "Zaccaria",
        "genre": "Circus/ Carnival",
        "players": "4",
        "image": "ff315563-7090-441d-b5c6-e6dd9a1cebc7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ff315563-7090-441d-b5c6-e6dd9a1cebc7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 320,
        "gameTitle": "Coney Island",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Game Plan",
        "genre": "Happiness - Circus/ Carnival",
        "players": "4",
        "image": "25699090-6108-4488-bdd7-bf4e948b9635.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/25699090-6108-4488-bdd7-bf4e948b9635.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 94,
                "location": "Pinburgh Set 21"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 321,
        "gameTitle": "Congo",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Williams",
        "genre": "Jungle",
        "players": "4",
        "image": "c0eef05b-9c9b-4545-9322-99d9501fdb7a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c0eef05b-9c9b-4545-9322-99d9501fdb7a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 40,
        "gameTitle": "Congo Bongo",
        "overview": "Congo Bongo is an isometric platform arcade game released by Sega in 1983. The game has come to be seen as Sega's answer to the highly successful Donkey Kong game that was released two years prior. The player takes the role of a red-nosed safari hunter who tries to catch an ape named \"Bongo\". The hunter seeks Bongo to exact revenge for an apparent practical joke in which Bongo set fire to the hunter's tent, giving him a literal \"hotfoot\". The game was named by Peter W. Gorrie who was the CFO of Sega at that time.",
        "releaseDate": "1983",
        "developer": "Sega",
        "genre": "Platform",
        "players": "2",
        "image": "4842e981-ab13-42a4-b86e-7b73d3ce778a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4842e981-ab13-42a4-b86e-7b73d3ce778a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 119,
                "location": "Pinburgh Set 46"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 322,
        "gameTitle": "Corvette",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Bally",
        "genre": "Car Culture",
        "players": "4",
        "image": "0b169253-6d6d-451a-ae8a-cbea7645cb40.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0b169253-6d6d-451a-ae8a-cbea7645cb40.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 90,
                "location": "Pinburgh Set 18"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 323,
        "gameTitle": "Cosmic Gunfight",
        "overview": null,
        "releaseDate": "1982",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 95,
                "location": "Pinburgh Set 22"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 324,
        "gameTitle": "Cosmos",
        "overview": null,
        "releaseDate": "1969",
        "developer": "Bally",
        "genre": "Outer Space",
        "players": "4",
        "image": "ab811f49-36a7-41ce-88c4-ab7e6b52d2fd.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ab811f49-36a7-41ce-88c4-ab7e6b52d2fd.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 82,
                "location": "Pinburgh Set 10"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 325,
        "gameTitle": "Count-Down",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Gottlieb",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 128,
                "location": "Pinburgh Set 55"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 326,
        "gameTitle": "Counterforce",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Gottlieb",
        "genre": "Outer Space - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 42,
        "gameTitle": "Crazy Climber",
        "overview": "In Crazy Climber the player assumes the role of a daredevil who is attempting to climb to the top of four skyscrapers. There are a number of obstacles and dangers to avoid including:\r\n\r\nWindows that open and close (the most common danger).\r\nBald-headed residents (a.k.a. Mad Doctors), who throw objects such as flower pots, buckets of water and fruit in an effort to knock the climber off the building (with larger objects appearing by more aggressive Mad Doctors in later levels).\r\nA giant condor, who drops eggs and excrement aimed at the climber (two at a time in the early stages, four in later levels).\r\nA giant ape (styled like King Kong), whose punch can prove deadly (he becomes more aggressive in later levels).\r\nFalling steel girders and iron dumbbells (more numerous in the later levels).\r\nLive wires, which protrude off electric signs.",
        "releaseDate": "1980",
        "developer": "Taito",
        "genre": "Climbing",
        "players": "2",
        "image": "51fbf58d-0f8e-464e-bc44-e400330a9f64.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/51fbf58d-0f8e-464e-bc44-e400330a9f64.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 41,
        "gameTitle": "Crazy Climber Cocktail",
        "overview": "In Crazy Climber the player assumes the role of a daredevil who is attempting to climb to the top of four skyscrapers. There are a number of obstacles and dangers to avoid including:\r\n\r\nWindows that open and close (the most common danger).\r\nBald-headed residents (a.k.a. Mad Doctors), who throw objects such as flower pots, buckets of water and fruit in an effort to knock the climber off the building (with larger objects appearing by more aggressive Mad Doctors in later levels).\r\nA giant condor, who drops eggs and excrement aimed at the climber (two at a time in the early stages, four in later levels).\r\nA giant ape (styled like King Kong), whose punch can prove deadly (he becomes more aggressive in later levels).\r\nFalling steel girders and iron dumbbells (more numerous in the later levels).\r\nLive wires, which protrude off electric signs.",
        "releaseDate": "1980",
        "developer": "Nichibutsu",
        "genre": "Platform",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 43,
        "gameTitle": "Crazy Kong",
        "overview": "Crazy Kong is an arcade game created by Falcon, released in 1981 and is similar to Nintendo's Donkey Kong. Although commonly mistaken as a bootleg version, the game is officially licensed for non-US markets[1] and is based on different hardware. The game retains all of the gameplay elements of Donkey Kong, but has all of the graphics redrawn and re-colorized. Crazy Kong is also known as Congorilla, Crazy Kong Part II, and Monkey Donkey.\r\n\r\nThere are two versions of the original Crazy Kong and Crazy Kong Part II; the differences of which are in minor cinematic artifacts and bugs, color palette choices and minor gameplay differences. Crazy Kong Part I shows no copyright or company name on the title screen. Crazy Kong (parts I and II) runs on modified Crazy Climber hardware. In addition there are other versions of the game that run on Scramble, Jeutel, Orca, and Alca hardware. The official versions of game came in two different stand up cabinets that featured a large and angry, rather than comic, ape embedded in the artwork. The cabinets were created by Zaccaria.",
        "releaseDate": "1981",
        "developer": "Falcon",
        "genre": "Platform",
        "players": "2",
        "image": "075e15ac-341a-4e18-be29-6ff2fba35ee1.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/075e15ac-341a-4e18-be29-6ff2fba35ee1.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 44,
        "gameTitle": "Crazy Taxi",
        "overview": "Crazy Taxi is an arcade-like racer where the player takes the role of a taxi driver who weaves his way through crowded streets, across sidewalks and even under water, in a wild and frantic race to deliver passengers on time. The courses are largely set inside cities crowded with general traffic and pedestrians (which can't be run over, they dive away). The main goal is to bring as many customers as possible to their destination in time. Available customers are marked through circles and the colour represents the distance and the fare they offer. Green means long rides with plenty of money, and red ones are very short.",
        "releaseDate": "1999",
        "developer": "Sega",
        "genre": "Racing",
        "players": "1",
        "image": "42771c21-bb5d-4b25-a4d2-7797bcbd557e.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/42771c21-bb5d-4b25-a4d2-7797bcbd557e.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 101,
                "location": "Pinburgh Set 28"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 310,
        "gameTitle": "Creature From the Black Lagoon",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Bally",
        "genre": "Drive-In Movies - Fictional - Licensed Theme",
        "players": "4",
        "image": "b24db53f-c96b-4385-a0a2-48871eb0da32.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b24db53f-c96b-4385-a0a2-48871eb0da32.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 254,
        "gameTitle": "Crowns Golf",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Sega",
        "genre": "Golf",
        "players": "1",
        "image": "962afd98-f9ff-4c5b-a745-45fbf0299f74.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/962afd98-f9ff-4c5b-a745-45fbf0299f74.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 45,
        "gameTitle": "Cruis'n World",
        "overview": "Cruis'n World is the 1996 sequel to the 1994 arcade racer Cruis'n USA. As the title implies, Cruis'n World allows players to race on various tracks around the world. The game also features more cars than Cruis'n USA. This game introduced stunts to the Cruis'n series. They served to dodge obstacles, take close curves and so. If the stunt makes the vehicle fly in the air, the game gives the player extra seconds of time. The game also uses small rocket boosts to speed up. The game was later released on the Nintendo 64 in 1998, being the best received of the Cruis'n ports.",
        "releaseDate": "1996",
        "developer": "Midway",
        "genre": "Racing",
        "players": "4+",
        "image": "1739c7dc-b1ab-431a-b09c-73c5cc67e4fe.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1739c7dc-b1ab-431a-b09c-73c5cc67e4fe.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 46,
        "gameTitle": "Crystal Castles",
        "overview": "Crystal Castles has nine levels with four castles each, and a tenth level which features a single castle — the clearing of which ends the game. Each of the 37 trimetric-projected castles consists of a maze of hallways filled with gems and bonus objects, and also includes stairs, elevators and tunnels that the player can use as shortcuts. The three-letter initials of the player with the highest score are used to form the first level's castle structure. When all gems in a castle have been collected, the player moves on to the next castle. The player can also skip some castles and acquire additional lives and points by using secret warps activated by making Bentley Bear jump at special locations.",
        "releaseDate": "1983",
        "developer": "Atari",
        "genre": "Action",
        "players": "2",
        "image": "233a81b9-3b8c-4ffc-ade5-d13499e2e940.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/233a81b9-3b8c-4ffc-ade5-d13499e2e940.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 79,
                "location": "Pinburgh Set 7"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 327,
        "gameTitle": "CSI",
        "overview": null,
        "releaseDate": "2008",
        "developer": "Stern",
        "genre": "Crime Investigation - Licensed Theme",
        "players": "4",
        "image": "5990e253-805a-49bf-b553-b686160f7a12.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5990e253-805a-49bf-b553-b686160f7a12.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 328,
        "gameTitle": "Cue Ball Wizard",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Gottlieb",
        "genre": "Billiards - Celebrities - Fictional",
        "players": "4",
        "image": "41ae9d1e-3bbf-492f-a867-5f148c4db1ac.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/41ae9d1e-3bbf-492f-a867-5f148c4db1ac.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 329,
        "gameTitle": "Cyclone",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Williams",
        "genre": "Happiness - Circus/ Carnival Specialty:\t",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 101,
                "location": "Pinburgh Set 28"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 330,
        "gameTitle": "Cyclopes",
        "overview": null,
        "releaseDate": "1985",
        "developer": "Game Plan",
        "genre": "Fantasy - Myth and Legend",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 656,
        "gameTitle": "Dance Revolution Arcade",
        "overview": "A simon-says style music game, where you press the four buttons with your feet as arrows scroll up from the bottom of the screen.",
        "releaseDate": "1999",
        "developer": "Konami",
        "genre": "Dance/ Rhythm",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 331,
        "gameTitle": "Deadly Weapon",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Gottlieb",
        "genre": null,
        "players": "4",
        "image": "566412b6-032e-4686-b0af-8907ff15b41c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/566412b6-032e-4686-b0af-8907ff15b41c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 48,
        "gameTitle": "Defender",
        "overview": "Defender is an arcade video game developed released by Williams Electronics in 1980. A shooting game featuring two-dimensional (2D) graphics, the game is set on a fictional planet where the player must defeat waves of invading aliens while protecting astronauts. Development was led by Eugene Jarvis, a pinball programmer at Williams; Defender was Jarvis's first video game project, and drew inspiration from Space Invaders and Asteroids. Williams planned to display the game at the Amusement & Music Operators Association (AMOA) trade show, though development delays resulted in the team working on the game up until the show started.\r\n\r\nDefender was commercially successful, selling over 55,000 units to become the company's best selling arcade game. Praise among critics focused on the game's audio-visuals and gameplay. It is frequently listed as one of Jarvis's best contributions to the video game industry, as well as one of the most difficult video games. Defender was ported to numerous platforms, inspired the development of other games, and was followed by sequels and many imitations.",
        "releaseDate": "1980",
        "developer": "Williams Electronics",
        "genre": "Shooter",
        "players": "2",
        "image": "b28ffef0-ea95-46f4-b036-741a0537a6f3.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b28ffef0-ea95-46f4-b036-741a0537a6f3.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 49,
        "gameTitle": "Defender/ Defender II",
        "overview": "This is a cabinet that has both Defender and Defender II.",
        "releaseDate": "2004",
        "developer": "Team Play",
        "genre": null,
        "players": null,
        "image": "3687ac6b-3aa0-4b8f-bd82-60094e215d86.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3687ac6b-3aa0-4b8f-bd82-60094e215d86.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 95,
                "location": "Pinburgh Set 22"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 332,
        "gameTitle": "Demolition Man",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Williams",
        "genre": "Science Fiction - Licensed Theme",
        "players": "4",
        "image": "e479b983-112f-4b2e-a728-c7a796938bd7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e479b983-112f-4b2e-a728-c7a796938bd7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 333,
        "gameTitle": "Derby Day",
        "overview": null,
        "releaseDate": "1967",
        "developer": "Williams",
        "genre": "Horse Racing",
        "players": "2",
        "image": "eeeea39e-ecef-46dc-94cd-469930dab76f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/eeeea39e-ecef-46dc-94cd-469930dab76f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 50,
        "gameTitle": "Desert Assault",
        "overview": "Desert Assault (known in Japan as Thunder Zone is a 1991 run and gun arcade game by Data East. In this arcade game, up to four players control four soldiers holding machine guns and other projectile weapons, while fighting their way through the terrorist arsenal to take control of the Persian War.",
        "releaseDate": "1991",
        "developer": "Nihan Bussan",
        "genre": "Action",
        "players": "4+",
        "image": "99c4bc81-ea7d-43f4-a039-9280534def0a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/99c4bc81-ea7d-43f4-a039-9280534def0a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 334,
        "gameTitle": "Devil Riders",
        "overview": null,
        "releaseDate": "1983",
        "developer": "Zaccaria",
        "genre": "Stunt Motorcycles",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 335,
        "gameTitle": "Devil's Dare",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Gottlieb",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 681,
        "gameTitle": "Dialed In",
        "overview": null,
        "releaseDate": "1965",
        "developer": "Bally",
        "genre": "Gambling - Poker - Riverboat",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 51,
        "gameTitle": "Die Hard",
        "overview": "Die Hard Arcade is a beat 'em up for two players, who play as either John McClane or Chris Tompsen (Bruno Delinger and Cindy Holiday in the original Japanese version). Players fight their way through waves of enemies, using their fists, feet, and a variety of weapons that can be collected from enemies or the environment, from household items such as brooms and pepper shakers to high-damage missile launchers and anti-tank cannons. Most weapons are automatically lost at the end of each action scene, but hand guns can be retained so long as they have ammunition remaining. The typical level structure is a number of minions the player must defeat in many rooms, followed by a boss. Bosses can be anything from human minions of White Fang to spider robots. Quick Time Events are interspersed between many of the scenes. In these events, the player(s) may be running and turning a corner and they face an enemy, so they must perform a designated command to avoid being injured or to help defeat an enemy. In some cases failing a Quick Time Event will result in loss of health, as is usual for QTEs, but failing most will put the player characters into an additional action scene which they otherwise would not have to complete. Cut scenes are interspersed into the action.",
        "releaseDate": "1996",
        "developer": "Sega AM1",
        "genre": "ActionFighting",
        "players": "2",
        "image": "477b83cc-0fb5-473f-abf2-a3d3cd9d7f18.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/477b83cc-0fb5-473f-abf2-a3d3cd9d7f18.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 52,
        "gameTitle": "Dig Dug x 2",
        "overview": "Dig Dug is an arcade game developed and published by Namco in Japan in 1982 for Namco Galaga hardware. It was later published outside of Japan by Atari. A popular game based on a simple concept, it was also released as a video game on many consoles.",
        "releaseDate": "1982",
        "developer": "Atari",
        "genre": "PuzzleShooterStrategy",
        "players": "2",
        "image": "d243bd86-3d85-4c1c-8603-6130fccec7f3.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d243bd86-3d85-4c1c-8603-6130fccec7f3.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 115,
                "location": "Pinburgh Set 42"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 336,
        "gameTitle": "Diner",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Williams",
        "genre": "Happiness - Food",
        "players": "4",
        "image": "428a9397-7c6d-4202-9246-7c6fe78a0f2f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/428a9397-7c6d-4202-9246-7c6fe78a0f2f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 78,
                "location": "Pinburgh Set 6"
            },
            {
                "id": 106,
                "location": "Pinburgh Set 33"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 337,
        "gameTitle": "Dirty Harry",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Williams",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "d95b183b-4151-499e-a440-bd49b582a8c8.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d95b183b-4151-499e-a440-bd49b582a8c8.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 140,
                "location": "Pinburgh Set 67"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 339,
        "gameTitle": "Doctor Who",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Bally",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 340,
        "gameTitle": "Dodge City",
        "overview": null,
        "releaseDate": "1965",
        "developer": "Gottlieb",
        "genre": "American West",
        "players": "4",
        "image": "0c70b681-f14a-4929-8294-9d57378926e8.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0c70b681-f14a-4929-8294-9d57378926e8.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 677,
        "gameTitle": "Dolly Parton",
        "overview": "We had understood from a Bally employee at a past Expo seminar that this game license had been a difficult one because singer Dolly Parton kept changing her mind about how she should be portrayed on the backglass, due to her crossover status at the time from country to pop. The Early Production cabinet side art in this listing depicts a bouffant-haired Dolly playing a guitar while the rest of the production run cabinets omit this image, making us wonder if this depiction had been rejected by the singer. Indeed, the flyer shows the singer standing next to the machine with a hairstyle more in line with her backglass portrayal than with the bouffant style that was removed from the cabinet.",
        "releaseDate": "1978",
        "developer": "Bally",
        "genre": "Celebrities - Licensed - Music - Singing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            },
            {
                "id": 34,
                "location": "E3"
            },
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 54,
        "gameTitle": "Donkey Kong",
        "overview": "Donkey Kong is an arcade game released by Nintendo in 1981. It is an early example of the platform game genre, as the gameplay focuses on maneuvering the main character across a series of platforms while dodging and jumping over obstacles. In the game, Jumpman (since renamed Mario) must rescue a damsel in distress, Lady (now named Pauline) from a giant ape named Donkey Kong. The hero and ape later became two of Nintendo's most popular characters.\r\nThe game was the latest in a series of efforts by Nintendo to break into the North American market. Hiroshi Yamauchi, Nintendo's president at the time, assigned the project to a first-time game designer named Shigeru Miyamoto. Drawing from a wide range of inspirations, including Popeye, Beauty and the Beast and King Kong, Miyamoto developed the scenario and designed the game alongside Nintendo's chief engineer, Gunpei Yokoi. The two men broke new ground by using graphics as a means of characterization, including cut scenes to advance the game's plot, and integrating multiple stages into the gameplay.\r\nDespite initial misgivings on the part of Nintendo's American staff, Donkey Kong proved a success in North America and Japan. Nintendo licensed the game to Coleco, who developed home console versions for numerous platforms. Other companies cloned Nintendo's hit and avoided royalties altogether. Miyamoto's characters appeared on cereal boxes, television cartoons, and dozens of other places. A lawsuit brought on by Universal City Studios, alleging Donkey Kong violated their trademark of King Kong, ultimately failed. The success of Donkey Kong and Nintendo's win in the courtroom helped position the company to dominate the video game market from its release in 1981, until the mid 1990s.",
        "releaseDate": "1981",
        "developer": "Nintendo",
        "genre": "Platform",
        "players": "1",
        "image": "d1754dca-a2dc-485e-b8fe-7fc02ede0cdb.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d1754dca-a2dc-485e-b8fe-7fc02ede0cdb.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 55,
        "gameTitle": "Donkey Kong Junior",
        "overview": "Donkey Kong Junior must save his father from Mario by putting the key or keys in the stage into all of the locks. Mario attempts to stop Donkey Kong Junior by releasing the many animals he controls to knock Donkey Kong Junior off the vines and platforms. Donkey Kong Junior defeats Mario if the player completes the fourth stage by putting all six keys in their locks, making the floor disappear. Donkey Kong Junior catches Donkey Kong while Mario falls onto the ground.",
        "releaseDate": "1982",
        "developer": "Nintendo",
        "genre": "Platform",
        "players": "2",
        "image": "2eee76e5-c1b1-4e5f-a9f4-88e75bd66cfa.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2eee76e5-c1b1-4e5f-a9f4-88e75bd66cfa.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 341,
        "gameTitle": "Doodle Bug",
        "overview": null,
        "releaseDate": "1971",
        "developer": "Williams",
        "genre": "Dancing - Happiness - Music",
        "players": "1",
        "image": "694b496d-15b4-4c4a-a212-b44af309bdf3.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/694b496d-15b4-4c4a-a212-b44af309bdf3.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 83,
                "location": "Pinburgh Set 11"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 342,
        "gameTitle": "Doozie",
        "overview": null,
        "releaseDate": "1968",
        "developer": "Williams",
        "genre": "Happiness",
        "players": "1",
        "image": "58d62de2-ab51-4cef-b990-cc645617a1d4.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/58d62de2-ab51-4cef-b990-cc645617a1d4.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 57,
        "gameTitle": "Double Dragon II: The Revenge",
        "overview": "The Double Dragons - Billy and Jimmy Lee - are back to avenge the loss of Marion! In their quest to defeat the evil Machine Gun Willy, the martial arts duo are challenged in 9 incredible missions, facing ruthless street gangs, nunchaku-toting ninja and giant mutant warriors! The non-stop action winds its way through construction sites, alleyways and underwater hideouts complete with secret elevator shafts, spiked ceilings and razor-sharp mechanical claws!",
        "releaseDate": "1988",
        "developer": "Technos Japan",
        "genre": "ActionFighting",
        "players": "2",
        "image": "62e360fb-673b-4ec7-9db5-7e5fc6e85673.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/62e360fb-673b-4ec7-9db5-7e5fc6e85673.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 74,
                "location": "Pinburgh Set 2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 344,
        "gameTitle": "Dr. Dude and His Excellent Ray",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Bally",
        "genre": "Celebrities - Fictional",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 96,
                "location": "Pinburgh Set 23"
            },
            {
                "id": 139,
                "location": "Pinburgh Set 66"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 345,
        "gameTitle": "Dracula",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Stern",
        "genre": "Fictional - Supernatural",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 346,
        "gameTitle": "Dracula (Bram Stoker's)",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Williams",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "f19faebd-660a-446f-8805-e4c5de82d951.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f19faebd-660a-446f-8805-e4c5de82d951.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 82,
                "location": "Pinburgh Set 10"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 347,
        "gameTitle": "Dragon",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Interflip",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 348,
        "gameTitle": "Dragon",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Gottlieb",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 76,
                "location": "Pinburgh Set 4"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 349,
        "gameTitle": "Earthshaker",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Williams",
        "genre": "Earthquake",
        "players": "4",
        "image": "47ad538c-1476-4b49-aecd-b79865031a24.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/47ad538c-1476-4b49-aecd-b79865031a24.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 79,
                "location": "Pinburgh Set 7"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 350,
        "gameTitle": "Eight Ball",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Bally",
        "genre": "Billiards",
        "players": "4",
        "image": "e426a27b-5a17-4f8d-959e-8763dcba8e8f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e426a27b-5a17-4f8d-959e-8763dcba8e8f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 84,
                "location": "Pinburgh Set 12"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 351,
        "gameTitle": "Eight Ball Champ",
        "overview": null,
        "releaseDate": "1985",
        "developer": "Bally",
        "genre": "Billiards",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 104,
                "location": "Pinburgh Set 31"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 352,
        "gameTitle": "Eight Ball Deluxe Ltd.",
        "overview": null,
        "releaseDate": "1982",
        "developer": "Bally",
        "genre": "Billiards - Games - Western",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 353,
        "gameTitle": "El Dorado City of Gold",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Gottlieb",
        "genre": "Adventure - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 101,
                "location": "Pinburgh Set 28"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 354,
        "gameTitle": "El Toro",
        "overview": null,
        "releaseDate": "1972",
        "developer": "Bally",
        "genre": "Bullfighting",
        "players": "1",
        "image": "6c28748a-9915-416a-82ee-09a553701fd9.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6c28748a-9915-416a-82ee-09a553701fd9.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 355,
        "gameTitle": "Elektra",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 59,
        "gameTitle": "Elevator Action",
        "overview": "The player assumes the role of a spy who infiltrates a building filled with elevators. He must collect secret documents from the building and traverse the 30 levels of the building using an increasingly complex series of elevators. The player is pursued by enemy agents who appear from behind closed doors. The player must outwit them via force or evasion. Successful completion of a level involves collecting all the secret documents and traversing the building from top to bottom. In the lower floors of the building, the elevator systems are so complex that some puzzle-solving skills are needed.",
        "releaseDate": "1983",
        "developer": "Taito",
        "genre": "ActionPlatform",
        "players": "2",
        "image": "6f42d858-1e7f-48c1-a243-dded351abbd0.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6f42d858-1e7f-48c1-a243-dded351abbd0.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 356,
        "gameTitle": "Elvira & TPM",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Bally",
        "genre": "Licensed Theme, Fictional Character",
        "players": "4",
        "image": "29d4bbfc-4ad5-4879-a9e8-82e80f8519f8.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/29d4bbfc-4ad5-4879-a9e8-82e80f8519f8.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 81,
                "location": "Pinburgh Set 9"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 357,
        "gameTitle": "Elvis",
        "overview": null,
        "releaseDate": "2004",
        "developer": "Stern",
        "genre": "Licensed Theme - Music",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 133,
                "location": "Pinburgh Set 60"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 358,
        "gameTitle": "Embryon",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Bally",
        "genre": "Fantasy - Science Fiction",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 60,
        "gameTitle": "Empire City: 1931",
        "overview": "The game is set in 1931 New York City where the player controls a young man who must avenge his family members, who were killed in a gang shootout. Over a period of several months, he targets mobsters, culminating with the mafia boss.",
        "releaseDate": "1986",
        "developer": "Romstar",
        "genre": "Shooter",
        "players": "1",
        "image": "d55009d9-e5d1-4ede-9671-f03da9d4c2a0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d55009d9-e5d1-4ede-9671-f03da9d4c2a0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 122,
                "location": "Pinburgh Set 49"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 359,
        "gameTitle": "Escape From Lost World",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": "57b8c83d-cc96-41f9-9488-278023698034.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/57b8c83d-cc96-41f9-9488-278023698034.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 110,
                "location": "Pinburgh Set 37"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 360,
        "gameTitle": "Evel Knievel",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Bally",
        "genre": "Celebrities - Licensed",
        "players": "4",
        "image": "e9041b77-3868-403f-a165-26c1d0f8718e.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e9041b77-3868-403f-a165-26c1d0f8718e.jpg"
    },
    {
        "replayGameLocations": [],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 61,
        "gameTitle": "EZ2Dancer",
        "overview": "A dance simulation game, similar to Andamiro's \"Pump it Up\" or Konami \"Dance Dance Revolution\" in which the player must move his/her body to the rhythem of music by pressing arrows or special designed sensors. A difference bettewn DDR, Pump and Ez2dancer is the fact that in Ez2dancer, the player not only has to press arrows, but wave hands throught a series of sensors on the machine itself.",
        "releaseDate": "2000",
        "developer": "Amuse World",
        "genre": "Dance/ Rhythm",
        "players": "2",
        "image": "8e6c98a1-ab45-4d52-8fdf-5e0a473f6277.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8e6c98a1-ab45-4d52-8fdf-5e0a473f6277.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 97,
                "location": "Pinburgh Set 24"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 361,
        "gameTitle": "F-14 Tomcat",
        "overview": null,
        "releaseDate": "1987",
        "developer": "Williams",
        "genre": "Adventure - Combat",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 118,
                "location": "Pinburgh Set 45"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 362,
        "gameTitle": "Faces",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Sonic",
        "genre": null,
        "players": "4",
        "image": "4fdc8904-2068-4e3a-aba7-2c2f672ab1f2.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4fdc8904-2068-4e3a-aba7-2c2f672ab1f2.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 363,
        "gameTitle": "Fairy",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Playmatic",
        "genre": "Fantasy",
        "players": "1",
        "image": "8ef86737-1430-4a45-9002-c6860d7b08fb.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8ef86737-1430-4a45-9002-c6860d7b08fb.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 120,
                "location": "Pinburgh Set 47"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 364,
        "gameTitle": "Family Guy",
        "overview": null,
        "releaseDate": "2007",
        "developer": "Stern",
        "genre": "Cartoon - Licensed - Juvenilia",
        "players": "4",
        "image": "264ce02b-2316-458e-ac85-6fc2e465a866.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/264ce02b-2316-458e-ac85-6fc2e465a866.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 365,
        "gameTitle": "Farfalla",
        "overview": "Italian for butterfly.",
        "releaseDate": "1983",
        "developer": "Zaccaria",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 90,
                "location": "Pinburgh Set 18"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 367,
        "gameTitle": "Fast Draw",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Gottlieb",
        "genre": "American West - Western",
        "players": "4",
        "image": "ee8faba1-615c-41a2-a45d-6f79bfeb022b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ee8faba1-615c-41a2-a45d-6f79bfeb022b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 91,
                "location": "Pinburgh Set 19"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 368,
        "gameTitle": "Fathom",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Bally",
        "genre": "Fantasy - Scuba Diving - Water Sports",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 106,
                "location": "Pinburgh Set 33"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 369,
        "gameTitle": "Fire",
        "overview": null,
        "releaseDate": "1987",
        "developer": "Williams",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 370,
        "gameTitle": "Fireball",
        "overview": null,
        "releaseDate": "1972",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 98,
                "location": "Pinburgh Set 25"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 372,
        "gameTitle": "Firepower",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Williams",
        "genre": "Outer Space",
        "players": "4",
        "image": "dd39ac82-59ae-478e-b5cd-5bad48da5ae1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/dd39ac82-59ae-478e-b5cd-5bad48da5ae1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 98,
                "location": "Pinburgh Set 25"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 373,
        "gameTitle": "Fish Tales",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Williams",
        "genre": "Sports - Fishing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 85,
                "location": "Pinburgh Set 13"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 374,
        "gameTitle": "Flash",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 80,
                "location": "Pinburgh Set 8"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 375,
        "gameTitle": "Flash Gordon",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Bally",
        "genre": "Fictional Characters",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 79,
                "location": "Pinburgh Set 7"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 376,
        "gameTitle": "Flicker",
        "overview": null,
        "releaseDate": "1974",
        "developer": "Bally",
        "genre": "Show Business",
        "players": "2",
        "image": "4cfd3465-d5e9-41a9-aff4-d23be9d5c9e7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4cfd3465-d5e9-41a9-aff4-d23be9d5c9e7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 377,
        "gameTitle": "Flight 2000",
        "overview": "First talking Stern game.",
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 601,
        "gameTitle": "Flintstones, The",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Williams",
        "genre": "Cartoons - Licensed Theme",
        "players": "4",
        "image": "90d81df3-d58e-4814-95e8-82880e6b1215.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/90d81df3-d58e-4814-95e8-82880e6b1215.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 378,
        "gameTitle": "Flip Flop",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Bally",
        "genre": "Western",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 132,
                "location": "Pinburgh Set 59"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 379,
        "gameTitle": "Force II",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Gottlieb",
        "genre": "Combat - Aliens - Outer Space",
        "players": "4",
        "image": "47ab3263-e057-46df-aacc-e1b3083616fa.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/47ab3263-e057-46df-aacc-e1b3083616fa.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 181,
        "gameTitle": "Four Million B.C.",
        "overview": null,
        "releaseDate": "1971",
        "developer": "Bally",
        "genre": "Dinosaurs, Historical",
        "players": "4",
        "image": "34a39d43-974e-4421-8acc-58310bc4cdb7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/34a39d43-974e-4421-8acc-58310bc4cdb7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 380,
        "gameTitle": "Frankenstein",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Sega",
        "genre": "Celebrities - Fictional",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 137,
                "location": "Pinburgh Set 64"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 381,
        "gameTitle": "Freakout (Doozie)",
        "overview": null,
        "releaseDate": null,
        "developer": "Custom",
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 132,
                "location": "Pinburgh Set 59"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 382,
        "gameTitle": "Freedom",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Gottlieb",
        "genre": "American Bicentennial",
        "players": "4",
        "image": "8209b60e-a0ed-473c-9773-2e1d948d03e7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8209b60e-a0ed-473c-9773-2e1d948d03e7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 383,
        "gameTitle": "Freefall",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Stern",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 62,
        "gameTitle": "Frogger",
        "overview": "Frogger is an arcade game introduced in 1981. It was developed by Konami, and licensed for worldwide distribution by Sega/Gremlin. The object of the game is to direct frogs to their homes one by one. To do this, each frog must avoid cars while crossing a busy road and navigate a river full of hazards. Skillful players may obtain some bonuses along the way. The game is regarded as a classic from the golden age of video arcade games and was noted for its novel gameplay and theme. It was also an early example of a game using more than one CPU, as it used two Z80 processors.",
        "releaseDate": "1981",
        "developer": "Sega-Gremlin",
        "genre": "Action",
        "players": "1",
        "image": "f248556a-97dc-496e-b167-02c6990b0ded.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f248556a-97dc-496e-b167-02c6990b0ded.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 63,
        "gameTitle": "Frogger, Cocktail x 2",
        "overview": "Frogger is an arcade game introduced in 1981. It was developed by Konami, and licensed for worldwide distribution by Sega/Gremlin. The object of the game is to direct frogs to their homes one by one. To do this, each frog must avoid cars while crossing a busy road and navigate a river full of hazards. Skillful players may obtain some bonuses along the way. The game is regarded as a classic from the golden age of video arcade games and was noted for its novel gameplay and theme. It was also an early example of a game using more than one CPU, as it used two Z80 processors.",
        "releaseDate": "1981",
        "developer": "Sega-Gremlin",
        "genre": "Action",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 75,
                "location": "Pinburgh Set 3"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 384,
        "gameTitle": "Frontier",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Bally",
        "genre": "American West",
        "players": "4",
        "image": "d8ef163a-e806-4e98-b083-b492f0bd13a7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d8ef163a-e806-4e98-b083-b492f0bd13a7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 135,
                "location": "Pinburgh Set 62"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 385,
        "gameTitle": "Full Throttle",
        "overview": null,
        "releaseDate": "2015",
        "developer": "Heighway",
        "genre": "Sports - Motorcycle Racing",
        "players": "4",
        "image": "f1dfef9a-9351-4d30-8c6e-f7db25ed8d5b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f1dfef9a-9351-4d30-8c6e-f7db25ed8d5b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 100,
                "location": "Pinburgh Set 27"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 386,
        "gameTitle": "Funhouse",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Williams",
        "genre": "Happiness - Circus/ Carnival",
        "players": "4",
        "image": "30a8ca0f-db0d-46e5-8e72-4b323bc04b48.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/30a8ca0f-db0d-46e5-8e72-4b323bc04b48.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 92,
                "location": "Pinburgh Set 20"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 387,
        "gameTitle": "Future Spa",
        "overview": "'Future Spa' was the first game from this manufacturer to use continuous background sound. ",
        "releaseDate": "1979",
        "developer": "Bally",
        "genre": "Fitness - Fantasy - Relaxation",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 661,
        "gameTitle": "Future Tom Tom",
        "overview": "Drum machine.",
        "releaseDate": "2013",
        "developer": "Konami",
        "genre": "Music",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 64,
        "gameTitle": "Galaga",
        "overview": "Galaga is a fixed shooter arcade game developed and published by Namco in Japan and published by Midway in North America in 1981. It is the sequel to Galaxian, released in 1979. The gameplay of Galaga puts the player in control of a space ship which is situated on the bottom of the screen. At the beginning of each stage, the area is empty, but over time, enemy aliens fly in formation, and once all of the enemies arrive on screen, they will come down at the player's ship in formations of one or more and may either shoot it or collide with it. During the entire stage, the player may fire upon the enemies, and once all enemies are vanquished, the player moves onto the next stage.\r\n\r\nGalaga has proven very successful. The arcade version of it has been ported to many consoles, and it has had several sequels, most recently Galaga Legions for the PlayStation Network and Xbox Live Arcade services.\r\n\r\nThe objective of Galaga is to score as many points as possible by destroying insect-like enemies. The player controls a starfighter that can move left and right along the bottom of the playfield. Enemies swarm in groups in a formation near the top of the screen, and then begin flying down toward the player, firing bombs at the fighter. The game ends when the player's last fighter is lost, either by colliding with an enemy or one of its bullets, or by being captured.\r\n\r\nGalaga introduces a number of new features over its predecessor, Galaxian. Among these is the ability to fire more than one bullet at a time, a count of the player's \"hit/miss ratio\" at the end of the game, and a bonus \"Challenging Stage\" that occurs every few levels, in which a series of enemies fly onto and out of the screen in set patterns without firing at the player's ship or trying to crash into it.",
        "releaseDate": "1981",
        "developer": "Midway",
        "genre": "Shooter",
        "players": "2",
        "image": "914c7d6d-eb58-4833-b371-d69d90112547.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/914c7d6d-eb58-4833-b371-d69d90112547.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 66,
        "gameTitle": "Galaga 3",
        "overview": "Another shooting game in which you can capture the enemies and make them work with you if you hit the queen ship when it dives. Not widely known because released during video game crash.",
        "releaseDate": "1984",
        "developer": "Namco",
        "genre": "Shooter",
        "players": "1",
        "image": "9632a623-512d-42a0-8d1f-ea39fca8497d.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9632a623-512d-42a0-8d1f-ea39fca8497d.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 67,
        "gameTitle": "Galaxian",
        "overview": "Galaxian expanded on the formula pioneered by Space Invaders. As in the earlier game, Galaxian featured a horde of attacking aliens that exchanged shots with the player. In contrast to Space Invaders, Galaxian added an element of drama by having the aliens periodically make kamikaze-like dives at the player's ship, the Galaxip.",
        "releaseDate": "1979",
        "developer": "Midway",
        "genre": "Shooter",
        "players": "2",
        "image": "5e7c4bc6-4064-414c-8ea4-f2f8a92a72a9.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5e7c4bc6-4064-414c-8ea4-f2f8a92a72a9.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 137,
                "location": "Pinburgh Set 64"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 388,
        "gameTitle": "Galaxy",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": "Outer space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 136,
                "location": "Pinburgh Set 63"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 645,
        "gameTitle": "Game of Thrones",
        "overview": null,
        "releaseDate": "2015",
        "developer": "Stern",
        "genre": "Licensed Theme - Medieval",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 123,
                "location": "Pinburgh Set 50"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 389,
        "gameTitle": "Gameshow",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Bally",
        "genre": "Comedy - Game Show - TV",
        "players": "4",
        "image": "cc2fc032-3d08-4295-8316-f01a0c6c3a85.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cc2fc032-3d08-4295-8316-f01a0c6c3a85.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 83,
                "location": "Pinburgh Set 11"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 390,
        "gameTitle": "Gator",
        "overview": null,
        "releaseDate": "1969",
        "developer": "Bally",
        "genre": "Adventure - Alligators - Water",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 68,
        "gameTitle": "Gauntlet",
        "overview": "Gauntlet is a fantasy-themed hack and slash 1985 arcade game by Atari Games. It is noted as the first class-based multiplayer game. Released during the emergence of popularity of other role-playing games like Dungeons & Dragons, the game was a sensation, being one of the first true dungeon crawl arcade games.",
        "releaseDate": "1985",
        "developer": "Atari",
        "genre": "Adventure",
        "players": "4+",
        "image": "2f11ec72-770c-40bc-af5c-f38e9deebdf0.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2f11ec72-770c-40bc-af5c-f38e9deebdf0.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 69,
        "gameTitle": "Gauntlet Legends",
        "overview": "Gauntlet Legends is an arcade game released in 1998 by Atari Games. It is a fantasy themed hack and slash styled dungeon crawl game, a sequel to 1985's popular Gauntlet and 1986's Gauntlet II and marks the final game in the series to be produced by Atari Games. Its unusual features for an arcade game included passwords and characters that could be saved, enabling players to play over the course of a long period.",
        "releaseDate": "1998",
        "developer": "Atari Games",
        "genre": "AdventureRole-Playing",
        "players": "4+",
        "image": "71fa2f2e-09f4-41e5-870d-c958491bb0ac.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/71fa2f2e-09f4-41e5-870d-c958491bb0ac.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 75,
                "location": "Pinburgh Set 3"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 391,
        "gameTitle": "Gay 90's",
        "overview": null,
        "releaseDate": "1970",
        "developer": "Williams",
        "genre": "American 1890's - Historical",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 77,
                "location": "Pinburgh Set 5"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 392,
        "gameTitle": "Genesis",
        "overview": null,
        "releaseDate": "1986",
        "developer": "Gottlieb",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 113,
                "location": "Pinburgh Set 40"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 393,
        "gameTitle": "Genie",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Gottlieb",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 394,
        "gameTitle": "Getaway",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Allied Leisure",
        "genre": "Cops and Robbers",
        "players": "4",
        "image": "5731c2c9-1367-479c-9871-2b90f018e1f1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5731c2c9-1367-479c-9871-2b90f018e1f1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 395,
        "gameTitle": "Getaway: High Speed II",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Williams",
        "genre": "Cops - Driving - Police - Speeding",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 77,
        "gameTitle": "Ghouls 'N Ghosts",
        "overview": "The gameplay for Ghouls n' Ghosts is eerily similar to that of Ghosts 'n Goblins. The player controls the knight Arthur, who must advance through a series of spooky levels and defeat a number of undead and demonic creatures in his quest to restore souls stolen by Lucifer, including the soul of his bride, Princess Guinevere. Along the way, Arthur can pick up a variety of weapons and armor to help him in his quest.\r\n\r\nIt is the sequel to Ghosts'n Goblins and the second game in the Ghosts'n Goblins series.",
        "releaseDate": "1988",
        "developer": "Capcom",
        "genre": "ActionAdventureFightingPlatform",
        "players": "1",
        "image": "1c2b3768-863b-4bb4-9ea9-0e884c43344e.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1c2b3768-863b-4bb4-9ea9-0e884c43344e.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 396,
        "gameTitle": "Gladiators",
        "overview": "The Player is a Gladiator who must complete six pyramid battle rounds before he can fight a 3 headed dragon in the \"Beasts Challenge\" round. The first 5 rounds can be played in 2 ball multiball or by time as determined by the \"Begin Pyramid Round\" lamps. \"Calm Before The Storm\" is a 2 or 3 ball multiball round and Round 7 \"Beasts Challenge\" is an untimed 1 ball round. Rounds can be entered from plunger skill shot, mystery, and \"Begin Pyramid Round\" hole.",
        "releaseDate": "1993",
        "developer": "Gottlieb",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 102,
                "location": "Pinburgh Set 29"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 397,
        "gameTitle": "Godzilla",
        "overview": null,
        "releaseDate": "1998",
        "developer": "Sega",
        "genre": "Licensed Theme",
        "players": "6",
        "image": "4a2cf363-b2d8-4733-b88d-881b48ea2d3c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4a2cf363-b2d8-4733-b88d-881b48ea2d3c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 71,
        "gameTitle": "Golden Axe",
        "overview": "An evil entity known as Death Adder has captured the King and his daughter, and holds them captive in their castle. He also finds the Golden Axe, the magical emblem of Yuria, and threatens to destroy both the axe and the royal family unless the people of Yuria accept him as their ruler. Three Warriors set out on a quest to rescue Yuria and avenge their losses at the hands of Death Adder. The first is a battle axe-wielding dwarf, Gilius Thunderhead, from the mines of Wolud, whose twin brother was killed by the soldiers of Death Adder. Another is a male barbarian, Ax Battler, wielding a two handed broadsword looking for revenge for the murder of his mother. The last is a long-sword-wielding Tyris Flare, an amazon, whose parents were both killed by Death Adder.",
        "releaseDate": "1989",
        "developer": "Sega",
        "genre": "Action",
        "players": "2",
        "image": "52c816dd-77e3-4798-9d75-390ca0675199.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/52c816dd-77e3-4798-9d75-390ca0675199.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 73,
        "gameTitle": "Golden Tee 2K",
        "overview": "Golden Tee Golf (also known as Golden Tee) is a golf arcade game series by Incredible Technologies.",
        "releaseDate": "2000",
        "developer": "Incredible Tech",
        "genre": "Sports",
        "players": "1",
        "image": "d49c2e56-49fe-4861-9a69-d0a7dd79eff0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d49c2e56-49fe-4861-9a69-d0a7dd79eff0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 74,
        "gameTitle": "Golden Tee 3D Golf",
        "overview": "\r\nAn excellent golfing game from Incredible Technologies.",
        "releaseDate": "1995",
        "developer": "Incredible Technologies",
        "genre": "Sports",
        "players": "1",
        "image": "cd0de55a-2e81-47da-bfd5-347272c7272f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cd0de55a-2e81-47da-bfd5-347272c7272f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 75,
        "gameTitle": "Golden Tee Golf",
        "overview": "Golden Tee Golf is a golf arcade game series by Incredible Technologies.",
        "releaseDate": "1990",
        "developer": "Strata",
        "genre": "Sports",
        "players": "4+",
        "image": "70b759d3-7e21-4bdf-8bee-7e2f5ed59798.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/70b759d3-7e21-4bdf-8bee-7e2f5ed59798.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 99,
                "location": "Pinburgh Set 26"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 398,
        "gameTitle": "Goldeneye",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Sega",
        "genre": "Spies - Licensed theme",
        "players": "6",
        "image": "0e6e5555-7bff-4ce4-ae1e-a0171a87474e.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0e6e5555-7bff-4ce4-ae1e-a0171a87474e.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 34,
                "location": "E3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 76,
        "gameTitle": "Gorf",
        "overview": "With its title doubling as an acronym for \"Galactic Orbiting Robot Force,\" Midway's top-down space shooter undoubtedly has one of the silliest names in arcade history. Released in 1981, Gorf immediately grabbed players by talking to them in a terrifyingly eerie robotic voice, via the cutting-edge Votrax speech chip -- one of the first uses of synthesized speech in a game. Once they were in, players found themselves shooting up alien hordes across five distinctly different stages, several of which were well-made clones of popular arcade titles like Galaxian and Space Invaders. It may not have been entirely original (fun licensing fact: It was initially developed to be a Star Trek game), but that didn't make Gorf any less fun.",
        "releaseDate": "1981",
        "developer": "Midway",
        "genre": "ActionShooter",
        "players": "2",
        "image": "855855eb-87d9-49ba-90cb-cb50b9835f40.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/855855eb-87d9-49ba-90cb-cb50b9835f40.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 124,
                "location": "Pinburgh Set 51"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 400,
        "gameTitle": "Gorgar",
        "overview": "'Gorgar' was the first talking pinball machine commercially released and had a vocabulary of seven words. 'Gorgar' also had a heart beat sound that would speed up during longer game play.",
        "releaseDate": "1979",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 78,
        "gameTitle": "Grand Champion",
        "overview": "A vertical driving game. Compete against other computer cars to win races.",
        "releaseDate": "1981",
        "developer": "Taito",
        "genre": "Racing",
        "players": "1",
        "image": "a72b94e5-ce78-4a83-9edf-dd8628209c34.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a72b94e5-ce78-4a83-9edf-dd8628209c34.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 107,
                "location": "Pinburgh Set 34"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 401,
        "gameTitle": "Grand Lizard",
        "overview": null,
        "releaseDate": "1986",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 77,
                "location": "Pinburgh Set 5"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 402,
        "gameTitle": "Grand Prix",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Williams",
        "genre": "Sports - Auto Racing",
        "players": "4",
        "image": "a775144b-a164-486a-9344-a9ae74dba7af.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a775144b-a164-486a-9344-a9ae74dba7af.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 403,
        "gameTitle": "Grand Slam",
        "overview": "This 2-player Grand Slam was the first pinball machine produced under the new Bally/Midway name.",
        "releaseDate": "1983",
        "developer": "Bally",
        "genre": "Sports - Baseball",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 79,
        "gameTitle": "Gravitar",
        "overview": "The player controls a small blue spacecraft. The game starts in a fictional solar system with several planets to explore. If the player moves his ship into a planet, he will be taken to a side-view landscape. Unlike many other shooting games, gravity plays a fair part in Gravitar: the ship will be pulled slowly to the deadly star in the overworld, and downward in the side-view levels.\r\n\r\nThe player has five buttons: two to rotate the ship left or right, one to shoot, one to activate the thruster, and one for both a tractor beam and force field. Gravitar, Asteroids, Asteroids Deluxe and Space Duel all used similar 5-button controlling system.\r\n\r\nIn the side-view levels, the player has to destroy red bunkers that shoot constantly, and can also use the tractor beam to pick up blue fuel tanks. Once all of the bunkers are destroyed, the planet will blow up, and the player will earn a bonus. Once all planets are destroyed, the player will move onto another solar system.\r\n\r\nThe player will lose a life if he crashes into the terrain or gets hit by an enemy's shot, and the game will end immediately if fuel runs out.\r\n\r\nGravitar has 12 different planets. Red Planet is available in all 3 phases in the universe; it contains a reactor. Shooting the reactor core activates a link. Escaping the reactor successfully moves the player to the next phase of planets, awards bonus points and 7500 units of fuel. Reactor escape time reduces after each phase and eventually becomes virtually impossible to complete.\r\n\r\nAfter completing all 11 planets (or alternatively completing the reactor three times) the player enters the second universe and the gravity will reverse. Instead of dragging the ship towards the planet surface, the gravity pushes it away. In the third universe the landscape becomes invisible and the gravity is positive again. The final, fourth universe, has invisible landscape and reverse gravity. After completing the fourth universe the game starts over. However, the reactor escape time will never reset back to high levels again.\r\n\r\nThe programmers thought that even the best players could never complete the most difficult planets on the invisible levels.",
        "releaseDate": "1982",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": "8cd2a00f-5e85-4408-8da1-9afdb83ee3bc.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8cd2a00f-5e85-4408-8da1-9afdb83ee3bc.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 211,
        "gameTitle": "Grid, The",
        "overview": "A fourplayer shooter that began as a coinop, The Grid is best described as a cross between War and Smash TV. Set in a variety of computer generated arenas, The Grid boasts 25 different weapons including flamethrowers, machineguns, and even megaphones, individual special abilities enhanced by powerups, and one of the goriest presentations around.",
        "releaseDate": "2001",
        "developer": "Midway",
        "genre": "Shooter",
        "players": "4",
        "image": "4a9a3d1c-cbc6-4b47-98b3-829ac13496d0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4a9a3d1c-cbc6-4b47-98b3-829ac13496d0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 80,
        "gameTitle": "Gridiron Fight, Cocktail",
        "overview": "ehkan Gridiron Fight is a two-dimensional top-down scrolling American football game in which the player(s) control the virtual player on their team who is closest to the ball, with the trackball determining the speed and direction at which the player runs. A single push-button labeled \"Kick\" causes the virtual player in possession to release the ball with the same force and direction in which he is currently running. (This button is duplicated on either side of the trackball for left or right-handed players.) The Player 1 (red trackball) side contained two additional push-buttons for choosing between Single or Two-Player games. Before each play, players are invited to select from a variety of formations, e.g. \"Sweep\" or \"Draw\". The formation selected is displayed on a seven-segment LED on the player's control panel.",
        "releaseDate": "1985",
        "developer": "Tehkan",
        "genre": "Sports",
        "players": "2",
        "image": "2a856b5c-5c71-4159-9656-7f00ea86fa5a.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2a856b5c-5c71-4159-9656-7f00ea86fa5a.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 81,
        "gameTitle": "Guerrilla War",
        "overview": "Guerrilla War is an overhead run and gun game produced by SNK. Originally released for arcades in 1987 as a coin-operated arcade game, Guerrilla War followed the adventures of two unnamed rebel commandos (Che Guevara and Fidel Castro in the Japanese version) as they raid an unnamed Caribbean Island in order to free it from the rule of an unnamed tyrannical dictator. Along the way the players vanquish hordes of unnamed enemy soldiers while attempting to rescue hostages (with large score deductions for any hostages killed in the crossfire), collecting weapons from troopers and operating tanks.",
        "releaseDate": "1987",
        "developer": "SNK",
        "genre": "Action",
        "players": "2",
        "image": "86f5a552-31d9-4107-9e44-01fea7712143.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/86f5a552-31d9-4107-9e44-01fea7712143.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 82,
        "gameTitle": "Guitar Freaks 3rd Mix",
        "overview": "GuitarFreaks is a music video game series produced by Konami. It is a rhythm game where the player uses a controller to simulate the playing of an electric guitar. The game consists of music predominantly from the rock music, rock and roll and J-pop genres. It is considered one of the most influential video games of all time, for having laid the foundations for popular guitar-based rhythm games, such as the Guitar Hero series.[2] Working Designs attempted to bring Guitar Freaks PlayStation 2 games in the U.S., but patent problems with the guitar controller prevented the project from moving forward.[3]\r\n\r\nThe game is now in its nineteenth version, GuitarFreaks V8, which was released in March 28, 2011. It was speculated to be the final release of GuitarFreaks V. A spin-off series, GuitarFreaks XG was released in Japanese arcades on March 10, 2010,[4] which added two more buttons to the fret bar. A sequel, GuitarFreaks XG2, was released on March 9, 2011. Another sequel, GuitarFreaks XG3, was released on Feb. 23, 2012.",
        "releaseDate": "2000",
        "developer": "Konami",
        "genre": "Music",
        "players": "2",
        "image": "3d4973a0-8052-4851-aa0d-e23a5638ce67.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3d4973a0-8052-4851-aa0d-e23a5638ce67.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 129,
                "location": "Pinburgh Set 56"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 404,
        "gameTitle": "Guns N' Roses",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Data East",
        "genre": "Celebrities - Licensed - Music",
        "players": "4",
        "image": "c38b03fd-6bed-4402-b9dd-974689766479.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c38b03fd-6bed-4402-b9dd-974689766479.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 84,
        "gameTitle": "Gyruss",
        "overview": "Gyruss is a shoot 'em up video arcade game developed by Konami, and released in 1983. \r\n\r\nIt was designed by Yoshiki Okamoto, who had earlier created Time Pilot for Konami. Gyruss was licensed to Centuri in the United States, and was ported to numerous games consoles and home computers. It follows in the tradition of space war games such as Space Invaders and Galaga.\r\n\r\nGyruss was the second and last game Yoshiki Okamoto designed for Konami, after Time Pilot. Due to pay disputes, he was fired after the release of this game, and soon joined Capcom, where he would write 1942 and the first Street Fighter game.\r\n\r\nThe game's background music is an electronic, fast-paced arrangement of J. S. Bach's Toccata and Fugue in D minor, BWV 565; this particular arrangement is similar in sound to \"Toccata\", a rock arrangement by the UK-based instrumentalist group Sky.\r\n\r\n Gyruss is notable for using stereo sound, which according to the bonus material for Konami Arcade Classics, was achieved by utilizing discrete audio circuits. The game used three microprocessors: two Z80 microprocessors and one 6809, as well as an 8039 microcontroller. For the sound, five AY-3-8910 PSG sound chips and a DAC.\r\n\r\nGyruss was released in both upright and cocktail cabinets.\r\n\r\nR.Hirst \"KOO\", M.Jones, \"BOX\" and the Elliott Brother's are arguably considered some of the best Gyruss players of the 1990's.",
        "releaseDate": "1983",
        "developer": "Konami",
        "genre": "Shooter",
        "players": "2",
        "image": "d87d76c5-8709-4a62-892b-882972a69495.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d87d76c5-8709-4a62-892b-882972a69495.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 142,
                "location": "Pinburgh Set 69"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 405,
        "gameTitle": "Hang Glider",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Bally",
        "genre": "Sports - Hang Gliding",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 649,
        "gameTitle": "Hang-On",
        "overview": "Using a behind the motorcycle perspective, the player races a linear race track divided into several stages within a limited time. Reaching a checkpoint at the end of each stage extends the time limit. The game ends if the time runs out.\r\n\r\nThe arcade game contains in-game billboards for Bridgestone (and their Desert Dueler tires), Shell, Garelli Motorcycles, TAG, John Player Special cigarettes, Forum cigarettes, and for \"Marbor\", an obvious parody of Marlboro cigarettes. There would be a controversy over cigarette ads in games marketed to children upon the release of another Sega racing game, Super Monaco GP in 1989.",
        "releaseDate": "1985",
        "developer": "Sega",
        "genre": "Racing",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 81,
                "location": "Pinburgh Set 9"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 406,
        "gameTitle": "Harlem Globetrotters",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Bally",
        "genre": "Sports - Basketball - Licensed Theme",
        "players": "4",
        "image": "324be03a-bac3-4018-ac07-5b9a7aa33892.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/324be03a-bac3-4018-ac07-5b9a7aa33892.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 86,
        "gameTitle": "Harley-Davidson",
        "overview": "In Harley-Davidson & L.A. Riders, the player rides one of five Harley-Davidson models. The objective is to complete a series of checkpoints around Los Angeles under a time limit. The objective is similar to the later Sega arcade game, Crazy Taxi (1999).",
        "releaseDate": "1998",
        "developer": "Sega AM1",
        "genre": "Racing",
        "players": "1",
        "image": "cd726d22-b999-4385-9b18-40cc16ecd70b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cd726d22-b999-4385-9b18-40cc16ecd70b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 73,
                "location": "Pinburgh Set 1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 407,
        "gameTitle": "Haunted House",
        "overview": null,
        "releaseDate": "1982",
        "developer": "Gottlieb",
        "genre": "Adventure - Supernatural",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 128,
                "location": "Pinburgh Set 55"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 408,
        "gameTitle": "Heavy Metal Meltdown",
        "overview": null,
        "releaseDate": "1987",
        "developer": "Bally",
        "genre": "Music",
        "players": "4",
        "image": "d85966a1-bec2-4743-acb2-228c9dc5972d.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d85966a1-bec2-4743-acb2-228c9dc5972d.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 409,
        "gameTitle": "Hee Haw",
        "overview": "Probably based on the American television show of the same name that ran 1969-1993 and featured country music and comedy.",
        "releaseDate": "1973",
        "developer": "Chicago Coin",
        "genre": "Music - Singing - Dancing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 410,
        "gameTitle": "Hi-Deal",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Bally",
        "genre": "Airplanes - Aviation - City Buildings - City Scene - Flying - Playing Cards",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 112,
                "location": "Pinburgh Set 39"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 412,
        "gameTitle": "High Hand",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Gottlieb",
        "genre": "Cards/ Gambling",
        "players": "1",
        "image": "300b7ac7-98de-4601-b7b1-80c2f8a40ed4.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/300b7ac7-98de-4601-b7b1-80c2f8a40ed4.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 87,
        "gameTitle": "High Impact Football",
        "overview": "The players must use an 8-way joystick and a single button to control their currently-selected players - and there are over 40 offensive plays and defensive formations to choose from (including \"Bombs\", \"Double Reverses\", \"Half-Back Options\", \"Nickel Defense\", \"Zone Coverage\", \"Stunts\" and \"Red-Dog Blitz\"), making the game more complex than Midway's Pigskin 621 AD (which was released earlier in 1990 but it only allowed two players to play it simultaneously). The game also features cheerleaders, coaches, commentary by an insane play-by-play announcer called \"Manic Max\", and a crowd of fans who cheer or jeer at the players, based on their performance (the leader of whom is \"Joe Six-Pack\").",
        "releaseDate": "1990",
        "developer": "Williams Electronics",
        "genre": "Sports",
        "players": "4+",
        "image": "5341ab19-4209-49ab-8130-0965ee0c75a0.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5341ab19-4209-49ab-8130-0965ee0c75a0.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 130,
                "location": "Pinburgh Set 57"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 413,
        "gameTitle": "High Roller Casino",
        "overview": null,
        "releaseDate": "2001",
        "developer": "Stern",
        "genre": "Gambling",
        "players": "4",
        "image": "c2a6f219-aa42-4a9c-9938-109c75b6d8d9.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c2a6f219-aa42-4a9c-9938-109c75b6d8d9.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 83,
                "location": "Pinburgh Set 11"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 414,
        "gameTitle": "High Speed",
        "overview": "First pinball to play a complete song.\r\nFirst Williams pin game to use alpha-numeric displays.\r\nFirst use of Auto Percentaging in a solid-state game (for replay scores).\r\nFirst Jackpot available only during multiball.\r\nFirst use of broken switch compensation programming.\r\nFirst SS game with operator report.",
        "releaseDate": "1985",
        "developer": "Williams",
        "genre": "Cops - Driving - Police - Speeding",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 114,
                "location": "Pinburgh Set 41"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 411,
        "gameTitle": "Hi-Lo Ace",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Bally",
        "genre": "Cards/ Gambling",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 679,
        "gameTitle": "Hobbit, The",
        "overview": null,
        "releaseDate": "2016",
        "developer": "Jersey Jack Pinball",
        "genre": "Fantasy - Licensed Theme - Wizard/Magic",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 654,
        "gameTitle": "Hockey Stadium",
        "overview": "Air Hockey. Sharks vs. Wings. 3 Pucks.",
        "releaseDate": "1996",
        "developer": "Sega",
        "genre": "Air Hockey",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 113,
                "location": "Pinburgh Set 40"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 415,
        "gameTitle": "Hokus Pokus",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Bally",
        "genre": "Entertainment - Magic",
        "players": "2",
        "image": "5bc67112-5e4f-4835-8891-37294facc065.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5bc67112-5e4f-4835-8891-37294facc065.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 416,
        "gameTitle": "Hook",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Data East",
        "genre": "Licensed Theme - Pirates - Fictional",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 133,
                "location": "Pinburgh Set 60"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 417,
        "gameTitle": "Hoops",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Gottlieb",
        "genre": "Sports - Basketball",
        "players": "4",
        "image": "cf6d9d86-9308-4543-81b1-7af87712a7b7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cf6d9d86-9308-4543-81b1-7af87712a7b7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 98,
                "location": "Pinburgh Set 25"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 418,
        "gameTitle": "Hot Line",
        "overview": null,
        "releaseDate": "1966",
        "developer": "Williams",
        "genre": "Sports - Fishing",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 119,
                "location": "Pinburgh Set 46"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 419,
        "gameTitle": "Hot Tip (E.M.)",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Williams",
        "genre": "Sports - Horse Racing",
        "players": "4",
        "image": "caa8ce11-efd0-46d5-a78c-454beaf6fdfb.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/caa8ce11-efd0-46d5-a78c-454beaf6fdfb.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 141,
                "location": "Pinburgh Set 68"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 420,
        "gameTitle": "Hurricane",
        "overview": null,
        "releaseDate": "1991",
        "developer": "Williams",
        "genre": "Happiness - Circus/ Carnival",
        "players": "4",
        "image": "03698ec2-9886-403c-9a8b-6c48899e0967.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/03698ec2-9886-403c-9a8b-6c48899e0967.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 88,
        "gameTitle": "Hyper Bishi Bashi Champ",
        "overview": "A collection of short mini-games. It was released in Japan and Europe, possibly other regions but not in the US. The cabinet has three large coloured buttons for each player (as well as a start button), most of the games involve quickly bashing the buttons or pressing the colour corresponding to an object on-screen. There are always three competitors, which can be either human or CPU controlled. ",
        "releaseDate": "2000",
        "developer": "Konami",
        "genre": "Mini-Game Collection",
        "players": "3",
        "image": "2e6ebf8a-4838-4f50-9c53-473c409a557b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2e6ebf8a-4838-4f50-9c53-473c409a557b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 89,
        "gameTitle": "Hyper Sports",
        "overview": "Hyper Sports, known in Japan as Hyper Olympic '84 is an arcade game published in 1984 by Konami. It is the sequel to 1983's Track & Field and features seven all-new Olympic events. Like its predecessor, Hyper Sports has two run buttons and one action button per player. The Japanese release of the game sported an official license for the 1984 Summer Olympics.",
        "releaseDate": "1984",
        "developer": "Konami",
        "genre": "Sports",
        "players": "2",
        "image": "b8f609df-387b-4192-8c2e-9f12a054049d.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b8f609df-387b-4192-8c2e-9f12a054049d.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 655,
        "gameTitle": "I, Robot",
        "overview": "The game play consists of moving robot1984 over all of the red tiles while avoiding objects flying at you from the back of the screen. Eliminating the red tiles diminishes the shield at the back of the playfield which prevents you from flying to the next level. To get to all the red tiles, players sometimes need to leap across empty space which creates a permanent bridge between the two points. Leaps across empty space have to be timed so that the \"eye\" of Big Brother in the back of the playfield, which randomly opens and closes, does not see robot1984 and destroy him.",
        "releaseDate": "1983",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 90,
        "gameTitle": "Ice Cold Beer",
        "overview": "The object of the game is to use the two joysticks to tip the bar back and forth and maneuver the ball up to a specific lit hole on the playfield, while avoiding unlit holes. When the player deposits the ball in the lit hole, the ball and the bar return to the bottom of the playfield, and the next target hole is lit. The game begins with the bottom-most hole lit, and subsequent lit holes become more and more difficult to reach while avoiding unlit holes.",
        "releaseDate": "1983",
        "developer": "Taito",
        "genre": null,
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 421,
        "gameTitle": "Ice Fever",
        "overview": null,
        "releaseDate": "1985",
        "developer": "Gottlieb",
        "genre": "Sports - Hockey",
        "players": "4",
        "image": "c55b5136-b766-4c0f-87b8-5b960f637f16.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c55b5136-b766-4c0f-87b8-5b960f637f16.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 114,
                "location": "Pinburgh Set 41"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 422,
        "gameTitle": "Incredible Hulk",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Gottlieb",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "2708bbb8-5577-4aba-a0d5-0beb527e7c65.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2708bbb8-5577-4aba-a0d5-0beb527e7c65.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 91,
                "location": "Pinburgh Set 19"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 423,
        "gameTitle": "Independence Day",
        "overview": null,
        "releaseDate": "1996",
        "developer": "Sega",
        "genre": "Outer Space/ Licensed Theme/ Action Movie",
        "players": "6",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 424,
        "gameTitle": "Indiana Jones",
        "overview": null,
        "releaseDate": "2008",
        "developer": "Stern",
        "genre": "Licensed Theme - Movie - Myth and Legend",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 94,
                "location": "Pinburgh Set 21"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 425,
        "gameTitle": "Indiana Jones: Pinball Adventure",
        "overview": "Features custom-recorded speech by actor John Rhys-Davies (\"Sallah\").",
        "releaseDate": "1993",
        "developer": "Williams",
        "genre": "Adventure - Fictional - Licensed Theme",
        "players": "4",
        "image": "6dcaa043-cd80-4aa2-bea8-f0aafaf8f0d1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6dcaa043-cd80-4aa2-bea8-f0aafaf8f0d1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 137,
                "location": "Pinburgh Set 64"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 426,
        "gameTitle": "Indianapolis 500",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Bally",
        "genre": "Sports - Auto Racing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 92,
        "gameTitle": "Iron Horse",
        "overview": "Side scrolling platform cowboy train-robber game. Select between fists, pistols or a whip and then work your way down the steam train killing the bad guys and collecting money and special weapons. Cowboy music score.",
        "releaseDate": "1986",
        "developer": "Konami",
        "genre": "Scrolling Fighter",
        "players": "1",
        "image": "d7437808-3a2d-4492-83fe-733e641be1c0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d7437808-3a2d-4492-83fe-733e641be1c0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 117,
                "location": "Pinburgh Set 44"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 427,
        "gameTitle": "Iron Man",
        "overview": null,
        "releaseDate": "2010",
        "developer": "Stern",
        "genre": "Comics - Fantasy - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 84,
                "location": "Pinburgh Set 12"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 428,
        "gameTitle": "Jackbot",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Williams",
        "genre": "Fantasy - Gambling - Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 672,
        "gameTitle": "Jive Time",
        "overview": null,
        "releaseDate": "1970",
        "developer": "Williams",
        "genre": "Music - Singing",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            },
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 129,
                "location": "Pinburgh Set 56"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 429,
        "gameTitle": "Johnny Mnemonic",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Williams",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "027df879-5f29-47d1-b82b-6fcff96e05b9.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/027df879-5f29-47d1-b82b-6fcff96e05b9.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 93,
        "gameTitle": "Johnny Nero Action Hero",
        "overview": "A shooting game with two selectable modes - Standard Action Mode and Guns Of Fury - as well as three selectable \"Comic Book\" levels: Space Wars, The Curse Of The Mummy King and Ghost Town. Players shoot on-screen enemies and power-ups and shoot off screen to reload.",
        "releaseDate": "2004",
        "developer": "I.C.E.",
        "genre": null,
        "players": "2",
        "image": "96b0fa65-66cd-45a1-beb4-c0fde8a1acdf.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/96b0fa65-66cd-45a1-beb4-c0fde8a1acdf.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 97,
                "location": "Pinburgh Set 24"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 430,
        "gameTitle": "Joker Poker",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Gottlieb",
        "genre": "Cards/ Gambling",
        "players": "4",
        "image": "bdb24f49-1586-46b0-8b8b-8ad0e4f3407a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/bdb24f49-1586-46b0-8b8b-8ad0e4f3407a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            },
            {
                "id": 125,
                "location": "Pinburgh Set 52"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 431,
        "gameTitle": "Jokerz",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Williams",
        "genre": "Cards/ Gambling",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 94,
        "gameTitle": "Journey",
        "overview": "You must recover the instruments for the five members of the rock band Journey. Characters have black and white digitized faces. Plays many Journey songs, including a tape of Separate Ways. Bonus round: you the roadie must push fans away from the concert stage.",
        "releaseDate": "1983",
        "developer": "Bally Midway",
        "genre": "ActionMusicRole-Playing",
        "players": "1",
        "image": "2f2b4ca1-1097-4a90-82fa-ee5487ae1ed9.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2f2b4ca1-1097-4a90-82fa-ee5487ae1ed9.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 96,
        "gameTitle": "Joust 2: Survival Of The Fittest",
        "overview": "Joust 2: Survival of the Fittest is an arcade game developed by Williams Electronics and released in 1986. It is a sequel to Williams' 1982 game Joust. Like its predecessor, Joust 2 is a platform game that features two-dimensional (2D) graphics. The player uses a button and joystick to control a knight riding a flying ostrich. The object is to progress through levels by defeating groups of enemy knights riding buzzards. Joust 2 features improved audio-visuals and gameplay elements absent from the original.\r\n\r\nThe game uses more advanced hardware than the original Joust, allowing for the new elements. John Newcomer led development again, which began to create a conversion kit that allowed arcade owners to convert the cabinet into another game. Williams chose a vertically oriented screen for the kit as a result of the design's popularity at the time. Released during the waning days of the golden age of arcade games, Joust 2 did not achieve the success that Joust reached. The game was later released on home consoles as part of arcade compilations.",
        "releaseDate": "1986",
        "developer": "Wiliams Electronics",
        "genre": "ActionPlatform",
        "players": "2",
        "image": "20d7204c-2104-499f-a2d9-c3c44d50d02c.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/20d7204c-2104-499f-a2d9-c3c44d50d02c.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 95,
        "gameTitle": "Joust, Cocktail",
        "overview": "Joust is an arcade game developed by Williams Electronics and released in 1982. It is a platform game that features two-dimensional (2D) graphics. The player uses a button and joystick to control a knight riding a flying ostrich. The object is to progress through levels by defeating groups of enemy knights riding buzzards.",
        "releaseDate": "1982",
        "developer": "Williams",
        "genre": "ActionFighting",
        "players": "2",
        "image": "c45bc63e-fafd-4664-ab2e-eb388249e9c8.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c45bc63e-fafd-4664-ab2e-eb388249e9c8.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 97,
        "gameTitle": "Jr. Pac-Man",
        "overview": "The gameplay of Jr. Pac-Man is very similar to that of its predecessors: The player controls the eponymous Jr. Pac-Man (who wears an animated propeller beanie), and scores points by eating all of the Pac-Dots in the maze, while four ghosts chase him around the maze and attempt to kill him. The player can eat an energizer to turn the ghosts blue, making them vulnerable for a short period of time, and allowing the player to eat them for extra points. Once the maze is cleared, a new maze will be presented and the gameplay will continue.",
        "releaseDate": "1983",
        "developer": "Bally Midway",
        "genre": "Action",
        "players": "1",
        "image": "20960506-6545-4240-b64b-e024731404a0. Pac-Man.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/20960506-6545-4240-b64b-e024731404a0. Pac-Man.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 663,
        "gameTitle": "Jubeat",
        "overview": "The basic gameplay of the series is similar to Nintendo DS music games such as Osu! Tatakae! Ouendan and Elite Beat Agents and can be considered to be similar to Whac-A-Mole. Animated explosions or other animations, called \"markers\", that can be chosen at the song select screen are shown within the panels synced to a track of the player's choosing; when they reach a \"hot point\", which is dependent on the marker chosen, the player must tap the corresponding screen to score points. ",
        "releaseDate": "2008",
        "developer": "Konami",
        "genre": "Music",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 109,
                "location": "Pinburgh Set 36"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 433,
        "gameTitle": "Judge Dredd",
        "overview": null,
        "releaseDate": "1993",
        "developer": "Bally",
        "genre": "Fictional - Licensed Theme",
        "players": "4",
        "image": "a005ec2b-c8c2-451b-94f9-83edcb97b654.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a005ec2b-c8c2-451b-94f9-83edcb97b654.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 98,
        "gameTitle": "Jumping Groove",
        "overview": null,
        "releaseDate": "1998",
        "developer": "Namco",
        "genre": null,
        "players": null,
        "image": "172f504c-d0bd-4c75-a6a2-3fe55f0893cf.gif",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/172f504c-d0bd-4c75-a6a2-3fe55f0893cf.gif"
    },
    {
        "replayGameLocations": [
            {
                "id": 106,
                "location": "Pinburgh Set 33"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 434,
        "gameTitle": "Jumping Jack",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Gottlieb",
        "genre": null,
        "players": "2",
        "image": "d2a50524-9d86-48a2-ba6d-8d18da762810.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d2a50524-9d86-48a2-ba6d-8d18da762810.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 94,
                "location": "Pinburgh Set 21"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 435,
        "gameTitle": "Jungle Lord",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 94,
                "location": "Pinburgh Set 21"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 436,
        "gameTitle": "Jungle Queen",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Gottlieb",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 437,
        "gameTitle": "Junkyard",
        "overview": null,
        "releaseDate": "1997",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": "6b8b4341-bfdd-4111-a57b-329d130b6e53.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6b8b4341-bfdd-4111-a57b-329d130b6e53.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 97,
                "location": "Pinburgh Set 24"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 438,
        "gameTitle": "Jurassic Park",
        "overview": null,
        "releaseDate": "1993",
        "developer": "Data East",
        "genre": "Fantasy - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 99,
        "gameTitle": "Karate Champ",
        "overview": "Single players compete against a computer opponent while two players fight each other in this Karate game. Players each use two joysticks which allow for a variety of different moves. The best two matches, out of three, wins. ",
        "releaseDate": "1984",
        "developer": "Nihon Bussan",
        "genre": "Fighting",
        "players": "2",
        "image": "ef5251ca-a943-4d3d-aa22-a547061e293e.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ef5251ca-a943-4d3d-aa22-a547061e293e.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 85,
                "location": "Pinburgh Set 13"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 439,
        "gameTitle": "King Kool",
        "overview": null,
        "releaseDate": "1972",
        "developer": "Gottlieb",
        "genre": "Happiness - Music",
        "players": "2",
        "image": "293d20c9-56dc-40b7-bb38-82b37d14b998.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/293d20c9-56dc-40b7-bb38-82b37d14b998.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 86,
                "location": "Pinburgh Set 14"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 440,
        "gameTitle": "King of Diamonds",
        "overview": null,
        "releaseDate": "1967",
        "developer": "Gottlieb",
        "genre": "Cards/ Gambling",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 441,
        "gameTitle": "Kings of Steel",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Bally",
        "genre": "Historical - Knights - Cards",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 105,
                "location": "Pinburgh Set 32"
            },
            {
                "id": 119,
                "location": "Pinburgh Set 46"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 442,
        "gameTitle": "KISS",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Bally",
        "genre": "Celebrities - Licensed",
        "players": "4",
        "image": "c16137b6-3de5-4280-a024-df352e49765b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c16137b6-3de5-4280-a024-df352e49765b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 100,
        "gameTitle": "Klax",
        "overview": "Klax is a puzzle game designed by Dave Akers and Mark Stephen Pierce. The object is to line up colored blocks into rows of similar colors to make them disappear, to which the object of Columns is similar. Atari Games originally released it as a coin-op follow up to Tetris, about which they were tangled in a legal dispute at the time.\r\n     Klax features a conveyor belt at the top of the screen. It constantly rolls toward the playing area, delivering a steady supply of blocks. The player controls a small device which sits at the interface between the conveyor belt and the playing area, which can be moved left and right to catch the blocks and deposit them either in the playing area (which can hold 25 blocks in a 5x5 arrangement) or push them back up the conveyor belt. The device can hold up to five blocks. An uncaught block is considered a \"drop\". A flashing block can be used as a wildcard on any color. In the playing area, blocks can be eliminated by arranging three or more of the same color into a continuous line, known as a \"Klax.\" The line may be horizontal, vertical, or diagonal. A multiple grouping (e.g., one vertical and horizontal) counts as multiple Klaxes, as does Klaxes of four same-colored blocks (two Klaxes) or five same-colored blocks (three Klaxes). Once the goal is reached, bonus points are awarded for remaining blocks on the conveyor belt and device, and empty spaces in the bin (also, on levels where a certain point total is required, points in excess of the required amount are counted both in the scoring and as bonus points).\r\n     Klax consists of 100 levels grouped into blocks of five. At the beginning of the game and after each fifth level (levels divisible by five, except for Levels 95 and 100), a player can choose to skip five or ten levels. Skipping levels gives bonus points and a higher drop allowance. The game ends when the player either exhausts their drop allowance, fills up their playing area, or finishes level 100",
        "releaseDate": "1989",
        "developer": "Atari",
        "genre": "Puzzle",
        "players": "2",
        "image": "6e41d6e7-304d-4098-bca7-9bfa24ce5696.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6e41d6e7-304d-4098-bca7-9bfa24ce5696.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 443,
        "gameTitle": "Knockout",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Bally",
        "genre": "Sports - Boxing",
        "players": "2",
        "image": "ade2722b-dff7-4560-b360-605d53d61a46.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ade2722b-dff7-4560-b360-605d53d61a46.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 101,
        "gameTitle": "Lady Bug",
        "overview": "Lady Bug is an insect-themed maze chase arcade game produced by Universal Entertainment Corporation and released in 1981. Its gameplay is similar to Pac-Man, with the primary addition to the formula being gates that change the layout of the maze when used. The arcade original was relatively obscure, but the game found wider recognition and success as a launch title for the ColecoVision console.",
        "releaseDate": "1981",
        "developer": "Universal",
        "genre": "Puzzle",
        "players": "2",
        "image": "ef96e5b3-86c0-4791-8839-6b7dca0584d6.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ef96e5b3-86c0-4791-8839-6b7dca0584d6.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 444,
        "gameTitle": "Lady Luck",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Recel",
        "genre": "Cards/ Gambling",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 445,
        "gameTitle": "Laser Cue",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Williams",
        "genre": "Billiards - Outer Space - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 75,
                "location": "Pinburgh Set 3"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 446,
        "gameTitle": "Last Action Hero",
        "overview": null,
        "releaseDate": "1993",
        "developer": "Data East",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "f822fd0e-3a2b-48d2-b856-c0727b08fb8c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f822fd0e-3a2b-48d2-b856-c0727b08fb8c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 447,
        "gameTitle": "Lectronamo",
        "overview": "First Stern game with electronic sound. Generated by the SB-100 sound board.",
        "releaseDate": "1978",
        "developer": "Stern",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 74,
                "location": "Pinburgh Set 2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 643,
        "gameTitle": "Legends of Wrestlemania",
        "overview": null,
        "releaseDate": "2015",
        "developer": "Stern",
        "genre": "Sports - Wrestling",
        "players": "4",
        "image": "fac4a35a-16d8-4bda-ac15-7e9f0d892a7f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/fac4a35a-16d8-4bda-ac15-7e9f0d892a7f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 102,
        "gameTitle": "Lethal Enforcers",
        "overview": "Set in Chicago, Illinois, United States, the player takes control of a police officer named Don Marshall, who has one day decided to go to the donut shop for a break. While sipping the last drop of coffee, he gets a call from the police department. They said that a major crime organisation has invaded town, and they need his help. He is one of the two survivors of the elite group of officers. The rest have ended up in the hospital or killed. Once the call ended, he decided to check out the bank. From that point on, he is going to experience the toughest job that he would had during his years in the police force. He has been assigned and agrees to help stop a growing crime wave that puts the city's security in serious jeopardy, along with a helper (a second player can join in).",
        "releaseDate": "1992",
        "developer": "Konami",
        "genre": "Shooter",
        "players": "2",
        "image": "dbaa1613-3a79-4910-b92e-8c78fc779999.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/dbaa1613-3a79-4910-b92e-8c78fc779999.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 104,
                "location": "Pinburgh Set 31"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 448,
        "gameTitle": "Lethal Weapon 3",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Data East",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": "f119056c-d8d7-4279-acaf-7d864be155f5.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f119056c-d8d7-4279-acaf-7d864be155f5.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 449,
        "gameTitle": "Liberty Bell",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Williams",
        "genre": "American History - Historical",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 450,
        "gameTitle": "Lightning ",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Stern",
        "genre": "Fantasy - Norse God of Lightning",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 451,
        "gameTitle": "Lights Camera Action!",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Gottlieb",
        "genre": "Movie Making - Show Business",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 76,
                "location": "Pinburgh Set 4"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 452,
        "gameTitle": "Little Chief",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Williams",
        "genre": "American West",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 73,
                "location": "Pinburgh Set 1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 453,
        "gameTitle": "Lord of the Rings",
        "overview": null,
        "releaseDate": "2005",
        "developer": "Stern",
        "genre": "Fantasy - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 134,
                "location": "Pinburgh Set 61"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 454,
        "gameTitle": "Lost in Space",
        "overview": null,
        "releaseDate": "1996",
        "developer": "Sega",
        "genre": null,
        "players": "6",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 103,
        "gameTitle": "Lost Tomb",
        "overview": "Make your way through a number of rooms in a pyramid, collecting treasures while avoiding and killing enemies. You have a limited amount of whips, but more can be purchased at special sales along the way.",
        "releaseDate": "1983",
        "developer": "Stern",
        "genre": "Labyrinth/ Maze",
        "players": "1",
        "image": "9c541963-ccc9-4cdf-8894-3317e6f00516.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9c541963-ccc9-4cdf-8894-3317e6f00516.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 122,
                "location": "Pinburgh Set 49"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 455,
        "gameTitle": "Lost World",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 602,
        "gameTitle": "Machine: Bride of Pin·bot, The",
        "overview": null,
        "releaseDate": "1991",
        "developer": "Williams",
        "genre": "Fantasy - Outer Space",
        "players": "4",
        "image": "73083874-8c93-43ed-b61d-68d049cc8af5.gif",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/73083874-8c93-43ed-b61d-68d049cc8af5.gif"
    },
    {
        "replayGameLocations": [
            {
                "id": 99,
                "location": "Pinburgh Set 26"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 456,
        "gameTitle": "Magic",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Stern",
        "genre": "Fantasy",
        "players": "4",
        "image": "fb95bf87-ff48-4429-b77f-66480bba6769.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/fb95bf87-ff48-4429-b77f-66480bba6769.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 139,
                "location": "Pinburgh Set 66"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 459,
        "gameTitle": "Magic City",
        "overview": null,
        "releaseDate": "1967",
        "developer": "Williams",
        "genre": "American Places",
        "players": "1",
        "image": "99716b95-5da0-4ffa-b4b6-5470722112a0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/99716b95-5da0-4ffa-b4b6-5470722112a0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 104,
        "gameTitle": "Magic Sword: Heroic Fantasy",
        "overview": "Magic Sword fully titled as Magic Sword: Heroic Fantasy, is a side-scrolling fantasy arcade game released by Capcom in 1990. The game casts the player as a hero who must fight his way through a mystical tower in order to save the world. The player can use a sword, axe or magic, and can also rescue and recruit potential allies of various character classes, each of which has his or her own special abilities. Three years earlier, Capcom had released the similar Black Tiger in 1987.",
        "releaseDate": "1990",
        "developer": "Capcom",
        "genre": "Platform",
        "players": "2",
        "image": "977db5e8-9f4b-4aab-9bf2-f855350acddc.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/977db5e8-9f4b-4aab-9bf2-f855350acddc.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 105,
        "gameTitle": "Magical Truck Adventure",
        "overview": "Magical Truck Adventure gives the player the feel of actually riding a rail car. An action-pedal and truck lever assists the player in chasing, jumping, and dodging the evil villains that threaten to steal Alma's precious stone.\r\n\r\nAll this excitement takes place on a railroad track with 6 amazingly detailed scenic routes. The 3 challenging stages include an array of obstacles, wild rhino's, hungry crocodiles, and speeding trains to name a few.",
        "releaseDate": "2000",
        "developer": "Sega",
        "genre": "Adventure",
        "players": "2",
        "image": "15b744b2-07d5-45ae-ab49-42a0156ddbae.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/15b744b2-07d5-45ae-ab49-42a0156ddbae.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 106,
        "gameTitle": "Make Trax, Cabaret",
        "overview": "Player controls a paintbrush to paint paths within a maze. The player is harassed by two fish which can be temporarily destroyed by running them over with a one of two paint rollers located near the maze center. A critter occasionally emerges to leave footprints on painted areas which must then be repainted.",
        "releaseDate": "1981",
        "developer": "Williams",
        "genre": "Labyrinth/ Maze",
        "players": "1",
        "image": "8c94550a-24a1-4c17-a8d3-a982c66a5822.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8c94550a-24a1-4c17-a8d3-a982c66a5822.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 107,
        "gameTitle": "Mania Challenge",
        "overview": "A wrestling game that pits a player against either one of three computer characters or against second player.",
        "releaseDate": "1986",
        "developer": "Taito",
        "genre": "Sports",
        "players": "2",
        "image": "ec342e37-fa4b-4f3c-bc14-5fde7e242735.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ec342e37-fa4b-4f3c-bc14-5fde7e242735.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 108,
        "gameTitle": "Mappy",
        "overview": "The player guides Mappy the police mouse through the mansion of the cats called Mewkies (Meowky in the U.S. version) to retrieve stolen goods. The player uses a left-right joystick to move Mappy and a single button to operate doors. The mansion has six floors of hallways in which the stolen items are stashed.",
        "releaseDate": "1983",
        "developer": "Namco",
        "genre": "ActionPlatform",
        "players": "1",
        "image": "92116e10-a98d-44fe-a5ec-7e147555044d.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/92116e10-a98d-44fe-a5ec-7e147555044d.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 460,
        "gameTitle": "Mario Andretti",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Gottlieb",
        "genre": "Sports - Auto Racing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 109,
        "gameTitle": "Mario Bros.",
        "overview": "Mario Bros.  is an arcade game published and developed by Nintendo in 1983. It was developed by Shigeru Miyamoto. \r\n\r\nMario Bros. features two plumbers, Mario and Luigi, having to investigate the sewers of New York after strange creatures have been appearing down there. The objective of the game is to defeat all of the enemies in each phase. The mechanics of Mario Bros. involve only running and jumping. Unlike future Mario games, players cannot jump on enemies and squash them, unless they were already turned on their back. Each phase is a series of platforms with four pipes at each corner of the screen (in the old version along with an object called a \"POW\" block in the center). Both sides of every phase feature a mechanism that allows the player to go off-screen to the left and appear on the right and vice versa.\r\nThe player gains points by defeating multiple enemies consecutively and can participate in a bonus round to gain more points. Enemies are defeated by kicking them over once they have been flipped on their back. This is accomplished by hitting the platform the enemy is on directly beneath them. If the player allows too much time to pass after doing this, the enemy will flip itself back over, changing in color and increasing speed. Each phase has a certain number of enemies, with the final enemy immediately changing color and increasing its speed to maximum. There are three enemies in all: the Shellcreeper, which simply walks around; the Sidestepper, which requires two hits to flip over; and the Fighter Fly, which moves by jumping and can only be flipped when it is touching a platform. Players may also make use of the above-mentioned \"POW\" block, which flips any enemy touching a platform or the floor when a player hits it from below. This item can be used three times before it disappears. Coins appear whenever enemies are defeated and may be collected for bonus points.\r\nAs the game progresses, elements are added to increase the difficulty. Fireballs either bounce around the screen or travel directly from one side to the other, and Slipices can freeze platforms, causing Mario and Luigi to skid. In addition, icicles start to form under the platforms and fall loose. Bonus rounds give the players a chance to score extra points by collecting coins without having to deal with enemies; the \"POW\" block regenerates itself on each of these screens.",
        "releaseDate": "1983",
        "developer": "Nintendo",
        "genre": "Action",
        "players": "2",
        "image": "54c106db-1085-4c82-b737-dd001a21cd64..png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/54c106db-1085-4c82-b737-dd001a21cd64..png"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 461,
        "gameTitle": "Mars God of War",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Gottlieb",
        "genre": "Mythology",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 103,
                "location": "Pinburgh Set 30"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 462,
        "gameTitle": "Mars Trek",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Sonic",
        "genre": "Outer Space - Fantasy",
        "players": "4",
        "image": "b1048e3b-f772-410b-aa22-5029c72007a2.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b1048e3b-f772-410b-aa22-5029c72007a2.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 110,
        "gameTitle": "Marvel vs. Capcom 2: New Age of Heroes",
        "overview": "Marvel vs. Capcom 2: New Age of Heroes is a fighting game, developed and published by Capcom. It is the fourth game in the Marvel vs. Capcom series of fighting games. With the fourth installment of this series, Capcom simplified the player controls to make the gameplay more accessible to the wider audience of casual players. The button configuration was trimmed down to 4 main buttons and 2 assist buttons. The game also features a different air-combo system and 3 on 3 tag, compared to the 2 on 2 tag from previous games in the series.",
        "releaseDate": "2000",
        "developer": "Capcom",
        "genre": "Fighting",
        "players": "2",
        "image": "7e7df6ef-d840-4944-a320-b2ed339e7da1. Capcom 2 New Age of Heroes.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7e7df6ef-d840-4944-a320-b2ed339e7da1. Capcom 2 New Age of Heroes.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 111,
                "location": "Pinburgh Set 38"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 463,
        "gameTitle": "Mata Hari",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Bally",
        "genre": "Historical",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 464,
        "gameTitle": "Mayfair",
        "overview": "George Bernard Shaw's 1912 play 'Pygmalion' enjoyed success on Broadway as 'My Fair Lady' from 1956 to 1962 and as a Hollywood musical in 1964, winning an Academy Award for Best Picture. 'Mayfair' was based on this popular movie.",
        "releaseDate": "1966",
        "developer": "Gottlieb",
        "genre": "Show Business",
        "players": "2",
        "image": "63792dc9-1137-4a56-b62d-1ef69cf0e78b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/63792dc9-1137-4a56-b62d-1ef69cf0e78b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 111,
        "gameTitle": "Mechanized Attack",
        "overview": "A shooting game where players use Uzi machine guns to battle an army of enemies consisting of humans, cyborgs, androids and robots. Launch grenades to quickly eliminate the enemies.",
        "releaseDate": "1988",
        "developer": "SNK",
        "genre": "Shooter",
        "players": "2",
        "image": "426f4c9d-e729-4a3f-870c-26d35ea72278.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/426f4c9d-e729-4a3f-870c-26d35ea72278.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 100,
                "location": "Pinburgh Set 27"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 465,
        "gameTitle": "Medieval Madness",
        "overview": "Tina Fey (of \"Saturday Night Live\" fame) did the voices of the \"Opera Singer\" princess and the Cockney-talking princess, and Andrea Farrell did the voices of the Jewish princess and the sexy princess. Greg Freres was the voice of the jousting announcer and one of the trolls while Francois Du Grim was voiced by Vince Pontarelli who also did the other troll.",
        "releaseDate": "1997",
        "developer": "Williams",
        "genre": "Fantasy - Medieval - Wizards/Magic",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 108,
                "location": "Pinburgh Set 35"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 466,
        "gameTitle": "Medusa",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Bally",
        "genre": "Fantasy - Myth and Legend",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 112,
        "gameTitle": "Metal Slug 6",
        "overview": "Metal Slug 6 returns to the Rebel-Martian alliance featured in Metal Slugs 2, X, and 3, but on a much broader scale. Rather than repeating the previous games' events of the Martians breaking the alliance and the Rebels assisting the player in turn, the player now teams up with the Rebels and Martians to combat an even greater threat.\r\n\r\nMetal Slug 6 introduces a new play mechanic dubbed the 'Weapon Stock System'. Two gun power-ups can now be carried at the same time. Players can switch between the two weapons, or simply put them both away in favor of the default weapon. When obtaining a new weapon power-up, it will automatically occupy the inactive slot, or, if both are holstered, replace the less recent weapon of the two.\r\nThe score is now multiplied by powers of 2. The faster the speed at which enemies are killed, the higher the power, as a meter at the bottom of the screen shows. When it says \"Max\" enemies and destructible objects will drop coins for an extra high score.",
        "releaseDate": "2006",
        "developer": "SNK",
        "genre": "ActionAdventureShooter",
        "players": "2",
        "image": "5ce171b6-f886-40df-8d6b-997f10af3380.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5ce171b6-f886-40df-8d6b-997f10af3380.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 133,
                "location": "Pinburgh Set 60"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 467,
        "gameTitle": "Metallica",
        "overview": null,
        "releaseDate": "2013",
        "developer": "Stern",
        "genre": "Licensed Theme - Music",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 129,
                "location": "Pinburgh Set 56"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 468,
        "gameTitle": "Meteor",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Stern",
        "genre": "Outer Space - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 669,
        "gameTitle": "Metro",
        "overview": null,
        "releaseDate": "1961",
        "developer": "Williams",
        "genre": "City Living",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 469,
        "gameTitle": "Middle Earth",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Atari",
        "genre": "Fantasy",
        "players": "4",
        "image": "77ae8a40-62ca-45b6-9eeb-14e5f6242744.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/77ae8a40-62ca-45b6-9eeb-14e5f6242744.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 113,
        "gameTitle": "Millipede",
        "overview": "Millipede is a 1982 arcade game by Atari, Inc. and is the sequel to the arcade hit, Centipede. The objective of the game is to score as many points as possible by destroying all segments of the millipede as it moves toward the bottom of the screen, as well as destroying and avoiding other enemies. The game is played with a trackball and a single fire button, which can be held down for rapid-fire. The game is over when the player's last life is lost.",
        "releaseDate": "1982",
        "developer": "Atari",
        "genre": "ActionShooter",
        "players": "2",
        "image": "49ef5bd9-c41f-4c22-af65-a2921958b360.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/49ef5bd9-c41f-4c22-af65-a2921958b360.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 470,
        "gameTitle": "Mini Zag",
        "overview": null,
        "releaseDate": "1968",
        "developer": "Bally",
        "genre": "Dancing - Music",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 114,
        "gameTitle": "Missile Command",
        "overview": "Missile Command is a 1980 arcade game by Atari, Inc. that was also licensed to Sega for European release. It is considered one of the most notable games from the Golden Age of Video Arcade Games. The plot of Missile Command is simple: the player's six cities are being attacked by an endless hail of ballistic missiles, some of them even splitting like multiple independently targetable reentry vehicles (MIRVs), and in later levels smart bombs which can evade a less than perfectly targeted missile. As a regional commander of three anti-missile batteries, the player must defend six cities in their zone from being destroyed.",
        "releaseDate": "1980",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": "9067055a-6769-4cfa-96a3-0c2be544b19d.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9067055a-6769-4cfa-96a3-0c2be544b19d.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 665,
        "gameTitle": "Missile Command, Environmental",
        "overview": "Missile Command is a 1980 arcade game by Atari, Inc. that was also licensed to Sega for European release. It is considered one of the most notable games from the Golden Age of Video Arcade Games. The plot of Missile Command is simple: the player's six cities are being attacked by an endless hail of ballistic missiles, some of them even splitting like multiple independently targetable reentry vehicles (MIRVs), and in later levels smart bombs which can evade a less than perfectly targeted missile. As a regional commander of three anti-missile batteries, the player must defend six cities in their zone from being destroyed.",
        "releaseDate": "1980",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 127,
                "location": "Pinburgh Set 54"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 471,
        "gameTitle": "Miss-O",
        "overview": null,
        "releaseDate": "1969",
        "developer": "Williams",
        "genre": "Billiards",
        "players": "1",
        "image": "f8e4556f-5b87-4650-b0eb-4cfde238c6d0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f8e4556f-5b87-4650-b0eb-4cfde238c6d0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 117,
                "location": "Pinburgh Set 44"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 472,
        "gameTitle": "Monaco",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Segasa",
        "genre": "World Places - Water Sports - Happiness - Recreation - Water Skiing - Swimming",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 131,
                "location": "Pinburgh Set 58"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 473,
        "gameTitle": "Monopoly",
        "overview": null,
        "releaseDate": "2001",
        "developer": "Stern",
        "genre": "Board Game - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 122,
                "location": "Pinburgh Set 49"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 474,
        "gameTitle": "Monster Bash",
        "overview": null,
        "releaseDate": "1998",
        "developer": "Williams",
        "genre": "Horror - Licensed Theme",
        "players": "4",
        "image": "54033349-beac-4b8c-ae81-689edff2dc4b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/54033349-beac-4b8c-ae81-689edff2dc4b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 115,
        "gameTitle": "Moon Patrol",
        "overview": "Moon Patrol is an arcade game originally released in 1982 by Irem and later licensed for release in North America by Williams (Midway). It is a side-scrolling shooter that puts players at the controls of a six-wheeled moon rover that can jump and shoot. The goal is to move through the entire course as quickly as possible while shooting enemies for additional points. Cannons are mounted on the front and top of the vehicle, and both fire simultaneously when the fire button is pressed. Rocks, mines, and pits in the course prevent you from just holding to the right for maximum speed. Rocks and mines can be shot, but pits must be jumped. Some enemies fire shots that create new pits in the course, forcing players to react quickly.",
        "releaseDate": "1982",
        "developer": "Williams",
        "genre": "Shooter",
        "players": "1",
        "image": "d019db3c-8094-4d6c-ad14-93bf8cda4c82.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d019db3c-8094-4d6c-ad14-93bf8cda4c82.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 116,
        "gameTitle": "Mortal Kombat",
        "overview": "The series takes place in a fictional universe that consists of six surviving realms which, according to in-game backstories, were created by the Elder Gods. The Mortal Kombat: Deception manual described the six realms as: \"Earthrealm, home to such legendary heroes as Johnny Cage, Sonya Blade, Liu Kang, and Jax, and also under the protection of the Thunder God Raiden; Netherrealm, which fiery depths are inhospitable to but the most vile, a realm of demons and shadowy warriors; Outworld, a realm of constant strife and where Emperor Shao Kahn claims this realm as his own; Seido, The Realm of Order, whose inhabitants prize structure and order above all else; The Realm of Chaos, whose inhabitants do not abide by any rules whatsoever, where constant turmoil and change are worshipped here; and Edenia, which is known for its beauty, artistic expression, and longevity of its inhabitants.\"",
        "releaseDate": "1992",
        "developer": "Midway",
        "genre": "ActionFighting",
        "players": "2",
        "image": "3c68fe43-3392-41dc-ab1e-36a29ccb7c16.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3c68fe43-3392-41dc-ab1e-36a29ccb7c16.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 117,
        "gameTitle": "Mortal Kombat 3",
        "overview": "MORTAL KOMBAT 3 is the third installment in this immensely popular and intensely gory series. Shao Kahn has assumed control of Earth and the Outworld, and now both are plunged into darkness, overrun by his barbaric beasts. You must clash with evil to restore order and put Shao Kahn in his place. Are you ready to sacrifice your soul in battle? Go toe-to-toe with 15 ruthless pugilists, including new fighters like Nightwolf, the four-armed Sheeva, riot cop Stryker, and Shao Kahn's evil bride Sindel. Of course, you'll also find your old favorites like Jax, Sonya, and Liu Kang. All of the moves from the arcade version are here as well, and you can also take on a friend and find out who is the king of kombat.",
        "releaseDate": "1995",
        "developer": "Midway Games",
        "genre": "Fighting",
        "players": "2",
        "image": "e605a4de-7822-437a-ad2a-365b740e6262.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e605a4de-7822-437a-ad2a-365b740e6262.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 138,
                "location": "Pinburgh Set 65"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 475,
        "gameTitle": "Motor Show",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Mr. Game",
        "genre": "Monster Truck Rally - Motorcycles",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 112,
                "location": "Pinburgh Set 39"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 476,
        "gameTitle": "Motordome",
        "overview": null,
        "releaseDate": "1986",
        "developer": "Bally",
        "genre": "Sports - Motorcycles/ Motocross",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 119,
        "gameTitle": "Mouse Trap",
        "overview": "Mouse Trap is a 1981 arcade game released by Exidy, similar to Pac-Man. It was ported to three home systems by Coleco; Coleco's ColecoVision, Mattel's Intellivision, and the Atari 2600.",
        "releaseDate": "1981",
        "developer": "Exidy",
        "genre": "Puzzle",
        "players": "2",
        "image": "e5671f9f-26a3-430f-99cd-a7f1b02c8648.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e5671f9f-26a3-430f-99cd-a7f1b02c8648.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 102,
                "location": "Pinburgh Set 29"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 477,
        "gameTitle": "Mousin Around",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Midway",
        "genre": null,
        "players": "4",
        "image": "7895759d-b0be-4fda-88e9-813e0b9c79e2.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7895759d-b0be-4fda-88e9-813e0b9c79e2.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 668,
        "gameTitle": "Mr. & Mrs. Pac-Man Pinball",
        "overview": "The \"Pac Maze VID-GRID\" in the middle of the playfield acts as sort of a video mode. Move the yellow dot (Pac-Man) to light up each space and avoid the red dot (a ghost). The left flipper button controls the direction to move, and the right flipper button moves Pac-Man in that direction. Pac-Man can eat the ghost if \"Pac-Man Aggressive\" is enabled.",
        "releaseDate": "1982",
        "developer": "Bally",
        "genre": "Happiness - Games",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 55,
                "location": "H2"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 120,
        "gameTitle": "Mr. Do! ",
        "overview": "The object of Mr. Do! is to score as many points as possible by digging tunnels through the ground and collecting cherries. The title character, Mr. Do (a circus clown—except for the original Japanese version of the game in which he is a snowman. See flyer image at right of this text), is constantly chased by red monsters resembling small dinosaurs, and the player loses a life if Mr. Do is caught by one. The game is over when the last life is lost.\r\n\r\nCherries are distributed throughout the level in groups of eight. 500 bonus points are awarded if Mr. Do collects eight cherries in a row without stopping. A level is complete when all cherries are removed, all monsters are destroyed, \"EXTRA\" is spelled, or a diamond is found.\r\n\r\nMr. Do can defeat the monsters by hitting them with his bouncing \"power ball\" or by dropping large apples on them. While the power ball is bouncing toward a monster, Mr. Do is defenseless. If the ball bounces into an area where there are no monsters to hit (such as behind a fallen apple), Mr. Do cannot use it again until he has retrieved it. When the power ball hits a monster, it then reforms in Mr. Do's hands after a delay that increases with each use.\r\n\r\nMr. Do or the red monsters can push an apple off the edge of a vertical tunnel and crush one or more monsters. If an apple falls more than its own height, it breaks and disappears. Mr. Do can also be crushed by a falling apple causing a loss of life.\r\n\r\nOccasionally, the red monsters transform briefly into more powerful multicolored monsters that can tunnel through the ground. If one of these digs through a cherry, it leaves fewer cherries (and fewer points) for Mr. Do to collect. When it digs under an apple, it often crushes itself, other red/blue monsters, and/or Mr. Do.\r\n\r\nEach time the score passes a certain threshold during play (5000 points), a letter from the word \"EXTRA\" appears on the playfield as an Alphamonster, and the player can defeat or be defeated by this monster in the same way as a red monster. Defeating an Alphamonster awards that letter to the player, and collecting all five letters of the word completes the level, plays a cut scene inexplicably playing the theme to Astro Boy, and awards the player an extra life. Alphamonsters attempt to eat any apples they encounter, which makes them difficult (but not impossible) to crush.\r\n\r\nThe red monsters spawn at the center of the screen. After they have all appeared, the generator will turn into a food item; picking this up scores bonus points, freezes all the red monsters, and calls out an Alphamonster and three large blue monsters. The latter can eat apples as well. The red monsters stay frozen (but still deadly) until the player either defeats all three blue monsters, defeats the Alphamonster (in which case any remaining blue monsters are turned into apples), loses a life, or completes the stage.\r\n\r\nRarely, dropping an apple will reveal a diamond which, if collected within about 15 seconds, completes the level and awards a bonus credit to the player (as well as 8000 points), allowing him or her to play a free game. (This feature is relatively uncommon among arcade video games, though it is a standard feature of many pinball machines.)",
        "releaseDate": "1982",
        "developer": "Universal",
        "genre": "Adventure",
        "players": "2",
        "image": "3b7a75d3-112b-4fe4-92f7-2825f9563e88. Do!.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3b7a75d3-112b-4fe4-92f7-2825f9563e88. Do!.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 121,
        "gameTitle": "Mr. Do's Castle",
        "overview": "Mr Do!, the clown, moves around six floors interconnected by ladders -- some fixed, some whose top can be pushed left or right. Baddies look like unicorns. He has a hammer which can knock out floor stones.",
        "releaseDate": "1983",
        "developer": "Universal",
        "genre": "Platform",
        "players": "2",
        "image": "38db59cd-c51a-4a2a-bc27-b3520c8b7bcd. Do!'s Castle.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/38db59cd-c51a-4a2a-bc27-b3520c8b7bcd. Do!'s Castle.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 122,
        "gameTitle": "Mr. Do's Wild Ride",
        "overview": "Mr. Do!'s scenario is a roller coaster, and the object is to reach the top. As the cars (and eventually other objects) speed around the track, you must escape by using a super speed button, or by climbing up small ladders scattered about the track. Two icons at the end of the level range from cakes to EXTRA letters or diamonds change upon collecting cherries at the top of each letter. The game is timed, and the timer ticks faster when the super speed button is depressed.",
        "releaseDate": "1984",
        "developer": "Universal",
        "genre": "Platform",
        "players": "2",
        "image": "46328e08-c4f6-48eb-b7ce-f18102e5e184. Do!'s Wild Ride.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/46328e08-c4f6-48eb-b7ce-f18102e5e184. Do!'s Wild Ride.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 5,
        "gameTitle": "Ms. PacMan",
        "overview": "The gameplay of Ms. Pac-Man is identical to the original Pac-Man. The player earns points by eating pellets and avoiding ghosts (contact with one causes Ms. Pac-Man to lose a life). Eating an energizer (or \"power pellet\") causes the ghosts to turn blue, allowing them to be eaten for extra points. Bonus fruits can be eaten for increasing point values, twice per round. As the rounds increase, the speed increases, and energizers generally lessen the extent of the ghosts' vulnerability, eventually stopping altogether.",
        "releaseDate": "1981",
        "developer": "Midway",
        "genre": "Puzzle",
        "players": "2",
        "image": "487e374d-4e3c-4dda-84e4-0b918379dd35.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/487e374d-4e3c-4dda-84e4-0b918379dd35.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 123,
        "gameTitle": "Ms. Pac-Man",
        "overview": "The gameplay of Ms. Pac-Man is identical to the original Pac-Man. The player earns points by eating pellets and avoiding ghosts (contact with one causes Ms. Pac-Man to lose a life). Eating an energizer (or \"power pellet\") causes the ghosts to turn blue, allowing them to be eaten for extra points. Bonus fruits can be eaten for increasing point values, twice per round. As the rounds increase, the speed increases, and energizers generally lessen the extent of the ghosts' vulnerability, eventually stopping altogether.",
        "releaseDate": "1980",
        "developer": "Midway",
        "genre": "ActionPuzzle",
        "players": "2",
        "image": "97ee5348-d206-45dd-9c90-da014aec0414. Pac-Man.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/97ee5348-d206-45dd-9c90-da014aec0414. Pac-Man.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 124,
        "gameTitle": "Ms. Pac-Man, Cabaret",
        "overview": "The gameplay of Ms. Pac-Man is identical to the original Pac-Man. The player earns points by eating pellets and avoiding ghosts (contact with one causes Ms. Pac-Man to lose a life). Eating an energizer (or \"power pellet\") causes the ghosts to turn blue, allowing them to be eaten for extra points. Bonus fruits can be eaten for increasing point values, twice per round. As the rounds increase, the speed increases, and energizers generally lessen the extent of the ghosts' vulnerability, eventually stopping altogether.",
        "releaseDate": "1981",
        "developer": "Midway",
        "genre": "ActionPuzzle",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 125,
        "gameTitle": "Ms. Pac-Man, Cocktail",
        "overview": "The gameplay of Ms. Pac-Man is identical to the original Pac-Man. The player earns points by eating pellets and avoiding ghosts (contact with one causes Ms. Pac-Man to lose a life). Eating an energizer (or \"power pellet\") causes the ghosts to turn blue, allowing them to be eaten for extra points. Bonus fruits can be eaten for increasing point values, twice per round. As the rounds increase, the speed increases, and energizers generally lessen the extent of the ghosts' vulnerability, eventually stopping altogether.",
        "releaseDate": "1981",
        "developer": "Midway",
        "genre": "ActionPuzzle",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 650,
        "gameTitle": "Multicade",
        "overview": null,
        "releaseDate": null,
        "developer": null,
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 662,
        "gameTitle": "Museca",
        "overview": null,
        "releaseDate": "2015",
        "developer": "Konami",
        "genre": "Music",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 478,
        "gameTitle": "Mustang",
        "overview": null,
        "releaseDate": "2014",
        "developer": "Stern",
        "genre": "Automobiles - Cars - Travel - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 126,
                "location": "Pinburgh Set 53"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 479,
        "gameTitle": "Mystic",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Bally",
        "genre": "Circus/ Carnival - Magic",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 126,
        "gameTitle": "Namco Classics",
        "overview": "Namco Classic Collection Volume 1 is a compilation arcade game that was released by Namco in November 1995. It is a collection of three popular Namco arcade games - Galaga (1981), Xevious (1982) and Mappy (1983). In addition to the original games, there are \"Arrangement\" versions that are essentially sequels to the original games, with updated graphics and sound. Super Xevious (1984) can be selected from the \"Xevious\" menu.",
        "releaseDate": "1996",
        "developer": "Namco",
        "genre": "Mixed",
        "players": null,
        "image": "da5d4275-8b23-4564-bd8f-786fae5acb2a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/da5d4275-8b23-4564-bd8f-786fae5acb2a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 127,
        "gameTitle": "NARC",
        "overview": "Infiltrate the criminal underworld - your mission is to seek out and destroy the kingpin of the MR. BIG CORPORATION - if you get that far. You'll have to outwit his enormous army of bodyguards, gangs of charisma-bypass patients in trench coats, the bullet brain with the build of a rhinoceros and the breath of a dung beetle, packs of vicious canine yappies, the psychotic clown with an evil sense of humor - you'll die, but not laughing! The there's the gas-guzzling cadillac jock - a cool specimen, elbow hanging on the door rail, a serious looking piece in his hand and ready to blow you away as he rolls down main street leaving you coughing blood. It's not all bad! You've got a chopper to back you up, a mean, shiny street machine, some heavy metal hardware and some pretty neat moves. And what about the kingpin... did I say he was Mr. Big? No, he's MR. BIG!",
        "releaseDate": "1988",
        "developer": "Williams Electronics",
        "genre": "Action",
        "players": "2",
        "image": "30e2361c-c587-45a0-b909-a32c569ad7f7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/30e2361c-c587-45a0-b909-a32c569ad7f7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 480,
        "gameTitle": "NASCAR",
        "overview": "Features cars from three race teams - the No. 2 Miller Lite Dodge driven by Rusty Wallace of Penske Racing South; the No. 29 GM Goodwrench Chevrolet driven by Kevin Harvick of Richard Childress Racing; and the No. 21 Motorcraft Ford driven by Ricky Rudd of Wood Brothers Racing.",
        "releaseDate": "2005",
        "developer": "Stern",
        "genre": "NASCAR - Racing - Cars - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            },
            {
                "id": 116,
                "location": "Pinburgh Set 43"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 481,
        "gameTitle": "NBA",
        "overview": null,
        "releaseDate": "2009",
        "developer": "Stern",
        "genre": "Sports - Basketball - Licensed Theme",
        "players": "4",
        "image": "41a31094-e458-4efa-8838-488a560926d5.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/41a31094-e458-4efa-8838-488a560926d5.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 482,
        "gameTitle": "NBA Fastbreak",
        "overview": null,
        "releaseDate": "1997",
        "developer": "Bally",
        "genre": "Sport - Basketball - Licensed theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 128,
        "gameTitle": "NBA Hangtime",
        "overview": "Hangtime was the third basketball game by the original development team behind the NBA Jam series. The title was changed due to the NBA Jam name being acquired by Acclaim Entertainment, the publisher of the games for the home market. Acclaim's NBA Jam Extreme was released the same year as Hangtime. Features introduced in Hangtime included character creation, alley oops and double dunks. A software update known as NBA Maximum Hangtime was released for the arcades later in the life cycle.",
        "releaseDate": "1996",
        "developer": "Midway",
        "genre": "Sports",
        "players": "4+",
        "image": "5fc01ef6-5e31-441a-b26f-e4e58f475bcb.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5fc01ef6-5e31-441a-b26f-e4e58f475bcb.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 129,
        "gameTitle": "Nibbler",
        "overview": "The object is to navigate a virtual snake through an enclosed maze, while consuming dots along the way. The length of the snake increases with each object consumed, making the game more difficult. The player must also avoid colliding with walls or obstacles, and must also avoid colliding with the snake's own body sections. After all the objects on the screen have been eaten, the player progresses to the next wave, involving harder obstacles and/or higher game speeds.",
        "releaseDate": "1982",
        "developer": "Rock-Ola",
        "genre": "PuzzleStrategy",
        "players": "2",
        "image": "af262820-ede9-4a79-aa8e-f174c41b61f5.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/af262820-ede9-4a79-aa8e-f174c41b61f5.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 135,
                "location": "Pinburgh Set 62"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 483,
        "gameTitle": "Night Rider",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Bally",
        "genre": "Travel - Transportation - Trucking",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 485,
        "gameTitle": "Nine Ball",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": "Billiards",
        "players": "4",
        "image": "760c05e5-cf97-4f66-915b-a7bcde7cb150.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/760c05e5-cf97-4f66-915b-a7bcde7cb150.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 136,
                "location": "Pinburgh Set 63"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 486,
        "gameTitle": "Nip It",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Bally",
        "genre": "Sports - Fishing - Alligators - Water",
        "players": "4",
        "image": "3c44c446-27a2-496e-957f-daf76453d068.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3c44c446-27a2-496e-957f-daf76453d068.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 77,
                "location": "Pinburgh Set 5"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 487,
        "gameTitle": "Nitro Groundshaker",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Bally",
        "genre": "Sports - Auto Racing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 101,
                "location": "Pinburgh Set 28"
            },
            {
                "id": 110,
                "location": "Pinburgh Set 37"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 488,
        "gameTitle": "No Fear",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Williams",
        "genre": "Sports - Licensed Theme",
        "players": "4",
        "image": "0117359d-dffe-458d-85be-0e14555fb5e9.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0117359d-dffe-458d-85be-0e14555fb5e9.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            },
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 489,
        "gameTitle": "No Good Gofers",
        "overview": null,
        "releaseDate": "1997",
        "developer": "Williams",
        "genre": "Sports - Golf",
        "players": "4",
        "image": "d4fd0954-ccb1-4534-ae33-454b442304d3.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d4fd0954-ccb1-4534-ae33-454b442304d3.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 678,
        "gameTitle": "Nugent",
        "overview": "Backglass shows singer Ted Nugent taken from the cover of his album Weekend Warriors.",
        "releaseDate": "1978",
        "developer": "Stern",
        "genre": "Celebrities - Music",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 130,
        "gameTitle": "Off Road",
        "overview": "Ivan \"Ironman\" Stewart's Super Off Road is an arcade video game released in 1989 by Leland Corporation. The game was endorsed by professional off road racer Ivan Stewart.\r\n     In the original arcade game, the red, blue, and yellow CPU trucks were 'driven' by \"Madman\" Sam Powell, \"Hurricane\" Earl Stratton, and \"Jammin'\" John Morgan, respectively. The names were taken from the development staff: Sam composed the music, and Earl and John were two of the software programmers. The Track Pack added \"Steamin'\" Steve High and \"Hot Rod\" John Rowe, representing graphics and project direction, respectively. By using these names, this meant that further licensing deals were not required.",
        "releaseDate": "1989",
        "developer": "Leland Corporation",
        "genre": "Racing",
        "players": "2",
        "image": "63ff2e3f-5ed2-447e-9de2-56230a44567b.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/63ff2e3f-5ed2-447e-9de2-56230a44567b.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 91,
                "location": "Pinburgh Set 19"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 490,
        "gameTitle": "Old Chicago",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Bally",
        "genre": "Historical",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 133,
        "gameTitle": "Operation Wolf",
        "overview": "The object of the game is to rescue the five hostages in the concentration camp. The game is divided into six stages: Communication Setup, Jungle, Village, Powder Magazine, Concentration Camp, and Airport. Completion of each stage advances the story. For example, upon completing the Jungle stage, an enemy leader is interrogated and the location of the enemy's concentration camp is found. This was one of the first shooter games to feature a storyline, and it had some similarities to real special operations missions.",
        "releaseDate": "1987",
        "developer": "Taito",
        "genre": "Shooter",
        "players": "1",
        "image": "c66b7677-710b-4a3e-9633-a05e1ba2b530.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c66b7677-710b-4a3e-9633-a05e1ba2b530.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 491,
        "gameTitle": "Orbiter 1",
        "overview": null,
        "releaseDate": "1982",
        "developer": "Stern",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 134,
        "gameTitle": "Out Run",
        "overview": "You drive a Ferrari Testarossa through various stages each with a checkpoint at the end of the stage that must be reached within the time limit. The player can choose which route to take through the game. The driver also has a choice of three different themes to listen to while driving.",
        "releaseDate": "1986",
        "developer": "Sega",
        "genre": "Racing",
        "players": "1",
        "image": "d1602fe7-5fa6-4555-85c1-33ee1e6b8527.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d1602fe7-5fa6-4555-85c1-33ee1e6b8527.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 1,
        "gameTitle": "Pac-Man",
        "overview": "The player controls Pac-Man through a maze, eating pac-dots (also called pellets). When all pac-dots are eaten, Pac-Man is taken to the next stage. Between some stages one of three intermission animations plays. Four enemies (Blinky, Pinky, Inky and Clyde) roam the maze, trying to catch Pac-Man. If an enemy touches Pac-Man, a life is lost and the Pac-Man itself withers and dies. When all lives have been lost, the game ends. Pac-Man is awarded a single bonus life at 10,000 points by default.Near the corners of the maze are four larger, flashing dots known as power pellets that provide Pac-Man with the temporary ability to eat the enemies. The enemies turn deep blue, reverse direction and usually move more slowly. When an enemy is eaten, its eyes remain and return to the center box where it is regenerated in its normal color. Blue enemies flash white to signal that they are about to become dangerous again and the length of time for which the enemies remain vulnerable varies from one stage to the next, generally becoming shorter as the game progresses. In later stages, the enemies go straight to flashing, bypassing blue, which means that they can only be eaten for a short amount of time, although they still reverse direction when a power pellet is eaten; in even later stages, the ghosts do not become edible (i.e., they do not change color and still make Pacman lose a life on contact), but they still reverse direction.",
        "releaseDate": "1980",
        "developer": "Namco",
        "genre": "Puzzle",
        "players": "2",
        "image": "d98b3d1b-625f-4af0-b074-064deeb71e04.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d98b3d1b-625f-4af0-b074-064deeb71e04.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 135,
        "gameTitle": "Pac-Man, Cabaret",
        "overview": "The player controls Pac-Man through a maze, eating pac-dots (also called pellets). When all pac-dots are eaten, Pac-Man is taken to the next stage. Between some stages one of three intermission animations plays. Four enemies (Blinky, Pinky, Inky and Clyde) roam the maze, trying to catch Pac-Man. If an enemy touches Pac-Man, a life is lost and the Pac-Man itself withers and dies. When all lives have been lost, the game ends. Pac-Man is awarded a single bonus life at 10,000 points by default.\r\n\r\nNear the corners of the maze are four larger, flashing dots known as power pellets that provide Pac-Man with the temporary ability to eat the enemies. The enemies turn deep blue, reverse direction and usually move more slowly. When an enemy is eaten, its eyes remain and return to the center box where it is regenerated in its normal color. Blue enemies flash white to signal that they are about to become dangerous again and the length of time for which the enemies remain vulnerable varies from one stage to the next, generally becoming shorter as the game progresses. In later stages, the enemies go straight to flashing, bypassing blue, which means that they can only be eaten for a short amount of time, although they still reverse direction when a power pellet is eaten; in even later stages, the ghosts do not become edible (i.e., they do not change color and still make Pacman lose a life on contact), but they still reverse direction.",
        "releaseDate": "1980",
        "developer": "Namco",
        "genre": "Puzzle",
        "players": "2",
        "image": "8dfa0b23-f349-464f-b44c-668a3532cfb2.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8dfa0b23-f349-464f-b44c-668a3532cfb2.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 136,
        "gameTitle": "Pang Pang Paradise",
        "overview": null,
        "releaseDate": "2005",
        "developer": "Interpark",
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 492,
        "gameTitle": "Paradise",
        "overview": null,
        "releaseDate": "1965",
        "developer": "Gottlieb",
        "genre": "Hawaii",
        "players": "2",
        "image": "26d3e59f-aa1b-41c2-95da-366dad481a95.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/26d3e59f-aa1b-41c2-95da-366dad481a95.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 76,
                "location": "Pinburgh Set 4"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 493,
        "gameTitle": "Paragon",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 132,
                "location": "Pinburgh Set 59"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 494,
        "gameTitle": "Party Zone",
        "overview": "Player uses flipper buttons to select a choice of music when prompted. Achieving the \"Big Bang\" feature causes the playfield illumination to pulse entirely in a red color, accompanied by a 'sonic boom' sound effect.",
        "releaseDate": "1991",
        "developer": "Bally",
        "genre": "Happiness",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 108,
                "location": "Pinburgh Set 35"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 495,
        "gameTitle": "Pat Hand",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Williams",
        "genre": "Cards/ Gambling",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 139,
        "gameTitle": "Percussion Freaks",
        "overview": "Konami brings the beat back again! Here the player sits behind a virtual drumset and lets him or her loose on a variety of groovy music!",
        "releaseDate": "2001",
        "developer": "Konami",
        "genre": "Music",
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 496,
        "gameTitle": "Phantom of the Opera",
        "overview": "A ramp in upper right playfield (the \"organ\") raises to allow the player to shoot balls into the cavern below the playfield. It raises after player hits all three targets at top of ramp or completes shooter lane skill shot.\r\n\r\nThe Phantom of the Opera was a French novel by Gaston Leroux, first published in 1910. Many film and stage productions have been adapted from it, over the years.",
        "releaseDate": "1990",
        "developer": "Data East",
        "genre": "Music - Singing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 140,
        "gameTitle": "Phoenix",
        "overview": "Phoenix is an outer space-themed, fixed shooter video game similar to Taito's Space Invaders. It was developed by Amstar Electronics (which was located in Phoenix, Arizona) in 1980,[1] and released by Centuri in the United States and by Taito in Japan.[2][3]\r\n\r\nThe Phoenix mothership is one of the first video arcade game bosses to be presented as a separate challenge.[4] This was before the term boss was coined.\r\n\r\nThe player controls a spaceship that moves horizontally at the bottom of the screen, firing upward. Enemies, typically one of two types of birds, appear on the screen above the player's ship, shooting at it and periodically diving towards it in an attempt to crash into it. The ship is equipped with a shield that can be used to zap any of the alien creatures that attempt to crash into the spaceship. The player cannot move while the shield is active and must wait approximately five seconds before using it again.\r\n\r\nThe player starts with three or six lives, depending on the settings.\r\n\r\nEach level has five separate rounds. The player must complete a round to advance to the next.\r\n\r\nRounds 1 and 2 – The player must destroy a formation of alien birds. While in formation, some of the birds fly down kamikaze style, in an attempt to destroy the player's spaceship by crashing into it. Hitting a bird flying diagonally awards a bonus score. The birds are yellow in round 1, pink in round 2. The player's spaceship is given rapid fire for round 2, where the birds fly somewhat more unpredictably. These rounds are highly reminiscent of Galaxian.\r\nRounds 3 and 4 – Flying eggs float on the screen and seconds later hatch, revealing larger alien birds, resembling phoenices, which swoop down at the player's spaceship. The only way to fully destroy one of these birds is by hitting it in its belly; shooting one of its wings merely destroys that wing, and if both wings are destroyed, they will regenerate. From time to time the birds may also revert to the egg form for a brief period. The birds are blue in round 3, pink in round 4.\r\n\r\nThe mothership in Phoenix is one of the first bosses to appear in an arcade game.[4]\r\nRound 5 – The player is pitted against the mothership, which is controlled by an alien creature sitting in its center. To complete this round, the player must create a hole in the conveyor belt-type shield to get a clear shot at the alien. Hitting the alien with a single shot ends the level. The mothership fires missiles at the player, moves slowly down towards him, and has alien birds (from rounds 1 and 2) protecting the ship. Defeating all of the birds will produce a new wave.\r\nThe game continues with increasing speed and unpredictability of the bird and phoenix flights.",
        "releaseDate": "1980",
        "developer": "Centuri",
        "genre": "Shooter",
        "players": "2",
        "image": "7b68ff3d-0f53-4cfd-8ae3-3761371e15ca.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7b68ff3d-0f53-4cfd-8ae3-3761371e15ca.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 141,
        "gameTitle": "Phraze Craze, Cocktail",
        "overview": "Attempt to guess the letters of the words for a given topic. A spinning wheel determines the points per letter guessed. Lose turns by incorrectly guessing letters or spinning \"ZAP\" or \"ZILCH\".",
        "releaseDate": "1986",
        "developer": "Merit",
        "genre": "Puzzle",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 142,
        "gameTitle": "Pigskin 621 A.D.",
        "overview": "Play Football with Barbarians! A basic football-ish game is played on a field filled with weapons, traps, and even paid-off bystanders that will do anything to slow you down!",
        "releaseDate": "1990",
        "developer": "Midway",
        "genre": "Sports",
        "players": "2",
        "image": "29aa2c4d-e74e-44d8-a38a-630295da1353.D..png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/29aa2c4d-e74e-44d8-a38a-630295da1353.D..png"
    },
    {
        "replayGameLocations": [
            {
                "id": 142,
                "location": "Pinburgh Set 69"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 498,
        "gameTitle": "Pinball Champ",
        "overview": null,
        "releaseDate": "1983",
        "developer": "Zaccaria",
        "genre": "Sports - Pinball",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 140,
                "location": "Pinburgh Set 67"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 499,
        "gameTitle": "Pinball Lizard",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Game Plan",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 500,
        "gameTitle": "Pinball Magic",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Capcom",
        "genre": "Show Business - Magic",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 501,
        "gameTitle": "Pinball Pool",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Gottlieb",
        "genre": "Billiards",
        "players": "4",
        "image": "ebaab5ae-71a5-4072-be9c-d452dcf7ebb3.gif",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ebaab5ae-71a5-4072-be9c-d452dcf7ebb3.gif"
    },
    {
        "replayGameLocations": [
            {
                "id": 89,
                "location": "Pinburgh Set 17"
            },
            {
                "id": 142,
                "location": "Pinburgh Set 69"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 502,
        "gameTitle": "PIN-BOT",
        "overview": null,
        "releaseDate": "1986",
        "developer": "Williams",
        "genre": "Fantasy - Outer Space",
        "players": "4",
        "image": "5925f288-f022-477e-9116-e57f0750cb50.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5925f288-f022-477e-9116-e57f0750cb50.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 80,
                "location": "Pinburgh Set 8"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 503,
        "gameTitle": "Pirates of the Caribbean",
        "overview": null,
        "releaseDate": "2006",
        "developer": "Stern",
        "genre": "Pirates - Disney - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 143,
        "gameTitle": "Pit",
        "overview": "A saucer lands at the top of the screen, separated from a tank by a mountain. The player must dig underground tunnels, grab jewels, and return to the saucer before the tank shoots through the mountain and chases away the saucer. Various hazards include falling rocks and enemies that chase you, which you can shoot.",
        "releaseDate": "1981",
        "developer": "Centuri",
        "genre": "Labyrinth/ Maze",
        "players": "1",
        "image": "639d3ca7-9693-4ce2-aee7-42b52e35e9a2.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/639d3ca7-9693-4ce2-aee7-42b52e35e9a2.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 78,
                "location": "Pinburgh Set 6"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 504,
        "gameTitle": "Poker Plus",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Recel",
        "genre": "Cards/ Gambling",
        "players": "4",
        "image": "1f27cee3-5d5d-44ef-bc46-373d9574584e.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1f27cee3-5d5d-44ef-bc46-373d9574584e.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 3,
        "gameTitle": "Pole Position, Environmental",
        "overview": "Pole Position is a racing video game released in 1982 by Namco. It was published by Namco in Japan and by Atari, Inc. in the United States. The game popularized the use of sprite-based, pseudo-3D graphics with its \"rear-view racer format\"—where the player’s view is behind and above the vehicle, looking forward along the road with the horizon in sight—which would remain in use even after true 3D computer graphics became standard for racing games.",
        "releaseDate": "1982",
        "developer": "Namco",
        "genre": "Racing",
        "players": "1",
        "image": "5536d834-9030-4c65-b29a-83eef2554ea2.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5536d834-9030-4c65-b29a-83eef2554ea2.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 113,
                "location": "Pinburgh Set 40"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 505,
        "gameTitle": "Police Force",
        "overview": "This game was planned to be a 'Batman' license...the police car was to be the Batmobile and the Jail was to be the Bat Cave. Designer Mark Ritchie stated that the art has to be changed at the last minute because Data East, a competitor, already had the license for Data East's 1991 'Batman'.",
        "releaseDate": "1989",
        "developer": "Williams",
        "genre": "Cops and Robbers",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 659,
        "gameTitle": "Pop n' Music",
        "overview": "Select a song and 'pop' the notes when they reach the bottom of the screen using the nine buttons on the controller. The game ends when too many notes have been missed.",
        "releaseDate": "2000",
        "developer": "Konami",
        "genre": "Skill",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 660,
        "gameTitle": "Pop 'n Music Fantasia",
        "overview": "The only real new feature (outside of the songs and whatnot) in pop'n music FANTASIA is the highlight pop-kuns. After hitting them, the player earns a bonus for getting no misses. They don't provide any drastic change to the gameplay, but they add another means of racking up points.",
        "releaseDate": "2011",
        "developer": "Konami",
        "genre": "Skill",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 506,
        "gameTitle": "Popeye",
        "overview": null,
        "releaseDate": null,
        "developer": "Williams",
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 34,
                "location": "E3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 144,
        "gameTitle": "Popeye",
        "overview": "The object of the game is for Popeye to collect a certain number of items dropped by Olive Oyl, depending on the level — 24 hearts, 16 musical notes, or 24 letters in the word HELP — while avoiding the Sea Hag, Brutus and other dangers. The player can make Popeye walk back and forth and up and down stairs and ladders with a 4-way joystick. There is a punch button, but unlike similar games of the period, no jump button. Conversely, Brutus can jump down a level and also jump up to hit Popeye if he is directly above.\r\n\r\nDespite the feature of a punch button, Popeye cannot attack Brutus directly. Instead, the button is used for the following:\r\n\r\nPunching destroys items that could hurt Popeye such as bottles, vultures and skulls.\r\nEach level has a can of spinach; punching these cans will give Popeye invincibility and he can knock out Brutus just by running into him, although after a few seconds Brutus will swim back out and be ready for action again.\r\nIn Round 1 (the dock scene) of each three-round cycle is a punching bag, which Popeye can use to knock loose a nearby barrel from its position near the top of the playing field. If the barrel falls onto Brutus' head, the player earns bonus points (based on where Brutus was attacked) and renders Brutus harmless for several seconds.\r\nOther licensed Popeye characters in the game are Olive Oyl, Swee'Pea, and Wimpy, though they are mostly decorative and do not add heavily to the gameplay. Wimpy appears in Round 2 (the street scene) on one end of the seesaw in the lower left corner of the field, to act as a counterweight. Swee'Pea floats high above, with bonus points to be earned if Popeye can spring off the see-saw and touch him.\r\nPopeye loses a life if he is hit by Brutus or any thrown/flying object, or if he fails to catch a dropped item before it reaches the bottom of the screen.",
        "releaseDate": "1982",
        "developer": "Nintendo",
        "genre": "Platform",
        "players": "2",
        "image": "0f3cc6cc-b808-4a29-807f-d8f5049fe67a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0f3cc6cc-b808-4a29-807f-d8f5049fe67a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 145,
        "gameTitle": "Power Drift",
        "overview": "Choose from wacky drivers, like Jason the Skinhead or Jeronimo the Mohican and rev your way through all the stomach-churning circuits! Watch the dust fly and the wheels spin as you screech over a roller coaster track and wave goodbye to your opponents. Roar over mounds of mud, drive through the desert, slip 'n' slide on snow-covered tarmac and race your way through the night to face the final lap! CAREFUL! Power Drift is no easy ride! If you're heading for a collision hold on to your seat and enjoy those 360 degree spins before you bump back down to earth!",
        "releaseDate": "1988",
        "developer": "Sega",
        "genre": "Racing",
        "players": "1",
        "image": "b60445f6-9ce7-4a41-8e1e-0cf94a3679ba.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b60445f6-9ce7-4a41-8e1e-0cf94a3679ba.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 74,
                "location": "Pinburgh Set 2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 507,
        "gameTitle": "Power Play",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Bally",
        "genre": "Sports - Hockey - Celebrity",
        "players": "4",
        "image": "efac5ff2-e482-4abf-9580-f566d3cad7f7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/efac5ff2-e482-4abf-9580-f566d3cad7f7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 508,
        "gameTitle": "Pro Football",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Gottlieb",
        "genre": "Sports - Football",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 116,
                "location": "Pinburgh Set 43"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 509,
        "gameTitle": "Prospector",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Sonic",
        "genre": "Comedy, American West",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 147,
        "gameTitle": "Pump it Up NX",
        "overview": "A dancing/exercise game that allows players to move their bodies in time with selected music.",
        "releaseDate": "2006",
        "developer": "Andamiro",
        "genre": "Dance/ Rhythm",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 148,
        "gameTitle": "Punch-Out!!",
        "overview": "A first-person perspective boxing game where you fight six boxers in the WVBA. The player character is a green wire frame model who must defeat all the opponents to become the champion. The commentator says \"Body blow!\", \"Stick and move!\" and \"Great fighting! You're an up and coming boxer!\"\r\n\r\nOnce again, Nintendo has created a smash hit —Punch-Out— a fast action dual-monitor video boxing game. Its been knocking out the competition week-after-week in earnings and player appeal across the nation.\r\n\r\nWith Punch-Out in your corner, you gain the added muscle of the\r\nChamp!",
        "releaseDate": "1984",
        "developer": "Nintendo",
        "genre": "Sports",
        "players": "1",
        "image": "c2a0ff7f-5014-4b3a-a24e-a630690a86ca.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c2a0ff7f-5014-4b3a-a24e-a630690a86ca.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 149,
        "gameTitle": "Q*bert",
        "overview": "A two-legged, big-nosed, orange creature jumps diagonally around on a pyramid, changing the color of the blocks he lands on. Avoid most moving objects and characters while luring Coily, the snake, to his demise by jumping off the edge of the pyramid onto one of the flying disks. The game has nine levels of four rounds each.",
        "releaseDate": "1982",
        "developer": "Gottlieb",
        "genre": "Platform",
        "players": "1",
        "image": "cae3c3e1-8f58-4c88-9b3a-a55fd01bd25b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cae3c3e1-8f58-4c88-9b3a-a55fd01bd25b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 150,
        "gameTitle": "Q*bert, Cocktail",
        "overview": "A two-legged, big-nosed, orange creature jumps diagonally around on a pyramid, changing the color of the blocks he lands on. Avoid most moving objects and characters while luring Coily, the snake, to his demise by jumping off the edge of the pyramid onto one of the flying disks. The game has nine levels of four rounds each.",
        "releaseDate": "1982",
        "developer": "Gottlieb",
        "genre": "Platform",
        "players": "1",
        "image": "38f9295a-c6c5-4a0f-b27d-cdd29028538f.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/38f9295a-c6c5-4a0f-b27d-cdd29028538f.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 152,
        "gameTitle": "Quick Crash",
        "overview": "\"Quick Crash\" is a novelty shooting gallery that tests player accuracy and reflexes to the limit. It's a throwback to the mechanical shooting games of the past with a few futuristic twists. The game keeps detailed records so players can see how they rank against the previous players and continue to track their current ranking.\r\nThe game progresses in 4 stages:\r\n\r\nStage 1 - One target will appear in a random location.\r\nStage 2 - Two targets will appear in random locations.\r\nStage 3 - One target will appear in a random location and move side-to-side making it increasingly difficult to hit.\r\nStage 4 - Two targets will appear in a random location and move side-to-side, once these targets are hit a ceramic cup target will appear, If the player successfully hits the cup, it explodes into pieces only to reappear the next time the game is played. This touch of visual \"magic\" is a true crowd pleaser.\r\n\r\nSince players have limited shots and are competing for the best possible time, accuracy and judgment are the most important talents to be successful in Quick Crash!\r\n",
        "releaseDate": "1999",
        "developer": "Namco",
        "genre": "Shooter",
        "players": "1",
        "image": "db1b4c01-3c66-4961-8eaa-64715bd7c788.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/db1b4c01-3c66-4961-8eaa-64715bd7c788.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 109,
                "location": "Pinburgh Set 36"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 510,
        "gameTitle": "Quicksilver",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": null,
        "players": "4",
        "image": "50b67a89-1ff7-436f-b275-8af60d2657e5.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/50b67a89-1ff7-436f-b275-8af60d2657e5.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 153,
        "gameTitle": "Race Drivin'",
        "overview": "A racing game with three seperate tracks: stunt, autocross, and super stunt track. You can choose from four different cars using either an automatic or manual transmission. Race around each track earning points for distance travelled, passing checkpoints to earn more time.",
        "releaseDate": "1990",
        "developer": "Atari",
        "genre": "Racing",
        "players": "1",
        "image": "8a4f1495-8905-4ce5-ac75-927455a4a888.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8a4f1495-8905-4ce5-ac75-927455a4a888.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 511,
        "gameTitle": "Radical",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Bally",
        "genre": "Sports - Skateboarding",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 155,
        "gameTitle": "Raiden",
        "overview": "In the year 2090, Earth has suddenly become the target of deranged aliens. Following the invasion, a new cutting-edge weapon, the Raiden Supersonic Attack Figther, based on the destroyed alien craft, is created for humanity's hope for survival.",
        "releaseDate": "1990",
        "developer": "Seibu Kaihatsu",
        "genre": "ActionShooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 156,
        "gameTitle": "Raiden II",
        "overview": "Excellent sequel to the classic original \"Raiden\".  As in the original, players control a fighter jet/spaceship through various levels while shooting down other planes and bombing tanks on the ground.",
        "releaseDate": "1993",
        "developer": "Seibu Kaihatsu",
        "genre": "ActionShooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 157,
        "gameTitle": "Rampage",
        "overview": "The game where the nice guys don't get a look in. Grab your way through Chicago, punch up New York, and jump on San Francisco. Three indescribably nasty characters which bear a remarkable likeness to King Kong, Godzilla and Wolf-Man, need you to send them on a RAMPAGE in an enduring 150 days of destruction through 50 different cities!",
        "releaseDate": "1986",
        "developer": "Bally Midway",
        "genre": "Action",
        "players": "3",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 158,
        "gameTitle": "Rampart",
        "overview": "Rampart is a game combining strategy and artillery action. Build your castle from Tetris-style pieces, place your cannons, bombard the enemy, try to repair, do it all over again. The original arcade release has a single-player and a two-player mode; later revisions incorporate three-player gameplay.",
        "releaseDate": "1990",
        "developer": "Tengen",
        "genre": "Shooter",
        "players": "3",
        "image": "d3910316-0ae3-40bc-8775-f17354be334d.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d3910316-0ae3-40bc-8775-f17354be334d.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 682,
        "gameTitle": "Rapid Fire",
        "overview": null,
        "releaseDate": "1982",
        "developer": "Bally",
        "genre": "Space Alien Combat",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 159,
        "gameTitle": "Rastan",
        "overview": "Rastan Saga, known in North America simply as Rastan, is a 1987 hack and slash platform arcade game developed and published by Taito.",
        "releaseDate": "1987",
        "developer": "Taito",
        "genre": "Fighting",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 136,
                "location": "Pinburgh Set 63"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 513,
        "gameTitle": "Raven",
        "overview": null,
        "releaseDate": "1986",
        "developer": "Premier",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 115,
                "location": "Pinburgh Set 42"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 514,
        "gameTitle": "Ready Aim Fire!",
        "overview": null,
        "releaseDate": "1983",
        "developer": "Gottlieb",
        "genre": null,
        "players": "4",
        "image": "86a962e1-0091-4ec6-b6ac-d2fea6ea6078.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/86a962e1-0091-4ec6-b6ac-d2fea6ea6078.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 212,
        "gameTitle": "Real Ghost Busters, The",
        "overview": "Up to three players, each assuming the role of a Ghostbuster, run around a top-down universal scrolling terrain, shooting creatures while trying to suck up ghosts with their plasma guns.",
        "releaseDate": "1987",
        "developer": "Data East",
        "genre": "Scrolling Fighter",
        "players": "3",
        "image": "f63a28fa-8b0d-463e-a0ea-1533ac5af553.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f63a28fa-8b0d-463e-a0ea-1533ac5af553.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 520,
        "gameTitle": "Red & Ted's Road Show",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Williams",
        "genre": "Travel",
        "players": "4",
        "image": "d31703db-911e-4c5c-820f-a228e031606f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d31703db-911e-4c5c-820f-a228e031606f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 146,
                "location": "Snow Phoenix"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 657,
        "gameTitle": "Reflec Beat Volzza",
        "overview": "As with previous games, Reflec Beat Volzza employs an air-hockey play style in which players have to touch incoming objects, reflecting and bouncing them left and right to the opposite side. Different types of objects may appear, including the normal ones, objects that require players to hold them, and objects that move up and down instead of left and right. Higher difficulties also employ additional markers above the reflecting line where objects disappear when touched, instead of reflecting back. A new type of object, the Slide Object, requires players to touch and slide them, instead of merely touching or holding them.",
        "releaseDate": "2015",
        "developer": "Konami",
        "genre": "Dance/ Rhythm",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 161,
        "gameTitle": "Regulus",
        "overview": "Regulus  is an arcade shoot-'em-up game released for Sega System 1 hardware in 1983.\r\n\r\nPlayers control a tank, capable of moving in eight directions. One button fires forward, while another launches bombs further up the screen. The play area continuously scrolls upwards and players need to avoid enemies and obstacles.",
        "releaseDate": "1983",
        "developer": "Sega",
        "genre": "Shooter",
        "players": "1",
        "image": "fb09a93e-b3f0-42ae-9617-ed0bb8035dea.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/fb09a93e-b3f0-42ae-9617-ed0bb8035dea.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 97,
                "location": "Pinburgh Set 24"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 515,
        "gameTitle": "Revenge From Mars",
        "overview": "The last pinball game made under the \"Bally\" label.",
        "releaseDate": "1999",
        "developer": "Bally",
        "genre": "Aliens - Martians - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 162,
        "gameTitle": "Revolution X",
        "overview": "Explore a maze of locations shooting the bad guys and freeing members of the band Aerosmith.",
        "releaseDate": "1994",
        "developer": "Midway",
        "genre": "ActionShooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 651,
        "gameTitle": "Ringer",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Williams",
        "genre": null,
        "players": "1",
        "image": "95e5314a-4287-4216-b4fd-49d1fbf0a635.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/95e5314a-4287-4216-b4fd-49d1fbf0a635.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 98,
                "location": "Pinburgh Set 25"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 516,
        "gameTitle": "Ripley's BION",
        "overview": null,
        "releaseDate": "2004",
        "developer": "Stern",
        "genre": "Licensed Theme",
        "players": "4",
        "image": "a4a976f8-3e48-4517-b223-8a6b672f29be.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a4a976f8-3e48-4517-b223-8a6b672f29be.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 91,
                "location": "Pinburgh Set 19"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 517,
        "gameTitle": "Riverboat Gambler",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Williams",
        "genre": "Gambling",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 123,
                "location": "Pinburgh Set 50"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 518,
        "gameTitle": "Ro Go",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Bally",
        "genre": "Fantasy - Nordic",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 163,
        "gameTitle": "Road Blasters",
        "overview": "RoadBlasters is an arcade game released by Atari Games in 1987. In RoadBlasters, the player must navigate a sports car through 50 different rally races, getting to the finish line before running out of fuel.",
        "releaseDate": "1987",
        "developer": "Atari",
        "genre": "ActionRacingShooter",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 666,
        "gameTitle": "Road Blasters, Environmental",
        "overview": "RoadBlasters is a futuristic racing action game. The goal is to reach the finish line in one piece throughout each of 50 levels. Numerous enemies are out on the road to try and stop you, including armored cars, motorcycles, cannons on the side of the road, landmines, and more. \r\n\r\nYour vehicle is equipped with a machine gun to help you out, and occasionally a weapons plane will fly in and drop additional power ups that can be collected. Some of these are the U.Z. canon, cruise missiles, and speed boost. Your car has a very limited amount of fuel, however more can be picked up along the way by crossing the halfway point of a level, or by collecting the red and green fuel spheres that appear in the road or after destroying certain enemies. On many levels collecting fuel is critical otherwise you won't be able to reach the finish line.",
        "releaseDate": "1987",
        "developer": "Atari Games Corporation",
        "genre": "ActionRacingShooter",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 126,
                "location": "Pinburgh Set 53"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 519,
        "gameTitle": "Road Kings",
        "overview": "Once drop target is lowered, the ball reaches the center ramp by looping upwards along a track to a simple redirect mechanism that routes the ball alternately to the center-left or center-right ramp outlets. Upper ramp lowers to allow ball to access it and reach a kick-out hole. When ball is locked in kick-out hole, this ramp elevates to allow ball to roll underneath it to reach the first switch in the mega-score switch series.",
        "releaseDate": "1986",
        "developer": "Williams",
        "genre": "Apocalyptic - Motorcycles",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 110,
                "location": "Pinburgh Set 37"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 521,
        "gameTitle": "Robocop",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Data East",
        "genre": "Cops and Robbers",
        "players": "4",
        "image": "32a54932-8ab0-44bb-8c65-75154eb7b439.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/32a54932-8ab0-44bb-8c65-75154eb7b439.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 164,
        "gameTitle": "RoboCop",
        "overview": "RoboCop is a 1988 run and gun/beat 'em up hybrid arcade game developed and published by Data East with permission from Ocean Software. Other reworked versions appeared for home computers and video game consoles, most of them handled by Ocean, as well as a NES version ported by Sakata SAS and published by Data East. It has more recently appeared on mobile phones.\r\n\r\nThe games capture the spirit of the RoboCop film to some degree, as it involves killing generic criminals and enemy bosses, like the dangerous ED-209. Being quite popular, RoboCop was followed by several sequels (most of them handled by Ocean), including RoboCop 2, RoboCop 3, and RoboCop versus The Terminator which was developed for, but never released in arcades, and was later ported to several other consoles including the Sega Mega Drive, Super NES, Nintendo Game Boy, Sega Game Gear, and even as a final generation title for the Sega Master System in Europe.",
        "releaseDate": "1988",
        "developer": "Data East",
        "genre": "Action",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            },
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 165,
        "gameTitle": "Robotron: 2084",
        "overview": "In 2084, man creates a species of super-advanced cyborgs known as Robotrons. Recognizing the imperfect nature of their creators, the Robotrons conclude that the inefficient human race must be exterminated. In Robotron: 2084, only you and a single family of clones remain. If mankind is to survive, you must destroy the Grunts, Brains, Enforcers, and Tanks - but avoid the indestructible Hulks at all cost. Can you withstand wave after wave of android invasion and rescue Mommy, Daddy, and Mikey... before it's too late?",
        "releaseDate": "1982",
        "developer": "Williams",
        "genre": "Shooter",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 79,
                "location": "Pinburgh Set 7"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 644,
        "gameTitle": "Rocky and Bullwinkle",
        "overview": null,
        "releaseDate": "1993",
        "developer": "Data East",
        "genre": "Cartoon",
        "players": "4",
        "image": "2f0aff0b-3b54-4f77-9ab6-73c4aef0be6a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2f0aff0b-3b54-4f77-9ab6-73c4aef0be6a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 118,
                "location": "Pinburgh Set 45"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 525,
        "gameTitle": "Roller Coaster Tycoon",
        "overview": null,
        "releaseDate": "2002",
        "developer": "Stern",
        "genre": "Rollercoasters - Licensed Theme",
        "players": "4",
        "image": "5627e28b-7096-4926-9a5a-03a74ed2fc20.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5627e28b-7096-4926-9a5a-03a74ed2fc20.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 526,
        "gameTitle": "Roller Disco",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Gottlieb",
        "genre": "Rollerskating - Music - Happiness",
        "players": "4",
        "image": "62d7186b-c48e-48bf-9a5d-c8c31af28fca.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/62d7186b-c48e-48bf-9a5d-c8c31af28fca.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 84,
                "location": "Pinburgh Set 12"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 527,
        "gameTitle": "RollerGames",
        "overview": "Rollergames was a short-lived roller derby TV show.\r\n\r\nThe magnet on this game is at the end of the upper (right) flipper. There's a \"magnet' shot just to the left of center that leaves the ball in a saucer. When hit (when lit), the game says, \"Don't Flip!\", a VUK fires the ball up, through a wireform, and right in front of the flipper, where it sticks on the magnet. The game says, \"Flip!\", and the ball goes right up the ramp.\r\n\r\nThe \"wall\" ramp shot, when \"ball lock\" is lit, leads the ball down a wireform ramp to a capture area. When 2 balls have been captured and the ball lock is lit, the two balls in the lock area will eject, travel around a circular wireform ramp over the playfield and return to the capture area. Making the third ball lock begins multi-ball.\r\n\r\nThis game has very addictive background music, with separate tunes for the standard game, 2 ball lock, multi-ball, \"go for the wall\", and jackpot mode.",
        "releaseDate": "1990",
        "developer": "Williams",
        "genre": "Sports - Roller Derby - Roller Skating - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 126,
                "location": "Pinburgh Set 53"
            },
            {
                "id": 142,
                "location": "Pinburgh Set 69"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 528,
        "gameTitle": "Rolling Stones",
        "overview": null,
        "releaseDate": "2011",
        "developer": "Stern",
        "genre": "Licensed Theme - Music",
        "players": "4",
        "image": "d5782ac0-27b7-4af0-866c-50117f1b5398.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d5782ac0-27b7-4af0-866c-50117f1b5398.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 136,
                "location": "Pinburgh Set 63"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 529,
        "gameTitle": "Royal Flush Deluxe",
        "overview": null,
        "releaseDate": "1983",
        "developer": "Gottlieb",
        "genre": "Cards/ Gambling",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 41,
                "location": "F4"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 197,
        "gameTitle": "S.T.U.N. Runner",
        "overview": "You are a S.T.U.N. Runner doing time trials. Shoot or avoid other vehicles that hinder you while driving the optimal path for best speed. The Shockwave will destroy all adversaries on the screen and the Boost pads give you invulnerability while increasing your speed.",
        "releaseDate": "1989",
        "developer": "Atari",
        "genre": "Racing",
        "players": "1",
        "image": "d09e5b21-ed5e-4947-9e8a-9eca4f672428.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d09e5b21-ed5e-4947-9e8a-9eca4f672428.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 84,
                "location": "Pinburgh Set 12"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 530,
        "gameTitle": "Safari",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Bally",
        "genre": "Hunting - Safari",
        "players": "2",
        "image": "f811cd4c-2d56-463b-b315-3daffa3d5bb6.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f811cd4c-2d56-463b-b315-3daffa3d5bb6.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 531,
        "gameTitle": "Safecracker",
        "overview": null,
        "releaseDate": "1996",
        "developer": "Bally",
        "genre": "Cops and Robbers - Money",
        "players": "4",
        "image": "6593e3cd-bb5c-437d-af2e-fccd60ce2e42.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6593e3cd-bb5c-437d-af2e-fccd60ce2e42.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 166,
        "gameTitle": "San Francisco Rush 2049",
        "overview": "A futuristic driving game that takes place in San Francisco.",
        "releaseDate": "1999",
        "developer": "Atari",
        "genre": "Racing",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 167,
        "gameTitle": "Satan's Hollow",
        "overview": "Satan's Hollow is a fixed-shooter arcade game released by Bally Midway in 1982, subsequently converted to the Atari 8-bit family, and in 1984 to Commodore 64.[2]",
        "releaseDate": "1982",
        "developer": "Bally Midway",
        "genre": "Shooter",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 111,
                "location": "Pinburgh Set 38"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 532,
        "gameTitle": "Satin Doll",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Williams",
        "genre": "Music - Singing",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 111,
                "location": "Pinburgh Set 38"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 533,
        "gameTitle": "Scared Stiff",
        "overview": null,
        "releaseDate": "1996",
        "developer": "Bally",
        "genre": "Licensed Theme - Celebrities - Horror",
        "players": "4",
        "image": "d6d2306b-5b74-4b0d-9751-01db38c88461.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d6d2306b-5b74-4b0d-9751-01db38c88461.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 87,
                "location": "Pinburgh Set 15"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 534,
        "gameTitle": "Scorpion",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 131,
                "location": "Pinburgh Set 58"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 535,
        "gameTitle": "Scuba",
        "overview": null,
        "releaseDate": "1970",
        "developer": "Gottlieb",
        "genre": "Mermaids - Mythology - Scuba Diving - Swimming - Water",
        "players": "2",
        "image": "a0e92b17-2320-4b7d-8741-1b095e326c30.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a0e92b17-2320-4b7d-8741-1b095e326c30.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 536,
        "gameTitle": "Seawitch",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": "Fantasy",
        "players": "4",
        "image": "f5347486-fd2e-4bfd-9f95-b72394d3ef9e.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f5347486-fd2e-4bfd-9f95-b72394d3ef9e.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 138,
                "location": "Pinburgh Set 65"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 603,
        "gameTitle": "Shadow, The",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Bally",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 84,
                "location": "Pinburgh Set 12"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 537,
        "gameTitle": "Shaq Attaq",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Gottlieb",
        "genre": "Sports - Basketball - Celebrities - Licensed Theme",
        "players": "4",
        "image": "df472f3c-1f53-48dc-a45d-305b4783bff8.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/df472f3c-1f53-48dc-a45d-305b4783bff8.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 538,
        "gameTitle": "Sharpshooter",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Game Plan",
        "genre": "American West",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 539,
        "gameTitle": "Sharpshooter II",
        "overview": null,
        "releaseDate": "1983",
        "developer": "Game Plan",
        "genre": "American West",
        "players": "4",
        "image": "fddb31d2-3948-4a4d-9cbc-2841d7e8d79b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/fddb31d2-3948-4a4d-9cbc-2841d7e8d79b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 168,
        "gameTitle": "Shinobi",
        "overview": "Shinobi is a side-scrolling action game produced by Sega originally released for the arcades in 1987. In Shinobi, the player controls a modern day ninja named Joe Musashi who goes on a mission to rescue his kidnapped students from a group of terrorists. Shinobi was later adapted by Sega to their Master System game console, followed by conversions to other platforms such as the Nintendo Entertainment System, PC Engine, and various home computers, as well as downloadable emulated versions of the original arcade game for the Wii and Xbox 360. The success of Shinobi inspired the development of various sequels and spin-offs.",
        "releaseDate": "1987",
        "developer": "Sega",
        "genre": "Fighting",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 87,
                "location": "Pinburgh Set 15"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 541,
        "gameTitle": "Shrek",
        "overview": "Stern reportedly used the existing Family Guy pinball game design, but re-themed it with all new artwork and software.\r\n\r\nJeff Powell created all of the playfield sound effects and edited the speech and music. He tells us some of what it took to make it happen:\r\n\r\nThe speech was the typical editing of \"lifted\" movie sound track speech with a lot of custom speech. Each of the \"sound-alike\" voice actors had to be personally approved by the major actors, according to the contracts Eddie Murphy, Mike Myers, and the rest have with DreamWorks. That led to quite an 11th-hour deadline nightmare for Gary [Stern]. \r\n\r\nAnother huge nightmare was in nailing down the licensing of Smash Mouth's \"All Star\" for the opening music of the game. I recorded an instrumental version of the tune with Dan Peters, a guitarist Chris Granner introduced me to years ago. We also found a singer who was able to piece together for us a reasonable vocal knockoff (Smash Mouth's Steve Harwell is a rather unusual sounding vocalist). \r\n\r\nWell, Smash Mouth said they would not allow anything but the original recording to go into the game. Of course that meant bigger bucks. I have no information as to what Gary paid, but ultimately the original recording starts the game and runs through the first chorus (\"Hey now, you're an All Star...\"). From that point, it's my instrumental version during the remainder of the general mainplay. \r\n\r\nThe rest of the music is all lifted straight from the three Shrek movie soundtracks. But let me tell you, it is not an easy feat trying to make seamless loops out of orchestral music that's not composed for a coin-op game. It's quite beautiful, though. And, thankfully, we had the room to put in all those long loops, as this game has no foreign speech. \r\n\r\nOverall, what was supposed to have been a 2-month job converting the game sound from Family Guy over to Shrek took closer to four months.",
        "releaseDate": "2008",
        "developer": "Stern",
        "genre": "Licensed Theme - Fictional - Animated",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 542,
        "gameTitle": "Silverball Mania",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Bally",
        "genre": "Sports - Pinball - Fantasy",
        "players": "4",
        "image": "3806df4b-9bd3-461b-8fdf-38710ee211ae.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3806df4b-9bd3-461b-8fdf-38710ee211ae.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 82,
                "location": "Pinburgh Set 10"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 543,
        "gameTitle": "Simpsons Pinball Party",
        "overview": "100% of speech was by Dan Castellaneta, Nancy Cartwright and Hank Azaria, custom recorded for the game. Cabinet and Backglass art was done by Matt Groening's team.",
        "releaseDate": "2003",
        "developer": "Stern",
        "genre": "Licensed Theme - Comic",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 674,
        "gameTitle": "Simpsons, The",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Data East",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 170,
        "gameTitle": "Simpsons, The",
        "overview": "A jewel heist gone wrong sees Mr Burns's sidekick, Smithers, kidnapping Maggie and making his escape. Between one and four players take on the role of either Homer, Marge, Lisa, or Bart in this colorful, horizontally-scrolling beat-em-up from Konami. Each Simpsons character possesses an attacking move specific to them; Marge is armed with a vacuum cleaner, Lisa has a skipping rope, Bart has his skateboard, and Homer fights with his fists. The players must battle their way through a variety of Simpsons-themed levels - such as Springfield and Krustyland - fighting goons, thugs, zombies, drunks, firemen, and several Simpsons regulars. Many Simpsons characters that don't appear as enemies have 'cameo' scenes in the game (Otto working at a burgerstand in Krustyland, for example). The archetypal 'boss' character awaits the players at the end of every stage. The game ends with a final showdown with the evil Mr. Burns in his luxurious mansion.",
        "releaseDate": "1991",
        "developer": "Konami",
        "genre": "Fighting",
        "players": "4+",
        "image": "bae5cfc9-92eb-435e-9d35-4bd00d2f96a4.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/bae5cfc9-92eb-435e-9d35-4bd00d2f96a4.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 673,
        "gameTitle": "Sinbad",
        "overview": "The flyer indicates that this game was a direct tie-in to the 1977 Hollywood movie \"Sinbad and the Eye of the Tiger\".\r\n\r\nSinbad (Sindbad) the Sailor was a character in one of the folk tales of classic Arabic literature known collectively as The Thousand and One Nights (aka The Arabian Nights).",
        "releaseDate": "1978",
        "developer": "Gottlieb",
        "genre": "Fantasy - Myth and Legend",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 171,
        "gameTitle": "Sinistar",
        "overview": "The player pilots a lone spacecraft, and must create \"Sinibombs\" by shooting at drifting planetoids and catching the crystals that are thereby released. Sinibombs are needed to defeat the game boss, Sinistar, an animated spacecraft with a demonic skull face. Sinistar does not exist at the start of the game, and is continuously under construction by enemy worker ships. Though time is crucial, attempting to mine too quickly will destroy a planetoid without releasing any crystals. Enemy worker ships are also gathering crystals (often stealing them from the player) which they use to construct the Sinistar. Enemy warrior ships can directly attack the player's ship. The player is given a head-start before the enemy ships have enough crystals to begin construction. Game ends when the player's ships are all destroyed.\r\n\r\nOnce the Sinistar is completely formed, a digitized voice makes various threatening pronouncements, including \"Beware, I live!,\" \"I hunger, coward!,\" \"I am Sinistar!,\" \"Run! Run! Run!,\" \"Beware, coward!\", \"I hunger!,\" \"Run, coward!,\" and a loud roaring sound. The Sinistar has no weapon attacks, but if it contacts the player's ship while it darts about the playfield, the player's ship will be \"eaten\" and destroyed. A total of 13 Sinibombs are required to destroy a fully built Sinistar, although an incomplete Sinistar can be damaged to slow construction. Each short-range Sinibomb automatically targets the Sinistar when fired, but can be intercepted by a collision with an enemy ship, enemy fire, or a planetoid.\r\n\r\nThe player moves from one zone to the next each time he defeats the Sinistar. A sequence of four zones repeats continuously after the first zone. Each is named for the most numerous feature of that zone: Worker Zone, Warrior Zone, Planetoid Zone, and Void Zone (the Void Zone is especially difficult because it has very few planetoids). Beginning with the first Worker Zone, a completed but damaged Sinistar can be repaired/rebuilt by the enemy ships by gathering more crystals, extending its \"lifespan\" if the player is unable to kill it quickly.",
        "releaseDate": "1982",
        "developer": "Williams Electronics",
        "genre": "Shooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 112,
                "location": "Pinburgh Set 39"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 544,
        "gameTitle": "Skateball",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Bally",
        "genre": "Sports - Skateboard",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 110,
                "location": "Pinburgh Set 37"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 545,
        "gameTitle": "Slick Chick",
        "overview": null,
        "releaseDate": "1963",
        "developer": "Gottlieb",
        "genre": null,
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 546,
        "gameTitle": "Slugfest",
        "overview": null,
        "releaseDate": "1991",
        "developer": "Williams",
        "genre": "Sports - Baseball",
        "players": "2",
        "image": "9a7f6d00-e9bd-4e8c-8f71-23e94ac50563.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9a7f6d00-e9bd-4e8c-8f71-23e94ac50563.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 172,
        "gameTitle": "Smash TV",
        "overview": "Smash TV is a 1990 arcade game created by Eugene Jarvis and Mark Turmell for Williams. Home versions were developed for various platforms and most were published by Acclaim Entertainment.",
        "releaseDate": "1990",
        "developer": "Williams",
        "genre": "Shooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 99,
                "location": "Pinburgh Set 26"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 547,
        "gameTitle": "Snow Derby",
        "overview": "'Snow Derby' and its 4-player version Gottlieb's 1970 'Snow Queen' had an end-of-ball bonus ladder, a feature that began to appear regularly on pinball machines from this point forward. One earlier game that had a bonus ladder is Chicago Coin's 1939 'Nippy'.",
        "releaseDate": "1970",
        "developer": "Gottlieb",
        "genre": "Sports - Skiing - Snowmobiling",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 141,
                "location": "Pinburgh Set 68"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 548,
        "gameTitle": "Soccer",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Gottlieb",
        "genre": "Sports - Soccer",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 549,
        "gameTitle": "Soccer Kings",
        "overview": "Has speech. Two playfields. Five flippers, four on main playfield, one on upper (attack zone) playfield. Timed \"bonus ball\". 4 balls reside in the \"attack zone\" and are recycled based on the number of Extra Kicks. Only 1 ball is played on main playfield. Ball falling into top gobble hole reappears at center playfield.",
        "releaseDate": "1982",
        "developer": "Zaccaria",
        "genre": "Sports - Soccer",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 106,
                "location": "Pinburgh Set 33"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 550,
        "gameTitle": "Solar Fire",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Williams",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 117,
                "location": "Pinburgh Set 44"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 551,
        "gameTitle": "Solar Ride",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Gottlieb",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 108,
                "location": "Pinburgh Set 35"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 604,
        "gameTitle": "Sopranos, The",
        "overview": "Plays THE SOPRANOS® classic theme song, \"Woke Up This Morning,\" during game play. Features the real voices of many characters on the show, including Tony Soprano (James Gandolfini), Silvio (Steven Van Zandt), Dr. Melfi (Lorraine Bracco), Carmela Soprano (Edie Falco), Uncle Junior (Dominic Chianese), and Big Pussy (Vincent Pastore).",
        "releaseDate": "2005",
        "developer": "Stern ",
        "genre": "Licensed Theme - Mobsters",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 113,
                "location": "Pinburgh Set 40"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 552,
        "gameTitle": "Sorcerer",
        "overview": null,
        "releaseDate": "1985",
        "developer": "Williams",
        "genre": "Fantasy - Wizard - Magic - Dragons",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 94,
                "location": "Pinburgh Set 21"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 553,
        "gameTitle": "Sound Stage",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Chicago Coin",
        "genre": "Music - Singing",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 554,
        "gameTitle": "South Park ",
        "overview": null,
        "releaseDate": "1999",
        "developer": "Sega",
        "genre": "Cartoon - Licensed - Juvenilia",
        "players": "6",
        "image": "b3602101-f2ca-4997-beb6-1dc82fdb8a4f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b3602101-f2ca-4997-beb6-1dc82fdb8a4f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            },
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 173,
        "gameTitle": "Space Duel",
        "overview": "Space Duel is an arcade game released in 1982 by Atari Inc. It is a direct descendant of the original Asteroids, with asteroids replaced by colorful geometric shapes like cubes, diamonds, and spinning pinwheels. Space Duel is the first and only multi-player vector game by Atari. When Asteroids Deluxe did not sell well, this game was taken off the shelf and released to moderate success.\r\n\r\nThe player has five buttons: two to rotate the ship left or right, one to shoot, one to activate the thruster, and one for force field. Shooting all objects on the screen completes a level. Space Duel, Asteroids, Asteroids Deluxe and Gravitar all used similar 5-button controlling system.",
        "releaseDate": "1982",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 34,
                "location": "E3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 175,
        "gameTitle": "Space Invaders",
        "overview": "Space Invaders is a two-dimensional fixed shooter game in which the player controls a laser cannon by moving it horizontally across the bottom of the screen and firing at descending aliens. The aim is to defeat five rows of eleven aliens—some versions feature different numbers—that move horizontally back and forth across the screen as they advance towards the bottom of the screen. The player defeats an alien, and earns points, by shooting it with the laser cannon. As more aliens are defeated, the aliens' movement and the game's music both speed up. Defeating the aliens brings another wave that is more difficult, a loop which can continue indefinitely.",
        "releaseDate": "1977",
        "developer": "Taito Corporation",
        "genre": "Shooter",
        "players": "2",
        "image": "df160c17-56cf-4cda-bbd7-bb5661cbd987.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/df160c17-56cf-4cda-bbd7-bb5661cbd987.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 555,
        "gameTitle": "Space Invaders",
        "overview": "The alien depicted on the backglass was deemed an unlicensed use of the one used in the 1979 Hollywood movie Alien. Some playfield art elements and game sounds were borrowed from the 1978 'Space Invaders' video game which was still popular at the time that this pinball machine came out.",
        "releaseDate": "1980",
        "developer": "Bally",
        "genre": "Outer Space - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 177,
        "gameTitle": "Space Invaders Deluxe",
        "overview": "The sequel to the original space alien vertical shooter. Move your laser base back and forth along the bottom of the screen and shoot endless waves of aliens marching towards you from the top. Shoot the flying saucers for extra points. ",
        "releaseDate": "1980",
        "developer": "Midway",
        "genre": "Shooter",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 556,
        "gameTitle": "Space Mission",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Williams",
        "genre": "Outer Space",
        "players": "4",
        "image": "54acf16f-807b-4a33-9be9-5415858e76d1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/54acf16f-807b-4a33-9be9-5415858e76d1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 557,
        "gameTitle": "Space Odyssey",
        "overview": "2 player version of \"Space Mission.\"",
        "releaseDate": "1976",
        "developer": "Williams",
        "genre": "Outer Space",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 109,
                "location": "Pinburgh Set 36"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 558,
        "gameTitle": "Space Race",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Recel",
        "genre": "Outer Space - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 86,
                "location": "Pinburgh Set 14"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 559,
        "gameTitle": "Space Shuttle",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Williams",
        "genre": "Outer Space",
        "players": "4",
        "image": "5c7261e4-5196-4482-a90f-48a93fbcbfcd.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5c7261e4-5196-4482-a90f-48a93fbcbfcd.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 103,
                "location": "Pinburgh Set 30"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 560,
        "gameTitle": "Space Station",
        "overview": null,
        "releaseDate": "1987",
        "developer": "Williams",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 178,
        "gameTitle": "Space Zap",
        "overview": "A space-themed reflex game where you command a laser base and destroy a variety of attackers including space mines, alien ships, and attack satellites.",
        "releaseDate": "1980",
        "developer": "Midway",
        "genre": "Skill",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 130,
                "location": "Pinburgh Set 57"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 561,
        "gameTitle": "Spanish Eyes",
        "overview": null,
        "releaseDate": "1972",
        "developer": "Williams",
        "genre": "Dancing - Music - Women - World Places",
        "players": "1",
        "image": "0115f60a-9337-41bc-8950-3fd49af1b63c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0115f60a-9337-41bc-8950-3fd49af1b63c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 562,
        "gameTitle": "Speakeasy",
        "overview": "A \"speakeasy\" was one of the many saloons in the United States that illegally served alcoholic beverages during Prohibition, which was the period from 1920 to 1933 in which national law prohibited the manufacture, sale, or transportation of intoxicating beverages. Prior to Prohibition, the saloons admitted only men as patrons, but as speakeasies they allowed both men and women.\r\n\r\nThe woman on the backglass is reportedly wearing either Etruscan revival or Egyptian revival jewelry, both popular in the 1920's.\r\n\r\nReportedly, all playfields in this production run were made of resin (plastic), not wood.",
        "releaseDate": "1982",
        "developer": "Bally",
        "genre": "American History",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 563,
        "gameTitle": "Spectrum",
        "overview": null,
        "releaseDate": "1982",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": "c10ffe14-e0ef-4d99-bee5-390a222b040b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c10ffe14-e0ef-4d99-bee5-390a222b040b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 86,
                "location": "Pinburgh Set 14"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 565,
        "gameTitle": "Spiderman",
        "overview": null,
        "releaseDate": "2007",
        "developer": "Stern",
        "genre": "Licensed - Comics - Superheroes",
        "players": "4",
        "image": "e9d9fffe-79b8-469c-8ffa-dd16959256df.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e9d9fffe-79b8-469c-8ffa-dd16959256df.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 566,
        "gameTitle": "Split Second",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Stern",
        "genre": "Happiness - Circus/ Carnival",
        "players": "4",
        "image": "a80aa55a-f545-49d6-ab58-7de0462d0e4c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/a80aa55a-f545-49d6-ab58-7de0462d0e4c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 191,
        "gameTitle": "Spy Hunter 2",
        "overview": "Spy Hunter II is an arcade game released by Bally Midway in 1987 as a sequel to Spy Hunter. It is considered to be one of the worst sequels of all time.\r\n\r\nPlay is similar to the original Spy Hunter but takes place in a 3D overhead behind the car view. The player can obtain several weapons just like in the original Spy hunter such as oil slicks, missiles and smoke screen. The game also includes a two player co-operative mode where the players can help each other out. The arcade cabinet uses a single monitor divided by a bezel and two steering wheels.[2] Both the cabinet and in-game design were previously seen in Bally Midway's Max RPM, released the year before.",
        "releaseDate": "1987",
        "developer": "Bally Midway",
        "genre": "Racing",
        "players": "2",
        "image": "9cb4bec9-7997-4d6f-acb2-c56521f3f213.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/9cb4bec9-7997-4d6f-acb2-c56521f3f213.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 192,
        "gameTitle": "Star Castle",
        "overview": "You control a ship that fires at a cannon surrounded by three oppositely rotating energy rings of twelve segments each. When a clear line of fire is open, the cannon fires back at your ship with a big \"fuzzball\". Three sparks start off on the rings, but eventually fly loose and chase the player's ship.",
        "releaseDate": "1980",
        "developer": "Cinematronics",
        "genre": "Shooter",
        "players": "2",
        "image": "ddceda79-8928-46b6-b689-d9280d27e0d9.jpeg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/ddceda79-8928-46b6-b689-d9280d27e0d9.jpeg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 569,
        "gameTitle": "Star Pool",
        "overview": null,
        "releaseDate": "1975",
        "developer": "Williams",
        "genre": "Billiards",
        "players": "4",
        "image": "dd78e46a-901c-4a5e-9be9-fee7a5977a66.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/dd78e46a-901c-4a5e-9be9-fee7a5977a66.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 570,
        "gameTitle": "Star Race",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Gottlieb",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 124,
                "location": "Pinburgh Set 51"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 571,
        "gameTitle": "Star Trek",
        "overview": null,
        "releaseDate": "2013",
        "developer": "Stern",
        "genre": "Licensed Theme - Outer Space - Science Fiction - Space Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 127,
                "location": "Pinburgh Set 54"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 572,
        "gameTitle": "Star Trek",
        "overview": null,
        "releaseDate": "1991",
        "developer": "Data East",
        "genre": "Outer Space - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 193,
        "gameTitle": "Star Trek",
        "overview": "A color vector game based on the movie and TV series of the same name. Utilizes a spin control with a button for photon torpedoes, phasers, warp, and impulse.",
        "releaseDate": "1982",
        "developer": "Sega",
        "genre": "Space",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 584,
        "gameTitle": "Star Trek: The Next Generation",
        "overview": "There are three cellar holes in the upper half of the playfield. They lead to three VUKs below the playfield that will kick the ball up to the left habitrail or to either of the two cannons on top of the slingshots. To reduce the time it would take for a ball to fall into a cellar hole, roll down under the playfield to a VUK, and resurface back into play, a patented below-the-playfield multiple ball delivery system was developed. In this system, other balls are already positioned below the playfield, one in each of the three VUKs. As soon as the playfield ball falls into a cellar hole, the corresponding VUK kicks its ball into play. The playfield ball then rolls down to remain in the newly-vacated VUK. Game play is continuous, and time has been saved.",
        "releaseDate": "1993",
        "developer": "Williams",
        "genre": "Licensed Theme - Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 141,
                "location": "Pinburgh Set 68"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 667,
        "gameTitle": "Star Wars",
        "overview": null,
        "releaseDate": "2012",
        "developer": "Stern",
        "genre": null,
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 194,
        "gameTitle": "Star Wars",
        "overview": "Strap on your helmet, climb aboard your X-Wing Fighter, and prepare to take on the Empire! The first scene is the Space Attack, with waves of hostile space-craft attacking your lonely but powerful ship. You battle to the Death Star, and once there fly close to the ground in a daring attempt to blast the space towers and flying stars, steering your way through the barrage. Finally, you emerge in the trench, jumping and ducking the stretch barriers and shooting the missile emplacements fastened to each side of the death-defying walls. There are many levels to the game with stirring music and speech synthesis - fast and furious action is guaranteed throughout!",
        "releaseDate": "1983",
        "developer": "Atari",
        "genre": "Flight Simulator/ Shooter",
        "players": "1",
        "image": "c17de83c-a8ac-40c6-a44c-9d62cd920b2c.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c17de83c-a8ac-40c6-a44c-9d62cd920b2c.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 573,
        "gameTitle": "Star Wars Episode 1",
        "overview": "Last game manufactured by WMS industries (Williams and Bally labels) before the announcement to close their doors on October 25, 1999. The jet bumper rule of the 1.4 software reminds players of that date. (The number of points for spelling Jar Jar is 19,992,510; This is the date 25-10-1999, the same day WMS announced the closing of their pinball branch.)",
        "releaseDate": "1999",
        "developer": "Bally",
        "genre": "Outer Space - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 104,
                "location": "Pinburgh Set 31"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 574,
        "gameTitle": "Star Wars Trilogy",
        "overview": null,
        "releaseDate": "1997",
        "developer": "Sega",
        "genre": "Licensed - Outer Space",
        "players": "6",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 116,
                "location": "Pinburgh Set 43"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 575,
        "gameTitle": "Stargate",
        "overview": "Unusual Multiballs: player starts with only 2 balls. They must then hit a jackpot to release an additional ball. In some modes this can be repeated and player can hit another jackpot to release one more ball, for a total of 4 balls.",
        "releaseDate": "1994",
        "developer": "Gottlieb",
        "genre": "Outer Space - Myth and Legend",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 195,
        "gameTitle": "Stargate",
        "overview": "Stargate is an arcade game released in 1981 by Williams Electronics. Created by Eugene Jarvis, it is a sequel to the 1980 game Defender, and was the first of only three productions from Vid Kidz, an independent development house formed by Jarvis and Larry DeMar.",
        "releaseDate": "1981",
        "developer": "Williams",
        "genre": "ActionShooter",
        "players": "2",
        "image": "503eca69-cb1c-4cc2-9641-dda4e9f1ce49.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/503eca69-cb1c-4cc2-9641-dda4e9f1ce49.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 103,
                "location": "Pinburgh Set 30"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 576,
        "gameTitle": "Stars",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Stern",
        "genre": "Outer Space - Space Exploration",
        "players": "4",
        "image": "e688920b-8374-4819-8683-212fd3b9a068.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e688920b-8374-4819-8683-212fd3b9a068.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 96,
                "location": "Pinburgh Set 23"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 577,
        "gameTitle": "Starship Troopers",
        "overview": null,
        "releaseDate": "1997",
        "developer": "Sega",
        "genre": "Space - Aliens - Sci-Fi Movie - Licensed Theme",
        "players": "6",
        "image": "640dc265-52ea-4887-a276-c12cd91f1216.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/640dc265-52ea-4887-a276-c12cd91f1216.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 196,
        "gameTitle": "Steel Gunner 2",
        "overview": "As in the original, you shoot at cyborgs while rescuing humans.",
        "releaseDate": "1991",
        "developer": "Namco",
        "genre": "Shooter",
        "players": "2",
        "image": "40a6be4c-9466-42f3-9e67-c303172d910f.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/40a6be4c-9466-42f3-9e67-c303172d910f.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 578,
        "gameTitle": "Stellar Wars",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Williams",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 579,
        "gameTitle": "Stingray",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Stern",
        "genre": "Scuba Diving - Water Sports",
        "players": "4",
        "image": "dc00ffb7-7947-4080-9cf6-e44a5e9aefb0.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/dc00ffb7-7947-4080-9cf6-e44a5e9aefb0.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 582,
        "gameTitle": "Strange Science",
        "overview": null,
        "releaseDate": "1986",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 80,
                "location": "Pinburgh Set 8"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 583,
        "gameTitle": "Strato-Flite",
        "overview": null,
        "releaseDate": "1974",
        "developer": "Williams",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 670,
        "gameTitle": "Strike Zone",
        "overview": null,
        "releaseDate": "1970",
        "developer": "Williams",
        "genre": "Sports - Bowling",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 135,
                "location": "Pinburgh Set 62"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 646,
        "gameTitle": "Strikes and Spares",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Bally",
        "genre": "Sports - Bowling",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 199,
        "gameTitle": "Super High Impact",
        "overview": "Horizontal football play, no penalties, rough, HIGH IMPACT play. Not NFL licensed. Real plays. Two pages of plays each for offense and defense. Speech \"AHH, MY Knee!\" and the \"Hey\" Song by Gary Glitter. Fifteen Teams to choose from.",
        "releaseDate": "1991",
        "developer": "Midway",
        "genre": "Sports",
        "players": "4",
        "image": "e74964e3-45ea-4714-a489-8a9073e5498c.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e74964e3-45ea-4714-a489-8a9073e5498c.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 113,
                "location": "Pinburgh Set 40"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 586,
        "gameTitle": "Super Orbit",
        "overview": null,
        "releaseDate": "1983",
        "developer": "Gottlieb",
        "genre": "Outer Space",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 34,
                "location": "E3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 200,
        "gameTitle": "Super Pac-Man",
        "overview": "Super Pac-Man is the fourth title of the Pac-Man series of games, released in Japan on August 11, 1982 and North America on October 1, 1982 and it is the fourth starring Pac-Man himself. It is also the second game to be created by series originator Namco, as Ms. Pac-Man (the second in the series) and Pac-Man Plus (released a few months before Super Pac-Man) were created without Namco's involvement.",
        "releaseDate": "1982",
        "developer": "Bally Midway",
        "genre": "Puzzle",
        "players": "2",
        "image": "250b5ab8-2951-4ee2-a1b2-01fc434f5271.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/250b5ab8-2951-4ee2-a1b2-01fc434f5271.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 587,
        "gameTitle": "Super Score",
        "overview": null,
        "releaseDate": "1967",
        "developer": "Gottlieb",
        "genre": "Sports - Pinball",
        "players": "2",
        "image": "de823742-d48a-4220-a349-2f34b5d527d3.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/de823742-d48a-4220-a349-2f34b5d527d3.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 107,
                "location": "Pinburgh Set 34"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 588,
        "gameTitle": "Super Straight",
        "overview": null,
        "releaseDate": "1977",
        "developer": "Sonic",
        "genre": "Playing Cards - Poker",
        "players": "4",
        "image": "cd87acec-bed7-4382-ab0a-6967d932a790.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cd87acec-bed7-4382-ab0a-6967d932a790.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 201,
        "gameTitle": "Super Street Fighter II Turbo",
        "overview": "Super Street Fighter II Turbo, released in Japan as Super Street Fighter II X: Grand Master Challenge, is a competitive fighting game released for the arcades by Capcom in 1994. It is the fifth arcade installment in the Street Fighter II sub-series of Street Fighter games, following Super Street Fighter II. Like its predecessor, it ran on the CP System II hardware.\r\n\r\nSuper Turbo introduced several new play mechanics to the game system from the previous Street Fighter II installments, including the addition of powered-up Special Moves called Super Combos. It also introduced the hidden character of Akuma, who would go on to become a recurring character in later Street Fighter installments and other Capcom fighting games.",
        "releaseDate": "1994",
        "developer": "Capcom",
        "genre": "Fighting",
        "players": "2",
        "image": "13537472-017b-4690-af90-e91203afa5aa.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/13537472-017b-4690-af90-e91203afa5aa.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 202,
        "gameTitle": "Superman",
        "overview": "Superman is an arcade Beat 'em up/Shoot 'em up released by Taito Corporation in 1988. It is based on the popular hero icon Superman from DC Comics. Released in 1988 for the X System, The player assume the role of Superman, who must fight through five levels to make the world safe from the evil Emperor Zaas. The second player's red Superman is identical to the first player's blue Superman, except in appearance. However, the red Superman's presence is never explained in the game.",
        "releaseDate": "1988",
        "developer": "Taito Corporation",
        "genre": "ActionShooter",
        "players": "2",
        "image": "d57baff9-9cf6-48c6-bed9-bfbc4d7e5aca.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d57baff9-9cf6-48c6-bed9-bfbc4d7e5aca.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 125,
                "location": "Pinburgh Set 52"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 589,
        "gameTitle": "Supersonic",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Bally",
        "genre": "Aircraft - Historical - Travel",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 134,
                "location": "Pinburgh Set 61"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 647,
        "gameTitle": "Surf Champ",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Gottlieb",
        "genre": "Sports - Water Sports - Happiness - Recreation - Surfing - Swimming",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 108,
                "location": "Pinburgh Set 35"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 590,
        "gameTitle": "Surf 'n Safari",
        "overview": null,
        "releaseDate": "1991",
        "developer": "Gottlieb",
        "genre": "Amusement Park - Water - Safari",
        "players": "4",
        "image": "939f0bbc-3867-4bfd-b3be-4433cbb33a00.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/939f0bbc-3867-4bfd-b3be-4433cbb33a00.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 203,
        "gameTitle": "Surf Planet",
        "overview": "A first-person 3-D snowboarding game from Gaelco.\r\n",
        "releaseDate": "1997",
        "developer": "Gaelco",
        "genre": "Sports",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 87,
                "location": "Pinburgh Set 15"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 591,
        "gameTitle": "Surfer",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Gottlieb",
        "genre": "Sports - Water Sports - Happiness - Recreation - Surfing - Swimming",
        "players": "2",
        "image": "12d65cfb-69ed-45a8-8090-2abcac43ebc4.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/12d65cfb-69ed-45a8-8090-2abcac43ebc4.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 204,
        "gameTitle": "SVC Chaos",
        "overview": "A fighting game with characters from Capcom - Ryu, Ken, and Dalshim, and SNK - Iori, Mai, and Terry.",
        "releaseDate": "2003",
        "developer": "SNK",
        "genre": "Fighting",
        "players": "2",
        "image": "09022664-67c3-4a17-9cef-f27b0596894a.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/09022664-67c3-4a17-9cef-f27b0596894a.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 129,
                "location": "Pinburgh Set 56"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 592,
        "gameTitle": "Swinger",
        "overview": null,
        "releaseDate": "1973",
        "developer": "Williams",
        "genre": "Music - Dancing - People - Singing",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 86,
                "location": "Pinburgh Set 14"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 593,
        "gameTitle": "Swords of Fury",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Williams",
        "genre": "Fantasy - Knights - Wizard/Magic - Medieval",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 671,
        "gameTitle": "Tag Team",
        "overview": null,
        "releaseDate": "1985",
        "developer": "Premier",
        "genre": "Wrestling",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 135,
                "location": "Pinburgh Set 62"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 595,
        "gameTitle": "Tales from the Crypt",
        "overview": null,
        "releaseDate": "1993",
        "developer": "Data East",
        "genre": "Licensed Theme - Comic Book - Horror",
        "players": "4",
        "image": "43c76892-66bd-468b-b57e-882ee9356276.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/43c76892-66bd-468b-b57e-882ee9356276.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 75,
                "location": "Pinburgh Set 3"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 594,
        "gameTitle": "Tales of the Arabian Nights",
        "overview": null,
        "releaseDate": "1996",
        "developer": "Williams",
        "genre": "Historical - Legend",
        "players": "4",
        "image": "cda796fe-5e79-4b7b-b459-3a54e8442902.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cda796fe-5e79-4b7b-b459-3a54e8442902.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 596,
        "gameTitle": "Target Alpha",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Gottlieb",
        "genre": "Outer Space Fantasy",
        "players": "4",
        "image": "5de2ffc3-ff4b-4f8a-81db-d3514b37e377.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5de2ffc3-ff4b-4f8a-81db-d3514b37e377.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 133,
                "location": "Pinburgh Set 60"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 597,
        "gameTitle": "Target Pool",
        "overview": null,
        "releaseDate": "1969",
        "developer": "Gottlieb",
        "genre": "Billiards",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 205,
        "gameTitle": "Tattoo Assassins",
        "overview": "Mullah Abba is calling you. He needs you to do battle with Koldan The Conquerer. You must recover the ancient Ink of Ghize; a morphus fluid organism which transforms into real objects for brief moments when applied to humans as tattoos. Be warned!!! Koldan's legions are loyal to the death! They will not allow you to pass without first being vanquished!",
        "releaseDate": "2000",
        "developer": "Pesina",
        "genre": "Fighting",
        "players": "2",
        "image": "b3bd6e1c-8cc7-44a6-bdab-8d984a2914e1.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b3bd6e1c-8cc7-44a6-bdab-8d984a2914e1.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 82,
                "location": "Pinburgh Set 10"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 598,
        "gameTitle": "Taxi",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Williams",
        "genre": "Automobiles - Transportation",
        "players": "4",
        "image": "4b8e88b5-8f8f-40ad-9635-a45660101f37.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/4b8e88b5-8f8f-40ad-9635-a45660101f37.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 206,
        "gameTitle": "Teenage Mutant Ninja Turtles",
        "overview": "Yo! After being treated like garbage by the Ninja Turtles, Shredder has trained a new, more merciless breed of Foot Soldiers to inflict his revenge: A clan of over 700 Taekwondo turtle terminators who have once again captured April O'Neil to use as turtle bait. Fortunately you don't have to face these freaks of torture alone. For the first time ever, two dudes or dudettes can join forces and double-team Shredder, kicking shell while covering each others tails. But to survive you've gotta fight through 8 action-packed arcade levels, including Vinnie's Valet \"Stalking\" Lot and the Soho Sewer System, plus two new never-before-seen shell-squashing stages! Each of these deathtraps is reinforced by lethal electro zappers, laser beams, freezer burners or enemies such as Scorpion Robots, Stone Warriors and Baxter Stockman. Shredder has also hired the all-powerful Tora and Shogun, two alien bounty hunters who have never known defeat. Even though Master Splinter has prepared the turtles well for battle, teaching them radical new attack moves, it doesn't mean this war to save April and turtlekind will be a piece of cake or even a slice of pizza. Because with the forces of revenge on his side and the bounty boys in town, it's payback time for Shredder!",
        "releaseDate": "1989",
        "developer": "Konami",
        "genre": "Action",
        "players": "4+",
        "image": "05884cf8-c550-47d2-9261-ca849a80d87d.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/05884cf8-c550-47d2-9261-ca849a80d87d.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            },
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 207,
        "gameTitle": "Tekken Tag Tournament",
        "overview": "In this, the fourth Tekken game in the series, you can duel it out with all your favourite characters from past Tekken games with the new tag feature (as the title suggests). You simply choose two characters to battle with, and during the fight you can swap the characters on screen (much like tag team wrestling).",
        "releaseDate": "1999",
        "developer": "Namco",
        "genre": "Fighting",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 208,
        "gameTitle": "Tempest",
        "overview": "Tempest is an arcade game by Atari Inc., originally designed and programmed by Dave Theurer. Released in October 1981 it was fairly popular and had several ports and sequels. The game is also notable for being the first video game with a selectable level of difficulty (determined by the initial starting level). The game is a tube shooter, a type of shoot 'em up where the environment is fixed and viewed from a three-dimensional perspective.",
        "releaseDate": "1981",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "1",
        "image": "62290f5e-f860-4eee-9034-d2a1406773e8.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/62290f5e-f860-4eee-9034-d2a1406773e8.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 209,
        "gameTitle": "Tempest, Cabaret",
        "overview": "Tempest is an arcade game by Atari Inc., originally designed and programmed by Dave Theurer. Released in October 1981 it was fairly popular and had several ports and sequels. The game is also notable for being the first video game with a selectable level of difficulty (determined by the initial starting level). The game is a tube shooter, a type of shoot 'em up where the environment is fixed and viewed from a three-dimensional perspective.",
        "releaseDate": "1981",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "1",
        "image": "bda7556d-8438-4698-9ceb-8309e28a9ba7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/bda7556d-8438-4698-9ceb-8309e28a9ba7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 78,
                "location": "Pinburgh Set 6"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 599,
        "gameTitle": "Terminator 2",
        "overview": "First game to feature a video mode.\r\n\r\nFirst game with a swing-out Cannon, fired by the player.",
        "releaseDate": "1991",
        "developer": "Williams",
        "genre": "Celebrities - Fictional - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 115,
                "location": "Pinburgh Set 42"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 600,
        "gameTitle": "Terminator 3",
        "overview": "This game features custom speech by Arnold Schwarzenegger.",
        "releaseDate": "2003",
        "developer": "Stern",
        "genre": "Fictional - Licensed Theme",
        "players": "4",
        "image": "6f2a171a-5713-4208-a68d-5dd5a82a8820.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/6f2a171a-5713-4208-a68d-5dd5a82a8820.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 210,
        "gameTitle": "Tetris",
        "overview": "Tetris (In Russian: Тетрис) is a puzzle video game originally designed and programmed by Alexey Pajitnov in the Soviet Union. It was released on June 6, 1984, while he was working for the Dorodnicyn Computing Centre of the Academy of Science of the USSR in Moscow, Russian Soviet Federative Socialist Republic. He derived its name from the Greek numerical prefix tetra- (all of the game's pieces contain four segments) and tennis, Pajitnov's favorite sport.",
        "releaseDate": "1988",
        "developer": "Atari Games",
        "genre": "Puzzle",
        "players": "2",
        "image": "1f749ae5-0a1f-4ef7-b64a-44fda2ac148e.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1f749ae5-0a1f-4ef7-b64a-44fda2ac148e.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 114,
                "location": "Pinburgh Set 41"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 605,
        "gameTitle": "Theatre of Magic",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Bally",
        "genre": "Outer Space - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 40,
                "location": "F1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 213,
        "gameTitle": "Time Crisis",
        "overview": "The game is a first person rail shooter that is played with a light gun and a foot pedal. The foot pedal is used to move out from behind cover to begin shooting. While the pedal is released the player is moved behind cover so that he can reload without being hit. The light gun that this arcade game used had a blowback function where the top of the gun would slide back to simulate a real gun. The game is moved along by a constantly decreasing timer that is only increased by completing a stage.",
        "releaseDate": "1995",
        "developer": "Namco",
        "genre": "Shooter",
        "players": "1",
        "image": "8e6cf250-16b8-4438-ba9e-918a71bc4ab6.gif",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/8e6cf250-16b8-4438-ba9e-918a71bc4ab6.gif"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 214,
        "gameTitle": "Time Crisis II",
        "overview": "Christy Ryan, the agent responsible for uncovering the corporation's hidden agenda, attempts to escape NDI captivity and report the details of the plot to V.S.S.E. HQ, but is captured by Jakov Kinisky and his bodyguards. V.S.S.E. sends agents Keith Martin and Robert Baxter to shut down the Starline Network and rescue Ryan.",
        "releaseDate": "1998",
        "developer": "Namco",
        "genre": "Shooter",
        "players": "2",
        "image": "5b2aa97d-513d-4de1-b78a-f20f910f0634.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5b2aa97d-513d-4de1-b78a-f20f910f0634.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 120,
                "location": "Pinburgh Set 47"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 607,
        "gameTitle": "Time Fantasy",
        "overview": "Programmer Ed Suchocki provided the Internet Pinball Database the following information about this game:\r\n\r\nTime Fantasy was developed to hit a market demand for a low cost pin game that would limit the play time. Our distributors were requesting a pin design where play time can be better managed and for the game to be cost reduced..\r\n\r\nTime Fantasy was designed as a two-player unit and had most of the coils removed. Plasma displays and coils were the most costly items on the playfield so they were limited.\r\n\r\nWe also had a need to get a game ready for the factory in less than three weeks time, otherwise the factory was looking at being shutdown. Williams did not like shutting down the line and wanted to keep people working. We were placing our emphasis on the development of video games at that time and we had limited programmers available.\r\n\r\nBesides Larry Demar, I was probably the most familiar with the pinball operating system at that time. The design team was able to complete the game in two weeks which gave us some leeway in getting playfields, artwork, and testing in before production. \r\n\r\nTesting was interesting and showed us something we didn't expect. The game was played by an older audience. We were told that parents were playing the game while their children played all the ticket vending machines.\r\n\r\nIt tested well in the family centers but it didn't do so well in the locations for hardcore gamers. I do remember there was an earnings report showing the game made over $500 for a week in one location. However, it just wasn't mainstream and didn't perform well in all locations.",
        "releaseDate": "1982",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 608,
        "gameTitle": "Time Line",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Gottlieb",
        "genre": "Adventure - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 120,
                "location": "Pinburgh Set 47"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 609,
        "gameTitle": "Time Machine",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Data East",
        "genre": null,
        "players": "4",
        "image": "731448ff-1d32-4a54-a112-a2345f2df7a6.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/731448ff-1d32-4a54-a112-a2345f2df7a6.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 610,
        "gameTitle": "Time Machine",
        "overview": "Features four flippers, and a playfield section with bumpers that lowers when the ball lands in the 'time hole'. A clear roof above the bumpers then becoming the playfield. Also features a timed \"bonus ball\".",
        "releaseDate": "1983",
        "developer": "Zaccaria",
        "genre": "Adventure - Fantasy - Time Travel",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            },
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 215,
        "gameTitle": "Time Pilot",
        "overview": "Time Pilot is a multi-directional scrolling shooter and free-roaming aerial combat arcade game designed by Yoshiki Okamoto, released by Konami in 1982, and distributed in the United States by Centuri. Debuting in the golden age of video arcade games, it is a time travel themed game that allowed the player's plane to freely move across open air space that can scroll indefinitely in all directions.\r\n\r\nThe Killer List of Videogames included Time Pilot in its list of top 100 arcade games of all time.\r\n\r\nThe player assumes the role of a pilot of a futuristic fighter jet, trying to rescue fellow pilots trapped in different time eras. The player must fight off hordes of enemy craft and defeat the mother ship (or \"boss\") present in every level. The background moves in the opposite direction to the player's plane, rather than the other way around; the player's plane always remains in the center.",
        "releaseDate": "1982",
        "developer": "Konami",
        "genre": "Shooter",
        "players": "2",
        "image": "f988db1b-9053-496f-a21f-d691edf1ee17.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f988db1b-9053-496f-a21f-d691edf1ee17.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 216,
        "gameTitle": "Time Pilot 84",
        "overview": "Time Pilot '84: Further Into Unknown World is an eight-way scrolling shoot 'em up, released in 1984 by Konami. It is the sequel to Time Pilot. The player pilots a craft over many time periods. Unlike the original which told the year of each level, the new time periods are designated by new enemies and different colors.\r\n\r\nThere are a large number of enemy types in the game. They each have varying movement patterns, difficulty, and point values. The first button is used to fire a standard shot, which can destroy green-colored enemies. The second button is used to fire missiles, which can destroy the silver-colored enemies. You need to lock on to a silver enemy to fire missiles at it. Destroying enough green enemies brings out a large silver \"boss\" enemy that must be dispatched before advancing to the next level.",
        "releaseDate": "1984",
        "developer": "Konami",
        "genre": "Shooter",
        "players": "1",
        "image": "d0c9e341-b6ae-469e-93f8-a197e261af1b.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d0c9e341-b6ae-469e-93f8-a197e261af1b.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 100,
                "location": "Pinburgh Set 27"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 611,
        "gameTitle": "Time Zone",
        "overview": null,
        "releaseDate": "1972",
        "developer": "Bally",
        "genre": "Outer Space",
        "players": "2",
        "image": "3c665081-0b37-4e81-a7bd-8d259b35643b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/3c665081-0b37-4e81-a7bd-8d259b35643b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 612,
        "gameTitle": "Title Fight",
        "overview": "A \"Street level\" game, which were an experiment by Gottlieb towards designing a simplier, single level (no ramps), slightly smaller and cheaper game. They did not sell very well.",
        "releaseDate": "1990",
        "developer": "Gottlieb",
        "genre": "Sports - Boxing",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 613,
        "gameTitle": "Tommy",
        "overview": null,
        "releaseDate": "1994",
        "developer": "Data East",
        "genre": "Celebrities - Fictional - Licensed Theme - Musical",
        "players": "4",
        "image": "457c43bf-4df6-4d19-933d-05cbc2d65937.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/457c43bf-4df6-4d19-933d-05cbc2d65937.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 217,
        "gameTitle": "Toobin'",
        "overview": "Toobin' involves Biff and Jet racing their way down the rapids of a river, riding on tires. You rotate your tyre left or right, and drift as the current sends you, making sure to avoid the banks of the river, and the dividing lines in the middle. Hazards include crocodiles, stray logs and branches, and fishermen - you are armed with a limited supply of tin cans to take care of these. There are gates to slide through on the way down - these give you a points bonus. Each level has a strict time limit to adhere to, although there's a kickin' party at the end if you succeed.",
        "releaseDate": "1988",
        "developer": "Atari",
        "genre": "Racing",
        "players": "2",
        "image": "2e0429be-9695-4b5e-9721-f9de0f7cd174.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/2e0429be-9695-4b5e-9721-f9de0f7cd174.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 134,
                "location": "Pinburgh Set 61"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 648,
        "gameTitle": "Torpedo Alley",
        "overview": null,
        "releaseDate": "1988",
        "developer": "Data East",
        "genre": "Adventure - Combat",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 218,
        "gameTitle": "Total Carnage",
        "overview": "The war of 1999 left the country of Kookistan in shambles. Naturally, a dictator named General Akhboob took control of the beleagured nation and began creating an army of radioactive mutants. With a virtually impenetrable stronghold, a bunch of hostages, and a legion of mutants under his command, the evil despot will stop at nothing but world domination. Only two men have the courage and idealistic naivete to take on Akhboob and his forces: Captain Carnage and Major Mayhem, also known as the Doomsday Squad.\r\n\r\nAs Captain Carnage or Major Mayhem, it is up to you or you and a friend (in simultaneous action) to rescue the hostages while shooting hundreds of mutants bent on your destruction. As you walk and run forward, backward, left, right, and diagonally through 20 battlezones of nonstop action, you'll always have your machine gun by your side. Additional weapons which you can find along the way include grenade launchers, rocket launchers, plasma machine guns, flame throwers, spray-fire rifles, defensive blades, and an assortment of bombs.",
        "releaseDate": "1992",
        "developer": "Midway Games",
        "genre": "ActionShooter",
        "players": "2",
        "image": "0b243b9d-b603-47f9-85fb-0d834802582e.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0b243b9d-b603-47f9-85fb-0d834802582e.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            },
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 219,
        "gameTitle": "Track & Field",
        "overview": "Track & Field, known in Japan as Hyper Olympic, is a 1983 Olympic-themed arcade game developed and published by Konami.\r\n\r\nThe arcade version was released in 1983. The simple gameplay, based on quick repeating button presses, set the basics for sequels and similar games in the genre for the next decades. There were several home versions of the original; the ZX Spectrum and Amstrad CPC versions were only released as part of the Game, Set and Match II compilation in 1988, and are poorly regarded by fans.",
        "releaseDate": "1983",
        "developer": "Konami",
        "genre": "Sports",
        "players": "4+",
        "image": "65fd86e3-1589-4099-b645-55c89d901a9c.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/65fd86e3-1589-4099-b645-55c89d901a9c.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 112,
                "location": "Pinburgh Set 39"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 614,
        "gameTitle": "Transformers",
        "overview": null,
        "releaseDate": "2011",
        "developer": "Stern",
        "genre": "Licensed Theme - Science Fiction",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 85,
                "location": "Pinburgh Set 13"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 615,
        "gameTitle": "Transporter the Rescue",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Bally",
        "genre": "Outer Space",
        "players": "4",
        "image": "7f374e90-36c8-49ea-aa4f-308856839f77.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/7f374e90-36c8-49ea-aa4f-308856839f77.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 33,
                "location": "E1"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 616,
        "gameTitle": "Tri Zone",
        "overview": null,
        "releaseDate": "1979",
        "developer": "Williams",
        "genre": "Outer Space - Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 97,
                "location": "Pinburgh Set 24"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 617,
        "gameTitle": "Triple Action",
        "overview": null,
        "releaseDate": "1974",
        "developer": "Williams",
        "genre": "Show Business",
        "players": "1",
        "image": "e7b0709e-3509-4321-bd44-8be253089f07.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e7b0709e-3509-4321-bd44-8be253089f07.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 220,
        "gameTitle": "Tron",
        "overview": "Tron is a coin-operated arcade video game manufactured and distributed by Bally Midway in 1982. It is based on the Walt Disney Productions motion picture Tron released in the same year. The game consists of four subgames inspired by the events of the science fiction film. It features some characters and equipment seen in the film, e.g. the Light Cycles, battle tanks, the Input/Output Tower.",
        "releaseDate": "1982",
        "developer": "Midway",
        "genre": "Action",
        "players": "2",
        "image": "44923541-9f7b-4b03-88c4-520c279ec4a4.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/44923541-9f7b-4b03-88c4-520c279ec4a4.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 92,
                "location": "Pinburgh Set 20"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 618,
        "gameTitle": "TRON Legacy ",
        "overview": null,
        "releaseDate": "2011",
        "developer": "Stern",
        "genre": "Licensed Theme - Science Fiction",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 221,
        "gameTitle": "Tron, Cocktail",
        "overview": "Tron is a coin-operated arcade video game manufactured and distributed by Bally Midway in 1982. It is based on the Walt Disney Productions motion picture Tron released in the same year. The game consists of four subgames inspired by the events of the science fiction film. It features some characters and equipment seen in the film, e.g. the Light Cycles, battle tanks, the Input/Output Tower.",
        "releaseDate": "1982",
        "developer": "Midway",
        "genre": "Action",
        "players": "2",
        "image": "30714c41-e8fa-430c-a019-302685a2b150.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/30714c41-e8fa-430c-a019-302685a2b150.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 222,
        "gameTitle": "Turbo",
        "overview": "Drive your car from a third-person perspective above and behind through town, up hills, through tunnels, around curves, and over bridges, in the snow, and at dusk/dawn. The game, unfortunately, has poor migration from scene to scene.",
        "releaseDate": "1981",
        "developer": "Sega",
        "genre": "Racing",
        "players": "1",
        "image": "d062526d-e168-4ca8-827c-f7fd781d75d6.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d062526d-e168-4ca8-827c-f7fd781d75d6.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 223,
        "gameTitle": "Tutankham",
        "overview": "Tutankham is a combination of the maze, action and shoot 'em up genres. Taking on the role of an explorer grave robbing Tutankhamun's tomb, the player is chased by creatures such as asps, vultures, parrots, bats, dragons, and even curses, all that kill the player on contact. The explorer can fight back by firing lasers at the creatures, but he can only cover the left and right directions. The player is also endowed with a single screen-clearing \"flash bomb\" per level or life. Finally, each level has warp zones that teleport the player around the level, which enemies cannot use.\r\n\r\nTo progress, the player collects keys open locked doors throughout the levels, searching for the large exit door. Optional treasures can be picked-up for bonus points. Each level has a timer; when it reaches zero the explorer can no longer fire lasers, and once a level is cleared the remaining time is converted to bonus points.",
        "releaseDate": "1982",
        "developer": "Stern",
        "genre": "Labyrinth/ Maze",
        "players": "1",
        "image": "94630563-7a88-493c-b5a2-61bcf988cc14.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/94630563-7a88-493c-b5a2-61bcf988cc14.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 131,
                "location": "Pinburgh Set 58"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 619,
        "gameTitle": "Twilight Zone",
        "overview": "Magnets on the main playfield are situated on the looping lane and catch the ball to aid in hitting shots into the camera and piano. They are not under player control.\r\n\r\nMagnets on the mini-playfield 'flip' the ball during \"Battle the Power\" mode when the player presses the flipper buttons.\r\n\r\nThe \"Powerball\" is a ceramic pinball about 20% lighter than a steel pinball, much faster, and not affected by the game's magnets. ",
        "releaseDate": "1993",
        "developer": "Bally",
        "genre": "Adventure - Supernatural - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 92,
                "location": "Pinburgh Set 20"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 620,
        "gameTitle": "TX-Sector",
        "overview": null,
        "releaseDate": "1987",
        "developer": "Gottlieb",
        "genre": "Space - Science Fiction",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 34,
                "location": "E3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 224,
        "gameTitle": "Vanguard",
        "overview": "The game is one of the first scrolling shooters with scrolling in multiple directions. It is also the first color game released by SNK and an early example of a dual-control game, similar to the later Robotron: 2084, but using four directional buttons rather than a second joystick.",
        "releaseDate": "1981",
        "developer": "Centuri",
        "genre": "Shooter",
        "players": "1",
        "image": "d663e29a-5a1b-40a9-84ec-615615b1f48c.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d663e29a-5a1b-40a9-84ec-615615b1f48c.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 134,
                "location": "Pinburgh Set 61"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 621,
        "gameTitle": "Varkon",
        "overview": "This is a pinball machine disguised as a video game. Flippers are operated by joysticks on control panel. Has two playfields. Main playfield has two 3-inch flippers, one pop bumper, and a kick-back lane. Ball is launched into play from between flippers. Completing target sequence on main playfield activates lower playfield which has two 2-inch flippers and its own ball. 3 or 5 ball play.\r\n\r\nTo quote \"Uncle Willy\":\r\n\r\n\"Varkon is a two-level game, although each playfield has its own ball. (The ball does not pass between the two playfields.) The lower playfield is visible through a window in the upper playfield.\r\n\r\nBoth playfields are tilted away from the player and viewed through a mirror. The mirror is mounted at eye-level, so the illusion is presented that the ball is moving about on a vertical playfield. The mirror is only partially silvered and the score displays are mounted behind it. Also mounted behind the mirror are some flash lamps behind a screened plastic. The effect of the flash lamps when they fire is to overlay lightning bolts over the reflected image of the playfield.\r\n\r\nThe playfield on Varkon is a combination of wood and plexiglass. The plexiglass overlays the wood, and is screened with artwork.\"",
        "releaseDate": "1982",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 653,
        "gameTitle": "Varkon",
        "overview": "This is a pinball machine disguised as a video game. Flippers are operated by joysticks on control panel. Has two playfields. Main playfield has two 3-inch flippers, one pop bumper, and a kick-back lane. Ball is launched into play from between flippers. Completing target sequence on main playfield activates lower playfield which has two 2-inch flippers and its own ball. 3 or 5 ball play.\r\n\r\nTo quote \"Uncle Willy\":\r\n\r\n\"Varkon is a two-level game, although each playfield has its own ball. (The ball does not pass between the two playfields.) The lower playfield is visible through a window in the upper playfield.\r\n\r\nBoth playfields are tilted away from the player and viewed through a mirror. The mirror is mounted at eye-level, so the illusion is presented that the ball is moving about on a vertical playfield. The mirror is only partially silvered and the score displays are mounted behind it. Also mounted behind the mirror are some flash lamps behind a screened plastic. The effect of the flash lamps when they fire is to overlay lightning bolts over the reflected image of the playfield.\r\n\r\nThe playfield on Varkon is a combination of wood and plexiglass. The plexiglass overlays the wood, and is screened with artwork.\"",
        "releaseDate": "1982",
        "developer": "Williams",
        "genre": "Fantasy",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 132,
                "location": "Pinburgh Set 59"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 622,
        "gameTitle": "Vegas",
        "overview": null,
        "releaseDate": "1990",
        "developer": "Gottlieb",
        "genre": "Gambling",
        "players": "4",
        "image": "0530ba90-0de9-4b84-9c89-1fe59d541a6b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0530ba90-0de9-4b84-9c89-1fe59d541a6b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 225,
        "gameTitle": "Vindicators",
        "overview": "he game begins by asking the player(s) to choose a difficulty level, not only making the enemies more difficult and the players weaker, but higher difficulties start the players in a later set of levels (called \"galaxies\") and with some powerups. The easiest difficulty level starts the player(s) in the first level with no bonuses. The player controls a tank with constantly draining fuel, and must navigate through multiple levels (14 stations in the arcade version) from bottom to top, encountering obstacles and enemies. Along the way, a player may find powerups including tank fuel, stars (currency), shields, and two types of sub-weapons: smart shots (homing missiles) and bombs (powerful rockets). Each level has a key that will open a door at the top of the level, which will either take the player to the next level or to a special hub with multiple powerups that must be escaped in 10 seconds or less.  If the player is unable to escape, the tank will lose half its fuel. After escaping the hub, the player(s) then proceeds to the next station.\r\n\r\nOccasionally, the player(s) will face a boss that must be defeated to advance. Normal shots are ineffective however, and the player must decide/guess the appropriate time to buy sub-weapons to greatly raise the chance of victory. After destroying a boss, the player(s) can continue to the end of the level.\r\n\r\nBetween levels, the player is taken to a shop where items and upgrades to tank speed, power, etc. may be purchased with stars. Any damage caused to the player's tank will decrease the shield level. Purchasing a shield drastically reduces damage down to a mere pixel worth of the fuel gauge per hit. When the fuel depletes, the speed of the tank is reduced to a crawl and a countdown begins from 10. If no fuel is gained before the timer reaches zero, or if the player is shot during the countdown, the tank explodes and a life is lost.\r\n\r\nThe arcade version, in addition to having special two-joystick controls for each player, contained three special contest levels, with one contest star in each. With three contest stars and nine normal stars, the player(s) could compete in a special time-limited contest level in which the player could win a T-shirt. A later version of the game was released which eliminated the contest levels and stars.",
        "releaseDate": "1988",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": "d8477fa0-9601-4b74-a169-f585127c3c46.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/d8477fa0-9601-4b74-a169-f585127c3c46.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 226,
        "gameTitle": "Viper",
        "overview": "A war combat game with various settings. Helicopters, fighters and bombers enter the area swooping down in looping patterns.",
        "releaseDate": "1988",
        "developer": "Leland Corporation",
        "genre": "Shooter",
        "players": "1",
        "image": "c43e7df3-899a-4ec2-83af-d9487880852d.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/c43e7df3-899a-4ec2-83af-d9487880852d.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 227,
        "gameTitle": "Virtua Fighter 2",
        "overview": "Virtua Fighter 2 is a fighting game developed by Sega. It is the sequel to Virtua Fighter and the second game in the Virtua Fighter series. It was created by the Sega's Yu Suzuki-headed AM2 and was released in the arcade in 1994. VF2 was known for breakthrough graphics at the time. It used Sega's Model 2 arcade hardware to run the game at 60 frames per second at a high resolution with no slowdown.\r\n\r\nThe arena size could be adjusted up to a very small platform or all the way to 82 meters, which in the genre is considered very large; this is the only game in the series—other than Virtua Fighter Remix—that could have such size adjustments. The physical energy meter could also be adjusted to infinity as well, giving you the advantage when beating opponents in the game or practicing moves against the computer player. Incidentally, players discovered that adjusting the arena to a smaller size and giving the characters infinite health could lead to mock sumo matches, wherein victory is achieved by knocking the other player out of the ring.",
        "releaseDate": "1994",
        "developer": "Sega AM2",
        "genre": "Fighting",
        "players": "2",
        "image": "06f21ff0-6da9-4e38-a3ac-dd3316b94962.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/06f21ff0-6da9-4e38-a3ac-dd3316b94962.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 122,
                "location": "Pinburgh Set 49"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 623,
        "gameTitle": "Volcano",
        "overview": null,
        "releaseDate": "1981",
        "developer": "Gottlieb",
        "genre": "Fantasy",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 81,
                "location": "Pinburgh Set 9"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 624,
        "gameTitle": "Volley",
        "overview": null,
        "releaseDate": "1976",
        "developer": "Gottlieb",
        "genre": "Sports - Tennis",
        "players": "1",
        "image": "f65c4a95-8d1f-4ae1-8294-ed0e8dba9bfe.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/f65c4a95-8d1f-4ae1-8294-ed0e8dba9bfe.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 228,
        "gameTitle": "Vs. Castlevania",
        "overview": "You play Simon who must battle his way through the castle using his trusty whip. The object is to fight off the evil enemies on your way to find the Count, and if you're lucky, destroy him.",
        "releaseDate": "1987",
        "developer": "Nintendo",
        "genre": "Horror",
        "players": "1",
        "image": "e66f3878-656d-4416-b732-9746526aaebc.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e66f3878-656d-4416-b732-9746526aaebc.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 229,
        "gameTitle": "Vs. Slalom",
        "overview": "Ski down a slope, avoiding hazards like other skiers, trees, and snowmen. Make it to the bottom of the hill before time runs out.",
        "releaseDate": "1986",
        "developer": "Nintendo",
        "genre": "Sports",
        "players": "1",
        "image": "cfd3b83d-5c68-41db-adbf-531c567efe17.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cfd3b83d-5c68-41db-adbf-531c567efe17.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 15,
                "location": "C2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 230,
        "gameTitle": "Vs. Super Mario Bros.",
        "overview": "Mario (or Luigi) sets out on a quest to free the Mushroom Princess Toadstool from the evil King Koopa and restore the fallen kingdom of the Mushroom People. The player character moves from left to right over a horizontally scrolling terrain. Avoid obstacles, destroy enemies by jumping on them, collect coins and power-ups and reveal several hidden items throughout the various levels.",
        "releaseDate": "1986",
        "developer": "Nintendo",
        "genre": "Platform",
        "players": "2",
        "image": "5e949961-c840-41fa-8108-a0f13c1902d2.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/5e949961-c840-41fa-8108-a0f13c1902d2.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            },
            {
                "id": 125,
                "location": "Pinburgh Set 52"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 625,
        "gameTitle": "Walking Dead",
        "overview": null,
        "releaseDate": "2014",
        "developer": "Stern",
        "genre": "Licensed Theme - Supernatural - Zombies",
        "players": "4",
        "image": "0b4399c4-7192-4ee9-8b1b-734cf27b58df.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0b4399c4-7192-4ee9-8b1b-734cf27b58df.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 83,
                "location": "Pinburgh Set 11"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 626,
        "gameTitle": "Wheel of Fortune",
        "overview": null,
        "releaseDate": "2008",
        "developer": "Stern",
        "genre": "Licensed Theme - Television - Game Show",
        "players": "4",
        "image": "90b66ea0-c35d-4e9f-bcfb-ac9b7838da44.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/90b66ea0-c35d-4e9f-bcfb-ac9b7838da44.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 117,
                "location": "Pinburgh Set 44"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 627,
        "gameTitle": "Whirlwind",
        "overview": null,
        "releaseDate": "1989",
        "developer": "Williams",
        "genre": "Adventure - Weather",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 80,
                "location": "Pinburgh Set 8"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 628,
        "gameTitle": "Whitewater",
        "overview": null,
        "releaseDate": "1992",
        "developer": "Williams",
        "genre": "Rafting, Water Sports, Myth and Legend",
        "players": "4",
        "image": "b4ef9147-072d-4a80-ad13-3f73e5a56ae7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b4ef9147-072d-4a80-ad13-3f73e5a56ae7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 629,
        "gameTitle": "Whodunnit",
        "overview": null,
        "releaseDate": "1995",
        "developer": "Bally",
        "genre": "Murder Mystery",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 123,
                "location": "Pinburgh Set 50"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 630,
        "gameTitle": "Wild Fyre",
        "overview": null,
        "releaseDate": "1978",
        "developer": "Stern",
        "genre": "Historical - Chariot Racing - Romans",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 54,
                "location": "H1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 231,
        "gameTitle": "Williams Multigame",
        "overview": null,
        "releaseDate": "2001",
        "developer": "Williams",
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 232,
        "gameTitle": "Windjammers",
        "overview": "Windjammers (also known as Flying Power Disc in Japan) is a fast-paced, sport arcade game released by Data East on the Neo Geo arcade system in 1994 and later on the Wii Virtual Console in Japan on June 22, 2010. Following the bankruptcy of Data East, the intellectual rights for this game were acquired by Paon.",
        "releaseDate": "1994",
        "developer": "Data East",
        "genre": "Sports",
        "players": "2",
        "image": "1b060b83-4182-4ca1-bc31-d72074a4d674.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1b060b83-4182-4ca1-bc31-d72074a4d674.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 652,
        "gameTitle": "Winning Shot",
        "overview": null,
        "releaseDate": null,
        "developer": null,
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 123,
                "location": "Pinburgh Set 50"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 631,
        "gameTitle": "Wizard of Oz",
        "overview": "The Witch's Castle (upper left mini-playfield) has three motorized doors. The first is the Winged Monkey ball lock which holds a ball until the game wants to release it. The other two are the \"castle gates\" which open inward to reveal a scoop after repeated bashings from the ball in play.",
        "releaseDate": "2012",
        "developer": "Jersey Jack Pinball",
        "genre": "Fantasy - Licensed Theme - Wizard/ Magic",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 233,
        "gameTitle": "Wizard of Wor",
        "overview": "Wizard of Wor is an action game for one or two players. The game takes the form of several maze-like dungeons infested with monsters. The players' characters, called Worriors, must kill all the monsters by shooting them. Player one has yellow Worriors, on the right, and player two has blue Worriors, on the left. In a two-player game, the players are also able to shoot each other's Worriors, earning bonus points and causing the other player to lose a life. Team-oriented players can successfully advance through the game by standing back-to-back (such as in a corner) and firing at anything that comes at them.\r\n\r\nEach dungeon consists of a single-screen rectangular grid with walls and corridors in various formations. The Worriors and the monsters can travel freely through the corridors. Each dungeon has doors at the left and right edges, which connect with each other, making the dungeon wrap around. Whenever a door is traversed by a player or monster, both of them deactivate for a short period, making them impassable. A player who exits the door can pop back through the door immediately when the Worluk or Wizard is in the dungeon. A small radar display indicates the positions of all active monsters.",
        "releaseDate": "1980",
        "developer": "Midway",
        "genre": "ShooterStrategy",
        "players": "2",
        "image": "e31e41fe-65cd-4702-816b-7e401097b485.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/e31e41fe-65cd-4702-816b-7e401097b485.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 67,
                "location": "I2"
            },
            {
                "id": 74,
                "location": "Pinburgh Set 2"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 632,
        "gameTitle": "Wizard!",
        "overview": "'Wizard' was inspired by the 1975 Hollywood movie 'Tommy' and included likenesses of Roger Daltry and Ann-Margret on the backglass.\r\nWizard was the first pinball machine to use flip flags.",
        "releaseDate": "1975",
        "developer": "Bally",
        "genre": "Licensed Theme",
        "players": "4",
        "image": "14b31a43-c47f-4b08-94cb-53cafebe8c6b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/14b31a43-c47f-4b08-94cb-53cafebe8c6b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 95,
                "location": "Pinburgh Set 22"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 633,
        "gameTitle": "World Cup",
        "overview": "World Cup was the first Williams solid-state pin game that had electronic sounds, replacing chimes. ",
        "releaseDate": "1978",
        "developer": "Williams",
        "genre": "Sports - Soccer",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 43,
                "location": "G1"
            },
            {
                "id": 90,
                "location": "Pinburgh Set 18"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 634,
        "gameTitle": "World Cup Soccer",
        "overview": "The flyer shows Chicago's Soldier Field, a football field and one of the host sites for the 1994 World Cup soccer competition.",
        "releaseDate": "1994",
        "developer": "Bally",
        "genre": "Sports - Soccer",
        "players": "4",
        "image": "06d02420-e4ca-49a2-a346-bbd693ff408d.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/06d02420-e4ca-49a2-a346-bbd693ff408d.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 128,
                "location": "Pinburgh Set 55"
            },
            {
                "id": 147,
                "location": "Pinburgh"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 635,
        "gameTitle": "World Poker Tour",
        "overview": null,
        "releaseDate": "2006",
        "developer": "Stern",
        "genre": "Gambling - Cards - Poker - Licensed Theme",
        "players": "4",
        "image": "fa23ddab-98c5-4dba-88b9-b8da892d081b.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/fa23ddab-98c5-4dba-88b9-b8da892d081b.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 234,
        "gameTitle": "World Series Baseball",
        "overview": "A baseball game that offered many more play options than previous video baseball games. The game used analog joysticks for precise control of swings and pitches.",
        "releaseDate": "1984",
        "developer": "Cinematronics",
        "genre": "Baseball",
        "players": "2",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 66,
                "location": "I1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 235,
        "gameTitle": "WWF WrestleFest",
        "overview": "WWF WrestleFest is a professional wrestling arcade game released by Technos in 1991, featuring stars of the World Wrestling Federation. The game is the sequel to WWF Superstars. The game was distributed by Technos in Japan and North America and by Tecmo in Europe and Australasia.",
        "releaseDate": "1991",
        "developer": "Technōs Japan",
        "genre": "ActionFightingSports",
        "players": "4+",
        "image": "bac5a030-c17b-4d34-b245-71a933ca931a.gif",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/bac5a030-c17b-4d34-b245-71a933ca931a.gif"
    },
    {
        "replayGameLocations": [
            {
                "id": 28,
                "location": "D2"
            },
            {
                "id": 116,
                "location": "Pinburgh Set 43"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 639,
        "gameTitle": "Xenon",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Bally",
        "genre": "Fantasy",
        "players": "4",
        "image": "cf851f91-dd69-4755-8ea7-4397a0c5b6be.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cf851f91-dd69-4755-8ea7-4397a0c5b6be.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 238,
        "gameTitle": "Xenophobe",
        "overview": "Xenophobe is a 1987 arcade game developed and published by Bally Midway.[1] Starbases, moons, ships, and space cities are infested with aliens, and the players have to kill the aliens before each is completely overrun. Xenophobe can be played by up to three players, and the goal of each level is to defeat all the aliens before time runs out. Some rooms routinely display the percentage of alien infection and time remaining until self-destruct when the level ends (but a nearby button can temporarily deactivate the count-down). Levels may contain more than one floor, and players use elevators (and sometimes holes in the floor) to move between floors to defeat all of the aliens. Players can also pick up more powerful weapons and other items to help in their eradication of the aliens.",
        "releaseDate": "1987",
        "developer": "Bally Midway",
        "genre": "Action",
        "players": "3",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 236,
        "gameTitle": "X-Men",
        "overview": "In X-Men Arcade, Cyclops, Colossus, Dazzler, Nightcrawler, Storm and Wolverine unite to use their special powers to save mankind from the Brotherhood of Evil Mutants and other terrible threats. Players are charged with fighting off hundreds of Sentinels - along with Super Villains such as Pyro, the Blob, Wendigo, Nimrod, the White Queen, Juggernaut and Mystique - as they battle their way to Island M to take down the Master of Magnetism, Magneto, and save Kitty Pryde and Professor Xavier.",
        "releaseDate": "1992",
        "developer": "Konami",
        "genre": "ActionFighting",
        "players": "4+",
        "image": "cc24206b-268e-4eec-b55e-bb1bde397733.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/cc24206b-268e-4eec-b55e-bb1bde397733.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 109,
                "location": "Pinburgh Set 36"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 637,
        "gameTitle": "X-Men LE",
        "overview": null,
        "releaseDate": "2012",
        "developer": "Stern",
        "genre": "Comics - Fantasy - Licensed Theme",
        "players": "4",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 237,
        "gameTitle": "X-Men vs. Street Fighter",
        "overview": "X-Men vs. Street Fighter pits Marvel's mighty mutants against Capcom's legendary fighters in a slugfest of epic proportions. Now you can perform outrageous moves and link together amazing Chain Combos. X-Men vs. Street Fighter... the collision of two explosive universes in the world's most amazing fantasy fighter!",
        "releaseDate": "1996",
        "developer": "Capcom",
        "genre": "Fighting",
        "players": "2",
        "image": "efc28dd5-2a0d-4f5f-95d3-1069aa7b890c.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/efc28dd5-2a0d-4f5f-95d3-1069aa7b890c.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 131,
                "location": "Pinburgh Set 58"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 638,
        "gameTitle": "X's & O's",
        "overview": null,
        "releaseDate": "1984",
        "developer": "Bally",
        "genre": "Games - Tic-Tac-Toe",
        "players": "4",
        "image": "775e2df6-df02-43ff-835c-5c70cd18f6e7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/775e2df6-df02-43ff-835c-5c70cd18f6e7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 71,
                "location": "J2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 239,
        "gameTitle": "Xybots",
        "overview": "Run your human through mazes with a 3-D over-the-shoulder view. Shoot tons of nasty robots that are out to get you. Exit each level to progress to a new maze, with boss levels and the option to buy upgrades between levels.",
        "releaseDate": "1987",
        "developer": "Atari",
        "genre": "Shooter",
        "players": "2",
        "image": "b3123150-5cf4-488b-a91c-75dcbe3b1a1c.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b3123150-5cf4-488b-a91c-75dcbe3b1a1c.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 97,
                "location": "Pinburgh Set 24"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 641,
        "gameTitle": "Yukon",
        "overview": null,
        "releaseDate": "1971",
        "developer": "Williams",
        "genre": "Canadian West",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 240,
        "gameTitle": "Zaxxon",
        "overview": "Zaxxon is a 1982 arcade game developed and released by Sega. Some sources claim that Japanese electronics company Ikegami Tsushinki also worked on the development of Zaxxon. The game gives the player the experience of flying a fighter craft through a fortress while shooting at enemy entities (missiles, enemy gunfire, etc.) The object of the game is to hit as many targets as possible without being shot down or running out of fuel—which can be replenished, paradoxically, by blowing up fuel drums.",
        "releaseDate": "1982",
        "developer": "Sega",
        "genre": "Shooter",
        "players": "2",
        "image": "b4f5341c-1942-4511-9637-df50179e1d04.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/b4f5341c-1942-4511-9637-df50179e1d04.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 241,
        "gameTitle": "Zaxxon, Cocktail",
        "overview": "Zaxxon is a 1982 arcade game developed and released by Sega. Some sources claim that Japanese electronics company Ikegami Tsushinki also worked on the development of Zaxxon. The game gives the player the experience of flying a fighter craft through a fortress while shooting at enemy entities (missiles, enemy gunfire, etc.) The object of the game is to hit as many targets as possible without being shot down or running out of fuel—which can be replenished, paradoxically, by blowing up fuel drums.",
        "releaseDate": "1982",
        "developer": "Sega",
        "genre": "Shooter",
        "players": "2",
        "image": "1d805b88-8139-473f-b0da-7b49bba3ae68.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1d805b88-8139-473f-b0da-7b49bba3ae68.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 242,
        "gameTitle": "Zero Gunner",
        "overview": "Zero Gunner is a shoot 'em up developed by Psikyo and released in 1997. The arcade game allows for eight-way movement using a joystick and supports up to two players at a time. It was notable for its lock on targeting mechanic that allowed players to rotate around targets. The game was succeeded by a sequel, Zero Gunner 2 for the Sega NAOMI/Dreamcast.",
        "releaseDate": "1997",
        "developer": "Psikyo",
        "genre": "Scrolling Shooter",
        "players": "2",
        "image": "0518b442-90ed-4e6e-9f38-a4913420a24f.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/0518b442-90ed-4e6e-9f38-a4913420a24f.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 55,
                "location": "H2"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 243,
        "gameTitle": "Zero Point 2",
        "overview": "A shooting game controlled by a light-gun. Its the 2nd game in the Zero point series.",
        "releaseDate": "1999",
        "developer": "Unico",
        "genre": "Shooter",
        "players": "2",
        "image": "1371736d-966b-430b-9ffb-24f5822329b7.jpg",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/1371736d-966b-430b-9ffb-24f5822329b7.jpg"
    },
    {
        "replayGameLocations": [
            {
                "id": 125,
                "location": "Pinburgh Set 52"
            }
        ],
        "replayGameType": {
            "id": 2,
            "name": "Pinball"
        },
        "id": 642,
        "gameTitle": "Zig Zag",
        "overview": null,
        "releaseDate": "1964",
        "developer": "Williams",
        "genre": "Sports - Water Sports - Happiness - Recreation",
        "players": "1",
        "image": null,
        "imageUrl": null
    },
    {
        "replayGameLocations": [
            {
                "id": 27,
                "location": "D1"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 244,
        "gameTitle": "Zoo Keeper",
        "overview": "Zoo Keeper is an arcade game created by Taito America and released in 1982. The player controls Zeke, a zookeeper, whose girlfriend Zelda has been kidnapped by a malicious monkey.",
        "releaseDate": "1982",
        "developer": "Taito",
        "genre": "Platform",
        "players": "1",
        "image": "bd60ba26-3548-456e-9b0e-0fdd6f7cbb31.png",
        "imageUrl": "https://replayfxpictures.blob.core.windows.net/images/bd60ba26-3548-456e-9b0e-0fdd6f7cbb31.png"
    },
    {
        "replayGameLocations": [
            {
                "id": 16,
                "location": "C3"
            }
        ],
        "replayGameType": {
            "id": 1,
            "name": "Arcade"
        },
        "id": 245,
        "gameTitle": "Zygon, Cocktail",
        "overview": null,
        "releaseDate": "1980",
        "developer": "Stern",
        "genre": null,
        "players": null,
        "image": null,
        "imageUrl": null
    }
];