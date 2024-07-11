import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import BasicTable from './components/BasicTable';
import WeatherChart from './components/WeatherChart';
import { WeatherProvider, useWeather } from './WeatherContext';
import IndicatorsGrid from './components/IndicatorsGrid';
import LocationInfo from './components/LocationInfo';
import SunInfo from './components/SunInfo';
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
    return (_jsx(WeatherProvider, { children: _jsx("div", { className: "App", children: _jsxs(Grid, { container: true, spacing: 5, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(LocationInfo, {}) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(SunInfo, {}) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(IndicatorsGrid, {}) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(BasicTable, { onRowSelect: handleRowSelect }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(WeatherChart, { data: selectedData || chartData }) })] }) }) }));
};
export default App;
