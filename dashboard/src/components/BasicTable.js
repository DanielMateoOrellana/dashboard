import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWeather } from '../WeatherContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Tooltip, useTheme, } from '@mui/material';
const BasicTable = ({ onRowSelect }) => {
    const weatherData = useWeather();
    const theme = useTheme();
    if (!weatherData) {
        return _jsx("p", { children: "Loading..." });
    }
    // Procesa los datos necesarios del XML para la tabla
    const rows = Array.from(weatherData.querySelectorAll('time')).slice(0, 20).map((timeNode) => ({
        time: timeNode.getAttribute('from') || '',
        temperature: parseFloat(timeNode.querySelector('temperature')?.getAttribute('value') || '0').toFixed(2),
        windSpeed: parseFloat(timeNode.querySelector('windSpeed')?.getAttribute('mps') || '0').toFixed(2),
        humidity: parseFloat(timeNode.querySelector('humidity')?.getAttribute('value') || '0').toFixed(2),
        pressure: parseFloat(timeNode.querySelector('pressure')?.getAttribute('value') || '0').toFixed(2),
    }));
    return (_jsxs(TableContainer, { component: Paper, style: { margin: theme.spacing(2), borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[5] }, children: [_jsx(Typography, { variant: "h6", style: { margin: theme.spacing(2, 0) }, children: "Weather Forecast" }), _jsxs(Table, { "aria-label": "weather table", children: [_jsx(TableHead, { style: { backgroundColor: theme.palette.primary.main }, children: _jsxs(TableRow, { children: [_jsx(TableCell, { style: { color: theme.palette.common.white, fontWeight: 'bold' }, children: "Time" }), _jsx(TableCell, { align: "right", style: { color: theme.palette.common.white, fontWeight: 'bold' }, children: _jsx(Tooltip, { title: "Temperature in Kelvin", placement: "top", arrow: true, children: _jsx("span", { children: "Temperature (K)" }) }) }), _jsx(TableCell, { align: "right", style: { color: theme.palette.common.white, fontWeight: 'bold' }, children: _jsx(Tooltip, { title: "Wind Speed in meters per second", placement: "top", arrow: true, children: _jsx("span", { children: "Wind Speed (m/s)" }) }) }), _jsx(TableCell, { align: "right", style: { color: theme.palette.common.white, fontWeight: 'bold' }, children: _jsx(Tooltip, { title: "Humidity in percentage", placement: "top", arrow: true, children: _jsx("span", { children: "Humidity (%)" }) }) }), _jsx(TableCell, { align: "right", style: { color: theme.palette.common.white, fontWeight: 'bold' }, children: _jsx(Tooltip, { title: "Pressure in hPa", placement: "top", arrow: true, children: _jsx("span", { children: "Pressure (hPa)" }) }) })] }) }), _jsx(TableBody, { children: rows.map((row, index) => (_jsxs(TableRow, { hover: true, onClick: () => onRowSelect(row), children: [_jsx(TableCell, { component: "th", scope: "row", style: { fontSize: '1rem' }, children: row.time }), _jsx(TableCell, { align: "right", style: { fontSize: '1rem' }, children: row.temperature }), _jsx(TableCell, { align: "right", style: { fontSize: '1rem' }, children: row.windSpeed }), _jsx(TableCell, { align: "right", style: { fontSize: '1rem' }, children: row.humidity }), _jsx(TableCell, { align: "right", style: { fontSize: '1rem' }, children: row.pressure })] }, index))) })] })] }));
};
export default BasicTable;
