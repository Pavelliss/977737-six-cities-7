import {user} from './user';
import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: '',
};

describe('Reducer: user', () => {
  it('without parametrs should return initial state', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const requireAuthAction = {
      type: ActionType.REQUIRED_AUTORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(initialState, requireAuthAction))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(initialState, logoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: '',
      });
  });

  it('should add user email', () => {
    const testEmail = 'testEmail@gmail.com';

    const addUserEmailAction = {
      type: ActionType.ADD_USER_EMAIL,
      payload: testEmail,
    };

    expect(user(initialState, addUserEmailAction))
      .toEqual({
        ...initialState,
        userEmail: testEmail,
      });
  });
});
