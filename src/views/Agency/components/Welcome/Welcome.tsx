/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const Welcome = (): JSX.Element => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Box display={'flex'} justifyContent={'center'} >

        <Box
          component={Avatar}
          width={{ xs: 80, sm: 80, md: 120 }}
          height={{ xs: 80, sm: 80, md: 120 }}
          src={"https://cherimoya-assets.s3.amazonaws.com/Cherimoya-2.jpg"}
          marginRight={2}
        />
      </Box>

      <Typography
        variant="h3"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        Cherimoya
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        Welcome to Cherimoya, where you can effortlessly schedule your life -
        and get together to have fun even when you’re in different parts of the world.
      </Typography>
    </Box>
  );



  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
