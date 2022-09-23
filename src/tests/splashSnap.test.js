import React from "react";
import renderer from "react-test-renderer";
import Splash from "../components/Splash/Splash";
import wrapper from "./wrapMeInValidComponents";
test("splash snapshot", () => {
  const tree = renderer.create(wrapper(<Splash />)).toJSON();

  expect(tree).toMatchSnapshot();
});
