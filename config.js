export const startDate = '2018-07-26';
export const endDate = '2018-07-29';

export const apiCalls = [
    {key: 'events', url: `https://replayfxcalendar.azurewebsites.net/public?start=${startDate}&end=${endDate}`},
    {key: 'games', url: 'https://replayfxcalendar.azurewebsites.net/public/games'},
    {key: 'eventCategories', url: 'https://replayfxcalendar.azurewebsites.net/public/categories'},
    {key: 'gameTypes', url: 'https://replayfxcalendar.azurewebsites.net/public/gametypes'},
];
