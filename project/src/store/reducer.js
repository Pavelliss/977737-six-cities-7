import {ActionType} from './action';
import offers from '../mock/offers';

function getFiltredOffers (city) {
  return offers.filter((offer) => city === offer['city']['name']);
}

const initialState = {
  city: '',
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_OFFERS:
      return {};
    default:
      return state;
  }
};

export {reducer};
