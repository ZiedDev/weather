import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { SearchProvider } from "./contexts/SearchContext";
import { WeatherProvider } from "./contexts/WeatherContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </WeatherProvider>
  </StrictMode>
);