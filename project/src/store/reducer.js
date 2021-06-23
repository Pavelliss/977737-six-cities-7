import {ActionType} from './action';
import {adaptOfferToClient} from '../services/adapter';

const DEFALT_CITY = 'Paris';

function getFiltredOffers (city, offers) {
  return offers.filter((offer) => city === offer['city']['name']);
}

function adaptOffersToClient (offers) {
  return offers.map((offer) => adaptOfferToClient(offer));
}

const initialState = {
  city: DEFALT_CITY,
  offers: [],
  filtredOffers: [],
  isDataLoaded: false,
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
        offers: adaptOffersToClient(action.payload),
        filtredOffers: getFiltredOffers(state.city ,state.offers),
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};
