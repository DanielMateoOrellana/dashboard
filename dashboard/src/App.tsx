import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';
import BasicTable from './components/BasicTable';
import WeatherChart from './components/WeatherChart';
import { WeatherProvider, useWeather } from './WeatherContext';
import IndicatorsGrid from './components/IndicatorsGrid';
import LocationInfo from './components/LocationInfo';
import SunInfo from './components/SunInfo';
import MapView from './components/MapView';

interface ChartData {
  time: string | null;
  temperature: number;
  feelsLike: number;
  windSpeed: number;
  windGust: number;
  windDirection: string | null;
  pressure: number;
  humidity: number;
  clouds: number;
  precipitationProbability: number;
  precipitationValue: number;
  visibility: number;
}

const App = () => {
  const [selectedData, setSelectedData] = useState<ChartData | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const weatherData = useWeather();

  useEffect(() => {
    if (weatherData) {
      const rows: ChartData[] = Array.from(weatherData.querySelectorAll('time')).map((timeNode) => {
        const windNode = timeNode.querySelector('windDirection');
        const windSpeedNode = timeNode.querySelector('windSpeed');
        const feelsLikeNode = timeNode.querySelector('feels_like');
        const windGustNode = timeNode.querySelector('windGust');
        const cloudsNode = timeNode.querySelector('clouds');
        const precipitationNode = timeNode.querySelector('precipitation');
        const visibilityNode = timeNode.querySelector('visibility');

        return {
          time: timeNode.getAttribute('from'),
          temperature: parseFloat(timeNode.querySelector('temperature')?.getAttribute('value') || '0'),
          feelsLike: parseFloat(feelsLikeNode?.getAttribute('value') || '0'),
          windSpeed: parseFloat(windSpeedNode?.getAttribute('mps') || '0'),
          windGust: parseFloat(windGustNode?.getAttribute('gust') || '0'),
          windDirection: windNode?.getAttribute('name') || 'N/A',
          pressure: parseFloat(timeNode.querySelector('pressure')?.getAttribute('value') || '0'),
          humidity: parseFloat(timeNode.querySelector('humidity')?.getAttribute('value') || '0'),
          clouds: parseFloat(cloudsNode?.getAttribute('all') || '0'),
          precipitationProbability: parseFloat(precipitationNode?.getAttribute('probability') || '0'),
          precipitationValue: parseFloat(precipitationNode?.getAttribute('value') || '0'),
          visibility: parseFloat(visibilityNode?.getAttribute('value') || '0'),
        };
      });
      setChartData(rows);
    }
  }, [weatherData]);

  const handleRowSelect = (data: ChartData) => {
    setSelectedData(data);
  };

  const currentDateTime = new Date().toLocaleString();

  return (
    <WeatherProvider>
      <div className="App">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <LocationInfo />
          </Grid>

          <Grid item xs={12}>
            <MapView latitude={-2.1667} longitude={-79.9} />
          </Grid>

          <Grid item xs={12}>
            <SunInfo />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {`Fecha y Hora actual: ${currentDateTime}`}
            </Typography>

            <Typography variant="h5" gutterBottom>
              Clima Actual
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <IndicatorsGrid />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {`Fecha y Hora escogida: ${selectedData ? new Date(selectedData.time || '').toLocaleString() : 'Ninguna seleccionada'}`}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <BasicTable onRowSelect={handleRowSelect} />
          </Grid>

          <Grid item xs={12}>
            <WeatherChart data={selectedData ? [selectedData] : chartData} />
          </Grid>

        </Grid>
      </div>
    </WeatherProvider>
  );
};

export default App;
