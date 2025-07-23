import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import { getWeatherData } from './services/weatherAPI';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">
            <span className="weather-icon">🌤️</span>
            WeatherNow
          </h1>
          <p className="app-subtitle">Get real-time weather updates for any city</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        <main className="main-content">
          {loading && <LoadingSpinner />}
          
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}
          
          {weatherData && !loading && <WeatherCard data={weatherData} />}
          
          {!weatherData && !loading && !error && (
            <div className="welcome-message">
              <div className="welcome-icon">🌍</div>
              <h2>Welcome to WeatherNow</h2>
              <p>Search for any city to get current weather conditions</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;