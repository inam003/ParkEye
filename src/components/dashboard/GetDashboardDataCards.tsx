import { Car, DollarSign, Hammer, Moon, Route, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getDashboardData } from "../../api/API";

type DashboardData = {
  totalTrips: number;
  totalTransaction: number;
  totalFines: number;
  finePerKm: number;
};

const GetDashboardDataCards = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData>();
  const hour = new Date().getHours();
  const isEvening = hour >= 18;
  const dayIcon = isEvening ? <Moon size={25} /> : <SunIcon size={25} />;
  const dayTitle = isEvening ? "Evening" : "Day Time";
  const cards = [
    {
      icon: dayIcon,
      value: `${hour}:${new Date().getMinutes()} ${isEvening ? "PM" : "AM"}`,
      title: dayTitle,
    },
    {
      icon: <Car size={25} />,
      value: dashboardData?.totalTrips,
      defaultValue: "25",
      title: "Trips",
    },
    {
      icon: <DollarSign size={25} />,
      value: dashboardData?.totalTransaction,
      defaultValue: "50",
      title: "Transactions",
    },
    {
      icon: <Hammer size={25} />,
      value: dashboardData?.totalFines,
      defaultValue: "75",
      title: "Fines",
    },
    {
      icon: <Route size={25} />,
      value: dashboardData?.finePerKm,
      defaultValue: "100",
      title: "Fine/KM",
    },
  ];

  useEffect(() => {
    getData();
  }, [dashboardData]);

  const getData = async () => {
    try {
      const res = await getDashboardData();
      console.log(res);
      setDashboardData(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between px-4">
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-3 bg-white rounded-[27px] p-5 border border-gray-300 w-44 min-h-44 justify-between items-start"
          >
            <div className="text-zinc-500">{card.icon}</div>
            <div className="text-2xl font-semibold">
              {card.value || card.defaultValue}
            </div>
            <div className="text-sm text-[#676767]">{card.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GetDashboardDataCards;
