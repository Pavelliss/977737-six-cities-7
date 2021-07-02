import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AppRoute, AuthorizationStatus} from '../../const';
import {checkStatus} from '../../helper/helper';
import offersProp from '../offer-prop/offer.prop';
import commentsProp from '../comments-prop/comments.prop';
import browserHistory from '../../browser-history';
import {getLoadedDataStatue, getOffers} from '../../store/offers-data/selector';
import {getAuthorizationStatus} from '../../store/user/selector';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

function App(props) {
  const {
    comments,
    nearOffers,
  } = props;

  const isDataLoaded = useSelector(getLoadedDataStatue);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offers = useSelector(getOffers);

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

App.propTypes = {
  nearOffers: PropTypes.arrayOf(offersProp),
  comments: PropTypes.arrayOf(commentsProp),
};

export default App;
