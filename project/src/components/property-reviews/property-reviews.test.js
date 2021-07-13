import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import PropertyReviews from './property-reviews';

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

describe('Component: PropertyReviews', () => {
  it('should render correctly', () => {
    const history =createMemoryHistory();

    render(
      <Router history={history}>
        <PropertyReviews comments={testComments}/>
      </Router>,
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(testComments.length)).toBeInTheDocument();
  });
});
