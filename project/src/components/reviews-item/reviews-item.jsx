import React from 'react';
import dayjs from 'dayjs';

import commentsProp from '../comments-prop/comments.prop';
import {convertRaitingToPercents} from '../../helper/helper';

function ReviewsItem(props) {
  const {userComment} = props;
  const {
    comment,
    user,
    date,
    rating,
  } = userComment;

  const offerRaiting = `${convertRaitingToPercents(rating)}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user['avatarUrl']} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user['name']}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: offerRaiting}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  userComment: commentsProp,
};

export default ReviewsItem;
