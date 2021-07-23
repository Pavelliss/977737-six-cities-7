import React from 'react';
import { Link } from 'react-router-dom';

import offersProp from '../offer-prop/offer.prop';
import {AppRoute} from '../../const';
import {convertRaitingToPercents} from '../../helper/helper';
import FavoritesButton from '../favorites-button/favorites-button';

function FavoritesCard(props) {
  const {offer} = props;
  const {
    id,
    price,
    title,
    type,
    previewImage,
    rating,
    isFavorite,
  } = offer;

  const offerUrl = `${AppRoute.ROOM}/${id}`;
  const offerRaiting = `${convertRaitingToPercents(rating)}%`;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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

FavoritesCard.propTypes = {
  offer: offersProp,
};

export default FavoritesCard;
