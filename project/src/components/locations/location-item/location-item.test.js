import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import LocationItem from './location-item';
import {DEFAULT_CITY} from '../../../const';

const testCity = 'Prague';
const mockStore = configureStore({});

describe('Component: LocationItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const onLocationChange = jest.fn();
    const store = mockStore({
      OFFERS: {
        city: DEFAULT_CITY,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <LocationItem
            city={testCity}
            onLocationChange={onLocationChange}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(testCity)).toBeInTheDocument();

    userEvent.click(screen.queryByText(testCity));
    expect(onLocationChange).toBeCalled();
  });
});
