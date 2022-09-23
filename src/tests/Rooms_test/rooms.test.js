import React from "react";
import renderer from "react-test-renderer";
import wrapper from "../wrapMeInValidComponents";
import Rooms from "../../components/Rooms/Rooms";

test("Rooms show render the same", () => {
  const jsonRep = renderer.create(wrapper(<Rooms />)).toJSON();
  expect(jsonRep).toMatchSnapshot();
});
