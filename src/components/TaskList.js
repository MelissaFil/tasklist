import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardContent} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';
import AddTaskModal from './AddTaskModal';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

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

  const handleEditTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTaskToEdit(null);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleOpenModalForEdit = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button variant="contained" 
      color="primary" 
      onClick={() => setIsModalOpen(true)}>
        Adicionar tarefa
      </Button>
      <Grid container spacing={2} marginTop={2}>
        {tasks.map(task => (
          <Grid item xs={12} sm={6} key={task.id}>
            <Task task={task} 
            onToggleComplete={handleToggleComplete} 
            onDeleteTask={deleteTask} 
            onEditTask={handleOpenModalForEdit} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <Card onClick={() => setIsModalOpen(true)} 
          className='task-card-add'>
            <CardContent>
              <AddIcon fontSize="large" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <AddTaskModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
        taskToEdit={taskToEdit}
      />
    </div>
  );
};

export default TaskList;
