import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../header/header';
import PropertyReviews from '../property-reviews/property-reviews';
import NearPlaces from '../near-places/near-plases';
import Map from '../map/map';
import LoadingScreen from '../loading-screen/loading-screen';

import {resetChosenOfferState} from '../../store/action';
import {convertRaitingToPercents, checkStatus} from '../../helper/helper';
import {AuthorizationStatus} from '../../const';
import {sendComment} from '../../store/api-actions';

import {
  fetchChosenOffer,
  fetchComments,
  fetchNearbyOffers
} from '../../store/api-actions';

import {
  getChosenOffer,
  getComments,
  getNearbyOffers
} from '../../store/chosen-offer/selector';
import {getAuthorizationStatus} from '../../store/user/selector';

function RoomPage () {
  const {id} = useParams();

  const dispatch = useDispatch();

  const activeOffer = useSelector(getChosenOffer);
  const comments = useSelector(getComments);
  const nearbyOffers = useSelector(getNearbyOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const isAuthorization = checkStatus(AuthorizationStatus.AUTH ,authorizationStatus);

  const onFormSubmit = (reviewData, offerId) => {
    dispatch(sendComment(reviewData, offerId));
    dispatch(fetchComments(id));
  };

  useEffect(() => {
    dispatch(fetchChosenOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchNearbyOffers(id));

    return () => {
      dispatch(resetChosenOfferState());
    };
  }, [id, dispatch]);

  if (
    activeOffer === null ||
    comments === null ||
    nearbyOffers === null
  ) {
    return <LoadingScreen/>;
  }

  const {
    isPremium,
    isFavorite,
    title,
    rating,
    price,
    goods,
    type,
    images,
    host,
    description,
  } = activeOffer;

  const offerRaiting = `${convertRaitingToPercents(rating)}%`;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={
                  isFavorite
                    ? 'property__bookmark-button property__bookmark-button--active button'
                    : 'property__bookmark-button button'
                } type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: offerRaiting}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <PropertyReviews
                comments={comments}
                isAuthorization={isAuthorization}
                onSubmit={onFormSubmit}
                id={id}
              />
            </div>
          </div>
          <Map offers={nearbyOffers} className={'property__map map'}/>
        </section>
        <div className="container">
          <NearPlaces nearOffers={nearbyOffers}/>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
