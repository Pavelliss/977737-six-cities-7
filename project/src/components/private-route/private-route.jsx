import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';

function PrivateRoute(props) {
  const {
    authorizationStatus,
    exact,
    path,
    render,
  } = props;

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
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
