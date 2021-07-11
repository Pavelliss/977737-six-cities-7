import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import PlaceCard from './place-card';
import {AppRoute} from '../../const';

const testOffer = {
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
};
let history = null;

describe('Component: FavoritesCard', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });
  it('should render correctly', () => {
    const onCardPointerEnter = jest.fn();

    render(
      <Router history={history}>
        <PlaceCard
          offer={testOffer}
          onCardPointerEnter={onCardPointerEnter}
        />
      </Router>,
    );

    expect(screen.getByText(testOffer['title'])).toBeInTheDocument();
  });

  it('should redirect to AppRoute.ROOM/id', () => {
    const url = `${AppRoute.ROOM}/${testOffer['id']}`;
    const onCardPointerEnter = jest.fn();

    const {container} = render(
      <Router history={history}>
        <Route>
          <PlaceCard
            offer={testOffer}
            onCardPointerEnter={onCardPointerEnter}
          />
        </Route>
        <Route exact path={url}>
          <h1>test page</h1>
        </Route>
      </Router>,
    );

    const [, link] = screen.queryAllByRole('link');

    userEvent.hover(container.querySelector('.place-card'));
    expect(onCardPointerEnter).toBeCalledTimes(1);

    userEvent.click(link);
    expect(screen.getByText(/test page/i)).toBeInTheDocument();
  });
});
