import React from 'react';
import {Router} from 'react-router';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import SortTypeItem from './sort-type-item';

describe('Component: SortTypeItem', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();
    const onClick = jest.fn();
    const type = 'testSortType';
    const className = 'testClassName';

    const {container} = render(
      <Router history={history}>
        <SortTypeItem
          onClick={onClick}
          className={className}
          type={type}
        />
      </Router>,
    );

    expect(screen.getByText(type)).toBeInTheDocument();

    userEvent.click(container.querySelector('li'));
    expect(onClick).toBeCalledWith(type);
  });
});
