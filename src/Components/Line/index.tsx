import { useRef, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions, ChartDataset } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Linegraph: React.FC = () => {
  const chartRef = useRef<ChartJS<"line"> | null>(null);

  const chartData: ChartData<"line"> = useMemo(() => {
    const chart = chartRef.current;
    let gradient: CanvasGradient | string = "#27D392";

    if (chart) {
      const ctx = chart.ctx;
      gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(39, 211, 146, 0.6)"); // top green
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)"); // bottom white
    }

    const baseDataset = {
      label: "Loan requests",
      data: [4, 8, 10, 10, 9, 6, 6, 9, 13, 18, 24, 30],
      borderColor: "#27D392",
      borderWidth: 2,
      fill: true,
      backgroundColor: "rgba(39, 211, 146, 0.3)", // fill color
      tension: 0.4,
      pointRadius: 0, // ✅ remove the dots
    };

    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [baseDataset],
    };
  }, []);

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { display: false },
        ticks: {
          stepSize: 10,
          callback: (value) => value.toString(),
        },
        min: 0,
        max: 30,
      },
    },
  };

  return (
    <div
      className="w-full max-w-3xl h-[350px] bg-white rounded-lg shadow-md p-5"
      style={{ width: "760px", height: "284px" }} // fixed size
    >
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default Linegraph;
