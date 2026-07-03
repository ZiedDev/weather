import "./css/InitMenu.css";
import SparkleLines from "./components/SparkleLines";
import HighlightText from "./components/HighlightText";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function InitMenu({ mode = "idle" }) {
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [mode]);

  return (
    <main className="init-menu">
      <SparkleLines />

      <h1 ref={textRef}>
        {mode === "loading" ? (
          <>
            <HighlightText text={"FETCHING  DATA..."} />
          </>
        ) : (
          <>
            Press <HighlightText text={"INSERT"} /> to{" "}
            <HighlightText text={"Search"} />
          </>
        )}
      </h1>
    </main>
  );
}

export default InitMenu;