import "./css/DashboardMenu.css";
import DaysForecast from "./components/widgets/DaysForecast";
import HourlyForecast from "./components/widgets/HourlyForecast";
import FeelsLike from "./components/widgets/FeelsLike";
import { DashboardProvider } from "./contexts/DashboardContext";
import Precipitation from "./components/widgets/Precipitation";

function DashboardMenu({ closeDashboard }) {
  return (
    <DashboardProvider>
      <main className="dashboard">
        <DaysForecast />
        <HourlyForecast />
        <FeelsLike />
        <Precipitation/>
      </main>

      <button onClick={closeDashboard}>Back</button>
    </DashboardProvider>
  );
}

export default DashboardMenu;
