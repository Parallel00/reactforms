import React from "react";
import { render } from "@testing-library/react";
import BxFrm from "./boxform";

it("renders without crashing", function() {
  render(<BxFrm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BxFrm />);
  expect(asFragment()).toMatchSnapshot();
});
