import {DEFALT_CITY} from '../const';
import {
  ActionType,
  changeCity ,
  fillOffers,
  addUserEmail
} from './action';

describe('Actions', () => {
  it('action creater for change city returns correct action', () => {

    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: DEFALT_CITY,
    };

    expect(changeCity(DEFALT_CITY)).toEqual(expectedAction);
  });

  it('action create for fill offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.FILL_OFFERS,
    };

    expect(fillOffers()).toEqual(expectedAction);
  });

  it('action create for add user email returns correct action', () => {
    const testEmail = 'test@gmail.com';
    const expectedAction = {
      type: ActionType.ADD_USER_EMAIL,
      payload: testEmail,
    };

    expect(addUserEmail(testEmail)).toEqual(expectedAction);
  });
});
