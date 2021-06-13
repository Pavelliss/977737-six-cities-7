import React, {useState} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card';
import offersProp from '../offer-prop/offer.prop';

function PlaceCardList(props) {
  const {offers} = props;
  // eslint-disable-next-line no-unused-vars
  const [activeCardId, setActiveCardId] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onCardPointerEnter={(id) => setActiveCardId(id)}
        />
      ))}
    </div>
  );
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
};

export default PlaceCardList;
