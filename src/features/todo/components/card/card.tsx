import { TaskStructure } from "../../models/task";
import "./card.scss";

type CardProps = {
  task: TaskStructure;
  updateTask: (task: TaskStructure) => void; // () => {} Tipado de una función. Después lo completo con lo necesario.
  deleteTask: (id: TaskStructure["id"]) => void;
};

export function Card({ task, deleteTask, updateTask }: CardProps) {
  return (
    <li className="card">
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => {
            task.isCompleted = !task.isCompleted;
            updateTask(task);
          }}
        />
        <span title={task.id}>{task.name}</span>
      </label>
      <span>{task.owner}</span>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        🗑️
      </button>
    </li>
  );
}
