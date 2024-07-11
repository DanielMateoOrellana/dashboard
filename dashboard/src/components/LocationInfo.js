import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWeather } from '../WeatherContext';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
const LocationInfo = () => {
    const weatherData = useWeather();
    if (!weatherData) {
        return _jsx("p", { children: "Loading..." });
    }
    const locationNode = weatherData.querySelector('location');
    if (!locationNode) {
        return _jsx("p", { children: "No location data available" });
    }
    const name = locationNode.querySelector('name')?.textContent || 'Unknown';
    const country = locationNode.querySelector('country')?.textContent || 'Unknown';
    const latitude = locationNode.querySelector('location')?.getAttribute('latitude') || 'Unknown';
    const longitude = locationNode.querySelector('location')?.getAttribute('longitude') || 'Unknown';
    return (_jsxs(Card, { style: { marginBottom: '20px' }, children: [_jsx(CardMedia, { component: "img", alt: "Guayaquil", height: "240", image: "https://latintrails.com/wp-content/uploads/2019/03/Guayaquil-discover-this-Ecuadorian-city.jpg", title: "Guayaquil" }), _jsxs(CardContent, { children: [_jsxs(Typography, { variant: "h5", component: "div", children: [name, ", ", country] }), _jsxs(Typography, { variant: "body2", color: "textSecondary", children: ["Latitude: ", latitude, ", Longitude: ", longitude] })] })] }));
};
export default LocationInfo;
