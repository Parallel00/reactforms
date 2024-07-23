import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./todo";

// Test to check if the component renders without crashing
it("renders without crashing", function() {
  render(<Todo />);
});

// Test to match the initial snapshot
it("matches initial snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

// Test to match the snapshot when in editing mode
it("matches snapshot when in editing mode", function() {
  const { asFragment, getByText } = render(<Todo />);
  fireEvent.click(getByText("Edit"));
  expect(asFragment()).toMatchSnapshot();
});

// Test to check if the update function is called on form submission
it("calls the update function on form submission", function() {
  const updateMock = jest.fn();
  const { getByText, getByLabelText } = render(<Todo update={updateMock} />);
  
  fireEvent.click(getByText("Edit"));

  const input = getByLabelText("New Todo:");
  fireEvent.change(input, { target: { value: "Updated Todo" } });
  fireEvent.click(getByText("Update!"));

  expect(updateMock).toHaveBeenCalled();
  expect(updateMock).toHaveBeenCalledWith(expect.any(String), "Updated Todo");
});

// Test to check if the delete function is called on button click
it("calls the delete function on button click", function() {
  const removeMock = jest.fn();
  const { getByText } = render(<Todo remove={removeMock} />);
  
  fireEvent.click(getByText("X"));

  expect(removeMock).toHaveBeenCalled();
});

