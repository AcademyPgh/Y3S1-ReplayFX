import Games from './Games.index';
import GamesList from './GamesList';
import GameDetails from './GameDetails';

export default {
    GamesMain: {
        screen: Games,
        navigationOptions: {
            title: 'SELECT PLATFORM'
        }
    },
    GamesList: {
        screen: GamesList,
        initialRouteParams: { },
        navigationOptions: {
            title: 'GAMES',
        }
    },
    GameDetails: {
        screen: GameDetails,
        initialRouteParams: { },
        navigationOptions: {
            title: 'GAMES',
        }
    }
};