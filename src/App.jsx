/*
 * Copyright (C) 2018-2022 David C. Harrison. All right reserved.
 *
 * You may not use, distribute, publish, or modify this code without
 * the express written permission of the copyright holder.
 */

import './App.css';
import React from 'react';
// import {useState, useEffect, useCallback} from 'react';
import {
  Typography, CssBaseline, AppBar, Toolbar,
  Button, Box, Stack,
  // Typography, AppBar, Toolbar, CssBaseline,
  // Drawer, Box, Divider,
  // IconButton, Button,
  // ListItem, ListItemButton, ListItemIcon, ListItemText,
  // Table, TableBody, TableCell, TableContainer,
  // TableHead, TableRow, Paper,
} from '@mui/material/';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {deepPurple, pink} from '@mui/material/colors';
import image from './media/portrait.jpg';
// import MenuIcon from '@mui/icons-material/Menu';
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
// import ClearIcon from '@mui/icons-material/Clear';

const theme = createTheme({
  palette: {
    background: {
      default: '#555555',
    },
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: pink[200],
    },
    tertiary: {
      main: '#FFFFFF',
    },
    quaternary: {
      main: '#5C5C5C',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Montserrat',
      'merriweather',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
});

/**
 * Returns app component
 * @return {object}
 */
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar>
          <Toolbar>
            <Box sx={{ml: 1}}/>
            <Typography
              variant="h5" component="div" sx={{flexGrow: 1}}
            >William Santosa</Typography>
            <Button size="large" component="label" color="tertiary">
              Home
            </Button>
            <Button size="large" component="label" color="tertiary">
              About
            </Button>
            <Button size="large" component="label" color="tertiary">
              Experience
            </Button>
            <Button size="large" component="label" color="tertiary">
              Work
            </Button>
            <Button size="large" component="label" color="tertiary">
              Contact
            </Button>
            <Box sx={{mr: 1}}/>
          </Toolbar>
        </AppBar>
        <Toolbar/>
        <Stack spacing={4}>
          <Box sx={{
            mt: 4, ml: '1%',
            bgcolor: 'quaternary.main',
            padding: 3,
            width: '98%', height: '300px',
          }}
          >
            <Box sx={{ml: 5}}/>
            <Stack direction='row' spacing={4}>
              <img src={image} alt='Will Image'
                width='250' height='250'
                className='roundedImage'
              />
              <Stack spacing={2}>
                <Box/>
                <Typography variant='h4' color="tertiary.main">
                  Hey! I'm William Santosa.
                </Typography>
                <Typography variant='h5' color="tertiary.main">
                  I study computer science at the
                  University of California, Santa Cruz.
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Stack direction='row'>
            <Box sx={{
              ml: 4, mr: 4,
              bgcolor: 'quaternary.main',
              width: '70%', height: '300px',
            }} className='rounded'>
              <Typography>Hello</Typography>
            </Box>
            <Box sx={{
              ml: 4, mr: 4,
              bgcolor: 'quaternary.main',
              width: '20%', height: '300px',
            }} className='rounded'>
              <Typography>Hi</Typography>
            </Box>
          </Stack>
        </Stack>
      <Box sx={{mb: 10}}></Box>
      </ThemeProvider>
    </>
  );
}

export default App;
