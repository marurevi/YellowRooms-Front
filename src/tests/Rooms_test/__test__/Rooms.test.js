import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../../renderWithProviders';
import Rooms from '../../../components/Rooms/Rooms';

it('renders the Rooms component', () => {
  renderWithProviders(
    <MemoryRouter>
      <Rooms />
    </MemoryRouter>,
  );
  const rooms = screen.getByText(/luxuries/i);
  expect(rooms).toBeVisible();
});
