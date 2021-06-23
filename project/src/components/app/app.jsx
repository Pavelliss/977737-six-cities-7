import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {APIRoute} from '../../const';
import offersProp from '../offer-prop/offer.prop';
import commentsProp from '../comments-prop/comments.prop';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import RoomPage from '../room-page/room-page';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

function App(props) {
  const {
    offers,
    comments,
    nearOffers,
    isDataLoaded,
  } = props;

  if (!isDataLoaded) {
    return <LoadingScreen/>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={APIRoute.MAIN}>
          <MainPage/>
        </Route>
        <Route exact path={APIRoute.LOGIN}>
          <LoginPage/>
        </Route>
        <Route exact path={APIRoute.FAVORITES}>
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route exact path={`${APIRoute.ROOM}/:id`}>
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
});

App.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
  nearOffers: PropTypes.arrayOf(offersProp),
  comments: PropTypes.arrayOf(commentsProp),
  isDataLoaded: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);
