import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../renderWithProviders';
import Rooms from '../../components/Rooms/Rooms';

test('Rooms show render the same', () => {
  renderWithProviders(
    <MemoryRouter>
      <Rooms />
    </MemoryRouter>,
  );

  const title = screen.getByRole('heading', {
    name: /we have the luxuries/i,
  });
  expect(title).toBeInTheDocument();
});
