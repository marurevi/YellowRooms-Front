import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';
import renderWithProviders from './renderWithProviders';

test('Renders correctly', () => {
  renderWithProviders(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>,
  );

  const title = screen.getByRole('heading', { text: /signup/i });
  expect(title).toBeInTheDocument();
});
