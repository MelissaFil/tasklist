import React from 'react';
import { Card, CardContent, Typography, IconButton, Checkbox } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Task = ({ task, onToggleComplete }) => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px' }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="caption">
          {task.completed ? (
            <span style={{ color: '#5CB85C' }}>Concluída ✔️</span>
          ) : (
            <span style={{ color: '#5BC0DE' }}>
              Concluir <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
            </span>
          )}
        </Typography>
      </CardContent>
      <IconButton>
        <MoreVert />
      </IconButton>
    </Card>
  );
};

export default Task;
