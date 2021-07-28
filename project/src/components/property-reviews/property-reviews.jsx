import React from 'react';
import PropTypes from 'prop-types';

import commentsProp from '../comments-prop/comments.prop';
import {sortOfferTime} from '../../helper/helper';

import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

const MAX_COMMENT_COUNT = 10;

function PropertyReviews(props) {
  const {
    isAuthorization,
    onSubmit,
    id,
  } = props;

  let {comments} = props;

  comments = comments
    .slice(0, MAX_COMMENT_COUNT)
    .sort(sortOfferTime);

  const commentCount = comments.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {commentCount}
        </span>
      </h2>
      <ReviewsList comments={comments}/>
      {
        isAuthorization
          ? <ReviewsForm onSubmit={onSubmit} id={id}/>
          : ''
      }
    </section>
  );
}

PropertyReviews.propTypes = {
  comments: PropTypes.arrayOf(commentsProp),
  isAuthorization: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default PropertyReviews;
