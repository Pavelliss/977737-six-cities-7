import React from 'react';
import PropTypes from 'prop-types';

import commentsProp from '../comments-prop/comments.prop';

import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList (props) {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem
          userComment={comment}
          key={comment.id}
        />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(commentsProp),
};

export default ReviewsList;
