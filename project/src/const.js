const ZOOM = 12;
const CITY = [52.38333, 4.9];
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

export {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  ZOOM,
  CITY,
  CITIES
};
