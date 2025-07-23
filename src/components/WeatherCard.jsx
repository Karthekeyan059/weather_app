import React, { useState } from 'react';
import { getWeatherIcon } from '../utils/weathericons';
import '../styles/WeatherCard.css';

const WeatherCard = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const convertTemp = (temp) => {
    return isCelsius ? temp : Math.round((temp * 9/5) + 32);
  };

  const getWindDirection = (degrees) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[Math.round(degrees / 22.5) % 16];
  };

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city-name">{data.city}</h2>
          <p className="country-name">{data.country}</p>
          <p className="last-updated">Updated: {data.timestamp}</p>
        </div>
        <div className="weather-icon-container">
          <div className="weather-icon-large">
            {getWeatherIcon(data.main, data.icon)}
          </div>
        </div>
      </div>

      <div className="temperature-section">
        <div className="main-temperature">
          <span className="temp-value">{convertTemp(data.temperature)}</span>
          <div className="temp-controls">
            <span className="temp-unit">°{isCelsius ? 'C' : 'F'}</span>
            <button className="unit-toggle" onClick={toggleUnit}>
              °{isCelsius ? 'F' : 'C'}
            </button>
          </div>
        </div>
        <div className="feels-like">
          Feels like {convertTemp(data.feelsLike)}°{isCelsius ? 'C' : 'F'}
        </div>
        <div className="weather-description">
          {data.description.charAt(0).toUpperCase() + data.description.slice(1)}
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-grid">
          <div className="detail-item">
            <div className="detail-icon">💧</div>
            <div className="detail-content">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{data.humidity}%</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🌬️</div>
            <div className="detail-content">
              <span className="detail-label">Wind</span>
              <span className="detail-value">
                {data.windSpeed} m/s {data.windDirection && getWindDirection(data.windDirection)}
              </span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🌡️</div>
            <div className="detail-content">
              <span className="detail-label">Pressure</span>
              <span className="detail-value">{data.pressure} hPa</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">👁️</div>
            <div className="detail-content">
              <span className="detail-label">Visibility</span>
              <span className="detail-value">{data.visibility} km</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🌅</div>
            <div className="detail-content">
              <span className="detail-label">Sunrise</span>
              <span className="detail-value">{data.sunrise}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🌇</div>
            <div className="detail-content">
              <span className="detail-label">Sunset</span>
              <span className="detail-value">{data.sunset}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;