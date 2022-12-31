import React from 'react';
import {
  Typography, Button, Card,
  CardContent, CardActions,
  Stack, Box,
} from '@mui/material/';

const projects = require('../data/projects.json');

const cardify = (e) => {
  return (
    <Card sx={{width: '30vw', background: '#e3e3e3'}}>
      <CardContent>
        <Typography sx={{fontSize: 14}}
          color="#111111" gutterBottom
        >
          {e.type}
        </Typography>
        <Typography variant="h5" component="div">
          {e.title}
        </Typography>
        <Typography sx={{mb: 1.5}} color="#808080">
          {e.language}
        </Typography>
        <Typography variant="body2">
          {e.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
          href={e.link}
        >
          {e.action}
        </Button>
      </CardActions>
    </Card>
  );
};

/**
 * Returns Projects component
 * @return {object}
 */
function Projects() {
  return (
    <Stack spacing={4}>
      <Box
        sx={{
          width: '100vw',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        id="projects"
      >
        <Typography variant='h3' color='tertiary.main'>
          Projects
        </Typography>
      </Box>
      <Stack
        sx={{
          width: '100vw',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        spacing={4}
      >
        {projects.map((element, index) => {
          if (index % 2 === 1) {
            return null;
          }
          return (projects.length > index + 1 ?
            <Stack direction='row' spacing={4}>
              {cardify(element)}
              {cardify(projects[index+1])}
            </Stack> :
            <Stack>
              {cardify(element)}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default Projects;
