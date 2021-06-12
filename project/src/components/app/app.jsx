import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const';
import offersProp from '../offer-prop/offer.prop';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App(props) {
  const {offers} = props;
  const [activeCardId, setActiveCardId] = useState('');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            offers={offers}
            onCardClick={(id) => setActiveCardId(id)}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage
            offers={offers}
            id={activeCardId}
          />
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
};

export default App;
