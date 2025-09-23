import { Notification } from "../../Components";
import BookingChart from "../../Components/Chart";
import PageLayout from "../../Components/PageLayout";
import ProgressBar from "../../Components/Range";
import RequestsApprovalCard from "../../Components/RequestsApproval";
import "../../Styles/index.scss";
import FlatCard from "./Components/Cards";
import ConatctDashboardCard from "./Components/ContactCard";
import "./style.scss";
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
  return (
    <PageLayout title={"tatat"} header2={true}>
      <div className="flex justify-between">
        {DashboardCardvalue?.map((item) => (
          <FlatCard
            value={item?.value}
            percentage={item?.percentage}
            label={item?.label}
          />
        ))}
      </div>
      <div className="py-[24px] flex justify-between">
        <BookingChart
          dashboardData={dashboardData}
          optionsSelect={optionsSelect}
        />
        <ConatctDashboardCard />
        <Notification />
      </div>
      <div>
        <ProgressBar/>
        <RequestsApprovalCard request={requestData} />
      </div>
    </PageLayout>
  );
};

export default Dashboard;
