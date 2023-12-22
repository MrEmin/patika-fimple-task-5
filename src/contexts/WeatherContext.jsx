import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Adana");

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},TR&units=metric&cnt=40&appid=${apiKey}`;
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const { data } = response;

        if (data && data.list) {
          const dailyData = {};
          data.list.forEach((item) => {
            const date = new Date(item.dt * 1000);
            const day = date.toLocaleDateString("tr-TR", { weekday: "long" });

            if (!dailyData[day]) {
              dailyData[day] = {
                temp_min: item.main.temp_min,
                temp_max: item.main.temp_max,
                icon: item.weather[0].icon,
              };
            } else {
              dailyData[day].temp_min = Math.min(
                dailyData[day].temp_min,
                item.main.temp_min
              );
              dailyData[day].temp_max = Math.max(
                dailyData[day].temp_max,
                item.main.temp_max
              );
            }
          });

          const fiveDaysData = Object.keys(dailyData)
            .slice(0, 5)
            .reduce((acc, day) => {
              acc[day] = dailyData[day];
              return acc;
            }, {});

          setWeatherData(fiveDaysData);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  const changeCity = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, changeCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};

export { WeatherProvider, useWeatherContext };
