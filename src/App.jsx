import "./css/App.css";
import InitMenu from "./InitMenu";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function App() {
  const [searchMenu, setSearchMenu] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  useGSAP(() => {
    const searchShortCutKeyDown = (event) => {
      if (event.code  == 'Insert') {
        setSearchMenu(searchMenu => !searchMenu);
      }
    };

    window.addEventListener('keydown', searchShortCutKeyDown);

    return () => {
      window.removeEventListener('keydown', searchShortCutKeyDown);
    };
  }, []);

  return (
    <>
      <Header setSearchMenu={setSearchMenu} />
      <InitMenu />
      <Footer />
      {searchMenu ? <Search weatherData={weatherData} setWeatherData={setWeatherData} /> : null}
    </>
  );
}

export default App;
