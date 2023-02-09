import { useTasks } from "../../features/todo/hooks/use.tasks";
import { TaskApiRepo } from "../../features/todo/services/repository/task.api.repo";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  // Se llama solo una vez porque el Context solo se instancia una vez.
  // Inyección de dependencia desde el Context.
  // Facilita el test.
  const repo = new TaskApiRepo();

  // Creamos la variable context que es la devolución del Custom Hook:
  const contextValue = useTasks(repo);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
