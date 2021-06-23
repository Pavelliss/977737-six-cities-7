import {ActionCreator} from './action';
import {APIRoute} from '../const';

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export {fetchOffers};
