import React from 'react';
import {Stack, Typography} from '@mui/material/';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

const experiences = require('../data/experiences.json');

/**
 * Returns Experience component
 * @return {object}
 */
function Experience() {
  return (
    <>
      <Typography variant='h3' color='tertiary.main'
        sx={{ml: 5}}
      >
        Experience
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
    </>
  );
}

export default Experience;
