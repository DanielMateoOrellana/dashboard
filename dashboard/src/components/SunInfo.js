import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWeather } from '../WeatherContext';
import { Card, CardContent, Typography } from '@mui/material';
const SunInfo = () => {
    const weatherData = useWeather();
    if (!weatherData) {
        return _jsx("p", { children: "Loading..." });
    }
    const sunNode = weatherData.querySelector('sun');
    const sunrise = new Date(sunNode.getAttribute('rise')).toLocaleTimeString();
    const sunset = new Date(sunNode.getAttribute('set')).toLocaleTimeString();
    return (_jsx(Card, { style: { marginBottom: '20px' }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h5", component: "div", children: "Informaci\u00F3n del Sol" }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Amanecer: ", sunrise] }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Atardecer: ", sunset] })] }) }));
};
export default SunInfo;
