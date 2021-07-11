import React from 'react';
import {render, screen} from '@testing-library/react';

import ReviewsForm from './reviews-form';

describe('Component: ReviewsForm', () => {
  it('should render correctly', () => {
    render(<ReviewsForm/>);

    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
    expect(screen.getByText(/and describe your stay with at least/i)).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('Submit');
  });
});
