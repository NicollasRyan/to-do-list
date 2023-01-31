import { Container } from "@mui/material";
import { useState } from "react";
import { AddTasks } from "./components/Modal";

import { BoxList, ButtonHeader, Header, Title } from "./styles/app";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header>
        <Title>To-do List</Title>

        <ButtonHeader onClick={handleOpen}>Adicionar Tarefa</ButtonHeader>
        <AddTasks open={open} onClose={handleClose} />
      </Header>
      <Container>
        <BoxList></BoxList>
      </Container>
    </>
  );
}

export default App;
