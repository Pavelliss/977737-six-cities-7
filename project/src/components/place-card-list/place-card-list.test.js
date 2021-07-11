import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';

import PlaceCardList from './place-card-list';

const testOffers = [{
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
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
  'isFavorite': false,
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
}];

const mockStore = configureStore({});
let history = null;

describe('Component: PlaceCardList', () => {
  beforeAll(() =>{
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    const store = mockStore({
      OFFERS: {
        activeCardId: null,
      },
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PlaceCardList offers={testOffers}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.cities__places-list')).toBeInTheDocument();
  });
});
