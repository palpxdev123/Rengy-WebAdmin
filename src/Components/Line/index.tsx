import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions, ChartDataset } from "chart.js";

// Register chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 15, 30, 25, 40],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4, // smooth line
        fill: true, // area under line
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false } },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  };

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
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
