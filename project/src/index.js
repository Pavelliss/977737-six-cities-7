import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import offers from '../src/mock/offers';
import comments from '../src/mock/comments';

const COUNT_NEAR_OFFER = 3;

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      nearOffers={offers.slice(0, COUNT_NEAR_OFFER)}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
