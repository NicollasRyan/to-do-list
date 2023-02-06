import { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Description, TitleCard } from "./styled";
import { TasksContext } from "../../TasksContext";

export function CardTask() {
  const { taskss } = useContext(TasksContext);

  return (
    <>
      {taskss.map((task) => {
        return (
          <Accordion key={task.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <TitleCard>{task.tasks}</TitleCard>
            </AccordionSummary>
            <AccordionDetails>
              <Description>{task.description}</Description>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
