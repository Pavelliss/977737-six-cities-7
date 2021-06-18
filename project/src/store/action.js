const ActionType = {
  CHANGE_CITY: '/changeCity',
  FILL_OFFERS: '/fillOffers',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  fillOffers: () => ({
    type: ActionType.FILL_OFFERS,
  }),
};

export {ActionType, ActionCreator};
