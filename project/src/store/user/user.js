import {createReducer} from '@reduxjs/toolkit';

import {requireAuthorization, logout, addUserEmail} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.userEmail = '';
    })
    .addCase(addUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export {user};
