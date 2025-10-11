import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BarChartComponent from "../Components/Barchart";
import "../styles/_utilities.scss";
import "../Components/Typo/style.scss";
import { Input, SelectComponent } from "../Components";
import BarRow from "../Components/Bargraph";
import { Outlet } from "react-router-dom";
import { layouts } from "chart.js";
// import { CalenderIcon } from "../assets/Images/calender.png";
interface LayoutContextType {
  layoutChange: string;
  setLayoutChange: React.Dispatch<React.SetStateAction<{ headerName: string }>>;
}

export const ContextParent = createContext<LayoutContextType | null>(null);

const Layout = () => {
  const [layoutChange, setLayoutChange] = useState<any>({
    headerName: "",
  });
  return (
    <ContextParent.Provider
      value={{ layoutChange: layoutChange.headerName, setLayoutChange }}
    >
      <div className="flex w-[100%]">
        <Sidebar />
        <div className=" w-[calc(100%-300px)] ">
          <Header />
          <div className="flex justify-between ">
            <main className="h-[calc(100vh-80px)] p-[16px] bg-main-secondary ">
              <Outlet />
            </main>
            <section className="p-[12px] w-[341px] QuickAction">
              Quick Actions
            </section>
          </div>
        </div>
      </div>
    </ContextParent.Provider>
  );
};

export default Layout;
