import { useEffect, useState } from "react";
import { Card, CardActions, CardContent } from "@mui/material";

import { api } from "../services/api";

import { ButtonCard, Description, TitleCard } from "./styled";

interface TasksProps {
  id: number;
  tasks: string;
  description: string;
}

export function Task() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data.tasks));
  }, []);

  return (
    <>
      {tasks.map((task) => {
        return (
          <Card key={task.id}>
            <CardContent>
              <TitleCard>{task.tasks}</TitleCard>
              <Description>{task.description}</Description>
            </CardContent>
            <CardActions>
              <ButtonCard>Ver mais</ButtonCard>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
