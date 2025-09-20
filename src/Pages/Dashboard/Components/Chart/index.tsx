import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import type { ChartOptions, ChartData } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import SelectComponent from "../../../../Components/Select";

// ⚡ Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface BookingItem {
  name: string;
  value: number;
}

interface DashboardData {
  data?: {
    list?: Array<Record<string, BookingItem[]>>;
  }[];
}

interface Option {
  label: string;
  value: string;
}

interface BookingChartProps {
  dashboardData?: DashboardData;
  optionsSelect: Option[];
}

const BookingChart: React.FC<BookingChartProps> = ({
  dashboardData,
  optionsSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("today");

  const bookings =
    dashboardData?.data?.[2]?.list?.[0]?.[selectedOption] ?? [];

  const chartData: ChartData<"doughnut"> = {
    labels: bookings.map((item) => item.name),
    datasets: [
      {
        label: "Milestones",
        data: bookings.map((item) => item.value),
        backgroundColor: ["#114B7E", "#1B7CD0", "#B9DAF7"],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
      display: false,
    },
    },
  };

  return (
    <div
      style={{
        width: 400,
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 24,
        boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.25)",
      }}
    >
      <article
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
          Milestone Distribution
        </h2>

        {/* ✅ Custom SelectComponent */}
        <SelectComponent
          value={selectedOption}
          onChange={(value: string) => setSelectedOption(value)}
          options={optionsSelect}
        />
      </article>

      <div style={{ width: "100%", height: "300px" }}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BookingChart;
