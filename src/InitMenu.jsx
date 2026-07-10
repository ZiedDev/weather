import "./css/InitMenu.css";
import SparkleLines from "./components/SparkleLines";
import HighlightText from "./components/HighlightText";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useWeather } from "./contexts/WeatherContext";

function InitMenu({ mode = "idle" }) {
  const textRef = useRef(null);
  const { status } = useWeather();

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
    );
  }, [mode]);

  return (
    <main className="init-menu">
      <SparkleLines />

      <h1 ref={textRef}>
        {status === "loading" ? (
          <>
            <HighlightText text="FETCHING" /> DATA...
          </>
        ) : status === "locating" ? (
          <>
            Checking <HighlightText text="Automatically" />...
          </>
        ) : (
          <>
            Press <HighlightText text="S" /> to{" "}
            <HighlightText text="Quick Search" />
          </>
        )}
      </h1>
    </main>
  );
}

export default InitMenu;
