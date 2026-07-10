import "./widget.css";
import { Icon } from "@iconify/react";
import { useWeather } from "../../contexts/WeatherContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

function FeelsLike() {
  const { weatherData } = useWeather();

  const current = weatherData.current;
  const widgetRef = useRef(null);

  const diff = Math.round(current.feelslike_c - current.temp_c);

  let description;

  if (Math.abs(diff) <= 1) {
    description = "it feels about the same as the actual temperature";
  } else if (diff > 0) {
    description =
      diff <= 3
        ? "it feels slightly higher than the actual temperature"
        : diff <= 6
          ? "it feels noticeably higher than the actual temperature"
          : "it feels much higher than the actual temperature";
  } else {
    description =
      diff >= -3
        ? "it feels slightly lower than the actual temperature"
        : diff >= -6
          ? "it feels noticeably lower than the actual temperature"
          : "it feels much lower than the actual temperature";
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
        <Icon icon="ph:thermometer-simple" />
        <h3>Feels Like</h3>
      </div>

      <div className="feels-like">
        <h1>{current.feelslike_c}°</h1>

        <h3>{description}</h3>
      </div>
    </div>
  );
}

export default FeelsLike;
