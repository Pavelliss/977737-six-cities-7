import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import LocationList from './location-list';

const mockStore = configureStore({});

describe('Component: LocationList', () => {
  it('should render corrently', () => {
    const history = createMemoryHistory({});
    const onLocationChange = jest.fn();
    const store = mockStore({
      OFFERS: {
        city: 'testCity',
      },
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <LocationList
            onLocationChange={onLocationChange}
          />
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.locations__list ')).toBeInTheDocument();
  });
});
