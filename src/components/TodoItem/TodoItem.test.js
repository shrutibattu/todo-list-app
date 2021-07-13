import React from "react";
import { render } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem tests", () => {
  it("should render", () => {
    expect(render(<TodoItem />)).toBeTruthy();
  });
});
