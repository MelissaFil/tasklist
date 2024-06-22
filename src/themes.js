import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3A9679',
    },
    secondary: {
      main: '#055A7A',
    },
    gray:{
      400:'#CED4DA',
      600:'#6C757D'
    },
    success:{
      main:'#5CB85C'
    },
    info:{
      main:'#5BC0DE'
    },
    danger:{
      main:'#D9534F'
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3A9679',
    },
    secondary: {
        main: '#055A7A',
      },
      gray:{
        400:'#CED4DA',
        600:'#6C757D'
      },
      success:{
        main:'#5CB85C'
      },
      info:{
        main:'#5BC0DE'
      }
  },
});
