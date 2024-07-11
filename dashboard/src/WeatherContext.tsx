import React, { createContext, useContext, useEffect, useState } from 'react';

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=debecda9eb49c041ee167fec2d838776"); // Reemplaza con la URL de tu API
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        console.log(xml); // Verifica los datos aquí
        setWeatherData(xml);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
};