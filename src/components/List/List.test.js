import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List tests", () => {
  it("should render", () => {
    expect(render(<List />)).toBeTruthy();
  });
});
