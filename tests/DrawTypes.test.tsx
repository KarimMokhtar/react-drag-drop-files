import React from "react";
import { render, screen } from "@testing-library/react";
import DrawTypes from "../src/DrawTypes";

describe("drawing types of the required file", () => {
  test("Rendering nothing when there are no types provided", () => {
    const { container } = render(<DrawTypes />);
    expect(container.childElementCount).toEqual(0);
   
  });

});
