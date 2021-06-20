import {ActionType} from './action';
import offers from '../mock/offers';

const DEFALT_CITY = 'Paris';

function getFiltredOffers (city) {
  return offers.filter((offer) => city === offer['city']['name']);
}

const initialState = {
  city: DEFALT_CITY,
  offers: getFiltredOffers(DEFALT_CITY),
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
        offers: getFiltredOffers(state.city),
      };
    default:
      return state;
  }
};

export {reducer};
