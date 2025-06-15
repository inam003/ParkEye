import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar className="flex basis-1/5 overflow-hidden" />
        <div
          className="flex-1
         pt-11 h-screen overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
