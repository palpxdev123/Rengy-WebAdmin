import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import type { ChartOptions, ChartData } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import SelectComponent from "../Select";
import "../Typo/style.scss";
import "../../styles/_utilities.scss";

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
  const [selectedOption, setSelectedOption] = useState<string>("week");

  const bookings = dashboardData?.data?.[2]?.list?.[0]?.[selectedOption] ?? [];

  const chartData: ChartData<"doughnut"> = {
    labels: bookings.map((item) => item.name),
    datasets: [
      {
        label: "Milestones",
        data: bookings.map((item) => item.value),
        backgroundColor: ["#27D392", "#36BCEC", "#0C6946"],
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
        // width: 368,
        height: 426,
        borderRadius: "4px",
        backgroundColor: "#ffffff",
      }}
      className="w-full"
    >
      <article
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // marginBottom: 16,
          borderBottom: "1px #E2E2E3 solid",
          
        }}
        className="p-[20px] h-[65px]"
      >
        <h2 style={{ margin: 0}} className="hthree text-secondary">
          Payment distribution
        </h2>

        {/* ✅ Custom SelectComponent */}
        <SelectComponent
        size="small"
          value={selectedOption}
          // options={optionsSelect}
          placeholder="This week"
           onChange={()=>""}
              name="week"
                // value={"week"}
                options={[{ label: "This week", value: "week" }]}
        />
      </article>

      <div
        style={{
          width: "100%",

          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="pt-3 pr-5 pb-5 pl-5"
      >
        {/* ✅ Fixed Doughnut size */}
        <div style={{ width: "200px", height: "220px", marginBottom: "47px" }}>
          <Doughnut data={chartData} options={options} />
        </div>

        {/* ✅ Custom legend below */}
        <div className="flex gap-[22px]">
          <div className="flex gap-[8px]">
            <div className="h-[8px] w-[8px] rounded bg-[#27D392] mt-[8px]"></div>
            <div className="flex flex-col ">
              <p className="hsix text-secondary">60%</p>
              <p
              className="text-two text-light-secondary"
              >
                National banks
              </p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <div className="h-[8px] w-[8px] rounded bg-[#36BCEC] mt-[8px]"></div>
            <div className="flex flex-col ">
              <p className="hsix text-secondary">30%</p>
              <p
                className="text-two text-light-secondary"
              >
                NBFC
              </p>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <div className="h-[8px] w-[8px] rounded bg-[#0C6946] mt-[8px]"></div>
            <div className="flex flex-col ">
              <p className="hsix text-secondary">10%</p>
              <p
                className="text-two text-light-secondary"
              >
                Direct payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingChart;
