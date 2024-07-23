import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewForm from "./todoForm";

it("renders without crashing", function() {
  render(<NewForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function() {
  const createMock = jest.fn();
  const { getByText } = render(<NewForm createTask={createMock} />);
  const createButton = getByText("Add a todo!");
  fireEvent.click(createButton);
  expect(createMock).toHaveBeenCalled();
});
