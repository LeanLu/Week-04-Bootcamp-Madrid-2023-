/* eslint-disable testing-library/no-render-in-setup */

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact2 } from "./contact2";

// GIVEN --> ARRANGE    // Preparar el entorno
// WHEN --> ACT
// THEN --> ASSERT

describe("Given Contact2 component", () => {
  // Generamos un mock de la consola para hacer el Test del button Submit
  const spyLog = jest.spyOn(console, "log");

  let elements: HTMLElement[];

  beforeEach(() => {
    // Primero renderizamos el componente:
    render(<Contact2></Contact2>);
    // Tomamos los elements que queremos a través de ".screen" con el Find, Get o Query
    // Los colocamos en un Array para utilizarlos en los distintos test
    elements = [
      screen.getByRole("heading"),
      ...screen.getAllByRole("textbox"),
      ...screen.getAllByRole("radio"),
      screen.getByRole("checkbox"),
      screen.getByRole("combobox"),
      screen.getByRole("button"),
    ];
  });

  describe("When it is render", () => {
    test("Then, it should be in the document", () => {
      expect(elements[0]).toBeInTheDocument();
      expect(elements.length).toBe(9);
    });
  });

  describe("When the user fills in the form", () => {
    test("Then, the text should be in the screen", () => {
      const mockText = "Pepe";

      userEvent.type(elements[1], mockText);
      expect(elements[1]).toHaveValue(mockText);

      // Para el checkbox verificamos que solo se haga click y haya sido checked.
      userEvent.click(elements[6]);
      expect(elements[6]).toBeChecked();
    });
  });

  describe("When the user click on the submit button", () => {
    test("Then, data should be in the browser console", () => {
      fireEvent.click(elements[8]);

      // Utilizamos el mock de la consola para ver que haya sido llamada a través de un spyOn().
      // Está definido como variable general arriba.
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
