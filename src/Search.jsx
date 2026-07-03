import "./css/Search.css";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { GetSearchData } from "./helper/weatherFetching";
import { useSearch } from "./contexts/SearchContext";
import { useWeather } from "./contexts/WeatherContext";

gsap.registerPlugin(useGSAP);

function Search() {
  const [cityQuery, setCityQuery] = useState([]);
  const { searchMenu, setSearchMenu } = useSearch();
  const { selectLocation } = useWeather();

  const sectionRef = useRef(null);
  const searchBoxRef = useRef(null);

  useGSAP(() => {
    searchBoxRef.current.focus();

    gsap.to(sectionRef.current, {
      backdropFilter: "blur(10px)",
      opacity: searchMenu ? 1 : 0,
      pointerEvents: searchMenu ? "auto" : "none",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [searchMenu]);

  return (
    <section
      ref={sectionRef}
      style={{
        opacity: 0,
        pointerEvents: "none",
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setSearchMenu(false);
        }
      }}
    >
      <div className="search-box">
        <input
          ref={searchBoxRef}
          type="text"
          id="search-box"
          placeholder="Search for a city"
          onChange={async (event) => {
            const searchResults = await GetSearchData(event.target.value);
            setCityQuery(Array.isArray(searchResults) ? searchResults : []);
          }}
        />
        <Icon icon="ph:magnifying-glass-bold" />
      </div>

      <div className="search-results" onClick={() => setSearchMenu(false)}>
        {cityQuery.map((city, i) => (
          <button
            key={i}
            data-lat={city.lat}
            data-lon={city.lon}
            onClick={() => {
              selectLocation(city.lat, city.lon);
              setSearchMenu(false);
            }}
          >
            {city.name}, {city.region}, {city.country}
          </button>
        ))}

        {cityQuery.length === 0 && (
          <h2
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Results will show here
          </h2>
        )}
      </div>
    </section>
  );
}

export default Search;
