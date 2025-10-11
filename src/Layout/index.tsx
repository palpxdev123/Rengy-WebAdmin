import Sidebar from "./Sidebar";
import "../styles/_utilities.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [toggle, setToggle] = useState([]);
  const [sidebarSlide, setSlide] = useState(false)
  return (
    <div className="h-[100vh] flex w-[100%]">
      <Sidebar toggle={toggle} setToggle={setToggle} sidebarSlide={sidebarSlide} setSlide={setSlide} />
      <div className={`${!sidebarSlide ? "w-[calc(100%-240px)]" : "w-[calc(100%-100px)]"}  `}>
        <main className=" main-bg h-[100vh]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
