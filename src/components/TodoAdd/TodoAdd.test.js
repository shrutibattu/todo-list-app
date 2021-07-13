import React from "react";
import { render } from "@testing-library/react";
import TodoAdd from "./TodoAdd";

describe("TodoAdd tests", () => {
  it("should render", () => {
    expect(render(<TodoAdd />)).toBeTruthy();
  });
});
