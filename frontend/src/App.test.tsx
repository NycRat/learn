import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders app title: LEARN", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText(/LEARN/);
  expect(linkElement).toBeInTheDocument();
});
