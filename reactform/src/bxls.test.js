import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxLs from "./bxls";

// Helper function to add a box
function addBox(BoxLs, height = "2", width = "2", color = "peachpuff") {
  const heightInput = BoxLs.getByLabelText("Height");
  const widthInput = BoxLs.getByLabelText("Width");
  const backgroundInput = BoxLs.getByLabelText("Background Color");

  fireEvent.change(heightInput, { target: { value: height } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(backgroundInput, { target: { value: color } });

  const addButton = BoxLs.getByText("Add a new box!");
  fireEvent.click(addButton);
}

// Test to check if the component renders without crashing
it("renders without crashing", function() {
  render(<BoxLs />);
});

// Test to match the snapshot
it("matches snapshot", function() {
  const { asFragment } = render(<BoxLs />);
  expect(asFragment()).toMatchSnapshot();
});

// Test to check if a new box can be added
it("can add a new box", function() {
  const BoxLs = render(<BoxLs />);

  // Ensure no boxes are present initially
  expect(BoxLs.queryByText("Remove The Box!")).not.toBeInTheDocument();

  // Add a box
  addBox(BoxLs);

  // Ensure the box is added
  const removeButton = BoxLs.getByText("Remove The Box!");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 2em;
    height: 2em;
    background-color: peachpuff;
  `);

  // Ensure the form is reset
  expect(BoxLs.getAllByDisplayValue("")).toHaveLength(3);

  // Uncomment the below line if you want to match the snapshot after adding a box
  // expect(BoxLs.asFragment()).toMatchSnapshot();
});

// Test to check if a box can be removed
it("can remove a box", function() {
  const BoxLs = render(<BoxLs />);

  // Add a box
  addBox(BoxLs);

  // Remove the box
  const removeButton = BoxLs.getByText("Remove The Box!");
  fireEvent.click(removeButton);

  // Ensure the box is removed
  expect(removeButton).not.toBeInTheDocument();
});
