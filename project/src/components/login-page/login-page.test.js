import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';

import {AppRoute, AuthorizationStatus, DEFALT_CITY} from '../../const';
import LoginPage from './login-page';

const mockStore = configureStore({});

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when an user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: 'test@gmail.com',
      },
      OFFERS: {
        city: DEFALT_CITY,
        offers: [],
        filtredOffers: [],
        isDataLoaded: true,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginPage/>
        </Router>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'user');
    userEvent.type(screen.getByTestId('password'), '000');

    expect(screen.getByDisplayValue(/user/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/000/i)).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('Sign in');
  });
});
