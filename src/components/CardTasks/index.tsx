import { useContext } from "react";
import { CardContent } from "@mui/material";

import { ContainerCard, Description, TitleCard } from "./styled";
import { TasksContext } from "../../TasksContext";

export function CardTask() {
  const { taskss } = useContext(TasksContext);

  return (
    <>
      {taskss.map((task) => {
        return (
          <ContainerCard key={task.id}>
            <CardContent>
              <TitleCard>{task.tasks}</TitleCard>
              <Description>{task.description}</Description>
            </CardContent>
            {/* <CardActions>
              <ButtonCard>Ver mais</ButtonCard>
            </CardActions> */}
          </ContainerCard>
        );
      })}
    </>
  );
}
