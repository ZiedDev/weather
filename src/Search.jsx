import "./css/Search.css";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { GetSearchData } from "./helper/weatherFetching";
import { useSearch } from "./contexts/SearchContext";
import { useWeather } from "./contexts/WeatherContext";

gsap.registerPlugin(useGSAP);

function Search() {
  const [cityQuery, setCityQuery] = useState([]);
  const { searchMenu, setSearchMenu } = useSearch();
  const { selectLocation, useCurrentLocation } = useWeather();

  const sectionRef = useRef(null);
  const searchBoxRef = useRef(null);
  const startedOnBackdrop = useRef(false);

  // Always contains the latest menu state
  const searchMenuRef = useRef(searchMenu);

  useEffect(() => {
    searchMenuRef.current = searchMenu;
  }, [searchMenu]);

  useGSAP(() => {
    if (searchMenu) {
      requestAnimationFrame(() => {
        searchBoxRef.current?.focus();
      });
    } else {
      searchBoxRef.current?.blur();
    }

    gsap.to(sectionRef.current, {
      backdropFilter: searchMenu ? "blur(10px)" : "blur(0px)",
      opacity: searchMenu ? 1 : 0,
      pointerEvents: searchMenu ? "auto" : "none",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [searchMenu]);

  // Register ONCE
  useEffect(() => {
    const handleKeyDown = (e) => {
      const active = document.activeElement;

      const typing =
        active &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.isContentEditable);

      // Open with S
      if (
        !searchMenuRef.current &&
        !typing &&
        e.key.toLowerCase() === "s" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        !e.repeat
      ) {
        e.preventDefault();
        setSearchMenu(true);
        return;
      }

      // Close with Esc
      if (searchMenuRef.current && e.key === "Escape") {
        e.preventDefault();

        searchBoxRef.current?.blur();

        setSearchMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        opacity: 0,
        pointerEvents: "none",
      }}
      onPointerDown={(e) => {
        startedOnBackdrop.current = e.target === e.currentTarget;
      }}
      onPointerUp={(e) => {
        if (startedOnBackdrop.current && e.target === e.currentTarget) {
          searchBoxRef.current?.blur();
          setSearchMenu(false);
        }

        startedOnBackdrop.current = false;
      }}
    >
      <div className="search-box">
        <input
          ref={searchBoxRef}
          type="text"
          id="search-box"
          placeholder="Search for a city"
          disabled={!searchMenu}
          onChange={async (event) => {
            const searchResults = await GetSearchData(event.target.value);
            setCityQuery(Array.isArray(searchResults) ? searchResults : []);
          }}
        />

        <Icon icon="ph:magnifying-glass-bold" />
      </div>

      <div
        className="search-results"
        onClick={() => {
          searchBoxRef.current?.blur();
          setSearchMenu(false);
        }}
      >
        {cityQuery.map((city, i) => (
          <button
            key={i}
            disabled={!searchMenu}
            data-lat={city.lat}
            data-lon={city.lon}
            onClick={() => {
              selectLocation(city.lat, city.lon);
              searchBoxRef.current?.blur();
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

      <button
        className="current-location-btn"
        disabled={!searchMenu}
        onClick={() => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useCurrentLocation();
          searchBoxRef.current?.blur();
          setSearchMenu(false);
        }}
      >
        <Icon icon="ph:navigation-arrow-fill" />
        Use Geolocation
      </button>
    </section>
  );
}

export default Search;
