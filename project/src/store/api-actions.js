import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {toast} from '../helper/toast/toast';

import {
  loadOffers,
  loadChosenOffer,
  loadComments,
  loadNearbyOffers,
  requireAuthorization,
  redirectRoute,
  toggleStateReviewForm,
  logout as closeSession
} from './action';

import {
  adaptOfferToClient,
  adartCommentToClient
} from '../services/adapter';

function adaptOffersToClient(offers) {
  return offers.map((offer) => adaptOfferToClient(offer));
}

function adaptCommentsToClient(comments) {
  return comments.map((comment) => adartCommentToClient(comment));
}

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => adaptOffersToClient(data))
    .then((data) => dispatch(loadOffers(data)))
);

const fetchChosenOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((data) => dispatch(loadChosenOffer(data)))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => adaptCommentsToClient(data))
    .then((data) => dispatch(loadComments(data)))
);

const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => adaptOffersToClient(data))
    .then((data) => dispatch(loadNearbyOffers(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch({})
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectRoute(AppRoute.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

const sendComment = (data, id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, data)
    .then(() => {
      toast('comment sent successfully :)');
      dispatch(toggleStateReviewForm(false));
    })
    .then(() => dispatch(fetchComments(id)))
    .catch(() => {
      toast('It was an error while sending :(');
      dispatch(toggleStateReviewForm(false));
    })
);

export {
  fetchChosenOffer,
  fetchComments,
  fetchNearbyOffers,
  fetchOffers,
  checkAuth,
  login,
  logout,
  sendComment
};
