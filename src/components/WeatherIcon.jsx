import { Icon } from "@iconify/react";

const icons = {
  // Clear
  1000: {
    day: "ph:sun-bold",
    night: "ph:moon-bold",
  },

  // Partly cloudy
  1003: {
    day: "ph:cloud-sun-bold",
    night: "ph:cloud-moon-bold",
  },

  // Cloudy
  1006: {
    day: "ph:cloud-bold",
    night: "ph:cloud-bold",
  },

  // Overcast
  1009: {
    day: "ph:cloud-bold",
    night: "ph:cloud-bold",
  },

  // Mist
  1030: {
    day: "ph:cloud-fog-bold",
    night: "ph:cloud-fog-bold",
  },

  // Patchy rain possible
  1063: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Patchy snow possible
  1066: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Patchy sleet possible
  1069: {
    day: "ph:cloud-bold",
    night: "ph:cloud-bold",
  },

  // Patchy freezing drizzle possible
  1072: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Thundery outbreaks possible
  1087: {
    day: "ph:cloud-lightning-bold",
    night: "ph:cloud-lightning-bold",
  },

  // Fog
  1135: {
    day: "ph:cloud-fog-bold",
    night: "ph:cloud-fog-bold",
  },

  // Freezing fog
  1147: {
    day: "ph:cloud-fog-bold",
    night: "ph:cloud-fog-bold",
  },

  // Patchy light drizzle
  1150: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Light drizzle
  1153: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Freezing drizzle
  1168: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Heavy freezing drizzle
  1171: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Patchy light rain
  1180: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Light rain
  1183: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Moderate rain at times
  1186: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Moderate rain
  1189: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Heavy rain at times
  1192: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Heavy rain
  1195: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Light freezing rain
  1198: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Moderate/heavy freezing rain
  1201: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Light sleet
  1204: {
    day: "ph:cloud-bold",
    night: "ph:cloud-bold",
  },

  // Moderate/heavy sleet
  1207: {
    day: "ph:cloud-bold",
    night: "ph:cloud-bold",
  },

  // Patchy light snow
  1210: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Light snow
  1213: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Patchy moderate snow
  1216: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Moderate snow
  1219: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Patchy heavy snow
  1222: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Heavy snow
  1225: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Ice pellets
  1237: {
    day: "ph:circle-bold",
    night: "ph:circle-bold",
  },

  // Light rain shower
  1240: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Moderate/heavy rain shower
  1243: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Torrential rain shower
  1246: {
    day: "ph:cloud-rain-bold",
    night: "ph:cloud-rain-bold",
  },

  // Light sleet showers
  1249: {
    day: "ph:cloud-bold",
    night: "ph:cloud-bold",
  },

  // Moderate/heavy sleet showers
  1252: {
    day: "ph:cloud-bold",
    night: "ph:cloud-bold",
  },

  // Light snow showers
  1255: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Moderate/heavy snow showers
  1258: {
    day: "ph:snowflake-bold",
    night: "ph:snowflake-bold",
  },

  // Light showers of ice pellets
  1261: {
    day: "ph:circle-bold",
    night: "ph:circle-bold",
  },

  // Moderate/heavy showers of ice pellets
  1264: {
    day: "ph:circle-bold",
    night: "ph:circle-bold",
  },

  // Patchy light rain with thunder
  1273: {
    day: "ph:cloud-lightning-bold",
    night: "ph:cloud-lightning-bold",
  },

  // Moderate/heavy rain with thunder
  1276: {
    day: "ph:cloud-lightning-bold",
    night: "ph:cloud-lightning-bold",
  },

  // Patchy light snow with thunder
  1279: {
    day: "ph:cloud-lightning-bold",
    night: "ph:cloud-lightning-bold",
  },

  // Moderate/heavy snow with thunder
  1282: {
    day: "ph:cloud-lightning-bold",
    night: "ph:cloud-lightning-bold",
  },
};

export default function WeatherIcon({
  code,
  isDay,
  fallback = "ph:cloud-bold",
  ...props
}) {
  const icon = icons[code]?.[isDay ? "day" : "night"] ?? fallback;

  return <Icon icon={icon} {...props} />;
}