import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const WeatherChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Selecciona una fila de la tabla para mostrar su respectivo gráfico</p>;
  }

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperature (K)" />
          <Line type="monotone" dataKey="windSpeed" stroke="#82ca9d" name="Wind Speed (m/s)" />
          <Line type="monotone" dataKey="humidity" stroke="#ffc658" name="Humidity (%)" />
          <Line type="monotone" dataKey="pressure" stroke="#ff7300" name="Pressure (hPa)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;