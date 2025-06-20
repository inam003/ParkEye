import { DollarSign, Route, SunIcon } from "lucide-react";
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
  const cards = [
    {
      icon: <SunIcon size={25} />,
      value: `${new Date().getHours()}:${new Date().getMinutes()} PM`,
      title: "Day Time",
    },
    {
      icon: <Route size={25} />,
      value: dashboardData?.totalTrips,
      title: "Trips",
    },
    {
      icon: <DollarSign size={25} />,
      value: dashboardData?.totalTransaction,
      title: "Transactions",
    },
    {
      icon: <DollarSign size={25} />,
      value: dashboardData?.totalFines,
      title: "Fines",
    },
    {
      icon: <DollarSign size={25} />,
      value: dashboardData?.finePerKm,
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
            <div className="text-2xl font-semibold">{card.value}</div>
            <div className="text-sm text-[#676767]">{card.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GetDashboardDataCards;
