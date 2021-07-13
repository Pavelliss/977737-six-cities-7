import MockAdapter from 'axios-mock-adapter';
import createApi from '../services/api';
import {ActionType} from './action';
import {adaptOfferToClient} from '../services/adapter';
import {
  APIRoute,
  AppRoute,
  AuthorizationStatus
} from '../const';
import {
  fetchOffers,
  checkAuth,
  login,
  logout
} from './api-actions';

let api = null;

const testOffer = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Paris',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatar_url': 'img/1.png',
      'id': 3,
      'is_pro': true,
      'name': 'Angelina',
    },
    'id': 1,
    'images': ['img/1.png', 'img/2.png'],
    'is_favorite': false,
    'is_premium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    'max_adults': 4,
    'preview_image': 'img/1.png',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];

function adaptOffersToClient (offers) {
  return offers.map((offer) => adaptOfferToClient(offer));
}

describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();
    const serverAnswer = [{test: true}];

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, serverAnswer);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const serverAnswer = [{test: true}];
    const fakeUser = [{
      email: 'testEmail@gmail.com',
      password: '000',
    }];
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, serverAnswer);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to delete /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const serverAnswer = [{test: true}];
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(204, serverAnswer);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(Storage.prototype.removeItem).toHaveBeenCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const serverAnswer = testOffer;
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, serverAnswer);

    return offersLoader(dispatch, () => {}, api)
      .then((data) => data)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: adaptOffersToClient(serverAnswer),
        });
      });
  });
});

