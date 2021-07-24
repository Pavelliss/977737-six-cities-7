import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {changeActiveCardId} from '../../store/action';
import PlaceCard from '../place-card/place-card';
import offersProp from '../offer-prop/offer.prop';

function PlaceCardList(props) {
  const {offers} = props;
  const dispatch = useDispatch();
  const onCardPointerEnter = (id) => {
    dispatch(changeActiveCardId(id));
  };

  const onCardPointerLeave = () => {
    dispatch(changeActiveCardId(null));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onCardPointerEnter={onCardPointerEnter}
          onCardPointerLeave={onCardPointerLeave}
        />
      ))}
    </div>
  );
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
};

export default PlaceCardList;
