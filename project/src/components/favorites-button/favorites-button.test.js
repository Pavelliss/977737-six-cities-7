import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';
import userEvent from '@testing-library/user-event';

import FavoritesButton from './favorites-button';
import { Route, Router } from 'react-router-dom';

let history = null;
const mockStore = configureStore({});
const props = {
  className: 'place-card__bookmark',
  isFavorite: true,
  id: 1,
  size: {
    width: 18,
    height: 19,
  },
};

describe('Component: FavoritesButton', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });
  it('Should route to Login page', () => {
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
            <FavoritesButton
              className={props.className}
              isFavorite={props.isFavorite}
              id={1}
              size={props.size}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <h1>Login page</h1>
          </Route>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Login page/i)).toBeInTheDocument();
  });

  it('Should call dispatch', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: '',
      },
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesButton
            className={props.className}
            isFavorite={props.isFavorite}
            id={1}
            size={props.size}
          />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByRole('button'));
    expect(useDispatch).toBeCalled();
  });
});
