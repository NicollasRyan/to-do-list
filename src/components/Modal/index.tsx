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

import { ButtonModal, ContentModal } from "./styled";

interface AddTasksProps {
  open: boolean;
  onClose: () => void;
}

export function AddTasks({ open, onClose }: AddTasksProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Adicionar Tarefa</DialogTitle>
      <ContentModal>
        <Stack spacing={2}>
          <TextField variant="outlined" label="Qual é sua tarefa?" />
          <TextField variant="outlined" label="descrição" />
        </Stack>
      </ContentModal>
      <DialogActions>
        <ButtonModal onClick={onClose}>Cancelar</ButtonModal>
        <ButtonModal onClick={onClose}>Adicionar</ButtonModal>
      </DialogActions>
    </Dialog>
  );
}
