import { Box, Container, Typography, TextField, Button, IconButton } from '@mui/material';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#ededed',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={{ xs: 'column', md: 'row' }}
                    alignItems="center"
                >
                    <Box mb={{ xs: 4, md: 0 }} textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography variant="h5" component="h5" gutterBottom>
                            GIMNASIO GYM BODY EVOLUTION
                        </Typography>
                        <Typography variant="body1" component="p">
                            75 Oeste del Super compro de, Provincia de Guanacaste, Liberia, San Roque, 50101
                        </Typography>
                        <Typography variant="body1" component="p" mt={2}>
                            <strong>Horarios</strong><br />
                            Lunes a Viernes: 5:00 am a 10:00 pm <br />
                            Sábado: 6:30 am a 12:00 pm<br />
                            Domingo: Cerrado
                        </Typography>
                        <Typography variant="body1" component="p" mt={2}>
                            Teléfono: (506)6003-1666<br />
                            Whatsapp: (506)6003-1666<br />
                            Correo Electrónico: arcr96@hotmail.com
                        </Typography>
                    </Box>

                    <Box width={{ xs: '100%', md: 'auto' }} textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography variant="h5" component="h5" gutterBottom>
                            CONTACTO
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                width: { xs: '100%', md: '300px' },
                                margin: '0 auto',
                            }}
                        >
                            <TextField label="Nombre" variant="outlined" fullWidth required />
                            <TextField label="Email" variant="outlined" fullWidth required />
                            <TextField label="Teléfono" variant="outlined" fullWidth required />
                            <TextField label="Mensaje" variant="outlined" fullWidth required multiline rows={4} />
                            <Button variant="contained" color="primary" type="submit">
                                Enviar
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box mt={4} textAlign="center">
                    <IconButton color="primary" href="https://wa.me/50660031666" target="_blank" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </IconButton>
                    <IconButton color="primary" href="https://www.facebook.com/gymboodyevolution" target="_blank" aria-label="Facebook">
                        <FaFacebookF />
                    </IconButton>
                    <IconButton color="primary" href="https://www.instagram.com/gym_body_evolution_liberia" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
