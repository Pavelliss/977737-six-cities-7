import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {getReviewFormState} from '../../store/chosen-offer/selector';
import {toggleStateReviewForm
} from '../../store/action';

const COUT_STARS = 5;
const MIN_LENGTH_REVIEW = 50;

let isValid = false;

const checkValid = (data) => (
  data.rating &&
  data.comment.length >= MIN_LENGTH_REVIEW
    ? isValid = true
    : isValid = false
);

const resetForm = (target, setState) => {
  target.reset();
  setState({
    comment: '',
    rating: null,
  });
};

function ReviewsForm (props) {
  const {onSubmit, id} = props;
  const isFormDisabled = useSelector(getReviewFormState);
  const dispatch = useDispatch();

  const [reviewData, setReviewData] = useState({
    comment: '',
    rating: null,
  });

  checkValid(reviewData);

  const onFormChange = (evt) => {
    setReviewData({
      ...reviewData,
      [evt.target.name]: evt.target.value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({...reviewData}, id);
    resetForm(evt.target, setReviewData);
    dispatch(toggleStateReviewForm(true));
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          new Array(COUT_STARS)
            .fill()
            .map((_star, index) => {
              const value = Math.abs((index + 1)) ;
              return (
                <React.Fragment key={value}>
                  <input
                    className="form__rating-input visually-hidden"
                    name="rating"
                    value={value}
                    id={`${value}-stars`}
                    type="radio"
                    onClick={onFormChange}
                    data-testid={`${value}-stars`}
                  />
                  <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </React.Fragment>);
            })
            .reverse()
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        data-testid="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onFormChange}
        disabled={`${isFormDisabled ? 'disabled' : ''}`}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid ||
                     isFormDisabled ? 'disabled' : ''}
        >
            Submit
        </button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ReviewsForm;
