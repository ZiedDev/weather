import { createContext, useContext, useMemo, useState } from "react";
import { useWeather } from "./WeatherContext";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const { weatherData } = useWeather();

  const [selectedDay, setSelectedDay] = useState(0);

  const selectedForecast = useMemo(() => {
    return weatherData?.forecast?.forecastday?.[selectedDay];
  }, [weatherData, selectedDay]);

  return (
    <DashboardContext.Provider
      value={{
        selectedDay,
        setSelectedDay,
        selectedForecast,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => useContext(DashboardContext);