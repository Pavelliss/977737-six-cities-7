const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITES: '/favorites',
  COMMENTS: '/comments',
  OFFERS: '/hotels',
};

const AppRoute = {
  MAIN: '/',
  FAVORITES: '/favorites',
  COMMENTS: '/comments',
  ROOM: '/offer',
  LOGIN: '/login',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const DEFALT_CITY = 'Paris';

export {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  CITIES,
  DEFALT_CITY
};
