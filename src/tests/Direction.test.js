import { render, unmountComponentAtNode } from "react-dom";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

it("Verifies the direction label", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  render(
    <MemoryRouter initialEntries={["/direction"]}>
      <App />
    </MemoryRouter>,
    root
  );
  expect(screen.getByTestId("direction-label")).toHaveTextContent("Direction:");
});

test("Verifies direction select renders", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  render(
    <MemoryRouter initialEntries={["/direction"]}>
      <App />
    </MemoryRouter>,
    root
  );
  expect(document.querySelector("#formGroupDirection")).toBeTruthy();
});
