import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import ReviewsItem from './reviews-item';

const testComment = {
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
};

describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const history =createMemoryHistory();

    render(
      <Router history={history}>
        <ReviewsItem userComment={testComment}/>
      </Router>,
    );

    expect(screen.getByText(testComment.comment)).toBeInTheDocument();
    expect(screen.getByText(testComment.user.name)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
