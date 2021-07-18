import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AppRoute, AuthorizationStatus} from '../../const';
import {checkStatus} from '../../helper/helper';
import {getLoadedDataStatue, getOffers} from '../../store/offers-data/selector';
import {getAuthorizationStatus} from '../../store/user/selector';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

function App() {
  const isDataLoaded = useSelector(getLoadedDataStatue);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offers = useSelector(getOffers);

  if (checkStatus(AuthorizationStatus.UNKNOWN ,authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen/>;
  }

  return (
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
        <RoomPage/>
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  );
}

export default App;
