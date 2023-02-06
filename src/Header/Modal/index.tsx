import { FormEvent, useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  Stack,
} from "@mui/material";

import { TasksContext } from "../../TasksContext";

import { ButtonModal, ContentModal } from "./styled";

interface AddTasksProps {
  open: boolean;
  onClose: () => void;
}

export function AddTasks({ open, onClose }: AddTasksProps) {
  const { createTasks } = useContext(TasksContext);

  const [tasks, setTasks] = useState("");
  const [description, setDescription] = useState("");
  const [erro, setErro] = useState(false);

  const msgerro = "Este campo é obrigadorio!";

  async function handleCreateNewTasks(event: FormEvent) {
    event.preventDefault();

    if (description.length <= 0) {
      setErro(true);
      return;
    }

    await createTasks({
      tasks,
      description,
    });

    setTasks("");
    setDescription("");
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Adicionar Tarefa</DialogTitle>
      <form onSubmit={handleCreateNewTasks}>
        <ContentModal>
          <Stack spacing={2}>
            <TextField
              variant="outlined"
              label="Qual é sua tarefa?"
              autoComplete="off"
              error={erro}
              helperText={erro ? msgerro : ""}
              value={tasks}
              onChange={(event) => {
                setErro(false);
                setTasks(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              label="descrição"
              autoComplete="off"
              error={erro}
              helperText={erro ? msgerro : ""}
              value={description}
              onChange={(event) => {
                setErro(false);
                setDescription(event.target.value);
              }}
            />
          </Stack>
        </ContentModal>
        <DialogActions>
          <ButtonModal type="reset" onClick={onClose}>
            Cancelar
          </ButtonModal>
          <ButtonModal type="submit">Adicionar</ButtonModal>
        </DialogActions>
      </form>
    </Dialog>
  );
}
