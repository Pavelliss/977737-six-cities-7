import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import ReviewsList from './reviews-list';

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

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {container} = render(
      <Router history={history}>
        <ReviewsList
          comments={testComments}
        />
      </Router>,
    );

    expect(container.querySelector('.reviews__list')).toBeInTheDocument();
  });
});
