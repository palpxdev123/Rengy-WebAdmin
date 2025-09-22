import Linegraph from "../../Components/Line";
import PageLayout from "../../Components/PageLayout";
import "../../Styles/index.scss";
import FlatCard from "./Components/Cards";
import type { ChartData, ChartDataset, ChartOptions } from "chart.js";
import './style.scss';

const Dashboard = () => {
  // Base dataset
  const baseDataset: ChartDataset<"line", number[]> = {
    label: "Loan requests",
    data: [4, 8, 10, 10, 9, 6, 6, 9, 13, 18, 24, 30],
    borderColor: "#27D392",
    borderWidth: 2,
    fill: true,
    backgroundColor: "#27D392",
    tension: 0.4,
  };

  // Chart data
  const chartData: ChartData<"line", number[], string> = {
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

  // Chart options
  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        grid: { color: "#E2E8F0" },
      },
    },
  };

  return (
    <PageLayout title={"Dashboard"}>
      <FlatCard value={2847} percentage={12.5} label="Total Active Users" />

      {/* ✅ Correct usage */}
      <Linegraph
        data={chartData}
        options={chartOptions}
        title="Loan Request Applications"
      />
    </PageLayout>
  );
};

export default Dashboard;
