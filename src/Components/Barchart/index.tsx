import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,

} from "chart.js";
import type { ChartOptions, ChartData , Plugin } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js modules
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartDataLabels);

interface BarChartProps {
  labels?: string[];
  datasetLabel?: string;
  data?: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  horizontal?: boolean;
  title?: string;
  hideGrid?: boolean;
  hideLabel?: boolean;
  hideangleline?: boolean;
}

const LabelAtEndPlugin: Plugin<"bar"> = {
  id: "labelAtEnd",
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx;

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);

      meta.data.forEach((bar, index) => {
        const barElement = bar as any; 
        const label = String(chart.data.labels?.[index] ?? "");

        const value = dataset.data[index] as number;

        ctx.save();
        ctx.fillStyle = "#000";
        ctx.font = "bold 12px Arial";

        if ((chart.options as any).indexAxis === "y") {
          ctx.textAlign = "left";

          // ⚡ Adjust Y position to center label vertically
          const centerY = barElement.y; // barElement.y is already the center for horizontal bars
          ctx.fillText(label, barElement.x + 5, centerY + 4); // tweak offset as needed
        } else {
          ctx.textAlign = "center";

          const centerX = barElement.x;
          ctx.fillText(label, centerX, barElement.y - 5);
        }

        ctx.restore();
      });
    });
  },
};


const BarChartComponent: React.FC<BarChartProps> = ({
  labels = ["Jan", "Feb", "Mar", "Apr"],
  datasetLabel = "Dataset",
  data = [10, 20, 30, 40],
  backgroundColor = "rgba(54, 162, 235, 0.6)",
  borderColor = "rgba(54, 162, 235, 1)",
  horizontal = false,
  title = "Bar Chart",
  hideGrid = false,
  hideLabel = false,
  hideangleline = false,
}) => {
  const chartData: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: datasetLabel,
        data,
        backgroundColor,
        borderColor,
        borderWidth: 1,
        barPercentage: 1.1,
        categoryPercentage: 1.0,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      title: {
        display: true,
        text: title,
      },
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        anchor: "start", // value at bar start
        align: "end",
        offset: 4,
        color: "#000",
        font: { weight: "bold" },
        formatter: (value) => value,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: !hideGrid },
        ticks: { display: !hideLabel },
        border: { display: !hideangleline },
      },
      y: {
        beginAtZero: true,
        grid: { display: !hideGrid },
        ticks: { display: !hideLabel },
        border: { display: !hideangleline },
      },
    },
  };

  return <Bar data={chartData} options={options} plugins={[LabelAtEndPlugin]} />;
};

export default BarChartComponent;
