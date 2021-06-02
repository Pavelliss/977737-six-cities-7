import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {nanoid} from 'nanoid';

const Setting = {
  CARD_COUNT: 5,
};

function getId () {
  return nanoid();
}

ReactDOM.render(
  <React.StrictMode>
    <App
      cardCount={Setting.CARD_COUNT}
      id={getId}
    />
  </React.StrictMode>,
  document.getElementById('root'));
