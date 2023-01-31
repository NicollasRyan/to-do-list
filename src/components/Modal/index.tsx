import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import { useState } from "react";

interface AddTasksProps {
  open: boolean;
  onClose: () => void;
}

export function AddTasks({ open, onClose }: AddTasksProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Adicionar Tarefa</DialogTitle>
      <DialogContent>
        <input type="text" />
        <input type="text" />
      </DialogContent>
      <DialogActions>
        <button onClick={onClose}>fecha</button>
      </DialogActions>
    </Dialog>
  );
}
