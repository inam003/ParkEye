import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

export default function ViolationsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const data = {
      labels: [
        "2024-12-29",
        "2024-12-30",
        "2024-12-31",
        "2024-12-01",
        "2024-12-02",
        "2024-12-03",
        "2024-12-04",
      ],
      datasets: [
        {
          label: "Paid",
          data: [0, 0, 0, 0, 0, 0, 200],
          backgroundColor: "#10B981",
          borderWidth: 0,
          barThickness: 60,
        },
        {
          label: "Overstay",
          data: [0, 0, 0, 0, 0, 0, 101],
          backgroundColor: "#F59E0B",
          borderWidth: 0,
          barThickness: 60,
        },
        {
          label: "Unpaid",
          data: [0, 0, 0, 0, 0, 0, 23],
          backgroundColor: "#EF4444",
          borderWidth: 0,
          barThickness: 60,
        },
      ],
    };

    const options: ChartOptions<"bar"> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "#6B7280",
            font: {
              size: 12,
            },
          },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 450,
          grid: {
            color: "#E5E7EB",
            // drawBorder: false,
          },
          border: {
            display: false,
          },
          ticks: {
            stepSize: 50,
            color: "#6B7280",
            font: {
              size: 12,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false, // We'll create a custom legend
        },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: (context) => {
              const label = context.dataset.label || "";
              const value = context.parsed.y;
              return `${label}: ${value}`;
            },
          },
        },
      },
      elements: {
        bar: {
          borderRadius: 0,
        },
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
    };

    chartInstance.current = new ChartJS(ctx, {
      type: "bar",
      data,
      options,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const legendItems = [
    { label: "Paid", color: "#10B981" },
    { label: "Overstay", color: "#F59E0B" },
    { label: "Unpaid", color: "#EF4444" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-gray-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Violations Statistics
        </h2>
        <div className="flex items-center gap-6">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-56">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
