import { useRef } from "react";
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

// ✅ Import types separately
import type { ChartData, ChartOptions } from "chart.js";

import { Line } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LoanRequestChartProps {
  data: ChartData<"line">;       
  options?: ChartOptions<"line">;
  title?: string;
}

const LoanRequestChart: React.FC<LoanRequestChartProps> = ({ data, options, title }) => {
  const chartRef = useRef<ChartJS<"line"> | null>(null);

  return (
    <div className="w-full max-w-3xl h-[350px] bg-white rounded-lg shadow-md p-5">
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LoanRequestChart;
