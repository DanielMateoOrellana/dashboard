import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
const WeatherChart = ({ data }) => {
    if (!data || data.length === 0) {
        return _jsx("p", { children: "Selecciona una fila de la tabla para mostrar su respectivo gr\u00E1fico" });
    }
    return (_jsx("div", { style: { width: '100%', height: 400 }, children: _jsx(ResponsiveContainer, { children: _jsxs(LineChart, { data: data, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "time" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "temperature", stroke: "#8884d8", name: "Temperature (K)" }), _jsx(Line, { type: "monotone", dataKey: "windSpeed", stroke: "#82ca9d", name: "Wind Speed (m/s)" }), _jsx(Line, { type: "monotone", dataKey: "humidity", stroke: "#ffc658", name: "Humidity (%)" }), _jsx(Line, { type: "monotone", dataKey: "pressure", stroke: "#ff7300", name: "Pressure (hPa)" })] }) }) }));
};
export default WeatherChart;
