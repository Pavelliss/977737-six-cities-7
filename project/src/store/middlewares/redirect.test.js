import redirect from './redirect';
import {redirectRoute} from '../action';
import {AppRoute} from '../../const';

const mockRedux = () => {
  const store = {
    getStore: jest.fn(() => {}),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);

  return {store, next, invoke};
};

const testHistory = {
  location: {pathname: ''},
  push(path) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => testHistory);

describe('Middlewares: redirect', () => {
  it('action should passes to next middlewares', () => {
    const {invoke, next} = mockRedux();
    const action = redirectRoute(AppRoute.MAIN);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('route should be added to testHistory', () => {
    const {invoke} = mockRedux();

    invoke(redirectRoute(AppRoute.MAIN));
    expect(testHistory.location.pathname).toBe(AppRoute.MAIN);

    invoke(redirectRoute(AppRoute.ROOM));
    expect(testHistory.location.pathname).toBe(AppRoute.ROOM);
  });

  it('should not redirect because bad action', () => {
    const url = '/test';
    const {invoke} = mockRedux();

    invoke({type: 'TEST_ACTION', payload: url});
    expect(testHistory.location.path).not.toBe(url);
  });
});
