import React from 'react';
import './App.css';
import Bar from './components/Bar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import {CssBaseline, Box, Stack} from '@mui/material/';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import homeImage from './media/home.jpg';

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
        sx={{mt: 0.5, background: '#EDBEA4', height: '100vh', width: '100vw'}}
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
          mt: 4,
          padding: '20px',
          width: '100vw',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        id="about"
        >
          <AboutMe/>
        </Box>
        <Box
          sx={{
            mt: 0.5, background: '#EDBEA4', width: '100vw', padding: '20px',
          }}
          id="experience"
        >
          <Experience/>
        </Box>
        <Box
          sx={{
            width: '100vw', padding: '20px',
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
          mt: 0.5, width: '100vw', padding: '20px',
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
