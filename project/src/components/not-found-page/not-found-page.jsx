import React from 'react';
import Footer from '../footer/footer';

function NotFoundPage () {
  return (
    <div className="page page--favorites-empty">
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404. Page not found</b>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFoundPage;
