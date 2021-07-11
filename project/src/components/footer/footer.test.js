import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import Footer from './footer';
import { AppRoute } from '../../const';

describe('Component: Footer', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    const {container} = render(
      <Router history={history}>
        <Route>
          <Footer/>
        </Route>
        <Route expect path={AppRoute.MAIN}>
          <h1>Main page</h1>
        </Route>
      </Router>,
    );

    expect(container.querySelector('.footer')).toBeInTheDocument();

    userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
});
