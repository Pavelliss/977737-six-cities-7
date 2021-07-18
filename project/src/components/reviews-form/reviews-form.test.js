import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import {Provider} from 'react-redux';
import * as Redux from 'react-redux';

import ReviewsForm from './reviews-form';

let history = null;
let store = null;
let testFotm = null;

const textareaText = 'TestTestTestTestTestTestTestTestTestTestTestTestTestTest';

const onSubmit = jest.fn();
const testId = '1';

const testData = {
  comment: textareaText,
  rating: testId,
};

describe('Component: ReviewsForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const mockStore = configureStore({});
    store = mockStore({
      CHOSEN_OFFER: {
        isReviewFormDisabled: false,
      },
    });

    testFotm = (
      <Provider store={store}>
        <Router history={history}>
          <ReviewsForm
            onSubmit={onSubmit}
            id={testId}
          />
        </Router>
      </Provider>
    );
  });
  it('should render correctly', () => {
    render(testFotm);

    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
    expect(screen.getByText(/and describe your stay with at least/i)).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('Submit');
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
  });

  it('should sumbit data to a server', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(testFotm);

    userEvent.type(screen.getByTestId('review'), textareaText);
    userEvent.click(screen.getByTestId('1-stars'));
    userEvent.click(screen.getByRole('button'));

    expect(useDispatch).toBeCalled();
    expect(onSubmit).toHaveBeenCalledWith(testData, testId);
  });
});
