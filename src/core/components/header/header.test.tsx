import { render, screen } from "@testing-library/react";
import { Header } from "./header";
describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then, the text learn react should be in the document", () => {
      render(
        <Header>
          <></>
        </Header>
      );

      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
