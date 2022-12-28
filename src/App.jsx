/*
 * Copyright (C) 2018-2022 David C. Harrison. All right reserved.
 *
 * You may not use, distribute, publish, or modify this code without
 * the express written permission of the copyright holder.
 */

import React from 'react';
import './App.css';
import Bar from './components/Bar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
// import {useState, useEffect, useCallback} from 'react';
import {CssBaseline, Box, Stack} from '@mui/material/';
import {ThemeProvider, createTheme} from '@mui/material/styles';
// import {deepPurple, pink} from '@mui/material/colors';
import homeImage from './media/home.jpg';
// import MenuIcon from '@mui/icons-material/Menu';
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
// import ClearIcon from '@mui/icons-material/Clear';

const theme = createTheme({
  palette: {
    background: {
      default: '#ACA2C4',
    },
    primary: {
      main: '#FE99A1',
    },
    secondary: {
      main: '#FE99A1',
    },
    tertiary: {
      main: '#FFFFFF',
    },
    quaternary: {
      main: '#9A91AF',
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

const styles = {
  paperContainer: {
    backgroundImage: `url(${homeImage})`,
    backgroundRepeat: 'no-repeat',
  },
};

/**
 * Returns app component
 * @return {object}
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Bar/>
      <Box
        sx={{mt: 0.5, background: '#EDBEA4', height: '100vh', width: '100%'}}
        style={styles.paperContainer}
      >
        <Home/>
      </Box>
      <Box/>
      <Stack
        spacing={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Box sx={{
          mt: 4, ml: '1%',
          padding: '20px',
          width: '70%',
        }}
          id="about"
        >
          <Box sx={{ml: 5}}/>
          <AboutMe/>
        </Box>
        <Box
          sx={{
            mt: 0.5, background: '#EDBEA4', width: '100%', padding: '20px',
          }}
          id="experience"
        >
          <Experience/>
        </Box>
        <Box
          sx={{
            width: '100%', padding: '20px',
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
          id="projects"
        >
          <Projects/>
        </Box>
      </Stack>
      <Box
        sx={{
          mt: 0.5, width: '100%', padding: '20px',
          background: '#808080',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        id="contact"
      >
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
