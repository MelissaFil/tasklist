import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useAuth } from '../Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(credentials.username, credentials.password)) {
      navigate('/');
    } else {
      toast.error('Credenciais erradas');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Usuário"
        name='username'
        fullWidth
        margin="normal"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <TextField
        label="Senha"
        name='password'
        type="password"
        fullWidth
        margin="normal"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <Button type='submit' variant="contained" color="primary" onClick={handleLogin}>
        Entrar
      </Button>
    </Container>
  );
};

export default Login;
