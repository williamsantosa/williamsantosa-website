import React from 'react';
import {AppBar, Toolbar, Button, Box} from '@mui/material/';

/**
 * Returns Bar component
 * @return {object}
 */
function Bar() {
  return (
    <AppBar position="static" id="home"
      style={{
        background: 'transparent',
        width: '100vw',
      }}
    >
      <Toolbar>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <a href='#home' style={{textDecoration: 'none'}}>
            <Button sx={{fontSize: 18}} component="label" color="tertiary">
              Home
            </Button>
          </a>
          <a href='#about' style={{textDecoration: 'none'}}>
            <Button sx={{fontSize: 18}} component="label" color="tertiary">
              About
            </Button>
          </a>
          <a href='#experience' style={{textDecoration: 'none'}}>
            <Button sx={{fontSize: 18}} component="label" color="tertiary">
              Experience
            </Button>
          </a>
          <a href='#projects' style={{textDecoration: 'none'}}>
            <Button sx={{fontSize: 18}} component="label" color="tertiary">
              Projects
            </Button>
          </a>
          <a href='#contact' style={{textDecoration: 'none'}}>
            <Button sx={{fontSize: 18}} component="label" color="tertiary">
              Contact
            </Button>
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
