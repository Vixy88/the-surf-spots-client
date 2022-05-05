import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/90's TV shows/i);
  expect(linkElement).toBeInTheDocument();
});
