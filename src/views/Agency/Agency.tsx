import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import Avatar from '@mui/material/Avatar';
import Container from 'components/Container';
import { Welcome, Reviews } from './components';
import Typography from '@mui/material/Typography';

const Agency = (): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax/index');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element: HTMLElement = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        // bgcolor={'alternate.main'}
        marginTop={-13}
        paddingTop={13}
        sx={{
          backgroundColor: '#1a0053',
        }}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome />
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('agency__portfolio-item--js-scroll')}
                  sx={{ cursor: 'pointer', color: '#ffffff' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
      >
        <Container>
          <Reviews />
        </Container>
      </Box>

      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        // bgcolor={'alternate.main'}

        sx={{
          backgroundColor: '#aeb45a',
        }}
      >
        <Container>
          <Box display={'flex'} justifyContent={'center'}>
            <Box
              component={Avatar}
              width={{ xs: 80, sm: 80, md: 120 }}
              height={{ xs: 80, sm: 80, md: 120 }}
              src={'https://cherimoya-assets.s3.amazonaws.com/Cherimoya-2.jpg'}
              marginRight={2}
            />
          </Box>

          <Typography
            variant="h3"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 900,
              color: '#ffffff',
            }}
          >
            Cherimoya
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Agency;
