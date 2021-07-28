import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import NoOffersPage from './no-offers-page';

jest.mock('../../components/header/header', () => {
  const mockMap = () => (<h1>Header</h1>);
  return {
    __esModule: true,
    default: mockMap,
  };
});

jest.mock('../../components/locations/location-list/location-list', () => {
  const mockMap = () => (<h1>locations</h1>);
  return {
    __esModule: true,
    default: mockMap,
  };
});

describe('Component: RoomPage', () => {
  it('Should render corrently', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <NoOffersPage/>
      </Router>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('locations')).toBeInTheDocument();
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Dusseldorf/i)).toBeInTheDocument();
  });
});
