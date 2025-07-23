export const getWeatherIcon = (main, iconCode) => {
  const iconMap = {
    
    'Clear': '☀️',
    
   
    'Clouds': '☁️',
    
   
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    
   
    'Thunderstorm': '⛈️',
     
    'Snow': '❄️',
    
    
    'Mist': '🌫️',
    'Smoke': '🌫️',
    'Haze': '🌫️',
    'Dust': '🌫️',
    'Fog': '🌫️',
    'Sand': '🌫️',
    'Ash': '🌫️',
    'Squall': '💨',
    'Tornado': '🌪️'
  };

 
  const specificIconMap = {
    '01d': '☀️',  
    '01n': '🌙',  
    '02d': '⛅',  
    '02n': '☁️',  
    '03d': '☁️', 
    '03n': '☁️',
    '04d': '☁️' ,
    '04n': '☁️',
    '09d': '🌧️',  
    '09n': '🌧️',
    '10d': '🌦️',  
    '10n': '🌧️', 
    '11d': '⛈️', 
    '11n': '⛈️',
    '13d': '❄️',  
    '13n': '❄️',
    '50d': '🌫️',  
    '50n': '🌫️'
  };


  return specificIconMap[iconCode] || iconMap[main] || '🌤️';
};

export const getBackgroundGradient = (main, iconCode) => {
  const isDay = iconCode?.includes('d');
  
  const gradientMap = {
    'Clear': isDay 
      ? 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
      : 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
    'Clouds': 'linear-gradient(135deg, #ddd6fe 0%, #8b5cf6 100%)',
    'Rain': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    'Drizzle': 'linear-gradient(135deg, #81ecec 0%, #00b894 100%)',
    'Thunderstorm': 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
    'Snow': 'linear-gradient(135deg, #dfe6e9 0%, #b2bec3 100%)',
    'Mist': 'linear-gradient(135deg, #dfe6e9 0%, #74b9ff 100%)',
    'Fog': 'linear-gradient(135deg, #dfe6e9 0%, #74b9ff 100%)',
    'Haze': 'linear-gradient(135deg, #fab1a0 0%, #e17055 100%)'
  };

  return gradientMap[main] || 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)';
};

export const getWeatherAnimation = (main) => {
  const animationMap = {
    'Rain': 'rain-animation',
    'Drizzle': 'drizzle-animation',
    'Snow': 'snow-animation',
    'Thunderstorm': 'thunder-animation',
    'Clear': 'sunny-animation',
    'Clouds': 'clouds-animation'
  };

  return animationMap[main] || '';
};