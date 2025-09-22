import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/_utilities.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [toggle, setToggle] = useState([]);
  
  return (
    <div className="h-[100vh] flex w-[100%]">
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <div className=" w-[calc(100%-240px)] ">
        <main className=" main-bg h-[100vh]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
