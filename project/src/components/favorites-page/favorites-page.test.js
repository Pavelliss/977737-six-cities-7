import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import FavoritesPage from '../favorites-page/favorites-page';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
const testOffers = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Paris',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': 'img/amsterdam.jpg',
      'id': 1,
      'isPro': true,
      'name': 'Angelina',
    },
    'id': 2,
    'images': ['img/studio-01.jpg', 'img/room.jpg'],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/amsterdam.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];

describe('Component: FavoritesPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: '',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesPage offers={testOffers}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });
});
