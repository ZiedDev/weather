import "./widget.css";
import { Icon } from "@iconify/react";
import { useWeather } from "../../contexts/WeatherContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

function Precipitation() {
  const { weatherData } = useWeather();

  const rain = Math.round(weatherData.forecast.forecastday[0].day.totalprecip_mm);

  const widgetRef = useRef(null);

  let description;

  if (rain === 0) {
    description = "No Rain expected today";
  } else if (rain <= 2) {
    description = "Light Rain expected today";
  } else if (rain <= 10) {
    description = "Moderate Rain expected today";
  } else if (rain <= 25) {
    description = "Heavy Rain expected today";
  } else {
    description = "Very Heavy Rain expected today";
  }

  useGSAP(() => {
    gsap.fromTo(
      widgetRef.current,
      {
        opacity: 0,
        y: 35,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power3.out",
        clearProps: "filter",
      },
    );
  });

  return (
    <div className="widget widget-small" ref={widgetRef}>
      <div className="widget-title">
        <Icon icon="ph:drop" />
        <h3>Precipitation</h3>
      </div>

      <div className="precipitation">
        <div className="precipitation-value">
          <h1>{rain}</h1>
          <span>mm</span>
        </div>

        <h3>{description}</h3>
      </div>
    </div>
  );
}

export default Precipitation;
