import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import FavoritesEmptyPage from './favorites-empty-page';

jest.mock('../../components/header/header', () => {
  const mockMap = () => <h1>button</h1>;
  return {
    __esModule: true,
    default: mockMap,
  };
});

describe('Component: Favorites empty page', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router  history={history}>
        <FavoritesEmptyPage/>
      </Router>,
    );

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });
});
