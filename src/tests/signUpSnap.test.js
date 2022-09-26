import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../components/SignUp/SignUp';
import wrapper from './wrapMeInValidComponents';

test('SignUp snapshot', () => {
  const tree = renderer.create(wrapper(<SignUp />)).toJSON();

  expect(tree).toMatchSnapshot();
});
