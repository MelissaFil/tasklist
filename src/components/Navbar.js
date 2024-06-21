import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import { Brightness4, Brightness7} from '@mui/icons-material';
import { Container } from 'react-bootstrap';
import { darkTheme } from '../themes';

const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: darkTheme.palette.primary.main }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            TaskList
          </Typography>
          
          <IconButton color="inherit" onClick={handleThemeChange}>
            {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Switch checked={isDarkTheme} onChange={handleThemeChange} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
