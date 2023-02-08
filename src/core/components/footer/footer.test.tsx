import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Given Footer component", () => {
  describe("When it is render", () => {
    test("Then, the text isdi coders should be in the document ", () => {
      render(<Footer></Footer>);
      const linkElement = screen.getByText(/isdi coders/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
