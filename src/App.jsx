import "./css/App.css";
import HomeMenu from "./HomeMenu";
import DashboardMenu from "./DashboardMenu";
import InitMenu from "./InitMenu";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import { useRef, useState } from "react";
import { useSearch } from "./contexts/SearchContext";
import { useWeather } from "./contexts/WeatherContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function App() {
  const { weatherData, loading } = useWeather();
  const { setSearchMenu } = useSearch();

  const sceneRef = useRef(null);
  const [menu, setMenu] = useState("home"); // home | dashboard
  const [view, setView] = useState("init"); // init | loading | home

  useGSAP(() => {
    if (loading) {
      setMenu("home");
      setView("loading");
      return;
    }

    if (!weatherData) {
      setView("init");
      return;
    }

    setView(menu);
  }, [loading, weatherData, menu]);

  useGSAP(() => {
    gsap.fromTo(
      sceneRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
    );
  }, [view]);

  return (
    <>
      <Header setSearchMenu={setSearchMenu} />

      <div ref={sceneRef}>
        {view === "loading" && <InitMenu mode="loading" />}

        {view === "init" && <InitMenu mode="idle" />}

        {view === "home" && (
          <HomeMenu
            openDashboard={() => setMenu("dashboard")}
          />
        )}

        {view === "dashboard" && (
          <DashboardMenu
            closeDashboard={() => setMenu("home")}
          />
        )}
      </div>

      {/* <Footer /> */}
      <Search />
    </>
  );
}

export default App;
