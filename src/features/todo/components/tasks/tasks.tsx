import { useTasks } from "../../hooks/use.tasks";
import { useEffect } from "react";
import { Add } from "../add/add";
import { Card } from "../card/card";
import "./tasks.scss";
// Si trabajamos con MOCK: import { TASKS } from "../../mocks/tasks";

export function Tasks() {
  const { tasks, load, addTask, updateTask, deleteTask } = useTasks();

  useEffect(() => {
    load();
  }, [load]);
  // Se tiene un Array de dependencia vacío para que se ejecute una primera vez.

  return (
    <>
      <section className="tasks">
        <Add addTask={addTask}></Add>
        <p>Tasks</p>
        <ul>
          {tasks.map((item) => (
            <Card
              task={item}
              deleteTask={deleteTask}
              updateTask={updateTask}
            ></Card>
          ))}
        </ul>
      </section>
    </>
  );
}
