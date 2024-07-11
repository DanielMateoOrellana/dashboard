import React from 'react';
import { useWeather } from '../WeatherContext';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const LocationInfo = () => {
  const weatherData = useWeather();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const locationNode = weatherData.querySelector('location');
  const name = locationNode.querySelector('name').textContent;
  const country = locationNode.querySelector('country').textContent;
  const latitude = locationNode.querySelector('location').getAttribute('latitude');
  const longitude = locationNode.querySelector('location').getAttribute('longitude');

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