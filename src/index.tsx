import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { theme } from 'theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
        <ToastContainer hideProgressBar />
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
