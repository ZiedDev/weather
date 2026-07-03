import "./css/Footer.css";
import { useEffect, useState } from "react";
import { useWeather } from "./contexts/WeatherContext";

function Footer() {
  const { weatherData } = useWeather();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // decide timezone
  const timeZone = weatherData?.location?.tz_id;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: timeZone || undefined,
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timeZone || undefined,
  });

  const formattedDate = dateFormatter.format(now);
  const formattedTime = timeFormatter.format(now);

  return (
    <footer>
      <h3>{formattedDate}</h3>
      <h2>
        {formattedTime.split(" ")[0]}{" "}
        <span style={{ fontSize: "12pt" }}>
          {formattedTime.split(" ")[1]}
        </span>
      </h2>
    </footer>
  );
}

export default Footer;