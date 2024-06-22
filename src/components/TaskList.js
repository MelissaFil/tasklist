import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CardContent, ToggleButton, ToggleButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';
import AddTaskModal from './AddTaskModal';
import ConfirmationModal from './ConfirmationModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

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
    toast.success('Tarefa adicionada com sucesso!');
  };

  const handleEditTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTaskToEdit(null);
    toast.success('Tarefa editada com sucesso!');
  };

  const handleOpenModalForEdit = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setConfirmationModalOpen(false);
    toast.error('Tarefa excluída!');
  };


  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'uncompleted') {
      return !task.completed;
    } else {
      return true; 
    }
  });

  return (
    <div>
     
      <Grid container justifyContent="space-between">
        <Grid item>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(event, newFilter) => setFilter(newFilter)}
            aria-label="Filtro de Tarefas"
            style={{ marginBottom: '10px' }}
          >
            <ToggleButton value="all" aria-label="Todas as Tarefas">
              Todas
            </ToggleButton>
            <ToggleButton value="completed" aria-label="Tarefas Concluídas">
              Concluídas
            </ToggleButton>
            <ToggleButton value="uncompleted" aria-label="Tarefas Não Concluídas">
              Não Concluídas
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsModalOpen(true)}
            style={{ marginBottom: '10px' }}
          >
            Adicionar tarefa
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={2}>
        {filteredTasks.map(task => (
          <Grid item xs={12} md={6} key={task.id}>
            <Task
              task={task}
              onToggleComplete={handleToggleComplete}
              onDeleteTask={() => {
                setTaskToDelete(task);
                setConfirmationModalOpen(true);
              }}
              onEditTask={handleOpenModalForEdit}
            />
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <Card onClick={() => setIsModalOpen(true)} className='task-card-add'>
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
      <ConfirmationModal
        open={confirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        onConfirm={handleDeleteTask}
        taskName={taskToDelete ? taskToDelete.title : ''}
      />
    </div>
  );
};

export default TaskList;
