import { useContext, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  BoxButtons,
  ButtonCard,
  ContainerAccordion,
  Description,
  TitleCard,
} from "./styled";
import { TasksContext, TasksProps } from "../../TasksContext";
import { TextAlternative } from "../TextAlternative";

type Props = {
  task: TasksProps;
};

export function CardTask({ task }: Props) {
  const { taskss, setTasks } = useContext(TasksContext);
  const [isChecked, SetIsChecked] = useState(task.done);

  const removeElement = (id: number) => {
    const newCard = taskss.filter((task) => task.id !== id);

    setTasks(newCard);
  };

  return (
    <Accordion key={task.id}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <TitleCard done={isChecked}>{task.tasks}</TitleCard>
      </AccordionSummary>
      <ContainerAccordion>
        <Description done={isChecked}>{task.description}</Description>
        <BoxButtons>
          <Checkbox
            checked={isChecked}
            onChange={(e) => SetIsChecked(e.target.checked)}
          />
          <ButtonCard onClick={() => removeElement(task.id)}>
            <DeleteIcon />
          </ButtonCard>
        </BoxButtons>
      </ContainerAccordion>
    </Accordion>
  );
}
