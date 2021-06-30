import {combineReducers} from 'redux';
import {user} from './user/user';
import {offersData} from './offers-data/offers-data';

const NameSpace = {
  OFFERS: 'OFFERS',
  USER: 'USER',
};

export {NameSpace};
export default combineReducers({
  [NameSpace.OFFERS]: offersData,
  [NameSpace.USER]: user,
});
