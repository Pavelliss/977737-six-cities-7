import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';

import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';

function FavoritesPage (props) {
  const {offers} = props;

  const filtredOffers = offers.filter((offer) => offer['isFavorite']);

  if (filtredOffers.length === 0) {
    return <FavoritesEmptyPage/>;
  }

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={filtredOffers}/>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offersProp),
};

export default FavoritesPage;
