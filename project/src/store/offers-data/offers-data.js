import {createReducer} from '@reduxjs/toolkit';

import {loadOffers, fillOffers, changeCity} from '../action';
import {getFiltredOffers} from '../../helper/helper';
import {DEFALT_CITY} from '../../const';

const initialState = {
  city: DEFALT_CITY,
  offers: [],
  filtredOffers: [],
  isDataLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.filtredOffers = getFiltredOffers(state.city, state.offers);
      state.isDataLoaded = true;
    })
    .addCase(fillOffers, (state) => {
      state.filtredOffers = getFiltredOffers(state.city, state.offers);
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {offersData};
