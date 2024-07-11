import React from 'react';
import { useWeather } from '../WeatherContext';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Tooltip,
  useTheme,
} from '@mui/material';

const BasicTable = ({ onRowSelect }) => {
  const weatherData = useWeather();
  const theme = useTheme();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Procesa los datos necesarios del XML para la tabla
  const rows = Array.from(weatherData.querySelectorAll('time')).slice(0, 20).map((timeNode) => ({
    time: timeNode.getAttribute('from'),
    temperature: parseFloat(timeNode.querySelector('temperature').getAttribute('value')).toFixed(2),
    windSpeed: parseFloat(timeNode.querySelector('windSpeed').getAttribute('mps')).toFixed(2),
    humidity: parseFloat(timeNode.querySelector('humidity').getAttribute('value')).toFixed(2),
    pressure: parseFloat(timeNode.querySelector('pressure').getAttribute('value')).toFixed(2),
  }));

  return (
    <TableContainer component={Paper} style={{ margin: theme.spacing(2), borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[5] }}>
      <Typography variant="h6" style={{ margin: theme.spacing(2, 0) }}>
        Weather Forecast
      </Typography>
      <Table aria-label="weather table">
        <TableHead style={{ backgroundColor: theme.palette.primary.main }}>
          <TableRow>
            <TableCell style={{ color: theme.palette.common.white, fontWeight: 'bold' }}>Time</TableCell>
            <TableCell align="right" style={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
              <Tooltip title="Temperature in Kelvin" placement="top" arrow>
                <span>Temperature (K)</span>
              </Tooltip>
            </TableCell>
            <TableCell align="right" style={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
              <Tooltip title="Wind Speed in meters per second" placement="top" arrow>
                <span>Wind Speed (m/s)</span>
              </Tooltip>
            </TableCell>
            <TableCell align="right" style={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
              <Tooltip title="Humidity in percentage" placement="top" arrow>
                <span>Humidity (%)</span>
              </Tooltip>
            </TableCell>
            <TableCell align="right" style={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
              <Tooltip title="Pressure in hPa" placement="top" arrow>
                <span>Pressure (hPa)</span>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} hover onClick={() => onRowSelect(row)}>
              <TableCell component="th" scope="row" style={{ fontSize: '1rem' }}>
                {row.time}
              </TableCell>
              <TableCell align="right" style={{ fontSize: '1rem' }}>{row.temperature}</TableCell>
              <TableCell align="right" style={{ fontSize: '1rem' }}>{row.windSpeed}</TableCell>
              <TableCell align="right" style={{ fontSize: '1rem' }}>{row.humidity}</TableCell>
              <TableCell align="right" style={{ fontSize: '1rem' }}>{row.pressure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;