import React from 'react';
import {Stack, Box, Typography} from '@mui/material/';
import image from '../media/portrait.jpg';

/**
 * Returns AboutMe component
 * @return {object}
 */
function AboutMe() {
  return (
    <Stack direction='row' spacing={4}
      sx={{width: '80vw'}}
    >
      <Box/>
      <img src={image} alt="Will's Face"
        width='250' height='250'
        className='roundedImage'
      />
      <Stack spacing={2}
        sx={{width: '50%'}}
      >
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
  );
}

export default AboutMe;
