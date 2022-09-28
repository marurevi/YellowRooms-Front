import React from 'react';
import { renderWithProviders } from '../renderWithProviders';
import { screen } from '@testing-library/react';
import Rooms from '../../components/Rooms/Rooms';
import { MemoryRouter } from 'react-router-dom';

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
