import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ConfirmationModal = ({ open, onClose, onConfirm, taskName }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          p: 4,
          boxShadow: 24,
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" component="h2" mb={2}>
          Tem certeza que deseja excluir "{taskName}" ?
        </Typography>
        <Box mt={2} width="100%" display="flex" justifyContent="space-around">
          <Button variant="contained" color="primary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="danger" onClick={onConfirm}>
            Confirmar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
