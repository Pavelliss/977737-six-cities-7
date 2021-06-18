import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';


function LocationList(props) {
  const {offers} = props;

  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="{#}">
          <span>Paris</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="{#}">
          <span>Cologne</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="{#}">
          <span>Brussels</span>
        </a>
      </li>
      <li className="locations__item">
        <a href="{#}" className="locations__item-link tabs__item tabs__item--active">
          <span>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="{#}">
          <span>Hamburg</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="{#}">
          <span>Dusseldorf</span>
        </a>
      </li>
    </ul>
  );
}

LocationList.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
};


export default LocationList;
