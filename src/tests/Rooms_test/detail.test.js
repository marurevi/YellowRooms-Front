import React from 'react';
import renderer from 'react-test-renderer';
import wrapper from '../wrapMeInValidComponents';
import Detail from '../../components/Detail/Detail';

test('Rooms show render the same', () => {
  const jsonRep = renderer.create(wrapper(<Detail />)).toJSON();
  expect(jsonRep).toMatchSnapshot();
});
