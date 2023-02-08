import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { MenuOption } from "../app/App";
import { AppRouter } from "./app.router";

describe("Given AppRouter component", () => {
  describe("When it is render", () => {
    const mockOptions: MenuOption[] = [
      {
        label: "Home",
        path: "/home",
      },
      {
        label: "1",
        path: "/1",
      },
      {
        label: "2",
        path: "/2",
      },
    ];

    render(
      <Router initialEntries={["/home", "/otra"]} initialIndex={0}>
        <AppRouter menuOptions={mockOptions}></AppRouter>
      </Router>
    );

    test("Then, the AppRouter component should be in the screen", async () => {
      const element = await screen.findByRole("heading", { name: "Home Page" });
      // Utilizamos el role heading, pero como puede haber varios, utilizamos el name también para identificarlo.
      // El name en este caso es lo que contenga el h2.
      // NO es lo mismo que el name de form.
      expect(element).toBeInTheDocument();
    });
  });
});
