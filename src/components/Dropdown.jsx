import React, { useEffect, useState } from 'react';
import { useWeatherContext } from '../contexts/WeatherContext';
import '../App.css';
import citiesData from '../cities.json';

const Dropdown = () => {
  const { changeCity } = useWeatherContext();
  const [cities, setCities] = useState([]);

  const handleCityChange = (e) => {
    changeCity(e.target.value);
  };

  useEffect(() => {
    setCities(citiesData.cities);
  }, []);

  return (
    <div className="dropdown-container">
      <select className='dropdown-select' onChange={handleCityChange}>
        {cities.map((cityName) => (
          <option key={cityName} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
