import {SortType} from '../const';

const sort = {
  [SortType.POPULAR]: (offers) => offers,
  [SortType.PRICE_HIGH_TO_LOW]: (offers) => offers.sort((a, b) => b['price'] - a['price']),
  [SortType.PRICE_LOW_TO_HIGH]: (offers) => offers.sort((a, b) => a['price'] - b['price']),
  [SortType.TOP_RATED_FIRST]: (offers) => offers.sort((a, b) => b['rating'] - a['rating']),
};

export {sort};
