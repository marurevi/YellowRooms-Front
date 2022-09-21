import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Reserve from '../components/Reserve/Reserve';
import store from '../Redux/store';

test('Reserve snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Reserve />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
