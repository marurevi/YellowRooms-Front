import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import Reserve from '../components/Reserve/Reserve';
import { renderWithProviders } from './renderWithProviders';

test('Reserve snapshot', () => {
  renderWithProviders(
    <MemoryRouter>
      <Reserve />
    </MemoryRouter>,
    {
      preloadedState: {
        user: {
          id: 1,
        },
      },
    },
  );
  const text = screen.getByText(/no room/i);
  expect(text).toBeInTheDocument();
});
