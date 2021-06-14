import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';

import FavoritesCard from '../favorites-card/favorites-card';

function FavoritesItem(props) {
  const {offers, city} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="{#}">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesCard key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
  city: PropTypes.string.isRequired,
};

export default FavoritesItem;
