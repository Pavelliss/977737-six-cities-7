import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILL_OFFERS: '/fillOffers',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'login/redirect',
  ADD_USER_EMAIL: 'login/addUserData',
  CHANGE_ACTIVE_CARD_ID: '/changeActiveCardId',
};

const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

const fillOffers = createAction(ActionType.FILL_OFFERS);

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const requireAuthorization = createAction(ActionType.REQUIRED_AUTORIZATION, (status) => ({
  payload: status,
}));

const logout = createAction(ActionType.LOGOUT);

const redirectRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

const addUserEmail = createAction(ActionType.ADD_USER_EMAIL, (email) => ({
  payload: email,
}));

const changeActiveCardId = createAction(ActionType.CHANGE_ACTIVE_CARD_ID, (id) => ({
  payload: id,
}));

export {
  ActionType,
  changeCity,
  fillOffers,
  loadOffers,
  requireAuthorization,
  logout,
  redirectRoute,
  addUserEmail,
  changeActiveCardId
};
