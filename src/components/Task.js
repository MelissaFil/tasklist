import React from 'react';
import { Card, CardContent, Typography, IconButton, Checkbox, useTheme } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import './Task.css';

const Task = ({ task, onToggleComplete }) => {
  const theme = useTheme();

  return (
    <Card className="task-card">
      <CardContent className="task-content">
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="caption">
          {task.completed ? (
            <span style={{ color: theme.palette.success.main }}>
              Concluída <Checkbox checked={true} disabled />
            </span>
          ) : (
            <span style={{ color: theme.palette.info.main }}>
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
