import { Checkbox } from "antd";
import { Bargarph, Input, SelectComponent, TableComponent } from "../../Components";
import "../../Styles/index.scss";

import "./style.scss";
import { BiSortAlt2 } from "react-icons/bi";
import { color } from "chart.js/helpers";
import BarRow from "../../Components/Bargraph";
import FlatCard from "./Components/Cards";
import { GridIcon, HumburgerIcom } from "../../assets/Images";
import "../../styles/_utilities.scss"


const Dashboard = () => {
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

  const columns = [
    {
      title: "Project ID",
      dataIndex: "projectid",
      key: "projectid",
      width: "80px",
      render: (_: string, record: any) => {
        return <div className="ProjectID">{record?.projectid}</div>;
      },
      onHeaderCell: () => ({
        style: {
          maxWidth: 150,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      }),
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
      sorter: {
        compare: (a: any, b: any) => a.vendor.localeCompare(b.vendor),
      },
      sortIcon: (sortOrder: any) => <BiSortAlt2 size={15} />,
      width: "80px",
      onHeaderCell: () => ({
        style: {
          maxWidth: 150,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      }),
      ellipsis: true,
    },

    {
      title: "Amount Due",
      dataIndex: "amountdue",
      key: "subTitle",
      sorter: {
        compare: (a: any, b: any) => a.vendor.localeCompare(b.vendor),
      },
      sortIcon: (sortOrder: any) => <BiSortAlt2 size={15} />,
      width: "80px",
      onHeaderCell: () => ({
        style: {
          maxWidth: 150,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      }),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: {
        compare: (a: any, b: any) => a.vendor.localeCompare(b.vendor),
      },
      sortIcon: (sortOrder: any) => <BiSortAlt2 size={15} />,
      width: "80px",
      onHeaderCell: () => ({
        style: {
          maxWidth: 150,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      }),
    },
    {
      title: "Assigned to",
      dataIndex: "assigendto",
      key: "assigendto",
      sorter: {
        compare: (a: any, b: any) => a.vendor.localeCompare(b.vendor),
      },
      sortIcon: (sortOrder: any) => <BiSortAlt2 size={15} />,
      onHeaderCell: () => ({
        style: {
          maxWidth: 150,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      }),
    },
    {
      title: "",
      dataIndex: "message",
      key: "message",
    },
  ];

  const dataSource = [
    {
      key: "1",
      projectid: "PRJ-1001",
      vendor: "TechnoBuild Solutions Pvt. Ltd.",
      amountdue: "₹45,000",
      type: "Construction",
      assigendto: "Ravi Kumar",
      message: "Pending invoice verification",
    },
    {
      key: "2",
      projectid: "PRJ-1002",
      vendor: "UrbanEdge Developers",
      amountdue: "₹1,20,000",
      type: "Real Estate",
      assigendto: "Anjali Mehta",
      message: "Awaiting payment approval",
    },
    {
      key: "3",
      projectid: "PRJ-1003",
      vendor: "BlueStone Interiors",
      amountdue: "₹65,500",
      type: "Interior Design",
      assigendto: "Karthik Raj",
      message: "PO created, awaiting confirmation",
    },
    {
      key: "4",
      projectid: "PRJ-1004",
      vendor: "EcoSmart Lighting Co.",
      amountdue: "₹28,750",
      type: "Electrical",
      assigendto: "Divya Sharma",
      message: "Payment scheduled next week",
    },
    {
      key: "5",
      projectid: "PRJ-1005",
      vendor: "AeroTech Consultants",
      amountdue: "₹92,300",
      type: "Engineering",
      assigendto: "Suresh Iyer",
      message: "Review under process",
    },
  ];

  const handleRowSelction = (value: any) => {
    console.log("DashboardRowSelection", value);
  };

  return (
    <>
      <div className="flex justify-between items-center p-[16px]">
        <h1 className="hfourteen">Hi Akhil</h1>
        <div className="flex gap-[8px]">
          <SelectComponent
            name="header22"
            value={"Monthly"}
            size="small"
            onChange={(name, value) => console.log(name, value)}
            selectClass="!rounded-[100px] selectborder !py-[5px] !px-[12px]"
            // calender={true}
            calenderprefix={true}
            calendersuffix={false}
          />
          <SelectComponent
            name="header22"
            value={"Export"}
            size="small"
            onChange={(name, value) => console.log(name, value)}
            selectClass="!rounded-[100px] !py-[5px] !px-[12px] selectborder"
            calenderprefix={false}
          />
        </div>
      </div>
      <div className="flex gap-[16px] p-[16px]">
        <FlatCard
          value={250}
          label="Total Leads Created"
          isPositive={true}
          percentage="+18 leads vs last 30 days"
        />
        <FlatCard
          value="30%"
          label="Conversion Rate"
          isPositive={true}
          percentage="+12 converted vs last 30 days"
        />
        <FlatCard
          value="₹12.5 Cr"
          label="Total Pipeline Value"
          isPositive={true}
          percentage="+₹1.2 Cr profit vs last 30 days"
        />
        <FlatCard
          value="₹2.5 Lakhs"
          label="Pending Payment Projects"
          isPositive={false}
          percentage="5 projects delayed by 8 days "
        />
      </div>
      <div className="px-[16px] flex gap-[8px]">
        <div className="w-[397px] h-[279px]">
          <div className="dashboardcard rounded-[8px] p-[15px]">
            <div className="flex justify-between mb-[12px]">
              <p>Revenue Funnel</p>
              <SelectComponent
                size="small"
                name="header22"
                onChange={(name, value) => console.log(name, value)}
                calender={true}
                value={"Last 7 Days"}
                options={[{ label: "Today", value: "today" }]}
                selectClass="!py-[5px] !px-[8px] !rounded-[100px]"
                calenderprefix={true}
              />
            </div>

            {barsData.map((bar, index) => (
              <Bargarph
                key={index}
                label={bar.label}
                value={bar.value}
                barWidth={bar.barWidth}
                barColorClass={bar.barColorClass}
              />
            ))}
          </div>
        </div>
           <div className="flex">
      <TableComponent
        dataSource={dataSource}
        columns={columns}
        handleRowSelction={handleRowSelction}
        pagination={false}
      />
    </div>
      </div>

      <div className="px-[16px]">
        <div className="flex justify-between">
          <h3 className="hone pipeline">My Pipeline</h3>
          <div className="flex gap-[8px] items-center">
            <div className="h-[34px] w-[40px] !rounded-[100px] selectborder flex justify-center items-center !py-[5px] !px-[8px]">
              {" "}
              <img src={GridIcon} alt="" />
            </div>
            <div className="h-[34px] w-[40px] !rounded-[100px] selectborder flex justify-center items-center !py-[5px] !px-[8px]">
              <img src={HumburgerIcom} alt="" />
            </div>
            <Input
              search
              inputClass=" !rounded-[100px] !w-[300px]"
              placeholder="Search"
              size="small"
            />
            <SelectComponent
              size="small"
              name="header22"
              onChange={(name, value) => console.log(name, value)}
              calender={true}
              value={"Filter"}
              options={[{ label: "Today", value: "today" }]}
              selectClass="!py-[5px] !px-[8px] !rounded-[100px] selectborder "
              calenderprefix={true}
              filter={true}
            />
            <SelectComponent
              size="small"
              name="header22"
              onChange={(name, value) => console.log(name, value)}
              calender={true}
              value={"Customise"}
              options={[{ label: "Today", value: "today" }]}
              selectClass="!py-[5px] !px-[8px] !rounded-[100px] selectborder"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
