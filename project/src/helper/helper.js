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

export {
  groupOffersPerCity,
  checkStatus,
  getFiltredOffers,
  convertRaitingToPercents
};
