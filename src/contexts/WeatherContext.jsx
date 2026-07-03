import { createContext, useContext, useEffect, useState } from "react";
import { GetWeatherData } from "../helper/weatherFetching";

const WeatherContext = createContext();

const MIN_LOADING_TIME = 500;

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState(() => {
    return localStorage.getItem("location");
  });

  useEffect(() => {
    if (!location) return;

    let isCancelled = false;

    async function loadWeather() {
      setLoading(true);

      const start = Date.now();

      const data = await GetWeatherData(location);

      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

      setTimeout(() => {
        if (isCancelled) return;

        setWeatherData(data);
        setLoading(false);
      }, remaining);
    }

    loadWeather();

    localStorage.setItem("location", location);

    return () => {
      isCancelled = true;
    };
  }, [location]);

  const selectLocation = (lat, lon) => {
    setLocation(`${lat},${lon}`);
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        loading,
        location,
        selectLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWeather() {
  return useContext(WeatherContext);
}