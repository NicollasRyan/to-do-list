import { useContext, useEffect, useState } from "react";
import { Card, CardActions, CardContent } from "@mui/material";

import { api } from "../services/api";

import { ButtonCard, ContainerCard, Description, TitleCard } from "./styled";
import { TasksContext } from "../../TasksContext";

export function Task() {
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
