import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Checkbox, useTheme, Popover, List, ListItem, ListItemButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import './Task.css';

const Task = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  const theme = useTheme();
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleEditTask = () => {
    onEditTask(task);
  
  };

  const openPopover = Boolean(popoverAnchorEl);

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
      <IconButton onClick={handlePopoverOpen}>
        <MoreVert />
      </IconButton>
      <Popover
        open={openPopover}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleEditTask}>
              Editar
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDeleteTask}>
              Excluir
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </Card>
  );
};

export default Task;
