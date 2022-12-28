import React from 'react';
import {
  Box, Stack, IconButton,
  Typography, Button,
} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

/**
 * Returns Home component
 * @return {object}
 */
function Home() {
  return (
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
        <a href='#about' style={{textDecoration: 'none'}}>
          <IconButton size='large' flex={0} sx={{mt: 1}}>
            <ExpandMoreIcon fontSize="large" sx={{color: 'white'}}/>
          </IconButton>
        </a>
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
  );
}

export default Home;
