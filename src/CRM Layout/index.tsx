import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BarChartComponent from "../Components/Barchart";
import "../styles/_utilities.scss";
import "../Components/Typo/style.scss";
import { SelectComponent } from "../Components";
import BarRow from "../Components/Bargraph";
// import { CalenderIcon } from "../assets/Images/calender.png";

function Layout() {
  const barsData = [
    {
      label: "New Leads added",
      value: 23,
      barWidth: "251px",
      barColorClass: "Bargraph-1",
    },
    {
      label: "Initial Quotation Approved",
      value: 22,
      barWidth: "176px",
      barColorClass: "Bargraph-2",
    },
    {
      label: "60% payment",
      value: 20,
      barWidth: "116px",
      barColorClass: "Bargraph-3",
    },
    {
      label: "Final Payment",
      value: 18,
      barWidth: "106px",
      barColorClass: "Bargraph-4",
    },
  ];
  const labels = [
    "New Leads added",
    "Initial Quotation Approved",
    "60% payment",
    "Final Payment",
  ];
  const data = [40, 30, 20, 10];
  return (
    <>
      <div className="flex w-[100%]">
        <Sidebar />
        <div className=" w-[calc(100%-300px)] ">
          <Header />
          <main className="h-[calc(100vh-80px)]">
            <div className="flex ">
              <div className="flex flex-col justify-between pb-[20px]">
                <p>30</p>
                <p>20</p>
                <p>10</p>
                <p>0</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px] ">
                <div className="h-[120px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]  justify-center px-[6px] pb-[4px]">
                  32
                </div>
                <p>Jan</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Feb</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Mar</p>
              </div> 
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Apr</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>May</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Jun</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Jul</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Aug</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Sep</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Oct</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Nev</p>
              </div>
              <div className="flex flex-col items-center mx-[15.30px]">
                <div className="h-[120px] px-[6px] pb-[4px] bg-[#A8A8A8] flex items-end rounded-[8px] mb-[8.68px]">
                  {" "}
                  32
                </div>
                <p>Dec</p>
              </div>
            </div>
            <div className="w-[397px] h-[279px]">
              <BarChartComponent
                horizontal={true}
                labels={labels}
                datasetLabel="Monthly Sales"
                data={data}
                title="Sales Overview"
                hideGrid={true}
                hideLabel={true}
                hideangleline={true}
                backgroundColor={[
                  "rgba(0, 121, 243, 0.2)",
                  "rgba(0, 121, 243, 0.4)",
                  "rgba(0, 121, 243, 0.7)",
                  "rgba(0, 121, 243, 1)",
                ]}
                borderColor="transparent"
              />
              <div className="dashboardcard rounded-[8px] p-[15px]">
                <div className="flex justify-between mb-[12px]">
                  <p>
                    Revenue <br />
                    Funnel
                  </p>
                  <SelectComponent
                    size="small"
                    name="header22"
                    onChange={(name, value) => console.log(name, value)}
                    calender={true}
                    value={"Last 7 Days"}
                    options={[{ label: "Today", value: "today" }]}
                    className="h-[36px]"
                  />
                </div>
                <div className="bar relative ">
                  <div className="flex items-center ">
                    <div className="h-[45px] Bargraph-1 w-[251px] relative"></div>{" "}
                    <p className="ms-[15px] Barlable text-ten">
                      New Leads <br />
                      added
                    </p>
                  </div>
                  <p className="absolute bottom-2 left-2 hten">23</p>
                </div>
                <div className="bar relative">
                  <div className="flex items-center ">
                    <div className="h-[45px] Bargraph-2 w-[176px] relative"></div>{" "}
                    <p className="ms-[15px] Barlable text-ten">
                      Initial Quotation <br />
                      Approved
                    </p>
                  </div>
                  <p className="absolute bottom-2 left-2 hten">22</p>
                </div>
                <div className="bar relative">
                  <div className="flex items-center ">
                    <div className="h-[45px] Bargraph-3 w-[116px] relative"></div>{" "}
                    <p className="ms-[15px] Barlable text-ten">60% payment</p>
                  </div>
                  <p className="absolute bottom-2 left-2 hten">20</p>
                </div>
                <div className="bar relative">
                  <div className="flex items-center ">
                    <div className="h-[45px] Bargraph-4 w-[106px] relative"></div>{" "}
                    <p className="ms-[15px] Barlable text-ten">Final Payment</p>
                  </div>
                  <p className="absolute bottom-2 left-2 hten">18</p>
                </div>
              </div>

              <div className="dashboardcard rounded-[8px] p-[15px]">
                <div className="flex justify-between mb-[12px]">
                  <p>
                    Revenue <br />
                    Funnel
                  </p>
                  <SelectComponent
                    size="small"
                    name="header22"
                    onChange={(name, value) => console.log(name, value)}
                    calender={true}
                    value={"Last 7 Days"}
                    options={[{ label: "Today", value: "today" }]}
                    className="h-[36px]"
                  />
                </div>

                {barsData.map((bar, index) => (
                  <BarRow
                    key={index}
                    label={bar.label}
                    value={bar.value}
                    barWidth={bar.barWidth}
                    barColorClass={bar.barColorClass}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
