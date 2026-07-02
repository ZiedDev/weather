import WEATHER_API from "../assets/apikey";

async function GetSearchData(searchQuery) {
  try {
    searchQuery = searchQuery.trim();

    if (!searchQuery) return [];

    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${WEATHER_API}&q=${encodeURIComponent(searchQuery)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const cityData = await response.json();
    return Array.isArray(cityData) ? cityData : [];
  } catch (err) {
    console.error("Failed to fetch search results:", err);
    return [];
  }
}

async function GetWeatherData(searchQuery) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API}&q=${encodeURIComponent(searchQuery)}&aqi=yes&days=3`
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Failed to fetch weather data:", err);
    return null;
  }
}

export { GetSearchData, GetWeatherData };