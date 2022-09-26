import { render, screen } from '@testing-library/react';
import wrapper from '../../wrapMeInValidComponents';
import Rooms from '../../../components/Rooms/Rooms';

it('renders the Roms component', () => {
  render(wrapper(<Rooms />));
  const rooms = screen.getByText(/luxuries/i);
  expect(rooms).toBeVisible();
});
