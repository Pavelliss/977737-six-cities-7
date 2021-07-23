import dayjs from 'dayjs';

const groupOffersPerCity = (cities, offer) => {
  const cityName = offer['city']['name'];

  if (Array.isArray(cities[cityName])) {
    cities[cityName].push(offer);
  } else {
    cities[cityName] = [offer];
  }

  return cities;
};

const checkStatus = (status, activeStatus) => status === activeStatus;

function getFiltredOffers (city, offers) {
  return offers.filter((offer) => city === offer['city']['name']);
}

const convertRaitingToPercents = (raiting) => Math.round(raiting * 2) * 10;

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};

const sortOfferTime = (offerA, offerB) => dayjs(offerB.date) - dayjs(offerA.date);

export {
  groupOffersPerCity,
  checkStatus,
  getFiltredOffers,
  convertRaitingToPercents,
  updateItem,
  sortOfferTime
};
