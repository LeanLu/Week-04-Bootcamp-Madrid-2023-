import { TaskApiRepo } from "../services/repository/task.api.repo";
import { useTasks } from "./use.tasks";

// Para load que llama a una función para cargar el repo.
// Habría que hacer un mock del repo.
// Este a su vez es una Class, con lo cual, habría que generar el ProtoType.
// Se utiliza el "prototype" porque es la función madre a la que acceden todos.

// Ex.: para hacer un mock prototype de la llamada a la function getTask:
// TaskApiRepo.prototype.getTask = jest.fn();
// TaskApiRepo.prototype.loadTasks = jest.fn();
// TaskApiRepo.prototype.createTask = jest.fn();
// ETC.

const mockRepo = {
  getTask: jest.fn(),
  loadTasks: jest.fn(),
  createTask: jest.fn(),
  // ETC.
} as unknown as TaskApiRepo;

// Se hace un mock de un componente de prueba.
const TestComponent = function () {
  const { tasks, load, addTask, deleteTask, updateTask } = useTasks(mockRepo);

  // Generamos button que llamen a las distintas funciones.
  return (
    <>
      <button onClick={() => load()}></button>
    </>
  );
};

describe("Given Card component", () => {
  describe("Whenit is rendered", () => {
    test("Then task name should be in the document", () => {
      // expect(elements[0]).toBeInTheDocument();
    });
  });
});
