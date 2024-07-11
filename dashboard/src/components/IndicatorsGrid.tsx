import Grid from '@mui/material/Grid';
import { useWeather } from '../WeatherContext';
import Indicator from './Indicator';
import Typography from '@mui/material/Typography';

const IndicatorsGrid = () => {
  const weatherData = useWeather();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const firstTimeNode = weatherData.querySelector('time');
  const fromDate = new Date(firstTimeNode.getAttribute('from')).toLocaleDateString();

  const precipitationProbability = firstTimeNode.querySelector('precipitation').getAttribute('probability');
  const windSpeed = firstTimeNode.querySelector('windSpeed').getAttribute('mps');
  const temperature = firstTimeNode.querySelector('temperature').getAttribute('value');
  const humidity = firstTimeNode.querySelector('humidity').getAttribute('value');
  const pressure = firstTimeNode.querySelector('pressure').getAttribute('value');
  const feelsLike = firstTimeNode.querySelector('feels_like').getAttribute('value');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {`Fecha: ${fromDate}`}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Indicator title="Precipitación" subtitle="Probabilidad (%)" value={precipitationProbability} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Indicator title="Velocidad del Viento" subtitle="m/s" value={windSpeed} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Indicator title="Temperatura" subtitle="K" value={temperature} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Indicator title="Humedad" subtitle="%" value={humidity} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Indicator title="Presión" subtitle="hPa" value={pressure} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Indicator title="Sensación Térmica" subtitle="K" value={feelsLike} />
      </Grid>
    </Grid>
  );
};

export default IndicatorsGrid;