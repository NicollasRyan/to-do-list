import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./components/services/api";

interface TasksProps {
  id: number;
  tasks: string;
  description: string;
}

interface TasksInput {
  tasks: string;
  description: string;
}

interface TasksContextData {
  tasks: TasksProps[];
  createTasks: (tasks: TasksInput) => void;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data.tasks));
  }, []);

  function createTasks(tasks: TasksInput) {
    api.post("tasks", tasks);
  }

  return (
    <TasksContext.Provider value={{ tasks, createTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
