import { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  ButtonCard,
  ContainerAccordion,
  Description,
  TitleCard,
} from "./styled";
import { TasksContext } from "../../TasksContext";

export function CardTask() {
  const { taskss, setTasks } = useContext(TasksContext);

  const removeElement = (id: number) => {
    const newCard = taskss.filter((task) => task.id !== id);

    setTasks(newCard);
  };

  return (
    <>
      {taskss.map((task) => {
        return (
          <Accordion key={task.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <TitleCard>{task.tasks}</TitleCard>
            </AccordionSummary>
            <ContainerAccordion>
              <Description>{task.description}</Description>
              <ButtonCard onClick={() => removeElement(task.id)}>
                <DeleteIcon />
              </ButtonCard>
            </ContainerAccordion>
          </Accordion>
        );
      })}
    </>
  );
}
