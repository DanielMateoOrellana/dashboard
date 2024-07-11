import { useWeather } from '../WeatherContext';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const LocationInfo: React.FC = () => {
  const weatherData = useWeather();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const locationNode = weatherData.querySelector('location');
  
  if (!locationNode) {
    return <p>No location data available</p>;
  }

  const name = locationNode.querySelector('name')?.textContent || 'Unknown';
  const country = locationNode.querySelector('country')?.textContent || 'Unknown';
  const latitude = locationNode.querySelector('location')?.getAttribute('latitude') || 'Unknown';
  const longitude = locationNode.querySelector('location')?.getAttribute('longitude') || 'Unknown';

  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardMedia
        component="img"
        alt="Guayaquil"
        height="240"
        image="https://latintrails.com/wp-content/uploads/2019/03/Guayaquil-discover-this-Ecuadorian-city.jpg" 
        title="Guayaquil"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}, {country}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Latitude: {latitude}, Longitude: {longitude}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationInfo;