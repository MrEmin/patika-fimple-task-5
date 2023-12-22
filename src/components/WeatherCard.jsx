import React from 'react';
import '../App.css';

const WeatherCard = ({ day, weather, tempMin, tempMax }) => {
  return (
    <div className="weather-card">
      <h3>{day}</h3>
      <img src={`https://openweathermap.org/img/wn/${weather}.png`} alt={`Weather icon for ${weather}`} />
      <p>{tempMin}°C / {tempMax}°C</p>
    </div>
  );
};

export default WeatherCard;
