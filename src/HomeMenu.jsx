import "./css/HomeMenu.css";
import { Icon } from "@iconify/react";
import { useWeather } from "./contexts/WeatherContext";

function HomeMenu() {
  const { weatherData } = useWeather();

  console.log(weatherData);

  return (
    <main>
      <div className="location">
        <h3>
          {weatherData.location.region}, {weatherData.location.country}
        </h3>
        <h1>{weatherData.location.name}</h1>
      </div>
      <div className="weather">
        <div className="current-weather">
          <Icon icon="ph:moon-fill"></Icon>
          <h1>{weatherData.current.temp_c}°C</h1>
        </div>
        <div className="max-min-weather">
          <h3>{weatherData.forecast.forecastday[0].day.mintemp_c}↓</h3>
          <h3>{weatherData.forecast.forecastday[0].day.maxtemp_c}↑</h3>
        </div>
      </div>
      <h2>Its {weatherData.current.condition.text} Today</h2>
    </main>
  );
}

export default HomeMenu;
