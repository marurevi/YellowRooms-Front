import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Splash from '../components/Splash/Splash';

test('splash snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Splash />
        ,
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
