import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoute, AuthorizationStatus} from '../../const';
import {checkStatus} from '../../helper/helper';
import offersProp from '../offer-prop/offer.prop';
import commentsProp from '../comments-prop/comments.prop';
import browserHistory from '../../browser-history';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

function App(props) {
  const {
    offers,
    comments,
    nearOffers,
    isDataLoaded,
    authorizationStatus,
  } = props;

  if (checkStatus(AuthorizationStatus.UNKNOWN ,authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => (
            <FavoritesPage offers={offers}/>
          )}
        >
        </PrivateRoute>
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

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
  offers: state.offers,
});

App.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
  nearOffers: PropTypes.arrayOf(offersProp),
  comments: PropTypes.arrayOf(commentsProp),
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);
