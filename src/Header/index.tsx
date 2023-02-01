import { useState } from "react";
import { AddTasks } from "./Modal";
import { HeaderPage, Title, ButtonHeader } from "./styled";

export function Header() {
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
