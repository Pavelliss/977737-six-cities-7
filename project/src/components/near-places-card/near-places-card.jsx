import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';
import {APIRoute} from '../../const';

function NearPlacesCard(props) {
  const {nearOffer} = props;
  const {
    id,
    previewImage,
    price,
    title,
    type,
    isFavorite,
  } = nearOffer;
  const nearOfferUrl = `${APIRoute.ROOM}/${id}`;

  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={nearOfferUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
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
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={nearOfferUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

NearPlacesCard.propTypes = {
  nearOffer: PropTypes.shape(offersProp),
};

export default NearPlacesCard;
