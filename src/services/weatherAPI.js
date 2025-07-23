const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city) => {
  if (!API_KEY) {
    throw new Error('Weather API key is not configured');
  }

  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the spelling and try again.');
      } else if (response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      } else {
        throw new Error(`Weather service error: ${response.status}`);
      }
    }

    const data = await response.json();
    
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      main: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      visibility: data.visibility / 1000, // Convert to km
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      icon: data.weather[0].icon,
      timestamp: new Date().toLocaleString()
    };
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
};

export const getCitysuggestions = async (query) => {
  if (!API_KEY || query.length < 3) return [];

  try {
    const response = await fetch(
      `${BASE_URL}/find?q=${encodeURIComponent(query)}&appid=${API_KEY}&cnt=5`
    );

    if (response.ok) {
      const data = await response.json();
      return data.list.map(city => ({
        name: city.name,
        country: city.sys.country,
        fullName: `${city.name}, ${city.sys.country}`
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    return [];
  }
};