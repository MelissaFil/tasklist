import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { lightTheme, darkTheme } from './themes';
import { AuthProvider } from './Auth';
import ProtectedRoute from './ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <div className="container mt-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <TaskList />
                    <ToastContainer />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
