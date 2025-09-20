import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/_utilities.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import BookingChart from "../Pages/Dashboard/Components/Chart/index";

const Layout = () => {
  const [toggle, setToggle] = useState([]);
  const dashboardData = {
  data: [
    {},
    {},
    {
      list: [
        {
          today: [
            { name: "Projects in Installations 60%", value: 60 },
            { name: "Projects in Material Dispatch 30%", value: 20 },
            { name: "Projects in DPR Stage 10%", value: 10 },
          ],
          week: [
            { name: "Projects in Installations 60%", value: 55 },
            { name: "Projects in Material Dispatch 30%", value: 25 },
            { name: "Projects in DPR Stage 10%", value: 15 },
          ],
        },
      ],
    },
  ],
};


  const optionsSelect = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
  ];
  return (
    <div className="h-[100vh] flex w-[100%]">
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <div className=" w-[calc(100%-240px)] ">
        <Header />
        <main className=" flex main-bg h-[calc(100vh-56px)] p-[24px]">
          <BookingChart
        dashboardData={dashboardData}   // ✅ optional but here we pass it
        optionsSelect={optionsSelect}   // ✅ required
        />
        </main>
      </div>
    </div>
  );
};
export default Layout;
