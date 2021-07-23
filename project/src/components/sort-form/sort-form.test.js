import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';

import {SortType} from '../../const';
import SortForm from './sort-form';

let history = null;
let testSortForm = null;
let store = null;
const mockStore = configureStore({});

describe('Component: SortForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    store = mockStore({
      OFFERS: {
        sortType: SortType.POPULAR,
      },
    });

    testSortForm = (
      <Provider store={store}>
        <Router history={history}>
          <SortForm/>
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(testSortForm);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });

  it('should call dispatch', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    const {container} = render(testSortForm);

    const sortTypeSpan = container.querySelector('.places__sorting-type');
    userEvent.click(sortTypeSpan);

    const sortTypeItem = container.querySelector('.places__option');
    userEvent.click(sortTypeItem);
    expect(useDispatch).toBeCalled();
  });
});
