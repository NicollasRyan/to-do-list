import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./components/services/api";

interface TasksProps {
  id: number;
  tasks: string;
  description: string;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<TasksProps[]>([]);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data.tasks));
  }, []);

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}
