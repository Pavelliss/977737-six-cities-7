import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';

import NearPlacesCard from '../near-places-card/near-places-card';

function NearPlaces(props) {
  const {nearOffers} = props;

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
