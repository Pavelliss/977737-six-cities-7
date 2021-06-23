const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILL_OFFERS: '/fillOffers',
  LOAD_OFFERS: 'data/loadOffers',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillOffers: () => ({
    type: ActionType.FILL_OFFERS,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
};

export {ActionType, ActionCreator};
