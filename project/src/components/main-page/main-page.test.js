import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus, DEFALT_CITY} from '../../const';
import MainPage from './main-page';

jest.mock('../../components/map/map', () => {
  const mockMap = () => <h1>Map</h1>;
  return {
    __esModule: true,
    default: mockMap,
  };
});

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
  },
];

let history = null;
let store = null;

describe('Component: MainPage', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createTestStore = configureStore({});
    store = createTestStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: 'test@gmail.com',
      },
      OFFERS: {
        city: DEFALT_CITY,
        offers: testOffers,
        filtredOffers: testOffers,
        isDataLoaded: true,
        activeCardId: null,
      },
    });
  });

  it('Should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`1 places to stay in ${DEFALT_CITY}`)).toBeInTheDocument();
    expect(screen.getByText(/Map/i)).toBeInTheDocument();
  });
});
