import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';
import AddTaskModal from './AddTaskModal';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Carregar tarefas do local storage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
        Adicionar tarefa
      </Button>
      <Grid container spacing={2} marginTop={2}>
        {tasks.map(task => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Task task={task} onToggleComplete={handleToggleComplete} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <Card onClick={() => setIsModalOpen(true)} className='task-card-add'>
            <CardContent>
              <AddIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <AddTaskModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onAddTask={handleAddTask} />
    </div>
  );
};

export default TaskList;
