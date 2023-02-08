import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { MenuOption } from "../app/App";
import { Menu } from "./menu";

describe("Given Menu component", () => {
  describe("When it is render", () => {
    test("Then, the Menu component should be in the screen", () => {
      const mockOptions: MenuOption[] = [
        {
          label: "test",
          path: "/test",
        },
      ];
      render(
        <Router>
          <Menu options={mockOptions}></Menu>
        </Router>
      );

      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
