import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import PropertyReviews from './property-reviews';

let history = null;
const mockStore = configureStore({});

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

const testId = '1';
const onFormSubmit = jest.fn();
let isAuthorization = null;

describe('Component: PropertyReviews', () => {
  beforeAll(() => {
    history =createMemoryHistory();
  });
  it('should render correctly without form', () => {
    isAuthorization = false;

    render(
      <Router history={history}>
        <PropertyReviews
          comments={testComments}
          isAuthorization={isAuthorization}
          onSubmit={onFormSubmit}
          id={testId}
        />
      </Router>,
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(testComments.length)).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render correctly with form', () => {
    isAuthorization = true;
    const store = mockStore({
      CHOSEN_OFFER: {
        isReviewFormDisabled: false,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <PropertyReviews
            comments={testComments}
            isAuthorization={isAuthorization}
            onSubmit={onFormSubmit}
            id={testId}
          />
        </Router>
      </Provider>
      ,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
