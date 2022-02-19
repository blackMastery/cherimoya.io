import React from 'react';
import Grid from '@mui/material/Grid';
import { Map, Form } from './components';

import Container from 'components/Container';
import { Box, Typography } from '@mui/material';

const Contact = (): JSX.Element => {
  return (
    <Container>
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={6}>
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
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
