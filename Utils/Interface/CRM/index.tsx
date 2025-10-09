import { Finpartner,Reportmenu,Projectmenu } from "../../../src/assets/Images/index";
// import Dashboard from "../../../src/Pages/Dashboard/index";
import { GoHomeFill } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { AiOutlineBell } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
export const SidebarItems = [
  {
    title: "Dashboard",
    // element: <Dashboard />,
    route: "/dashboard",
    icon: <GoHomeFill size={24}/>,
  },
  {
    title: "Leads",
    // element: <Dashboard />,
    route: "/dashboard",
    icon: <PiUsers size={24}/>,
  },
  {
    title: "Projects",
    // element: <Dashboard />,
    route: "/dashboard",
    icon: <img src={Projectmenu} alt="Projects" className="w-[24px] h-[24px]" />,
  },
  {
    title: "Reports",
    // element: <Dashboard />,
    route: "/dashboard",
    icon: <img src={Reportmenu} alt="Reports" className="w-[24px] h-[24px]" />,
  },
  {
    title: "Tickets & Alerts",
    // element: <Dashboard />,
    route: "/child",
    icon: <AiOutlineBell size={24}/>,
  },
  {
    title: "Vendors",
    // element: <Dashboard />,
    route: "/child",
    icon: <PiUsersThree size={24}/>,
  },
  {
    title: "Fin-tech Partners",
    // element: <Dashboard />,
    route: "/child",
    icon: <img src={Finpartner} alt="Fin-tech Partners" className="w-[24px] h-[24px]" />,
  },
];
