import { useWeather } from '../WeatherContext';
import { Card, CardContent, Typography, useTheme, Box } from '@mui/material';

const SunInfo = () => {
  const weatherData = useWeather();
  const theme = useTheme();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const sunNode = weatherData.querySelector('sun');
  const sunrise = sunNode?.getAttribute('rise') ? new Date(sunNode.getAttribute('rise') as string).toLocaleTimeString() : 'N/A';
  const sunset = sunNode?.getAttribute('set') ? new Date(sunNode.getAttribute('set') as string).toLocaleTimeString() : 'N/A';

  return (
    <Card sx={{ marginBottom: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', overflow: 'hidden' }}>
      <CardContent sx={{ padding: theme.spacing(3), backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.dark }}>
          Información del Sol
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: theme.spacing(1) }}>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              Amanecer
            </Typography>
            <Typography variant="body2">{sunrise}</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              Atardecer
            </Typography>
            <Typography variant="body2">{sunset}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SunInfo;