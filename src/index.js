import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const font = "'Josefin Sans', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  }
 
});


ReactDOM.render(
  <>
  <BrowserRouter>

  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
