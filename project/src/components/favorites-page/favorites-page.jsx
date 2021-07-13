import React from 'react';
import PropTypes from 'prop-types';

import offersProp from '../offer-prop/offer.prop';

import Header from '../header/header';
import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';

function FavoritesPage (props) {
  const {offers} = props;

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
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
