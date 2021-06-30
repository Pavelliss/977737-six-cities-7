import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {changeCity, fillOffers} from '../../store/action';
import {getCity, getFiltredOffers} from '../../store/offers-data/selector';

import PlaceCardList from '../place-card-list/place-card-list';
import Header from '../header/header';
import Map from '../map/map';
import LocationList from '../locations/location-list/location-list';

function MainPage() {
  const offers = useSelector(getFiltredOffers);
  const city = useSelector(getCity);
  const placeCount = offers.length;

  const dispatch = useDispatch();

  const onLocationChange = (activeCity) => {
    dispatch(changeCity(activeCity));
    dispatch(fillOffers());
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
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
