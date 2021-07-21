const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const APIRoute = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITE: '/favorite',
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

const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

const DEFALT_CITY = 'Paris';

export {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  SortType,
  CITIES,
  DEFALT_CITY
};
