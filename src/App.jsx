import React from 'react';
import { WeatherProvider } from './contexts/WeatherContext';
import WeatherContainer from './components/WeatherContainer';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Dropdown />
        <WeatherContainer />
      </WeatherProvider>
    </div>
  );
}

export default App;
