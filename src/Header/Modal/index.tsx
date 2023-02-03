import { FormEvent, useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  Stack,
} from "@mui/material";

import { api } from "../../components/services/api";
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

  async function handleCreateNewTasks(event: FormEvent) {
    event.preventDefault();

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
              value={tasks}
              onChange={(event) => setTasks(event.target.value)}
            />
            <TextField
              variant="outlined"
              label="descrição"
              autoComplete="off"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Stack>
        </ContentModal>
        <DialogActions>
          <ButtonModal onClick={onClose}>Cancelar</ButtonModal>
          <ButtonModal type="submit">Adicionar</ButtonModal>
        </DialogActions>
      </form>
    </Dialog>
  );
}
