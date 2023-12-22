import React from 'react';
import { useWeatherContext } from '../contexts/WeatherContext';
import WeatherCard from './WeatherCard';
import '../App.css';

const WeatherContainer = () => {
  const { weatherData } = useWeatherContext();

  return (
    <div className="weather-container">
      {weatherData &&
        Object.entries(weatherData).map(([day, data], index) => (
          <WeatherCard
            key={index}
            day={day}
            weather={data.icon}
            tempMin={Math.round(data.temp_min)}
            tempMax={Math.round(data.temp_max)}
          />
        ))}
    </div>
  );
};

export default WeatherContainer;
