import "./widget.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { useWeather } from "../../contexts/WeatherContext";
import { useRef } from "react";
import WeatherIcon from "../WeatherIcon";
import { useDashboard } from "../../contexts/DashboardContext";

gsap.registerPlugin(useGSAP);

function DaysForecast() {
  const { weatherData } = useWeather();

  const { selectedDay, setSelectedDay } = useDashboard();
  
  const widgetRef = useRef(null);

  const cardsRef = useRef(null);
  const thumbRef = useRef(null);

  const dragging = useRef(false);
  const startY = useRef(0);
  const startScroll = useRef(0);

  const updateScrollbar = () => {
    const el = cardsRef.current;
    const thumb = thumbRef.current;

    if (!el || !thumb) return;

    const scrollbar = thumb.parentElement;

    const maxScroll = el.scrollHeight - el.clientHeight;

    if (maxScroll <= 0) {
      scrollbar.style.display = "none";
      return;
    }

    scrollbar.style.display = "";

    const thumbHeight = Math.max((el.clientHeight / el.scrollHeight) * 100, 12);

    const percent = el.scrollTop / maxScroll;

    thumb.style.height = `${thumbHeight}%`;
    thumb.style.top = `${percent * (100 - thumbHeight)}%`;
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();

    dragging.current = true;
    startY.current = e.clientY;
    startScroll.current = cardsRef.current.scrollTop;

    document.body.style.userSelect = "none";
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;

    const el = cardsRef.current;

    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) return;

    const track = thumbRef.current.parentElement;
    const trackHeight = track.offsetHeight - thumbRef.current.offsetHeight;

    const delta = e.clientY - startY.current;

    el.scrollTop = startScroll.current + (delta / trackHeight) * maxScroll;
  };

  const handlePointerUp = () => {
    dragging.current = false;
    document.body.style.userSelect = "";
  };

  const handleTrackClick = (e) => {
    if (e.target === thumbRef.current) return;

    const track = e.currentTarget;
    const el = cardsRef.current;

    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) return;

    const rect = track.getBoundingClientRect();

    const clickY = e.clientY - rect.top;

    const thumbHeight = thumbRef.current.offsetHeight;
    const maxThumbTop = track.clientHeight - thumbHeight;

    const thumbTop = Math.min(
      Math.max(clickY - thumbHeight / 2, 0),
      maxThumbTop,
    );

    const percent = thumbTop / maxThumbTop;

    el.scrollTo({
      top: percent * maxScroll,
      behavior: "smooth",
    });
  };

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

  useGSAP(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    updateScrollbar();

    const resize = () => updateScrollbar();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", resize);
    };
  }, [weatherData]);

  return (
    <div className="widget widget-large" ref={widgetRef}>
      <div className="widget-title">
        <Icon icon="ph:calendar-dots" />
        <h3>Days Forecast</h3>
      </div>

      <div className="day-cards" ref={cardsRef} onScroll={updateScrollbar}>
        {weatherData.forecast.forecastday.map((forecast, i) => (
          <div
            key={`a-${i}`}
            className={`day-card ${selectedDay === i ? "selected" : ""}`}
            onClick={() => setSelectedDay(i)}
          >
            <h3 className="day">
              {i === 0
                ? "Today"
                : new Date(forecast.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
            </h3>

            <h4>{forecast.day.mintemp_c}°↓</h4>
            <h4>{forecast.day.maxtemp_c}°↑</h4>
            <h3>{forecast.day.avgtemp_c}°</h3>

            <WeatherIcon code={forecast.day.condition.code} isDay={true} />
          </div>
        ))}
      </div>

      <div className="scrollbar" onPointerDown={handleTrackClick}>
        <div
          ref={thumbRef}
          className="scrollbar-thumb"
          onPointerDown={handlePointerDown}
        />
      </div>
    </div>
  );
}

export default DaysForecast;
