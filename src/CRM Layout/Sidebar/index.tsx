import { useState } from "react";
import { SidebarItems } from "../../../Utils/Interface/CRM/index";
import "./style.scss";

function Sidebar() {
  const [activemenu, setactivemenu] = useState(0);
  return (
    <>
      <div className="w-[300px] bg-[#E9E9E9] h-[100vh] p-[16px] ">
        <p className="mb-[16px] ">Sales CRM</p>
        {SidebarItems.map((item, index) => (
          <div
            className={`flex py-[12px] px-[8px] gap-[12px] items-center rounded-[8px] mb-[8px] cursor-pointer ${
              activemenu === index ? "active" : ""
            }`}
            onClick={() => {
              setactivemenu(index);
            }}
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
