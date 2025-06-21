import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ViolationsChart from "./ViolationsChart";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  activePct: number;
  idlePct: number;
  offlinePct: number;
}

const remainder = (pct: number) => 100 - pct;

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
};

const Charts: React.FC<Props> = ({ activePct, idlePct, offlinePct }) => {
  const data = React.useMemo<ChartData<"doughnut">>(
    () => ({
      labels: ["All Assets", "Active", "Idle", "Offline"],
      datasets: [
        {
          data: [activePct, remainder(activePct)],
          backgroundColor: ["#58C0EA", "#eee"],
          cutout: "82%",
          radius: "100%",
          rotation: -90,
          borderWidth: 0,
        },
        {
          data: [activePct, remainder(activePct)],
          backgroundColor: ["#50C878", "#eee"],
          cutout: "64%",
          radius: "82%",
          rotation: -90,
          borderWidth: 0,
        },
        {
          data: [idlePct, remainder(idlePct)],
          backgroundColor: ["#FFA500", "#eee"],
          cutout: "46%",
          radius: "64%",
          rotation: -90,
          borderWidth: 0,
        },
        {
          data: [offlinePct, remainder(offlinePct)],
          backgroundColor: ["#FF4500", "#eee"],
          cutout: "28%",
          radius: "46%",
          rotation: -90,
          borderWidth: 0,
        },
      ],
    }),
    [activePct, idlePct, offlinePct]
  );

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="w-96 h-64 overflow-hidden relative flex items-center justify-center bg-white rounded-[27px] p-5 border border-gray-300">
        <div className="flex flex-col justify-center gap-2 bg-white px-3 py-2 h-[120px] min-w-[120px]">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#58C0EA] inline-block"></span>
            <span className="text-[#58C0EA] font-semibold text-xs">
              All Assets
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#50C878] inline-block"></span>
            <span className="text-[#50C878] font-semibold text-xs">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#FFA500] inline-block"></span>
            <span className="text-[#FFA500] font-semibold text-xs">Idle</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#FF4500] inline-block"></span>
            <span className="text-[#FF4500] font-semibold text-xs">
              Offline
            </span>
          </div>
        </div>
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex-1 h-64">
        <ViolationsChart />
      </div>
    </div>
  );
};

export default Charts;

//  flex items-center justify-center bg-white rounded-[27px] p-5 border border-gray-300
