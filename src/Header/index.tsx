import { useContext, useState } from "react";
import { TasksContext } from "../TasksContext";
import { AddTasks } from "./Modal";
import { HeaderPage, Title, ButtonHeader } from "./styled";

export function Header() {
  const data = useContext(TasksContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HeaderPage>
      <Title>To-do List</Title>

      <ButtonHeader onClick={handleOpen}>Adicionar Tarefa</ButtonHeader>
      <AddTasks open={open} onClose={handleClose} />
    </HeaderPage>
  );
}
