/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Contact from '../Contact';

const Reviews = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Contact/>
    </Box>
  );
};

export default Reviews;
