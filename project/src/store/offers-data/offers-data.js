import {createReducer} from '@reduxjs/toolkit';

import {
  loadOffers,
  fillOffers,
  changeCity,
  changeActiveCardId,
  changeSortType,
  updateOffer
} from '../action';
import {getFiltredOffers} from '../../helper/helper';
import {DEFAULT_CITY, SortType} from '../../const';
import {sort} from '../../helper/sort';
import {updateItem} from '../../helper/helper';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  filtredOffers: [],
  isDataLoaded: false,
  activeCardId: null,
  sortType: SortType.POPULAR,
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
    })
    .addCase(changeActiveCardId, (state, action) => {
      state.activeCardId = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
      state.filtredOffers = sort[state.sortType](getFiltredOffers(state.city, state.offers));
    })
    .addCase(updateOffer, (state, action) => {
      state.offers = updateItem(state.offers, action.payload);
      state.filtredOffers = getFiltredOffers(state.city, state.offers);
    });
});

export {offersData};
