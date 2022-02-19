/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Process = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
             About Cherimoya 
            </Typography>

            <Typography color="text.secondary" sx={{
              padding: 2
            }}>
            Cherimoya (cheh·ruh·moy·uh) is a rare fruit native to South America, 
            that has been described as tasting like a mix of some of the best fruits. 
            It is sometimes heart-shaped and a great treat to enjoy.
            </Typography>

            <Typography color="text.secondary" sx={{
              padding: 2
            }}>
            Just like the fruit itself, Cherimoya io is rare. 
            An exciting mix of the some of the best things technology has to offer, 
            restoring the love and connection between family and friends virtually.
            </Typography>


            <Typography color="text.secondary" sx={{
              padding: 2
            }}>
           Cherimoya.io gives you hassle free scheduling and organizing of events that are tailored to your interests.
            The possibilities with virtual events are endless.
            </Typography>


            <Typography color="text.secondary" sx={{
              padding: 2
            }}>
           As we are in the early stages of development, 
           we invite you to follow our journey are we evolve and introduce updates, 
           more features and experiences!
            </Typography>
          </Box>
          <Box>
            {/* <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant="h4" gutterBottom color="primary">
                    <Box fontWeight={600}>
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          redraw={false}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography color="text.secondary" component="p">
                    {item.subtitle}
                  </Typography>
                </Grid>
              ))}
            </Grid> */}
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Process;
