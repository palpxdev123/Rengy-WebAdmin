import { Notification, SelectComponent } from "../../Components";
import BookingChart from "../../Components/Chart";
import LineChart from "../../Components/Line";
import PageLayout from "../../Components/PageLayout";
import ProgressBar from "../../Components/Range";
import RequestsApprovalCard from "../../Components/RequestsApproval";
import "../../Styles/index.scss";
import FlatCard from "./Components/Cards";
import ConatctDashboardCard from "./Components/ContactCard";
import "./style.scss";
import { Profile } from "../../assets/Images";
import ContactArea from "./Components/ContactsArea";
import StagewiseProject from "./Components/DashboardTabSection";
const Dashboard = () => {
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

  const requestData = {
    title: "Discount Approval",
    description: "Requesting discount to close sale (after SO is created)",
    projectId: "#PRJ-1230",
    status: "Pending" as const,
    vendor: "ABC Solr Pvt. Ltd.",
    amount: "₹15,000",
    date: "13 Jan 2025",
    flow: "Operation Head → MD",
  };

  const DashboardCardvalue = [
    {
      value: "2.4M",
      percentage: 12.5,
      label: "Revenue",
    },
    {
      value: 2847,
      percentage: 12.5,
      label: "Total Active Users",
    },
    {
      value: 156,
      percentage: 12.5,
      label: "Total Loan Requests",
    },
    {
      value: 89,
      percentage: 12.5,
      label: "Active Projects",
    },
    {
      value: 23,
      percentage: -8.2,
      label: "Pending Approvals",
    },
  ];

  const ContactData = [
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
    {
      profile_pic: Profile,
      profile_name: "Nagraj",
      phone_number: "+91 9980556655",
      email: "savannah@gmail.com",
    },
  ];

  const tabs = [
    "All",
    "Exceptional",
    "DPR Preparation",
    "Material Dispatched",
    "National",
  ];

  const Stagewiseproject = [
    {
      project_name: "Solar panel Installation",
      Request_Id: "#REQ-123",
      stage: "DPR Preparation stage",
      expected_delivery_by: "12 Aug 2025",
      requested_by: "Rajesh K",
    },
    {
      project_name: "Solar panel Installation",
      Request_Id: "#REQ-123",
      stage: "DPR Preparation stage",
      expected_delivery_by: "12 Aug 2025",
      requested_by: "Rajesh K",
    },
    {
      project_name: "Solar panel Installation",
      Request_Id: "#REQ-123",
      stage: "DPR Preparation stage",
      expected_delivery_by: "12 Aug 2025",
      requested_by: "Rajesh K",
    },
    {
      project_name: "Solar panel Installation",
      Request_Id: "#REQ-123",
      stage: "DPR Preparation stage",
      expected_delivery_by: "12 Aug 2025",
      requested_by: "Rajesh K",
    },
  ];
  const sampleRequest = {
    title: "Discount Approval",
    description: "Requesting discount to close sale (after SO is created)",
    projectId: "PRJ-1230",
    status: "Pending" as const,
    vendor: "ABC Solr Pvt. Ltd.",
    amount: "$15,000",
    date: "13 Jan 2025",
    flow: "  Operation Head→ MD ",
  };
  return (
    <PageLayout
      title={"tatat"}
      header2={true}
      DashboardCardvalue={DashboardCardvalue}
      ContactData={ContactData}
    >
      <div className=" flex justify-between gap-[24px]">
        <BookingChart
          dashboardData={dashboardData}
          optionsSelect={optionsSelect}
        />
        <ConatctDashboardCard />
      </div>
      <div className="flex justify-between py-[24px]">
        <div className="w-[100%]">
          <div className="rounded-[4px] w-full bg-white">
            <div className="p-[20px] h-[65px] flex justify-between border-b-[1px] border-header items-center">
              <div className="flex">
                <p className=" pr-[8px]">Daily Vendor Flow</p>
              </div>
              <SelectComponent
                value={"week"}
                options={[{ label: "This week", value: "week" }]}
              />
            </div>
            <div className=" p-[20px]">
              <LineChart />
            </div>
          </div>
          <StagewiseProject tabs={tabs} Stagewiseproject={Stagewiseproject} />
          <ProgressBar />
          <RequestsApprovalCard request={sampleRequest} showAltHeader showActions/>
          <RequestsApprovalCard request={sampleRequest} />
        </div>

        <div>{/* <ContactArea ContactData={ContactData} /> */}</div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
