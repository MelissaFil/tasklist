import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const AddTaskModal = ({ open, onClose, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (title && description) {
      onAddTask({ id: Date.now(), title, description, completed: false });
      setTitle('');
      setDescription('');
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, boxShadow: 24, borderRadius: 1 }}>
        <Typography variant="h6" component="h2" mb={2}>
          Adicionar tarefa
        </Typography>
        <TextField fullWidth label="Título" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} margin="normal" />
        <TextField fullWidth label="Descrição" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} margin="normal" />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" onClick={onClose} style={{ marginRight: 8 }}>
            Fechar
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Adicionar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTaskModal;
