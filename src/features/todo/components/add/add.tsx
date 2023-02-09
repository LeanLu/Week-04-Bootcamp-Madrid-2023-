import { SyntheticEvent, useContext } from "react";
import { AppContext } from "../../../../core/context/app.context";
import { ProtoTask } from "../../models/task";

export function Add() {
  // Al hacer esta llamada crea una instancia distinta de la llamada que se hace al mismo hook en Tasks:
  const { addTask } = useContext(AppContext);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const newTask = new ProtoTask(inputs[0].value, inputs[1].value);
    addTask(newTask);
  };

  return (
    <form className="add" onSubmit={handleSubmit}>
      <input type="text" placeholder="Describe la tarea" required />
      <input type="text" placeholder="Responsable de la tarea" />
      <button type="submit">Añadir</button>
    </form>
  );
}
