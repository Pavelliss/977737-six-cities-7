import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';

import RoomPage from './room-page';
import {AuthorizationStatus, AppRoute} from '../../const';

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

const testComments = [
  {
    'comment': 'Very nice',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 11,
      'isPro': false,
      'name': 'Angelina',
    },
  },
];

jest.mock('../../components/map/map', () => {
  const mockMap = () => (<h1>Map</h1>);
  return {
    __esModule: true,
    default: mockMap,
  };
});

const url = `${AppRoute.ROOM}/${testOffers[0].id}`;
const mockStore = configureStore({});
let history = null;

describe('Component: RoomPage', () => {
  beforeAll(() =>{
    history = createMemoryHistory();
    history.push(url);
  });

  it('Should render corrently', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: '',
      },
      CHOSEN_OFFER: {
        chosenOffer: testOffers[0],
        comments: testComments,
        nearbyOffers: testOffers,
        isReviewFormDisabled: false,
      },
    });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={`${AppRoute.ROOM}/:id`}>
            <RoomPage/>
          </Route>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Map/i)).toBeInTheDocument();
    expect(useDispatch).toBeCalledTimes(2);
  });
});
