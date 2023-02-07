import { useCallback, useEffect, useMemo, useState } from "react";
// Si trabajamos con MOCK: import { TASKS } from "../../mocks/tasks";
import { ProtoTaskStructure, TaskStructure } from "../../models/task";
import { TaskApiRepo } from "../../services/repository/task.api.repo";
import { Add } from "../add/add";
import { Card } from "../card/card";
import "./tasks.scss";

export function Tasks() {
  const repo = useMemo(() => new TaskApiRepo(), []);

  const initialState: TaskStructure[] = [];

  const [tasks, setTasks] = useState(initialState);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const load = useCallback(async () => {
    try {
      // Si tomo los datos de una API:
      const tasks = await repo.loadTasks();
      setTasks(tasks);
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  // Si trabajo con repo local
  // const incomingTasks = TASKS;
  // setTasks(incomingTasks); //setTask actualiza el State como antes hacía render('afterbegin');

  const updateTask = async (task: TaskStructure) => {
    try {
      const finalTask = await repo.update(task);
      setTasks(tasks.map((item) => (item.id === task.id ? finalTask : item)));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const deleteTask = async (id: TaskStructure["id"]) => {
    try {
      await repo.delete(id);
      setTasks(tasks.filter((item) => item.id !== id));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const addTask = async (task: ProtoTaskStructure) => {
    try {
      const finalTask = await repo.createTask(task);
      setTasks([...tasks, finalTask]);
    } catch (error) {
      handlerError(error as Error);
    }
  };

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
