'use client';

import { useEffect } from 'react';
import { Typography, Box, Container, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Mapa from './components/home/Mapa';
import Carrousel from './components/home/Carrousel';
import GoogleReviews from './components/home/Reviews';
import Image from 'next/image';
import { cambiosFisicos, instalaciones } from '../constants/imagesUrl';

const SamplePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PageContainer title="Información" description="Una página con información del lugar">
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/backgrounds/imagen.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <Container maxWidth="lg" sx={{ zIndex: 1 }}>
          <Typography variant="h2" gutterBottom>
            Libera tu potencial, centro de fitness y salud
          </Typography>
          <Typography variant="h6" color="inherit" gutterBottom>
            Bienvenido a tu destino de bienestar definitivo. Explora nuestros recursos y consejos de expertos para embarcarte en un viaje transformador de salud y forma física.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Más información
          </Button>
        </Container>
      </Box>

      <Box mt={4} mb={4} textAlign="center" data-aos="fade-down">
        <Typography variant="h2" gutterBottom data-aos="fade-down" textAlign={'center'}>
          Instalaciones
        </Typography>
        <Carrousel images={instalaciones} />
      </Box>


      <Box mt={4} mb={4} data-aos="fade-down" >
        <Typography textAlign={'center'} variant="h2" gutterBottom data-aos="fade-down">
          Que dicen nuestos clientes
        </Typography>
        <GoogleReviews />
      </Box>

      <Box component="section" mb={4} px={2} mt={4}>
        <Typography variant="h2" textAlign={'center'} component="h2" gutterBottom data-aos="fade-down">
          Nuestros entrenadores <span style={{ color: '#8B0000' }}>calificados</span>
        </Typography>
        <Image
          src="/images/equipo/equipo.jpg"
          alt="Entrenadores calificados en el gimnasio de Liberia"
          quality={100}
          layout="responsive"
          width={0}
          height={0}
          style={{ borderRadius: 10 }}
        />
      </Box>

      <Box mt={4} mb={4} textAlign="center" data-aos="fade-down">
        <Typography variant="h2" gutterBottom data-aos="fade-down" textAlign={'center'}>
          cambios fisicos
        </Typography>
        <Carrousel images={cambiosFisicos} />
      </Box>


      <Container maxWidth="lg">
        <Box mt={4} mb={4}>
          <Typography variant="h2" gutterBottom data-aos="fade-down" textAlign="center">
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
            <Typography variant="h2" gutterBottom data-aos="fade-down">
              Motivate
            </Typography>
            <Box data-aos="fade-up" display="flex" justifyContent="center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/EykWcFEtFqo"
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
