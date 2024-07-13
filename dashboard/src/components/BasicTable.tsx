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
  useTheme,
  Typography,
  Box,
  IconButton,
  Tooltip
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface BasicTableProps {
  onRowSelect: (row: any) => void;
}

const BasicTable: React.FC<BasicTableProps> = ({ onRowSelect }) => {
  const weatherData = useWeather();
  const theme = useTheme();

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Procesa los datos necesarios del XML para la tabla
  const rows = Array.from(weatherData.querySelectorAll('time')).slice(0, 20).map((timeNode) => ({
    time: timeNode.getAttribute('from'),
    temperature: parseFloat(timeNode.querySelector('temperature')?.getAttribute('value') || '0').toFixed(2),
    windSpeed: parseFloat(timeNode.querySelector('windSpeed')?.getAttribute('mps') || '0').toFixed(2),
    humidity: parseFloat(timeNode.querySelector('humidity')?.getAttribute('value') || '0').toFixed(2),
    pressure: parseFloat(timeNode.querySelector('pressure')?.getAttribute('value') || '0').toFixed(2),
  }));

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}>
        Información del Clima
        <Tooltip title="Información detallada del clima">
          <IconButton>
            <InfoIcon color="primary" />
          </IconButton>
        </Tooltip>
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: theme.shadows[5], borderRadius: theme.shape.borderRadius }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontWeight: 'bold', fontSize: '1.1em' }}>Fecha</TableCell>
              <TableCell sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontWeight: 'bold', fontSize: '1.1em' }}>Temperatura (K)</TableCell>
              <TableCell sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontWeight: 'bold', fontSize: '1.1em' }}>Velocidad del Viento (m/s)</TableCell>
              <TableCell sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontWeight: 'bold', fontSize: '1.1em' }}>Humedad (%)</TableCell>
              <TableCell sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, fontWeight: 'bold', fontSize: '1.1em' }}>Presión (hPa)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                onClick={() => onRowSelect(row)}
                sx={{
                  cursor: 'pointer',
                  '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover },
                  '&:hover': { backgroundColor: theme.palette.action.selected, transform: 'scale(1.02)', transition: 'all 0.2s ease-in-out' },
                  '&.Mui-selected': { backgroundColor: theme.palette.action.selected, '&:hover': { backgroundColor: theme.palette.action.selected } },
                }}
              >
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.temperature}</TableCell>
                <TableCell>{row.windSpeed}</TableCell>
                <TableCell>{row.humidity}</TableCell>
                <TableCell>{row.pressure}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BasicTable;