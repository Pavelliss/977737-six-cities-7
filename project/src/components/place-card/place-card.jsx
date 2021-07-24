import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import offerProp from '../offer-prop/offer.prop';
import {convertRaitingToPercents} from '../../helper/helper';
import {AppRoute} from '../../const';
import FavoritesButton from '../favorites-button/favorites-button';

function PlaceCard (props) {
  const {
    offer,
    onCardPointerEnter,
    onCardPointerLeave,
  } = props;

  const {
    id,
    isPremium,
    isFavorite,
    previewImage,
    price,
    title,
    type,
    rating,
  } = offer;

  const offerUrl = `${AppRoute.ROOM}/${id}`;
  const offerRaiting = `${convertRaitingToPercents(rating)}%`;

  return (
    <article className="cities__place-card place-card"
      onPointerEnter={() => onCardPointerEnter(id)}
      onPointerLeave={() => onCardPointerLeave()}
    >
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
          <FavoritesButton
            className={'place-card__bookmark'}
            isFavorite={isFavorite}
            id={id}
            size={{
              width: 18,
              height: 19,
            }}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offerRaiting}}></span>
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
  onCardPointerLeave: PropTypes.func.isRequired,
};

export default PlaceCard;
