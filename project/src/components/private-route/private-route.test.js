import React from 'react';
import {Route, Router} from 'react-router';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';
import PrivateRoute from './private-route';

const mockStore = configureStore({});
let history = null;

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/private');
  });

  it('should render component for publik route, when an user not authorized', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact part={AppRoute.LOGIN}>
            <h1>Public route</h1>
          </Route>
          <PrivateRoute
            exact
            path="/private"
            render={() => (<h1>Private route</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Public route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route, when an user authorized', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.LOGIN}>
            <h1>Public route</h1>
          </Route>
          <PrivateRoute
            exact
            path="/private"
            render={() => (<h1>Private route</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Private route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public route/i)).not.toBeInTheDocument();
  });
});
