import React from 'react';
import {useDispatch} from 'react-redux';

import {CITIES} from '../../../const';

import LocationItem from '../location-item/location-item';
import {changeCity, fillOffers, changeSortType} from '../../../store/action';
import {SortType} from '../../../const';


function LocationList() {
  const dispatch = useDispatch();

  const onLocationChange = (activeCity) => {
    dispatch(changeCity(activeCity));
    dispatch(fillOffers());
    dispatch(changeSortType(SortType.POPULAR));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationItem key={city} city={city} onLocationChange={onLocationChange}/>
      ))}
    </ul>
  );
}

export default LocationList;
