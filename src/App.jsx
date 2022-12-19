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
  Button, Box, Stack, IconButton,
  // Typography, AppBar, Toolbar, CssBaseline,
  // Drawer, Box, Divider,
  // IconButton, Button,
  // ListItem, ListItemButton, ListItemIcon, ListItemText,
  // Table, TableBody, TableCell, TableContainer,
  // TableHead, TableRow, Paper,
} from '@mui/material/';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {ThemeProvider, createTheme} from '@mui/material/styles';
// import {deepPurple, pink} from '@mui/material/colors';
import image from './media/portrait.jpg';
import homeImage from './media/home.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
// import MenuIcon from '@mui/icons-material/Menu';
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
// import ClearIcon from '@mui/icons-material/Clear';

const experiences = [
  {
    title: 'Software Engineering Intern',
    time: 'Jun 2022 - Aug 2022',
    company: 'Maxar Technologies',
    content: 'Developed database installation tool for the ' +
      'Intelsat C-band satellites launched by SpaceX on Nov 8th, 2022.',
  },
  {
    title: 'Research Assistant',
    time: 'Mar 2022 - Jun 2022',
    company: 'Santa Cruz Institute for Particle Physics',
    content: 'Developed machine learning program with Professor Nielsen ' +
      'to determine factors affecting formation of the Higgs boson.',
  },
  {
    title: 'Peer Navigator',
    time: 'Jun 2021 - Dec 2021',
    company: 'University of California, Santa Cruz',
    content: 'Introduced freshmen and gave advice on how to succeed ' +
      'in university. Held events, graded papers, and provided feedback.',
  },
  {
    title: 'Instructor',
    time: 'Jul 2017 - Aug 2021',
    company: `Koo's Martial Arts`,
    content: 'Taught students forms, kicks, and the hard-working philsophy' +
      'of Taekwondo.',
  },
  {
    title: 'Reader',
    time: 'Mar 2021 - Jun 2021',
    company: 'UCSC Baskin School of Engineering',
    content: `Graded and gave feedback to students' projects and classwork.`,
  },
];

const styles = {
  paperContainer: {
    backgroundImage: `url(${homeImage})`,
    backgroundRepeat: 'no-repeat',
  },
};

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

/**
 * Returns app component
 * @return {object}
 */
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar position="static"
          style={{background: 'transparent'}}
        >
          <Toolbar>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flex={1}
            >
              <Button sx={{fontSize: 18}} component="label" color="tertiary">
                Home
              </Button>
              <Button sx={{fontSize: 18}} component="label" color="tertiary">
                About
              </Button>
              <Button sx={{fontSize: 18}} component="label" color="tertiary">
                Experience
              </Button>
              <Button sx={{fontSize: 18}} component="label" color="tertiary">
                Projects
              </Button>
              <Button sx={{fontSize: 18}} component="label" color="tertiary">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{mt: 0.5, background: '#EDBEA4', height: '100vh', width: '100%'}}
          style={styles.paperContainer}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Stack
              spacing={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flex={1}
            >
              <IconButton size='large' flex={0} sx={{mt: 1}}>
                <ExpandMoreIcon fontSize="large" sx={{color: 'white'}}/>
              </IconButton>
              <Typography variant='h2' color='tertiary.main'
                sx={{textShadow: '1px 0px 1px grey'}}
              >
                William Santosa
              </Typography>
              <Typography variant='h5' color='tertiary.main'
                sx={{textShadow: '1px 0px 1px grey'}}
              >
                Computer Science | Database Systems | Software Engineer
              </Typography>
              <Stack direction='row'>
                <Button href="https://github.com/williamsantosa">
                  <GitHubIcon sx={{color: 'white'}}
                  />
                </Button>
                <Button href="https://www.linkedin.com/in/williamsantosa/">
                  <LinkedInIcon sx={{color: 'white'}}/>
                </Button>
                <Button href="mailto:williamwsantosa@gmail.com">
                  <EmailIcon sx={{color: 'white'}}/>
                </Button>
              </Stack>
            </Stack>
          </Box>
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
            padding: 3,
            width: '70%', height: '300px',
          }}
          >
            <Box sx={{ml: 5}}/>
            <Stack direction='row' spacing={4}>
              <img src={image} alt="Will's Face"
                width='250' height='250'
                className='roundedImage'
              />
              <Stack spacing={2}>
                <Box/>
                <Typography variant='h2' color="tertiary.main">
                  About Me
                </Typography>
                <Typography variant='body5' color="tertiary.main">
                  I'm an engineer aiming to improve educational resources
                  through my work.
                  I am expected to graduate UC Santa Cruz in Spring 2023
                  with a B.S in Computer Science
                  and am working toward specializing in database systems
                  for my graduate degree.
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              mt: 0.5, background: '#EDBEA4', width: '100%', padding: '20px',
            }}
          >
            <Typography variant='h3' color='tertiary.main'
              sx={{ml: 5}}
            >
              Experiences
            </Typography>
            <Timeline align="left">
              {experiences.map((exp, index) => (
                <TimelineItem>
                  <TimelineOppositeContent style={{flex: 0.3}}>
                    <Stack>
                    <Typography variant='h6' color='tertiary.main'>
                      {exp.title}
                    </Typography>
                    <Typography variant='body4' color='tertiary.main'>
                      {exp.time}
                    </Typography>
                    </Stack>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                    </TimelineDot>
                    {index !== experiences.length - 1 ?
                      <TimelineConnector/> : null}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Stack>
                      <Typography variant='h5' color='tertiary.main'>
                        {exp.company}
                      </Typography>
                      <Typography variant='body3' color='tertiary.main'>
                        {exp.content}
                      </Typography>
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
          <Box
            sx={{
              mt: 0.5, width: '100%', padding: '20px',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex={1}
          >
            <Typography variant='h3' color='tertiary.main'>
              Projects
            </Typography>
          </Box>
        </Stack>
        <Box sx={{mb: 500}}></Box>
      </ThemeProvider>
    </>
  );
}

export default App;
