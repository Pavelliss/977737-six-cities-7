import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';

import FavoritesItem from '../favorites-item/favorites-item';

function FavoritesList(props) {
  const {offers} = props;

  const groupOffersPerCity = (cities, offer) => {
    const cityName = offer['city']['name'];

    if (Array.isArray(cities[cityName])) {
      cities[cityName].push(offer);
    } else {
      cities[cityName] = [offer];
    }

    return cities;
  };

  const filtredOffers = offers
    .filter((offer) => offer['isFavorite'])
    .reduce(groupOffersPerCity, {});

  return (
    <ul className="favorites__list">
      {Object.keys(filtredOffers).map((city) => (
        <FavoritesItem
          key={city}
          city={city}
          offers={filtredOffers[city]}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
};

export default FavoritesList;
