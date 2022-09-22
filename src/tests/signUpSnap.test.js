import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';

test('SignUp snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <SignUp />
        ,
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
