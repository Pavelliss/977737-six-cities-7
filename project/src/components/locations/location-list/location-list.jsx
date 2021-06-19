import React from 'react';
import PropTypes from 'prop-types';

import {CITIES} from '../../../const';

import LocationItem from '../location-item/location-item';


function LocationList(props) {
  const {onLocationChange} = props;

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationItem key={city} city={city} onLocationChange={onLocationChange}/>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
};

export default LocationList;
