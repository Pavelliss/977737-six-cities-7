import {DEFAULT_CITY, SortType} from '../../const';
import {offersData} from './offers-data';
import {ActionType} from '../action';

const offers = [
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
      'avatarUrl': 'img/amsterdam.jpg',
      'id': 1,
      'isPro': true,
      'name': 'Angelina',
    },
    'id': 2,
    'images': ['img/studio-01.jpg', 'img/room.jpg'],
    'isFavorite': false,
    'isPremium': true,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': 'img/amsterdam.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  filtredOffers: [],
  isDataLoaded: false,
  activeCardId: null,
  sortType: SortType.POPULAR,
};

describe('Reducer: offersData', () => {
  it('without parametrs should return initial state', () => {
    expect(offersData(undefined, {})).toEqual(initialState);
  });

  it('should update offers by load offers', () => {
    const loadAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(offersData(initialState, loadAction))
      .toEqual({
        ...initialState,
        offers: offers,
        isDataLoaded: true,
        filtredOffers: offers,
      });
  });

  it('should fill offers', () => {

    const state = {
      ...initialState,
      offers: offers,
    };

    const fillOffersAction = {
      type: ActionType.FILL_OFFERS,
    };

    expect(offersData(state, fillOffersAction))
      .toEqual({
        ...initialState,
        offers: offers,
        filtredOffers: offers,
      });
  });

  it('shoul change active city', () => {
    const activeCity = 'Prague';

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: activeCity,
    };

    expect(offersData(initialState, changeCityAction))
      .toEqual({
        ...initialState,
        city: activeCity,
      });
  });
});
