import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router';
import {useSelector} from 'react-redux';

import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selector';

function PrivateRoute(props) {
  const {
    exact,
    path,
    render,
  } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      part={path}
      render={(routeProp) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProp)
          : <Redirect to={AppRoute.LOGIN}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
