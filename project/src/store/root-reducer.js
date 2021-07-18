import {combineReducers} from 'redux';
import {user} from './user/user';
import {offersData} from './offers-data/offers-data';
import {chosenOffer} from './chosen-offer/chosenOffer';

const NameSpace = {
  OFFERS: 'OFFERS',
  USER: 'USER',
  CHOSEN_OFFER: 'CHOSEN_OFFER',
};

export {NameSpace};
export default combineReducers({
  [NameSpace.OFFERS]: offersData,
  [NameSpace.USER]: user,
  [NameSpace.CHOSEN_OFFER]: chosenOffer,
});
