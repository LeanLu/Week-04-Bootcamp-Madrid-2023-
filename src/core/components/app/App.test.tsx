import { render } from "@testing-library/react";
import App from "./App";
import { Header } from "../header/header";
import { AppRouter } from "../app.router/app.router";
import { Footer } from "../footer/footer";
// En caso que utilicemos el Router:
// import { MemoryRouter as Router } from "react-router-dom";
// En caso que utilicemos Menu: import { Menu } from "../menu/menu";

jest.mock("../header/header");
jest.mock("../app.router/app.router");
jest.mock("../footer/footer");
// No lo podemos hacer con Menu porque es hijo de Header.
// jest.mock("../menu/menu");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Header, AppRouter and Footer components", () => {
      render(<App />);

      expect(Header).toHaveBeenCalled();
      expect(AppRouter).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
      // No podemos llamar a Menu porque es hijo de Header
      // expect(Menu).toHaveBeenCalled();
    });
  });
});
