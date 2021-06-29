import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const DEFALT_CITY = 'Paris';

function getFiltredOffers (city, offers) {
  return offers.filter((offer) => city === offer['city']['name']);
}

const initialState = {
  city: DEFALT_CITY,
  offers: [],
  filtredOffers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_OFFERS:
      return {
        ...state,
        filtredOffers: getFiltredOffers(state.city, state.offers),
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        filtredOffers: getFiltredOffers(state.city ,action.payload),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: '',
      };
    case ActionType.ADD_DATE_USER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
