import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { Moon } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen overflow-y-auto">
        <Sidebar className="flex basis-1/5 overflow-hidden" />
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center justify-end bg-white w-full px-6 py-4 sticky top-0 z-10">
            <div className="cursor-pointer p-2 text-gray-500 bg-gray-50 rounded-full hover:bg-gray-200 transition-all duration-200 delay-0">
              <Moon className="size-5" />
            </div>
          </div>
          <div className="p-6 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
