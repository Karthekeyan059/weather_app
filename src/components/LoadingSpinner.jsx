import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loading-icon">🌤️</div>
      </div>
      <p className="loading-text">Fetching weather data...</p>
    </div>
  );
};

export default LoadingSpinner;