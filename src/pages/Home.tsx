import GetDashboardDataCards from "../components/dashboard/GetDashboardDataCards";
import Charts from "../components/dashboard/Charts";

const Home = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <GetDashboardDataCards />
      </div>
      <div>
        <Charts activePct={75} idlePct={40} offlinePct={15} />
      </div>
    </div>
  );
};

export default Home;
