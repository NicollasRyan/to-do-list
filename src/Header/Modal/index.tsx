import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { api } from "../../components/services/api";

import { ButtonModal, ContentModal } from "./styled";

interface AddTasksProps {
  open: boolean;
  onClose: () => void;
}

export function AddTasks({ open, onClose }: AddTasksProps) {
  const [tasks, setTasks] = useState("");
  const [description, setDescription] = useState("");

  function handleCreateNewTasks(event: FormEvent) {
    event.preventDefault();
    const data = { tasks, description };
    api.post("tasks", data);
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
              value={tasks}
              onChange={(event) => setTasks(event.target.value)}
            />
            <TextField
              variant="outlined"
              label="descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Stack>
        </ContentModal>
        <DialogActions>
          <ButtonModal onClick={onClose}>Cancelar</ButtonModal>
          <ButtonModal type="submit" onClick={onClose}>
            Adicionar
          </ButtonModal>
        </DialogActions>
      </form>
    </Dialog>
  );
}
