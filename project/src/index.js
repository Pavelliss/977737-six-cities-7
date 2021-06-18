import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import {reducer} from './store/reducer';

import offers from '../src/mock/offers';
import comments from '../src/mock/comments';

const COUNT_NEAR_OFFER = 3;

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        nearOffers={offers.slice(0, COUNT_NEAR_OFFER)}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
