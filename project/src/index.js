import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import createApi from './services/api';
import {reducer} from './store/reducer';
import {fetchOffers} from './store/api-actions';

import offers from '../src/mock/offers';
import comments from '../src/mock/comments';

const COUNT_NEAR_OFFER = 3;

const api = createApi();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

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
