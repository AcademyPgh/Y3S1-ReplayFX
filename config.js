export const startDate = '2018-07-26';
export const endDate = '2018-07-29';

//TODO: API calls will need updated based on convention
export const apiCalls = [
    {key: 'events', url: `https://replayfxcalendar.azurewebsites.net/public?start=${startDate}&end=${endDate}`},
    {key: 'games', url: 'https://replayfxcalendar.azurewebsites.net/public/games'},
    {key: 'eventCategories', url: 'https://replayfxcalendar.azurewebsites.net/public/categories'},
    {key: 'gameTypes', url: 'https://replayfxcalendar.azurewebsites.net/public/gametypes'},
    {key: 'vendors', url: 'https://replayfxcalendar.azurewebsites.net/public/vendors'},
];

export const appName = "OSGConAssistant";
