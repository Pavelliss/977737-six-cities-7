import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import {getCity} from '../../../store/offers-data/selector';

function LocationItem(props) {
  const {city, onLocationChange} = props;

  const activeCity = useSelector(getCity);

  return (
    <li className="locations__item">
      <a
        className={
          `locations__item-link tabs__item
          ${city === activeCity ? 'tabs__item--active' : ''}`
        }
        href="{#}"
        onClick={(evt) => {
          evt.preventDefault();
          onLocationChange(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export default LocationItem;
