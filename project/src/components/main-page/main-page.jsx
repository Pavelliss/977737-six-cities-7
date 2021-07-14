import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {changeCity, fillOffers, changeSortType} from '../../store/action';
import {getCity, getFiltredOffers} from '../../store/offers-data/selector';
import {SortType} from '../../const';

import PlaceCardList from '../place-card-list/place-card-list';
import Header from '../header/header';
import Map from '../map/map';
import LocationList from '../locations/location-list/location-list';
import SortForm from '../sort-form/sort-form';

function MainPage() {
  const offers = useSelector(getFiltredOffers);
  const city = useSelector(getCity);
  const placeCount = offers.length;

  const dispatch = useDispatch();

  const onLocationChange = (activeCity) => {
    dispatch(changeCity(activeCity));
    dispatch(fillOffers());
    dispatch(changeSortType(SortType.POPULAR));
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList onLocationChange={onLocationChange}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeCount} places to stay in {city}</b>
              <SortForm />
              <PlaceCardList offers={offers}/>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} className={'cities__map map'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
