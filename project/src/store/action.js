import {adaptOfferToClient} from '../services/adapter';

const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILL_OFFERS: '/fillOffers',
  LOAD_OFFERS: 'data/loadOffers',
};

function adaptOffersToClient (offers) {
  return offers.map((offer) => adaptOfferToClient(offer));
}


const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillOffers: () => ({
    type: ActionType.FILL_OFFERS,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: adaptOffersToClient(offers),
  }),
};

export {ActionType, ActionCreator};
