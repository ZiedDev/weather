import "./css/App.css";
import HomeMenu from "./HomeMenu";
import InitMenu from "./InitMenu";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import { useRef, useState } from "react";
import { useSearch } from "./contexts/SearchContext";
import { useWeather } from "./contexts/WeatherContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP)

function App() {
  const { weatherData, loading } = useWeather();
  const { setSearchMenu } = useSearch();

  const sceneRef = useRef(null);
  const [view, setView] = useState("init"); // init | loading | home

  useGSAP(() => {
    setView(loading ? "loading" : weatherData ? "home" : "init");
  }, [loading, weatherData]);

  useGSAP(() => {
    gsap.fromTo(
      sceneRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [view]);

  useGSAP(() => {
    const handler = (event) => {
      if (event.code === "Insert") {
        setSearchMenu((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setSearchMenu]);

  return (
    <>
      <Header setSearchMenu={setSearchMenu} />

      <div ref={sceneRef}>
        {view === "loading" && <InitMenu mode="loading" />}
        {view === "init" && <InitMenu mode="idle" />}
        {view === "home" && <HomeMenu />}
      </div>

      <Footer />
      <Search />
    </>
  );
}

export default App;