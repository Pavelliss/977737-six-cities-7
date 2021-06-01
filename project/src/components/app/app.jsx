import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App(props) {
  const {cardCount} = props;

  return (
    <MainPage cardCount={cardCount}/>
  );
}

App.propTypes = {
  cardCount: PropTypes.number.isRequired,
};

export default App;
