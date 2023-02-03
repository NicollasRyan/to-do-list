import { useContext } from "react";
import { Card, CardActions, CardContent } from "@mui/material";

import { ButtonCard, Description, TitleCard } from "./styled";
import { TasksContext } from "../../TasksContext";

export function Task() {
  const tasks = useContext(TasksContext);

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
