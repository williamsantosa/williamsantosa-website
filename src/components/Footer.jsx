import React from 'react';
import {Stack, Button, Typography} from '@mui/material/';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

/**
 * Returns Footer component
 * @return {object}
 */
function Footer() {
  return (
    <Stack
      sx={{
        width: '100vw',
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
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
      <Typography color="tertiary.main">
        William Santosa © 2022
      </Typography>
    </Stack>
  );
}

export default Footer;
