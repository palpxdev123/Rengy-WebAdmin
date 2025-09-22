
import { FaChartLine } from "react-icons/fa6";
import { Dashboard } from "../../../src/Pages";
export const SidebarItems = [
  {
    title: "Admin",
    element: <Dashboard />,
    route: "/dashboard",
    icon: <FaChartLine />
  },
  {
    title: "Children",
    element: <Dashboard />,
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
