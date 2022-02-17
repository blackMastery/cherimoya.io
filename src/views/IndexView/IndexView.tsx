import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  GetStarted,
  Features,
  QuickStart,
  Services,
  Benefits,
  Hero,
} from './components';
import { Agency } from 'views';

const IndexView = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Agency />
    </Box>
  );
};

export default IndexView;
