import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import BasicTable from './components/BasicTable';
import WeatherChart from './components/WeatherChart';
import { WeatherProvider, useWeather } from './WeatherContext';
import IndicatorsGrid from './components/IndicatorsGrid';
import LocationInfo from './components/LocationInfo';
import SunInfo from './components/SunInfo';
import WindRoseChart from './components/WindRoseChart';

const App = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const weatherData = useWeather();

  useEffect(() => {
    if (weatherData) {
      const rows = Array.from(weatherData.querySelectorAll('time')).map((timeNode) => {
        const windNode = timeNode.querySelector('windDirection');
        const windSpeedNode = timeNode.querySelector('windSpeed');

        return {
          time: timeNode.getAttribute('from'),
          temperature: parseFloat(timeNode.querySelector('temperature').getAttribute('value')),
          windSpeed: parseFloat(windSpeedNode.getAttribute('mps')),
          windDirectionName: windNode.getAttribute('name'),
          humidity: parseFloat(timeNode.querySelector('humidity').getAttribute('value')),
          pressure: parseFloat(timeNode.querySelector('pressure').getAttribute('value')),
        };
      });
      setChartData(rows);
    }
  }, [weatherData]);

  const handleRowSelect = (data) => {
    setSelectedData([data]);
  };

  return (
    <WeatherProvider>
      <div className="App">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <LocationInfo />
          </Grid>

          <Grid item xs={12}>
            <SunInfo />
          </Grid>

          <Grid item xs={12}>
            <IndicatorsGrid />
          </Grid>

          <Grid item xs={12}>
            <BasicTable onRowSelect={handleRowSelect} />
          </Grid>

          <Grid item xs={12}>
            <WeatherChart data={selectedData || chartData} />
          </Grid>

        </Grid>
      </div>
    </WeatherProvider>
  );
}

export default App;