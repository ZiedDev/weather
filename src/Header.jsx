import "./css/Header.css";
import { Icon } from "@iconify/react";

function Header({setSearchMenu}) {
  return (
    <header>
        <h2>WEATHER</h2>
        <button onClick={() => setSearchMenu(1)} ><Icon icon="ph:magnifying-glass-bold"/></button>
        <button><Icon icon="ph:gear-bold"/></button>
    </header>
  );
}

export default Header;
