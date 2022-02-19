import Box from '@mui/material/Box';
import { Agency } from 'views';
import React from 'react';

const IndexView = (): JSX.Element => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Agency />
    </Box>
  );
};

export default IndexView;
