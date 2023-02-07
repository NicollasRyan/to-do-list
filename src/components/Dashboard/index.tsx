import { useContext } from "react";
import { Container, Stack } from "@mui/material";

import { TasksContext } from "../../TasksContext";
import { CardTask } from "../CardTasks";
import { TextAlternative } from "../TextAlternative";

import { BoxList } from "./styled";

export function Dashboard() {
  const { taskss } = useContext(TasksContext);

  return (
    <Container>
      <BoxList>
        <Stack spacing={2}>
          {taskss.length === 0 && <TextAlternative />}
          {taskss.length > 0 &&
            taskss.map((task) => {
              return <CardTask task={task} />;
            })}
        </Stack>
      </BoxList>
    </Container>
  );
}
