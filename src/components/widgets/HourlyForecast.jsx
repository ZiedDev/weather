import "./widget.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { useWeather } from "../../contexts/WeatherContext";
import { useDashboard } from "../../contexts/DashboardContext";
import { useRef } from "react";
import WeatherIcon from "../WeatherIcon";

gsap.registerPlugin(useGSAP);

function HourlyForecast() {
  const { weatherData } = useWeather();

  const widgetRef = useRef(null);
  const cardsRef = useRef(null);
  const thumbRef = useRef(null);

  // Scrollbar dragging
  const draggingScrollbar = useRef(false);
  const startScrollbarX = useRef(0);
  const startScrollbarScroll = useRef(0);

  // Cards dragging
  const draggingCards = useRef(false);
  const startCardsX = useRef(0);
  const startCardsScroll = useRef(0);

  const targetScroll = useRef(0);
  const scrollTween = useRef(null);

  const { selectedForecast } = useDashboard();

  const hours = selectedForecast.hour;

  const updateScrollbar = () => {
    const el = cardsRef.current;
    const thumb = thumbRef.current;

    if (!el || !thumb) return;

    const scrollbar = thumb.parentElement;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (maxScroll <= 0) {
      scrollbar.style.display = "none";
      return;
    }

    scrollbar.style.display = "";

    const thumbWidth = Math.max((el.clientWidth / el.scrollWidth) * 100, 12);

    const percent = el.scrollLeft / maxScroll;

    thumb.style.width = `${thumbWidth}%`;
    thumb.style.left = `${percent * (100 - thumbWidth)}%`;
  };

  // -------------------------
  // Scrollbar Drag
  // -------------------------

  const handleScrollbarPointerDown = (e) => {
    // Only allow left mouse button
    if (e.pointerType === "mouse" && e.button !== 0) return;

    e.stopPropagation();

    if (scrollTween.current) scrollTween.current.kill();

    draggingScrollbar.current = true;
    startScrollbarX.current = e.clientX;
    startScrollbarScroll.current = cardsRef.current.scrollLeft;

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  // Cards Drag
  const handleCardsPointerDown = (e) => {
    // Only allow left mouse button
    if (e.pointerType !== "mouse" || e.button !== 0) return;

    if (scrollTween.current) scrollTween.current.kill();

    draggingCards.current = true;
    startCardsX.current = e.clientX;
    startCardsScroll.current = cardsRef.current.scrollLeft;

    cardsRef.current.setPointerCapture(e.pointerId);

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  const handlePointerMove = (e) => {
    const el = cardsRef.current;
    if (!el) return;

    // Scrollbar dragging
    if (draggingScrollbar.current) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      const track = thumbRef.current.parentElement;
      const trackWidth = track.offsetWidth - thumbRef.current.offsetWidth;

      const delta = e.clientX - startScrollbarX.current;

      el.scrollLeft =
        startScrollbarScroll.current + (delta / trackWidth) * maxScroll;

      targetScroll.current = el.scrollLeft;

      updateScrollbar();
    }

    // Card dragging
    if (draggingCards.current) {
      const delta = e.clientX - startCardsX.current;

      el.scrollLeft = startCardsScroll.current - delta;

      targetScroll.current = el.scrollLeft;

      updateScrollbar();
    }
  };

  const handlePointerUp = () => {
    draggingScrollbar.current = false;
    draggingCards.current = false;

    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  };

  // Scrollbar Click
  const handleTrackClick = (e) => {
    if (e.target === thumbRef.current) return;

    const track = e.currentTarget;
    const el = cardsRef.current;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const rect = track.getBoundingClientRect();

    const clickX = e.clientX - rect.left;

    const thumbWidth = thumbRef.current.offsetWidth;
    const maxThumbLeft = track.clientWidth - thumbWidth;

    const thumbLeft = Math.min(
      Math.max(clickX - thumbWidth / 2, 0),
      maxThumbLeft,
    );

    const percent = thumbLeft / maxThumbLeft;

    targetScroll.current = percent * maxScroll;

    if (scrollTween.current) scrollTween.current.kill();

    scrollTween.current = gsap.to(el, {
      scrollLeft: targetScroll.current,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
      onUpdate: updateScrollbar,
    });
  };

  // Mouse Wheel
  const handleWheel = (e) => {
    const el = cardsRef.current;
    if (!el) return;

    if (el.scrollWidth <= el.clientWidth) return;

    e.preventDefault();

    const max = el.scrollWidth - el.clientWidth;

    targetScroll.current = Math.max(
      0,
      Math.min(max, targetScroll.current + e.deltaY + e.deltaX),
    );

    if (scrollTween.current) scrollTween.current.kill();

    scrollTween.current = gsap.to(el, {
      scrollLeft: targetScroll.current,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
      onUpdate: updateScrollbar,
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      widgetRef.current,
      {
        opacity: 0,
        y: 25,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.45,
        delay: 0.05,
        ease: "power3.out",
        clearProps: "filter",
      },
    );
  });

  useGSAP(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    targetScroll.current = cardsRef.current.scrollLeft;

    updateScrollbar();

    const resize = () => updateScrollbar();

    window.addEventListener("resize", resize);

    const wheelListener = (e) => handleWheel(e);

    cardsRef.current.addEventListener("wheel", wheelListener, {
      passive: false,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", resize);

      cardsRef.current?.removeEventListener("wheel", wheelListener);

      if (scrollTween.current) scrollTween.current.kill();
    };
  }, [weatherData]);

  useGSAP(() => {
    const cards = gsap.utils.toArray(cardsRef.current?.children);

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power3.out",
        stagger: {
          each: 0.04,
          from: "start",
        },
        clearProps: "filter",
      },
    );

    cardsRef.current.scrollLeft = 0;
    targetScroll.current = 0;
    updateScrollbar();
  }, [selectedForecast]);

  return (
    <div className="widget widget-medium" ref={widgetRef}>
      <div className="widget-title">
        <Icon icon="ph:clock" />
        <h3>Hourly Forecast</h3>

        <span className="widget-title-right">Today</span>
      </div>
      <div
        className="hour-cards"
        ref={cardsRef}
        onScroll={updateScrollbar}
        onPointerDown={handleCardsPointerDown}
      >
        {hours.map((hour, i) => (
          <div key={i} className="hour-card">
            <h3>
              {i === 0
                ? "Now"
                : new Date(hour.time).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    hour12: true,
                  })}
            </h3>

            <WeatherIcon code={hour.condition.code} isDay={hour.is_day} />

            <h2>{Math.round(hour.temp_c)}°</h2>
          </div>
        ))}
      </div>

      <div
        className="scrollbar scrollbar-horizontal"
        onPointerDown={handleTrackClick}
      >
        <div
          ref={thumbRef}
          className="scrollbar-thumb"
          onPointerDown={handleScrollbarPointerDown}
        />
      </div>
    </div>
  );
}

export default HourlyForecast;
