import React from 'react';
import {
  Typography, Button, Card,
  CardContent, CardActions,
  Stack, Box,
} from '@mui/material/';

/**
 * Returns Projects component
 * @return {object}
 */
function Projects() {
  return (
    <Stack spacing={4}>
      <Box
        sx={{
          width: '100%',
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
      <Stack direction='row' spacing={4}>
        <Card sx={{minWidth: 500, background: '#e3e3e3'}}>
          <CardContent>
            <Typography sx={{fontSize: 14}}
              color="#111111" gutterBottom
            >
              Discord Bot
            </Typography>
            <Typography variant="h5" component="div">
              Not Clash
            </Typography>
            <Typography sx={{mb: 1.5}} color="#808080">
              Python
            </Typography>
            <Typography variant="body2">
              Facilitates LoL 5v5 matches, stores in MySQL database.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"
              href="https://github.com/williamsantosa/Not-Clash"
            >
              Visit Repository
            </Button>
          </CardActions>
        </Card>
        <Card sx={{minWidth: 500, background: '#e3e3e3'}}>
          <CardContent>
            <Typography sx={{fontSize: 14}}
              color="#111111" gutterBottom
            >
              Desktop App
            </Typography>
            <Typography variant="h5" component="div">
              YouToo
            </Typography>
            <Typography sx={{mb: 1.5}} color="#808080">
              Python
            </Typography>
            <Typography variant="body2">
              Downloads YouTube videos from streams.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"
              href="https://github.com/williamsantosa/YouToo"
            >
              Visit Repository
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
}

export default Projects;
