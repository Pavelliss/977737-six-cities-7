import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  AuthorizationStatus,
  DEFALT_CITY,
  AppRoute} from '../../const';
import App from './app';

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
let testApp = null;

describe('Application Routing', () => {
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
      },
    });

    testApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it(`Should render "MainPage" when user navigate to "/"`, () => {
    history.push(AppRoute.MAIN);
    render(testApp);

    expect(screen.getByText(/1 places to stay in Paris/i)).toBeInTheDocument();
  });

  it('Should render "LoginPage" when an user navigate to "login" url', () => {
    history.push(AppRoute.LOGIN);
    render(testApp);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  })

  it('Should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/fake-route');
    render(testApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
  });
});

