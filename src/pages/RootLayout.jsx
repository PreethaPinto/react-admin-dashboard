import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';

const RootLayout = () => {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar setMode={setMode} mode={mode} />
          <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
