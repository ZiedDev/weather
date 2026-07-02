import "./css/InitMenu.css";
import SparkleLines from "./components/SparkleLines";
import HighlightText from "./components/HighlightText";

function InitMenu() {
  return (
    <main className="init-menu">
      <SparkleLines />
      <h1>
        Press <HighlightText text={"INSERT"} /> to{" "}
        <HighlightText text={"Search"} />
      </h1>
    </main>
  );
}

export default InitMenu;
