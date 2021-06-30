import {NameSpace} from '../root-reducer';

const getCity = (state) => state[NameSpace.OFFERS].city;
const getOffers = (state) => state[NameSpace.OFFERS].offers;
const getFiltredOffers = (state) => state[NameSpace.OFFERS].filtredOffers;
const getLoadedDataStatue = (state) => state[NameSpace.OFFERS].isDataLoaded;

export {
  getCity,
  getOffers,
  getFiltredOffers,
  getLoadedDataStatue
};
