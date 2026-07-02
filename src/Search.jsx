import "./css/Search.css";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import { GetSearchData, GetWeatherData } from "./helper/weatherFetching";

gsap.registerPlugin(useGSAP);

function Search({ weatherData, setWeatherData }) {
  const [cityQuery, setCityQuery] = useState([]);

  useGSAP(() => {}, []);

  return (
    <section>
      <div className="search-box">
        <input
          autoFocus
          type="text"
          id="search-box"
          placeholder="Search for a city"
          onChange={async (event) => {
            let searchResults = await GetSearchData(event.target.value);
            setCityQuery(Array.isArray(searchResults) ? searchResults : []);
            console.log(searchResults);
            
          }}
        />
        <Icon icon="ph:magnifying-glass-bold" />
      </div>
      <div className="search-results">
        {cityQuery.map((city, i) => (
          <button
            key={i}
            data-lat={city.lat}
            data-lon={city.lon}
            onClick={async (event) => {
              console.log(`${city.lat},${city.lon}`);
              let weatherResults = await GetWeatherData(`${event.currentTarget.dataset.lat},${event.currentTarget.dataset.lon}`);
              setWeatherData(weatherResults);
              console.log(weatherData);
            }}
          >
            {city.name}, {city.region}, {city.country}
          </button>
        ))}
        {cityQuery.length == 0 ? (
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
        ) : null}
      </div>
    </section>
  );
}

export default Search;
