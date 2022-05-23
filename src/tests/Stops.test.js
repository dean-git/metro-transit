import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

it("Verifies the card list group", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  render(
    <MemoryRouter initialEntries={["/direction/stops"]}>
      <App />
    </MemoryRouter>,
    root
  );
  expect(document.querySelector(".card-header")).toHaveTextContent("Stops");
});
