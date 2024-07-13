import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Definición de tipos para las propiedades del componente
interface WeatherChartProps {
  data: Array<{
    time: string | null;
    temperature: number;
    feelsLike: number;
    windSpeed: number;
    windGust: number;
    windDirection: string | null;
    pressure: number;
    humidity: number;
    clouds: number;
    precipitationProbability: number;
    visibility: number;
  }>;
}

const WeatherChart: React.FC<WeatherChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Selecciona una fila de la tabla para mostrar su respectivo gráfico</p>;
  }

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temperature" fill="#8884d8" name="Temperatura (K)" />
          <Bar dataKey="windSpeed" fill="#ffc658" name="Velocidad del Viento (m/s)" />
          <Bar dataKey="pressure" fill="#ff7300" name="Presión (hPa)" />
          <Bar dataKey="humidity" fill="#a4de6c" name="Humedad (%)" />
          </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;