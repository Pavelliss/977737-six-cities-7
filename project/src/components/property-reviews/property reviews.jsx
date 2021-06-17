import React from 'react';
import PropTypes from 'prop-types';

import commentsProp from '../comments-prop/comments.prop';

import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

function PropertyReviews(props) {
  const {comments} = props;
  const commentCount = comments.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">
          {commentCount}
        </span>
      </h2>
      <ReviewsList comments={comments}/>
      <ReviewsForm/>
    </section>
  );
}

PropertyReviews.propTypes = {
  comments: PropTypes.arrayOf(commentsProp),
};

export default PropertyReviews;