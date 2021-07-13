import React from 'react';
import {Route, Router} from 'react-router';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
import userEvent from '@testing-library/user-event';

import {AuthorizationStatus, AppRoute} from '../../const';
import Header from './header';

const mockStore = configureStore({});
let history = null;

describe('Component: Header', () => {
  beforeAll(() =>{
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: '',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
  });

  it('Should route to Favorite-page, Main-page when an user is autorizated', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: 'test@gmail.com',
      },
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route>
            <Header/>
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <h1>Favorites page</h1>
          </Route>
          <Route exact path={AppRoute.MAIN}>
            <h1>Main page</h1>
          </Route>
        </Router>
      </Provider>,
    );

    const [logoLink, emailLink, signOutLink] = screen.queryAllByRole('link');

    userEvent.click(logoLink);
    expect(screen.getByText(/Main page/)).toBeInTheDocument();

    userEvent.click(emailLink);
    expect(screen.getByText(/Favorites page/)).toBeInTheDocument();

    userEvent.click(signOutLink);
    expect(useDispatch).toBeCalledTimes(1);
  });

  it('Shoul route to Login-page when an user is not autorizated', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: '',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route>
            <Header/>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <h1>Login page</h1>
          </Route>
        </Router>
      </Provider>,
    );

    const [, signInLink] = screen.queryAllByRole('link');

    userEvent.click(signInLink);
    expect(screen.getByText(/Login page/i)).toBeInTheDocument();
  });
});
