import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import offerProp from '../offer-prop/offer.prop';
import {AppRoute} from '../../const';

function PlaceCard (props) {
  const {offer, onCardPointerEnter} = props;

  const {
    id,
    isPremium,
    isFavorite,
    previewImage,
    price,
    title,
    type,
  } = offer;
  const offerUrl = `${AppRoute.ROOM}/${id}`;

  return (
    <article className="cities__place-card place-card" onPointerEnter={() => onCardPointerEnter(id)}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button
            ${isFavorite && 'place-card__bookmark-button--active'}`}
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  onCardPointerEnter: PropTypes.func.isRequired,
};

export default PlaceCard;
