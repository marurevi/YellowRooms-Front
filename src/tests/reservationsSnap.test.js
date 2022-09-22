import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Reservations from '../components/Reservations/Reservations';
import store from '../Redux/store';

test('Reservations snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
