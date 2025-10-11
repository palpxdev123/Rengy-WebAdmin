import { Checkbox } from "antd";
import { FaChevronUp } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import {
  Bargarph,
  Input,
  SelectComponent,
  TableComponent,
} from "../../Components";
import "../../Styles/index.scss";

import "./style.scss";
import { BiSortAlt2 } from "react-icons/bi";
import { color } from "chart.js/helpers";
import BarRow from "../../Components/Bargraph";
import FlatCard from "./Components/Cards";
import {
  GridIcon,
  HumburgerIcom,
  LocationIcon,
  ProfileIconPipe,
  DownloadPipe,
} from "../../assets/Images";
import "../../styles/_utilities.scss";

// import { GridIcon, HumburgerIcom } from "../../";

const Dashboard = () => {
  const cardsData = [
    {
      type: "NewLead",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#01023",
      name: "Ramesh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "1st cross, HSR Layout, Bangalore - 560098",
      status1: "Site Survey Scheduled",
      lastUpdated: "2 Days ago",
      source: "Vendor",
      vendor: "Rajesh",
      buttonLabel: "View Details",
    },
    {
      type: "NewLead",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#01023",
      name: "Ramesh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "1st cross, HSR Layout, Bangalore - 560098",
      status1: "Site Survey Scheduled",
      lastUpdated: "2 Days ago",
      source: "Vendor",
      vendor: "Rajesh",
      buttonLabel: "View Details",
    },
    {
      type: "NewLead",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#01023",
      name: "Ramesh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "1st cross, HSR Layout, Bangalore - 560098",
      status1: "Site Survey Scheduled",
      lastUpdated: "2 Days ago",
      source: "Vendor",
      vendor: "Rajesh",
      buttonLabel: "View Details",
    },
    {
      type: "SiteSurvey",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#001024",
      name: "Suresh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "2nd cross, HSR Layout, Bangalore - 560098",
      status1: "Site Survey Scheduled",
      lastUpdated: "3 Days ago",
      finalQuotation: "₹4,50,000",
      projectValue: "₹6,50,000",
      buttonLabel: "View Details",
    },
    {
      type: "SiteSurvey",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#001024",
      name: "Suresh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "2nd cross, HSR Layout, Bangalore - 560098",
      status1: "Site Survey Scheduled",
      lastUpdated: "3 Days ago",
      finalQuotation: "₹4,50,000",
      projectValue: "₹6,50,000",
      buttonLabel: "View Details",
    },
    {
      type: "Payments",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#100025",
      name: "Mahesh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "3rd cross, HSR Layout, Bangalore - 560098",
      status1: "60% Amount Paid",
      status2: "DPR",
      projectValue: "₹6,50,000",
      amountPaid: "₹4,50,000",
      dueAmount: "₹2,50,000",
      buttonLabel: "View Details",
    },
    {
      type: "Payments",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#100025",
      name: "Mahesh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "3rd cross, HSR Layout, Bangalore - 560098",
      status1: "60% Amount Paid",
      status2: "DPR",
      projectValue: "₹6,50,000",
      amountPaid: "₹4,50,000",
      dueAmount: "₹2,50,000",
      buttonLabel: "View Details",
    },
    {
      type: "Payments",
      title: "Bangalore – Rooftop 5kW",
      leadId: "#100025",
      name: "Mahesh",
      profileIcon: "/profile-icon.png",
      downloadIcon: "/download-icon.png",
      locationIcon: "/location-icon.png",
      location: "3rd cross, HSR Layout, Bangalore - 560098",
      status1: "60% Amount Paid",
      status2: "DPR",
      projectValue: "₹6,50,000",
      amountPaid: "₹4,50,000",
      dueAmount: "₹2,50,000",
      buttonLabel: "View Details",
    },
  ];

  const barsData = [
    {
      label: "New Leads added",
      value: 23,
      barWidth: "251px",
      barColor: "Bargraph-1",
    },
    {
      label: "Initial Quotation Approved",
      value: 22,
      barWidth: "176px",
      barColor: "Bargraph-2",
    },
    {
      label: "60% payment",
      value: 20,
      barWidth: "116px",
      barColor: "Bargraph-3",
    },
    {
      label: "Final Payment",
      value: 18,
      barWidth: "106px",
      barColor: "Bargraph-4",
    },
  ];
  const flatCardsData = [
    {
      value: 250,
      label: "Total Leads Created",
      isPositive: true,
      percentage: "+18 leads vs last 30 days",
    },
    {
      value: "30%",
      label: "Conversion Rate",
      isPositive: true,
      percentage: "+12 converted vs last 30 days",
    },
    {
      value: "₹12.5 Cr",
      label: "Total Pipeline Value",
      isPositive: true,
      percentage: "+₹1.2 Cr profit vs last 30 days",
    },
    {
      value: "₹2.5 Lakhs",
      label: "Pending Payment Projects",
      isPositive: false,
      percentage: "5 projects delayed by 8 days",
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

  const newLead = cardsData?.filter((value) => value?.type === "NewLead");
  const siteSurvey = cardsData?.filter((value) => value?.type === "SiteSurvey");
  const payments = cardsData?.filter((value) => value?.type === "Payments");
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
        {flatCardsData.map((card, index) => (
          <FlatCard
            key={index}
            value={card.value}
            label={card.label}
            isPositive={card.isPositive}
            percentage={card.percentage}
          />
        ))}
      </div>

      <div className="px-[16px] flex gap-[8px]">
        <div className="dashboardcard rounded-[8px] w-[397px] h-[279px] pt-[15px] pb-[28px]">
          <div className="flex justify-between mb-[12px] ps-[16.58px] pe-[13px]">
            <p className="w-[100px]">Revenue Funnel</p>
            <SelectComponent
              size="small"
              name="header22"
              onChange={(name, value) => console.log(name, value)}
              calender={true}
              value={"Last 7 Days"}
              options={[{ label: "Today", value: "today" }]}
              selectClass="!py-[5px] !px-[8px] !rounded-[100px] mb-[32.52px]"
              calenderprefix={true}
            />
          </div>
          <div className="ps-[18.38px] pe-[13px]">
            {barsData.map((bar, index) => (
              <BarRow
                key={index}
                label={bar.label}
                value={bar.value}
                barWidth={bar.barWidth}
                barColor={bar.barColor}
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

      <div className="pipelinebg ps-[16px] pe-[21px]">
        <div className="py-[20px]">
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
        <div className="flex justify-between gap-[24px]">
          <div>
            <div className="flex mb-[20px]">
              <div className="NewLeadbg h-[40px] w-[40px] rounded-l-lg flex justify-center items-center">
                01
              </div>
              <div className="flex justify-between items-center bg-[white] rounded-r-lg w-[320px] px-[12px] py-[8px]">
                <p>New Lead</p>
                <p>+</p>
              </div>
            </div>
            {newLead.map((item) => (
              <div className="bg-[white] p-[16px] rounded-[9px] mb-[16px]">
                <div className="flex justify-between items-center mb-[12px]">
                  <p>{item.title}</p>
                  <p className="pe-[4px]">
                    <FaChevronUp />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="PipeLineSecText">Lead ID : {item.leadId}</p>
                    <div className="flex items-center gap-[6px]">
                      <img src={item?.profileIcon} alt="" />
                      <p className="PipeLineSecText">{item?.name}</p>
                    </div>
                  </div>
                  <div>
                    <img src={item.downloadIcon} alt="" />
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={item.locationIcon} alt="" />
                  <p className="PipeLineSecText">{item?.location}</p>
                </div>
                <div className="PipeBorderBottom my-[12px]"></div>
                <div className="flex justify-between items-center mb-[16px]">
                  <div className="h-[28px] px-[12px] bg-[gray] flex justify-center items-center rounded-[40px] PipeLineSecText light-bgcolor">
                    {item?.status1}
                  </div>
                  <p className="PipeLineSecText">{item?.lastUpdated}</p>
                </div>
                <div className="flex justify-between items-center mb-[12px]">
                  <p>
                    Source: <span className="hthirtteen">{item?.source}</span>
                  </p>
                  <p>
                    Vendor Assigned:{" "}
                    <span className="hthirtteen">{item?.vendor}</span>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="h-[40px] w-[326px] NewLeadbg text-white px-[16px] rounded-[8px] flex justify-center items-center">
                    {item?.buttonLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex mb-[20px]">
              <div className="SiteSurvey h-[40px] w-[40px] rounded-l-lg flex justify-center items-center">
                01
              </div>
              <div className="flex justify-between items-center bg-[white] rounded-r-lg w-[320px] px-[12px] py-[8px]">
                <p>Site Survey</p>
                <p>+</p>
              </div>
            </div>
            {siteSurvey.map((item) => (
              <div className="bg-[white] p-[16px] rounded-[9px] mb-[16px]">
                <div className="flex justify-between items-center mb-[12px]">
                  <p>{item.title}</p>{" "}
                  <p className="pe-[4px]">
                    <FaChevronUp />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="PipeLineSecText">Lead ID : {item.leadId}</p>
                    <div className="flex items-center gap-[6px]">
                      <img src={item.profileIcon} alt="" />
                      <p className="PipeLineSecText">{item.name}</p>
                    </div>
                  </div>
                  <div>
                    <img src={item.downloadIcon} alt="" />
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={item.locationIcon} alt="" />
                  <p className="PipeLineSecText">{item.location}</p>
                </div>
                <div className="PipeBorderBottom my-[12px]"></div>
                <div className="flex justify-between items-center mb-[16px]">
                  <div className="h-[28px] px-[12px] bg-[gray] flex justify-center items-center rounded-[40px] PipeLineSecText light-bgcolor">
                    {item.status1}
                  </div>
                  <p className="PipeLineSecText">{item.lastUpdated}</p>
                </div>
                <div className=" mb-[12px]">
                  <p>
                    Final Quotation:{" "}
                    <span className="hthirtteen">{item.finalQuotation}</span>
                  </p>
                  <p>
                    Project Value :{" "}
                    <span className="hthirtteen">{item.projectValue}</span>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="h-[40px] w-[326px] NewLeadbg text-white px-[16px] rounded-[8px] flex justify-center items-center">
                    {item.buttonLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex mb-[20px]">
              <div className="payments h-[40px] w-[40px] rounded-l-lg flex justify-center items-center">
                01
              </div>
              <div className="flex justify-between items-center bg-[white] rounded-r-lg w-[320px] px-[12px] py-[8px]">
                <p>Payment</p>
                <p>+</p>
              </div>
            </div>

            {payments.map((item) => (
              <div className="bg-[white] p-[16px] rounded-[9px] mb-[16px]">
                <div className="flex justify-between items-center mb-[12px]">
                  <p>{item.title}</p>{" "}
                  <p className="pe-[4px]">
                    <FaChevronUp />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="PipeLineSecText">Lead ID : {item.leadId}</p>
                    <div className="flex items-center gap-[6px]">
                      <img src={item.profileIcon} alt="" />
                      <p className="PipeLineSecText">{item.name}</p>
                    </div>
                  </div>
                  <div>
                    <img src={item.downloadIcon} alt="" />
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={item.locationIcon} alt="" />
                  <p className="PipeLineSecText">{item.location}</p>
                </div>
                <div className="PipeBorderBottom my-[12px]"></div>
                <div className="flex justify-between items-center mb-[16px]">
                  <div className="h-[28px] px-[12px] bg-[gray] flex justify-center items-center rounded-[40px] PipeLineSecText light-bgcolor">
                    {item.status1}
                  </div>
                  <div className="h-[28px] px-[12px] bg-[gray] flex justify-center items-center rounded-[40px] PipeLineSecText light-bgcolor">
                    {item.status2}
                  </div>
                </div>
                <div className=" mb-[12px]">
                  <p>
                    Project Value :{" "}
                    <span className="hthirtteen">{item.projectValue}</span>
                  </p>
                  <p>
                    Amount Paid :{" "}
                    <span className="hthirtteen">{item.amountPaid}</span>
                  </p>
                  <p>
                    Due Amount:{" "}
                    <span className="hthirtteen">{item.dueAmount}</span>
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="h-[40px] w-[326px] NewLeadbg text-white px-[16px] rounded-[8px] flex justify-center items-center">
                    {item.buttonLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
