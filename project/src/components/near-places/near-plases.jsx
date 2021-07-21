import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';

import NearPlacesCard from '../near-places-card/near-places-card';

const NEAR_PLACES_MAX_COUNT = 3;

function NearPlaces(props) {
  let {nearOffers} = props;
  nearOffers = nearOffers.slice(0, NEAR_PLACES_MAX_COUNT);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((nearOffer) => (
          <NearPlacesCard
            nearOffer={nearOffer}
            key={nearOffer.id}
          />
        ))}
      </div>
    </section>
  );
}

NearPlaces.propTypes = {
  nearOffers: PropTypes.arrayOf(offersProp),
};

export default NearPlaces;
