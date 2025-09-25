
import { FaChartLine } from "react-icons/fa6";
import { ApprovalManagement, Dashboard, UserManagement } from "../../../src/Pages";
export const SidebarItems = [
  {
    title: "Dashboard",
    element: <Dashboard />,
    route: "/dashboard",
    icon: <FaChartLine />
  },
  {
    title: "Approval Management",
    element: <ApprovalManagement />,
    route: "/approvemanagement",
    icon: <FaChartLine />
  },
  {
    title: "User Management",
    element: <UserManagement />,
    route: "/usermanagement",
    icon: <FaChartLine />
  },
  {
    title: "Children",
    element: "",
    route: "/child",
    icon: <FaChartLine />,
    children: [
      {
        title: "Dashboard1",
        element: <Dashboard />,
        route: "/child/dashboard1",
        icon: <FaChartLine />
      },
      {
        title: "Dashboard2",
        element: <Dashboard />,
        route: "/child/dashboard2",
        icon: <FaChartLine />
      },
    ],
  },

  {
    title: "Children2",
    element: <Dashboard />,
    route: "/child",
    icon: <FaChartLine />,
    children: [
      {
        title: "Dashboard3",
        element: <Dashboard />,
        route: "/child/dashboard3",
        icon: <FaChartLine />,
      },
      {
        title: "Dashboard4",
        element: <Dashboard />,
        route: "/child/dashboard4",
        icon: <FaChartLine />,
      },
    ],
  },
];
