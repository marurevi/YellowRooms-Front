import React from 'react';
import { renderWithProviders } from '../renderWithProviders';
import Detail from '../../components/Detail/Detail';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

test('Rooms show render the same', async () => {
  renderWithProviders(
    <MemoryRouter initialEntries={['/rooms/1']}>
      <Detail />
    </MemoryRouter>,
    {
      preloadedState: {
        rooms: {
          rooms: [
            {
              attributes: {
                id: 1,
                name: 'test room',
                stars: 3,
                photo: 'photo',
                persons_allowed: 2,
                description: 'test desc',
                price: 12.5,
              },
            },
          ],
        },
      },
    },
  );
  const img = screen.getByAltText('Room');
  const title = screen.getByText(/test room/i, {
    selector: '.roomName2',
  });
  expect(img).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
