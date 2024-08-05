'use client';

import { useEffect } from 'react';
import { Typography, Box, Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Mapa from './components/home/Mapa';
import Carrousel from './components/home/Carrousel';
import GoogleReviews from './components/home/Reviews';
const SamplePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PageContainer title="Información" description="Una página con información del lugar">
      <Box textAlign="center" mb={4} px={2}>
        <Typography variant="h4" gutterBottom data-aos="fade-down">
          Bienvenido a Canopy Monkey Jungle Zipline Adventure
        </Typography>
        <Typography variant="h6" color="text.secondary" data-aos="fade-down">
          Descubre la aventura de tirolesa en Tamarindo, Guanacaste
        </Typography>
      </Box>
      <Box mt={4} mb={4} textAlign="center" data-aos="fade-down">
        <Carrousel></Carrousel>
      </Box>

      <Box mt={4} mb={4} data-aos="fade-down">
        <GoogleReviews />
      </Box>



      <Container maxWidth="lg">
        <Box mt={4} mb={4}>
          <Typography variant="h5" gutterBottom data-aos="fade-down" textAlign="center">
            Ubicación
          </Typography>
          <Box
            sx={{
              height: { xs: '300px', sm: '400px' },
              width: '100%',
              borderRadius: '15px',
              overflow: 'hidden',
            }}
            data-aos="fade-up"
          >
            <Mapa />
          </Box>
          <Box mt={4} mb={4} textAlign="center">
            <Typography variant="h5" gutterBottom data-aos="fade-down">
              Diviértete tú también
            </Typography>
            <Box data-aos="fade-up" display="flex" justifyContent="center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/dJbbZYeqJTg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '15px', maxWidth: '560px' }}
              ></iframe>
            </Box>
          </Box>
        </Box>

      </Container>
    </PageContainer>
  );
};

export default SamplePage;

