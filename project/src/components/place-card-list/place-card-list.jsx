import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';
import offersProp from '../offer-prop/offer.prop';

function PlaceCardList(props) {
  const {offers, onCardClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
  onCardClick: PropTypes.func.isRequired,
};

export default PlaceCardList;
