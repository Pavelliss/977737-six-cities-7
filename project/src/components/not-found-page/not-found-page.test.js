import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';

import NotFoundPage from './not-found-page';
import {AuthorizationStatus} from '../../const';
import { Provider } from 'react-redux';

const mockStore = configureStore({});

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: 'test@gmail.com',
      },
    });

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundPage/>
        </Router>
      </Provider>,
    );

    const headerElement = getByText('404. Page not found');

    expect(headerElement).toBeInTheDocument();
  });
});
