import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '@mui/material/Grid';
import { useWeather } from '../WeatherContext';
import Indicator from './Indicator';
import Typography from '@mui/material/Typography';
const IndicatorsGrid = () => {
    const weatherData = useWeather();
    if (!weatherData) {
        return _jsx("p", { children: "Loading..." });
    }
    const firstTimeNode = weatherData.querySelector('time');
    const fromDate = new Date(firstTimeNode.getAttribute('from')).toLocaleDateString();
    const precipitationProbability = firstTimeNode.querySelector('precipitation').getAttribute('probability');
    const windSpeed = firstTimeNode.querySelector('windSpeed').getAttribute('mps');
    const temperature = firstTimeNode.querySelector('temperature').getAttribute('value');
    const humidity = firstTimeNode.querySelector('humidity').getAttribute('value');
    const pressure = firstTimeNode.querySelector('pressure').getAttribute('value');
    const feelsLike = firstTimeNode.querySelector('feels_like').getAttribute('value');
    return (_jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(Typography, { variant: "h5", gutterBottom: true, children: `Fecha: ${fromDate}` }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 4, children: _jsx(Indicator, { title: "Precipitaci\u00F3n", subtitle: "Probabilidad (%)", value: precipitationProbability }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 4, children: _jsx(Indicator, { title: "Velocidad del Viento", subtitle: "m/s", value: windSpeed }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 4, children: _jsx(Indicator, { title: "Temperatura", subtitle: "K", value: temperature }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 4, children: _jsx(Indicator, { title: "Humedad", subtitle: "%", value: humidity }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 4, children: _jsx(Indicator, { title: "Presi\u00F3n", subtitle: "hPa", value: pressure }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 4, children: _jsx(Indicator, { title: "Sensaci\u00F3n T\u00E9rmica", subtitle: "K", value: feelsLike }) })] }));
};
export default IndicatorsGrid;
