import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BarChartComponent from "../Components/Barchart";
import "../styles/_utilities.scss";
import "../Components/Typo/style.scss";
import { Input, SelectComponent } from "../Components";
import BarRow from "../Components/Bargraph";
import FlatCard from "../Pages/Dashboard/Components/Cards";
// import { CalenderIcon } from "../assets/Images/calender.png";
import { GridIcon, HumburgerIcom } from "../assets/Images";

function Layout() {
  const columns = [
    {
      title: "Project ID",
      dataIndex: "projectid",
      key: "projectid",
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
      width: 300,
    },
    {
      title: "Amount Due",
      dataIndex: "amountdue",
      key: "subTitle",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Assigned to",
      dataIndex: "assigendto",
      key: "assigendto",
    },
    {
      title: "",
      dataIndex: "message",
      key: "message",
    },
  ];

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

  return (
    <>
      <div className="flex w-[100%]">
        <Sidebar />
        <div className=" w-[calc(100%-300px)] ">
          <Header />
<main>
  
</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
