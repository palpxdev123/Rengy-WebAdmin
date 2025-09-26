import { LuChartLine } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { LiaUserLockSolid } from "react-icons/lia";
import { LuUserCog } from "react-icons/lu";
import { LuHandCoins } from "react-icons/lu";
import { LuFolderCog } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { PiQuestion } from "react-icons/pi";
import { Contactsicon,Helpicon,Reporticon} from "../../../src/assets/Images/index";
import {
  ApprovalManagement,
  Dashboard,
  UserManagement,
  OperationalManagement,
  PaymentManagement,
  Help,
  Contacts,
  Task,
  Report,
} from "../../../src/Pages";
export const SidebarItems = [
  {
    title: "Dashboard",
    element: <Dashboard />,
    route: "/dashboard",
    icon: <LuChartLine size={20} />,
  },
  {
    title: "Approval Management",
    element: <ApprovalManagement />,
    route: "/approvemanagement",
    icon: <LiaUserLockSolid size={20} />,
  },
  {
    title: "User Management",
    element: <UserManagement />,
    route: "/usermanagement",
    icon: <LuUserCog size={20} />,
  },
  {
    title: "Payment Management",
    element: <PaymentManagement />,
    route: "/paymentmanagement",
    icon: <LuHandCoins size={20} />,
    children: [
      {
        title: "Loan Request",
        element: <Dashboard />,
        route: "/paymentmanagement/dashboard1",
        icon: <FaChartLine />,
      },
      {
        title: "Delayed Request",
        element: <Dashboard />,
        route: "/paymentmanagement/dashboard2",
        icon: <FaChartLine />,
      },
      {
        title: "NBFC",
        element: <Dashboard />,
        route: "/paymentmanagement/dashboard2",
        icon: <FaChartLine />,
      },
      {
        title: "National Banks",
        element: <Dashboard />,
        route: "/paymentmanagement/dashboard2",
        icon: <FaChartLine />,
      },
      {
        title: "Direct Payment",
        element: <Dashboard />,
        route: "/paymentmanagement/dashboard2",
        icon: <FaChartLine />,
      },
    ],
  },

  {
    title: "Operational Management",
    element: <OperationalManagement />,
    route: "/operationalmanagement",
    icon: <LuFolderCog size={20} />,
    children: [
      {
        title: "Projects",
        element: <Dashboard />,
        route: "/operationalmanagement/dashboard3",
        icon: <FaChartLine />,
      },
      {
        title: "Site Designs",
        element: <Dashboard />,
        route: "/operationalmanagement/dashboard4",
        icon: <FaChartLine />,
      },
      {
        title: "SLA’s",
        element: <Dashboard />,
        route: "/operationalmanagement/dashboard4",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    title: "Report",
    element: <Report />,
    route: "/report",
    icon: <img src={Reporticon} alt="report" />,
  },
  {
    title: "Tasks",
    element: <Task />,
    route: "/tasks",
    icon: <GoTasklist size={20} />,
  },
  {
    title: "Contacts",
    element: <Contacts />,
    route: "/contacts",
    icon: <img src={Contactsicon} alt="contacts" />,
    children: [
      {
        title: "Finance & Banks",
        element: <Dashboard />,
        route: "/contacts/dashboard3",
        icon: <FaChartLine />,
      },
      {
        title: "Vendors",
        element: <Dashboard />,
        route: "/contacts/dashboard4",
        icon: <FaChartLine />,
      },
      {
        title: "End Customer",
        element: <Dashboard />,
        route: "/contacts/dashboard4",
        icon: <FaChartLine />,
      },
      {
        title: "Delivery Partners",
        element: <Dashboard />,
        route: "/contacts/dashboard4",
        icon: <FaChartLine />,
      },
      {
        title: "Tasks",
        element: <Dashboard />,
        route: "/contacts/dashboard4",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    title: "Help",
    element: <Help />,
    route: "/help",
    icon: <PiQuestion size={20}/>,
  },
];
