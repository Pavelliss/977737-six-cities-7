import {adaptOfferToClient} from '../services/adapter';

const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILL_OFFERS: '/fillOffers',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'login/redirect',
  ADD_DATE_USER: 'login/addUserData',
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  addUserEmail: (email) => ({
    type: ActionType.ADD_DATE_USER,
    payload: email,
  }),
};

export {ActionType, ActionCreator};
