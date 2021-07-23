import {createReducer} from '@reduxjs/toolkit';

import {
  loadChosenOffer,
  loadComments,
  loadNearbyOffers,
  resetChosenOfferState,
  toggleStateReviewForm
} from '../action';

const initialState = {
  chosenOffer: null,
  comments: null,
  nearbyOffers: null,
  isReviewFormDisabled: false,
};

const chosenOffer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadChosenOffer, (state, action) => {
      state.chosenOffer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(resetChosenOfferState, (state) => {
      state.chosenOffer = null;
      state.comments = null;
      state.nearbyOffers = null;
    })
    .addCase(toggleStateReviewForm, (state, action) => {
      state.isReviewFormDisabled = action.payload;
    });
});

export {chosenOffer};
