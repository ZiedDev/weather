import { createContext, useContext, useEffect, useState } from "react";
import { GetWeatherData } from "../helper/weatherFetching";

const WeatherContext = createContext();

const MIN_LOADING_TIME = 500;

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);

  const [status, setStatus] = useState("idle");
  // idle | locating | loading

  const [location, setLocation] = useState(() => {
    return localStorage.getItem("location");
  });

  const selectLocation = (lat, lon) => {
    const value = `${lat},${lon}`;
    localStorage.setItem("location", value);
    setLocation(value);
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      console.warn("Geolocation is not supported.");
      return;
    }

    setStatus("locating");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        selectLocation(coords.latitude, coords.longitude);
      },
      (err) => {
        console.warn("Geolocation failed:", err.message);
        setStatus("idle");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 300000,
      },
    );
  };

  const clearLocation = () => {
    localStorage.removeItem("location");
    setWeatherData(null);
    setLocation(null);
    setStatus("idle");
  };

  // Auto detect location on first launch
  useEffect(() => {
    if (!location) {
      useCurrentLocation();
    }
  }, [location]);

  // Fetch weather whenever location changes
  useEffect(() => {
    if (!location) return;

    let cancelled = false;

    const loadWeather = async () => {
      setStatus("loading");

      const start = Date.now();
      const data = await GetWeatherData(location);

      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_LOADING_TIME - elapsed);

      setTimeout(() => {
        if (cancelled) return;

        setWeatherData(data);
        setStatus("idle");
      }, delay);
    };

    loadWeather();

    return () => {
      cancelled = true;
    };
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        loading: status === "loading",
        status,
        location,
        selectLocation,
        useCurrentLocation,
        clearLocation,
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