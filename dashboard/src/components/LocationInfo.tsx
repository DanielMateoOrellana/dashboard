import { useWeather } from '../WeatherContext';
import { Typography, Card, CardContent, CardMedia, useTheme, Box } from '@mui/material';

const LocationInfo = () => {
  const weatherData = useWeather();
  const theme = useTheme();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const locationNode = weatherData.querySelector('location');
  const name = locationNode?.querySelector('name')?.textContent || 'Unknown';
  const country = locationNode?.querySelector('country')?.textContent || 'Unknown';
  const latitude = locationNode?.querySelector('location')?.getAttribute('latitude') || 'Unknown';
  const longitude = locationNode?.querySelector('location')?.getAttribute('longitude') || 'Unknown';

  return (
    <Card
      sx={{
        marginBottom: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        alt="Guayaquil"
        height="240"
        image="https://latintrails.com/wp-content/uploads/2019/03/Guayaquil-discover-this-Ecuadorian-city.jpg"
        title="Guayaquil"
      />
      <CardContent
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(3),
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
          Ciudad: {name}, {country}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: theme.spacing(1),
          }}
        >
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              Latitud
            </Typography>
            <Typography variant="body2">{latitude}</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              Longitud
            </Typography>
            <Typography variant="body2">{longitude}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LocationInfo;
