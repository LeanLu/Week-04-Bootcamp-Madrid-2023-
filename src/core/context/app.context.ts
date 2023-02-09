import { createContext } from "react";
import { useTaskTypeStructure } from "../../features/todo/hooks/use.tasks";

// Valor inicial del Context:
export const AppContext = createContext({} as useTaskTypeStructure);
