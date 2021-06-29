import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import createApi from './services/api';
import {reducer} from './store/reducer';
import {fetchOffers, checkAuth} from './store/api-actions';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import redirect from './store/redirect';

import offers from '../src/mock/offers';
import comments from '../src/mock/comments';

const COUNT_NEAR_OFFER = 3;

const onUnauthorized = () => store.dispatch(
  ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));

const api = createApi(onUnauthorized);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        nearOffers={offers.slice(0, COUNT_NEAR_OFFER)}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
