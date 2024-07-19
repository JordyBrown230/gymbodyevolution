'use client';
import { Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SamplePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PageContainer title="InformacionGCanton" description="Una pagina con información general del cantón">
      <DashboardCard title="Información general del cantón">
        <>
          <Box textAlign="center" mb={4}>
            <Typography variant="h2" gutterBottom data-aos="fade-down">Bienvenido al Cantón de La Cruz</Typography>
            <Typography variant="h6" color="text.secondary" data-aos="fade-down">Descubre la historia, geografía, cultura y clima de nuestro maravilloso cantón.</Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={12} data-aos="fade-up">
              <Card>
                <CardMedia
                  component="img"
                  alt="Historia del Cantón"
                  height="400"
                  image="https://www.periodicomensaje.com/images/2018/la-cruz-turismo-01.jpg"
                  title="Historia del Cantón"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Historia del Cantón de La Cruz               </Typography>
                  <Typography variant="body2" color="text.secondary">
                    La Cruz es el décimo cantón de la provincia de Guanacaste, es reconocido por sus hermosos sitios y paisajes. Desde su mirador se puede apreciar hacia el este el imponente volcán Orosí y hacia el oeste la bella Bahía Salinas. Gran parte de su territorio son Parques Nacionales, que protegen la mayor, mejor preservada y más representativa muestra de bosque tropical seco mesoamericano, un ecosistema altamente vulnerable y en riesgo de desaparecer, declarado en 1999 como “Patrimonio Natural de la Humanidad”.
                    En la época precolombina el territorio que actualmente corresponde al cantón de La Cruz, formó parte de una de las provincias de los indígenas denominados Chorotegas, cuyos dominios comprendían desde la Península de Nicoya hasta el Lago de Nicaragua, constituida por varios poblados o señoríos. La región fue descubierta por don Gil González Dávila en 1522, en su marcha hacia otra provincia de los chorotegas, que estaba bajo la autoridad del cacique Nicarao (hoy Nicaragua), para el caso de La Cruz, esta región eran dominios del rey indígena Orosí, hablaban la lengua mangue o chorotega. En el itinerario y cuentas de la expedición de González Dávila, redactado por el tesorero Andrés de Cereceda, se dice lacónicamente que “El cacique Orosí, está a 5 leguas tierra adentro: tornándose cristianos 134 ánimas, dio 198 pesos, 4 tomines de oro” El rey indígena Orosí residía a unos 27.5 kilómetros de la costa del Océano Pacífico, en los llanos del volcán que lleva el nombre del rey Orosí.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} data-aos="fade-up">
              <Card>
                <CardMedia
                  component="img"
                  alt="Geografía del Cantón"
                  height="700"
                  image="https://www.researchgate.net/publication/356003571/figure/fig1/AS:1088065573519362@1636426456751/Ubicacion-de-las-principales-comunidades-de-la-municipalidad-La-Cruz-Guanacaste-Costa.ppm"
                  title="Geografía del Cantón"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Geografía
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cantón de La Cruz cuenta con un área de 1383,90 km²2​ y una altitud media de 248 m s. n. m.3
                    La anchura máxima es de ochenta y un kilómetros, en dirección noreste a suroeste, desde unos 150 metros al noroeste del Hito 14, frontera con la República Nicaragua, donde la línea imaginaria se interseca con el río Las Haciendas hasta punta Santa Elena, en la península del mismo nombre.
                    La Cruz cuenta con cuatro distritos: La Cruz, Santa Cecilia, La Garita y Santa Elena.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} data-aos="fade-up">
              <Card>
                <CardMedia
                  component="img"
                  alt="Cultura del Cantón"
                  height="400"
                  image="https://www.catsa.net/wp-content/uploads/2018/10/Guanacastequidad_4.jpg"
                  title="Cultura del Cantón"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cultura
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    La cultura de nuestro cantón es vibrante y diversa, reflejada en nuestras festividades, artes y tradiciones que se han mantenido vivas a lo largo de los años.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} data-aos="fade-up">
              <Card>
                <CardMedia
                  component="img"
                  alt="Clima del Cantón"
                  height="400"
                  image="https://goplaya.cr/blog/wp-content/uploads/2019/12/PLAYASLACRUZ.jpg"
                  title="Clima del Cantón"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Clima
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Con un clima templado durante todo el año, nuestro cantón es el lugar perfecto para disfrutar de actividades al aire libre y la belleza natural en cualquier estación.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
