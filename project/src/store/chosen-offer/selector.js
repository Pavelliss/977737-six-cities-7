import {NameSpace} from '../root-reducer';

const getChosenOffer = (state) => state[NameSpace.CHOSEN_OFFER].chosenOffer;
const getComments = (state) => state[NameSpace.CHOSEN_OFFER].comments;
const getNearbyOffers = (state) => state[NameSpace.CHOSEN_OFFER].nearbyOffers;
const getReviewFormState = (state) => state[NameSpace.CHOSEN_OFFER].isReviewFormDisabled;

export {
  getChosenOffer,
  getComments,
  getNearbyOffers,
  getReviewFormState
};
