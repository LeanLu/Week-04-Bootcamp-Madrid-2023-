import { useEffect, useState } from "react";
import { Tasks } from "../components/tasks/tasks";
import { TASKS } from "../mocks/tasks";
import { TaskStructure } from "../models/task";

export default function TodoPage() {
  const initialT: TaskStructure[] = [];

  const [t, setT] = useState(initialT);

  // Admitiendo asincronías:
  useEffect(() => {
    setT(TASKS);
  }, []);

  return (
    <>
      <h2>Todo Page</h2>
      <Tasks tasksOther={t}></Tasks>
    </>
  );
}
