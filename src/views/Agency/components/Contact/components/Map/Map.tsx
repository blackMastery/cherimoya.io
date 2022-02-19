/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Map = (): JSX.Element => {
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'text.secondary'}>
          Sign up to learn more about the app and upcoming news!
          </Typography>
        </Box>
      </Box>

  
    </Box>
  );
};

export default Map;
