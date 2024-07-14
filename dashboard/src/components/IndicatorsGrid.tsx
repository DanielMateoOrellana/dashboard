import Grid from '@mui/material/Grid';
import { useWeather } from '../WeatherContext';
import Indicator from './Indicator';

const IndicatorsGrid = () => {
  const weatherData = useWeather();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const firstTimeNode = weatherData.querySelector('time');

  const temperature = firstTimeNode?.querySelector('temperature')?.getAttribute('value') || '0';
  const feelsLike = firstTimeNode?.querySelector('feels_like')?.getAttribute('value') || '0';
  const windSpeed = firstTimeNode?.querySelector('windSpeed')?.getAttribute('mps') || '0';
  const windGust = firstTimeNode?.querySelector('windGust')?.getAttribute('gust') || '0';
  const windDirection = firstTimeNode?.querySelector('windDirection')?.getAttribute('name') || 'N/A';
  const pressure = firstTimeNode?.querySelector('pressure')?.getAttribute('value') || '0';
  const humidity = firstTimeNode?.querySelector('humidity')?.getAttribute('value') || '0';
  const clouds = firstTimeNode?.querySelector('clouds')?.getAttribute('all') || '0';
  const precipitationProbability = firstTimeNode?.querySelector('precipitation')?.getAttribute('probability') || '0';
  const precipitationValue = firstTimeNode?.querySelector('precipitation')?.getAttribute('value') || '0';
  const visibility = firstTimeNode?.querySelector('visibility')?.getAttribute('value') || '0';

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Temperatura" subtitle="K" value={temperature} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Sensación Térmica" subtitle="K" value={feelsLike} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Velocidad del Viento" subtitle="m/s" value={windSpeed} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Ráfaga de Viento" subtitle="m/s" value={windGust} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Dirección del Viento" subtitle="" value={windDirection} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Presión" subtitle="hPa" value={pressure} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Humedad" subtitle="%" value={humidity} />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3}>
        <Indicator title="Cobertura de Nubes" subtitle="%" value={clouds} />
      </Grid>
      <Grid container item xs={12} justifyContent="center" spacing={3}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Indicator title="Precipitación (probabilidad)" subtitle="%" value={precipitationProbability} />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Indicator title="Precipitación (valor)" subtitle="mm" value={precipitationValue} />
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Indicator title="Visibilidad" subtitle="m" value={visibility} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IndicatorsGrid;
