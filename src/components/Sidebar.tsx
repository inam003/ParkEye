import {
  Blocks,
  ChevronsLeft,
  CircleHelp,
  Home,
  MapPin,
  MessageSquareMore,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { NavLink } from "react-router";
import DashboardLogo from "/ParkeyeLogoDashboard.svg";
import { useState } from "react";
import UserImage from "/Avatar.png";

type SidebarProps = {
  className?: string;
};

const mainMenus = [
  {
    path: "/dashboard",
    icon: <Home className="size-4" />,
    title: "Dashboard",
  },
  {
    path: "maps",
    icon: <MapPin className="size-4" />,
    title: "Maps",
  },
  {
    path: "team",
    icon: <Users className="size-4" />,
    title: "Team",
  },
  {
    path: "assets",
    icon: <Blocks className="size-4" />,
    title: "Assets",
  },
  {
    path: "evidence",
    icon: <MessageSquareMore className="size-4" />,
    title: "Evidence",
  },
  {
    path: "reports-analysis",
    icon: <MessageSquareMore className="size-4" />,
    title: "Reports & Analysis",
  },
  {
    path: "integrations",
    icon: <CircleHelp className="size-4" />,
    title: "Integrations",
  },
];

const secondaryMenu = [
  {
    path: "settings",
    icon: <Settings className="size-4" />,
    title: "Settings",
  },
];

const Sidebar: React.FC<SidebarProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`hidden md:flex flex-col justify-between ${
        sidebarOpen ? "md:w-64" : "md:w-20"
      } transition-all duration-300 left-0 min-h-[91.1vh] max-h-full overflow-hidden bg-white border-r border-slate-200 py-4`}
    >
      <div
        className={`flex items-center justify-between px-3 min-w-0 mt-2 mb-4 ${
          sidebarOpen ? "" : "justify-center"
        }`}
      >
        {sidebarOpen && (
          <img
            src={DashboardLogo}
            alt="Dashboard Logo"
            className="h-8 w-60 min-w-0 max-w-full object-contain overflow-hidden truncate"
            style={{ flexGrow: 1 }}
          />
        )}
        <ChevronsLeft
          className={`size-6 text-gray-400 hover:text-gray-500 transition-all duration-200 ml-2 cursor-pointer ${
            !sidebarOpen ? "rotate-180" : ""
          }`}
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
      </div>

      {sidebarOpen && (
        <div className="relative rounded-lg mx-3 mb-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border text-[#000000e0] border-[#d9d9d9] rounded-lg pl-3 pr-10 py-1 outline-[#a481e6] hover:outline-[#7f56d9] transition-all duration-200 delay-0 hover:outline-1"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            <Search className="size-4 text-gray-500" />
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 justify-between h-full">
        <div
          className={`items-start ${
            sidebarOpen ? "px-2 lg:px-3" : "px-1"
          } text-sm font-medium`}
        >
          {mainMenus.map((menu, id) => (
            <div key={id}>
              <NavLink
                end={menu.path === "/dashboard"}
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg py-2 my-1 text-muted-foreground transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] delay-0 ${
                    isActive
                      ? "bg-[#f7f0ff] text-[#7f56d9]"
                      : "hover:bg-gray-200 hover:text-black"
                  } ${sidebarOpen ? "px-3" : "justify-center px-2"}`
                }
              >
                <span className="size-4">{menu.icon}</span>
                {sidebarOpen && (
                  <span className="whitespace-nowrap">{menu.title}</span>
                )}
              </NavLink>
            </div>
          ))}
        </div>
        <div
          className={`flex flex-col items-start gap-2 w-full ${
            sidebarOpen ? "px-2 lg:px-3" : "px-1"
          } text-sm font-medium mb-2`}
        >
          {secondaryMenu.map((menu, id) => (
            <div key={id} className="w-full">
              <NavLink
                end={menu.path === "/dashboard"}
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg py-2 my-1 text-muted-foreground transition-all duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)] delay-0 ${
                    isActive
                      ? "bg-[#f7f0ff] text-[#7f56d9]"
                      : "hover:bg-gray-200 hover:text-black"
                  } ${sidebarOpen ? "px-3" : "justify-center px-2"}`
                }
              >
                <span className="size-4">{menu.icon}</span>
                {sidebarOpen && (
                  <span className="whitespace-nowrap">{menu.title}</span>
                )}
              </NavLink>
            </div>
          ))}

          <div
            className={` ${
              sidebarOpen
                ? "flex items-center justify-start gap-2 rounded-xl border border-gray-300 p-2 w-full"
                : "mx-auto"
            }`}
          >
            <img src={UserImage} alt="UserImage" />
            {sidebarOpen && (
              <div className="flex flex-col items-start text-base leading-5">
                <span className="font-semibold">James Rhye</span>
                <span className="text-sm text-gray-500">james@parkeye.com</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
