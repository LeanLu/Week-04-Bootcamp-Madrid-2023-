import { useContext, useEffect } from "react";
import { Add } from "../add/add";
import { Card } from "../card/card";
import "./tasks.scss";
import { TaskStructure } from "../../models/task";
import { AppContext } from "../../../../core/context/app.context";
// Si trabajamos con MOCK: import { TASKS } from "../../mocks/tasks";

export function Tasks({ tasksOther }: { tasksOther: TaskStructure[] }) {
  const { tasks, load } = useContext(AppContext); // Custom Hook

  // tasks --> Del server local
  // tasksOther --> Del Mock

  useEffect(() => {
    load();
  }, [load]);
  // Se tiene un Array de dependencia vacío para que se ejecute una primera vez.

  return (
    <>
      <section className="tasks">
        <Add></Add>
        <p>Tasks</p>
        <ul>
          {tasks.map((item) => (
            <Card task={item}></Card>
          ))}
        </ul>
      </section>
    </>
  );
}
