/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../../../core/context/app.context";
import { useTaskTypeStructure } from "../../hooks/use.tasks";
import { TaskStructure } from "../../models/task";
import { Card } from "./card";
import userEvent from "@testing-library/user-event";

const mockTasks: TaskStructure = {
  name: "Test task",
} as TaskStructure;
// A veces puede dejarse vacío porque en Card puedo testear siendo undefined las propiedades.
// En algunos casos necesito darle un valor a alguna propiedad.
// O si es un object y necesitamos entrar dentro.

// Creamos un mock agregando solo los parámetros que necesitamos en Card:
const mockContext = {
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
} as unknown as useTaskTypeStructure;
// Se le coloca el "as" para engañar al mockContext.
// El "unknown" es para las propiedades que no están definidas.
// Pero que tenga el formato useTaskTypeStructure.
// De esta manera en el render puedo darle el mockContext sin que se queje.

describe("Given Card component", () => {
  describe("Whenit is rendered", () => {
    let elements: HTMLElement[];

    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <Card task={mockTasks}></Card>;
        </AppContext.Provider>
      );

      elements = [
        screen.getByText(mockTasks.name),
        screen.getByRole("checkbox"),
        screen.getByRole("button"),
      ];
    });

    // Cada test debería tener su Describe:

    test("Then task name should be in the document", () => {
      expect(elements[0]).toBeInTheDocument();
    });

    test("Then if user click delete button , deleteTask should be called", () => {
      expect(elements[2]).toBeInTheDocument();
      userEvent.click(elements[2]);
      expect(mockContext.deleteTask).toHaveBeenCalled();
    });

    test("Then if user click the checkbox, updateTask should be called", () => {
      expect(elements[1]).toBeInTheDocument();
      userEvent.click(elements[1]);
      expect(mockContext.updateTask).toHaveBeenCalled();
    });
  });
});
