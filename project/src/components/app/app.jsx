import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const';
import offersProp from '../offer-prop/offer.prop';
import commentsProp from '../comments-prop/comments.prop';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App(props) {
  const {
    offers,
    comments,
    nearOffers,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route exact path={`${AppRoute.ROOM}/:id`}>
          <RoomPage
            offers={offers}
            nearOffers={nearOffers}
            comments={comments}
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
  nearOffers: PropTypes.arrayOf(offersProp),
  comments: PropTypes.arrayOf(commentsProp),
};

export default App;
