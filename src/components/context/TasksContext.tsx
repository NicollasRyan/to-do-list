import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export interface TasksProps {
  id: number;
  tasks: string;
  description: string;
  done: boolean;
}

interface TasksInput {
  tasks: string;
  description: string;
}

interface TasksContextData {
  taskss: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
  createTasks: (taskss: TasksInput) => Promise<void>;
}

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TasksProvider({ children }: TasksProviderProps) {
  const [taskss, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data.tasks));
  }, []);

  async function createTasks(tasksInput: TasksInput) {
    const response = await api.post("tasks", tasksInput);
    const { tasks } = response.data;

    setTasks([...taskss, tasks]);
  }

  return (
    <TasksContext.Provider value={{ taskss, createTasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
