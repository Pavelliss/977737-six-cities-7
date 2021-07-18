import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_CHOSEN_OFFER: 'room/loadChosenOffer',
  LOAD_COMMENTS: 'room/loadComments',
  LOAD_NEARBY_OFFERS: 'room/loadNearbyOffers',
  CHANGE_CITY: '/changeCity',
  FILL_OFFERS: '/fillOffers',
  REQUIRED_AUTORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'login/redirect',
  ADD_USER_EMAIL: 'login/addUserData',
  CHANGE_ACTIVE_CARD_ID: '/changeActiveCardId',
  CHANGE_SORT_TYPE: '/changeSortType',
  RESER_CHOSEN_OFFER_STATE: 'room/resetChosenOfferState',
  TOGGLE_STATE_REVIEW_FORM: 'room/toggleStateReviewForm',
};

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const loadChosenOffer = createAction(ActionType.LOAD_CHOSEN_OFFER, (offer) => ({
  payload: offer,
}));

const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (neaebyOffers) => ({
  payload: neaebyOffers,
}));

const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

const fillOffers = createAction(ActionType.FILL_OFFERS);

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

const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

const resetChosenOfferState = createAction(ActionType.RESER_CHOSEN_OFFER_STATE);

const toggleStateReviewForm = createAction(ActionType.TOGGLE_STATE_REVIEW_FORM, (value) => ({
  payload: value,
}));


export {
  loadOffers,
  loadChosenOffer,
  loadComments,
  loadNearbyOffers,
  ActionType,
  changeCity,
  fillOffers,
  requireAuthorization,
  logout,
  redirectRoute,
  addUserEmail,
  changeActiveCardId,
  changeSortType,
  resetChosenOfferState,
  toggleStateReviewForm
};
