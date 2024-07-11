import React from 'react';
import { useWeather } from '../WeatherContext';
import { Card, CardContent, Typography } from '@mui/material';

const SunInfo = () => {
  const weatherData = useWeather();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const sunNode = weatherData.querySelector('sun');
  const sunrise = new Date(sunNode.getAttribute('rise')).toLocaleTimeString();
  const sunset = new Date(sunNode.getAttribute('set')).toLocaleTimeString();

  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Información del Sol
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Amanecer: {sunrise}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Atardecer: {sunset}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SunInfo;