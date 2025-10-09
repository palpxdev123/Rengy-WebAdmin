import { Checkbox } from "antd";
import { Bargarph, TableComponent } from "../../Components";
import "../../Styles/index.scss";

import "./style.scss";
import { BiSortAlt2 } from "react-icons/bi";
import { color } from "chart.js/helpers";

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
    <div className="flex">
      <div>
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
      <TableComponent
        dataSource={dataSource}
        columns={columns}
        handleRowSelction={handleRowSelction}
        pagination={false}
      />
    </div>
  );
};

export default Dashboard;
