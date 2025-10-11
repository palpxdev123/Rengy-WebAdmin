import { useContext, useEffect, useState } from "react";
import { SidebarItems } from "../../../Utils/Interface/CRM/index";
import "./style.scss";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { ContextParent } from "..";
import { isArray } from "chart.js/helpers";

function Sidebar() {
  const [activemenu, setactivemenu] = useState<any>([]);
  const { layoutChange, setLayoutChange } = useContext<any>(ContextParent);

  const location = useLocation();

  useEffect(() => {
    SidebarItems.forEach((menu: any) => {
      if (
        menu.children?.some((child: any) => child.route === location.pathname)
      ) {
        setactivemenu([menu.title]);
        metaTitle(menu.title);
      }
    });
  }, []);

  const metaTitle = (title: string) => {
    console.log(title);
    const titleQuery: any = document?.getElementById("rengyTitle");
    titleQuery.innerText = `Rengy-${title}`;
  };

  return (
    <>
      <div className="w-[300px] bg-[#E9E9E9] h-[100vh] p-[16px] ">
        <p className="mb-[16px] ">Sales CRM</p>
        {SidebarItems.map((item, index) => {
          return (
            <>
              {!item?.children && item?.title ? (
                <NavLink to={item?.route}>
                  {({ isActive }) => (
                    <div
                      className={`flex py-[12px] px-[8px] gap-[12px] items-center rounded-[8px] mb-[8px] cursor-pointer ${
                        isActive ? "active" : ""
                      }`}
                      onClick={() => metaTitle(item?.title)}
                    >
                      {item.icon}
                      {item.title}
                    </div>
                  )}
                </NavLink>
              ) : (
                <div
                  className={`flex py-[12px] px-[8px] gap-[12px] items-center rounded-[8px] mb-[8px] cursor-pointer transition-all ease-in-out duration-300`}
                  onClick={() => {
                    if (activemenu?.includes(item?.title)) {
                      const filterMenu = activemenu?.filter(
                        (value: string) => value != item?.title
                      );
                      metaTitle(item?.title);
                      return setactivemenu(filterMenu);
                    } else {
                      metaTitle(item?.title);
                      return setactivemenu((prev: any) => [
                        ...prev,
                        item?.title,
                      ]);
                    }
                  }}
                >
                  {item.icon}
                  <div className="flex justify-between items-center w-[100%]">
                    {item.title}
                    <div>
                      {Array?.isArray(activemenu) &&
                      activemenu?.some(
                        (value: any) => value?.title === item?.title
                      ) ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                  </div>
                </div>
              )}
              {Array?.isArray(activemenu) &&
                activemenu?.includes(item?.title) &&
                item?.children?.map((child) => {
                  return (
                    <NavLink to={child?.route}>
                      {({ isActive }) => (
                        <div
                          className={`py-[12px] px-[8px] mb-[8px] cursor-pointer  ${
                            isActive ? "border-b-[1px] " : ""
                          }`}
                        >
                          {child?.title}
                        </div>
                      )}
                    </NavLink>
                  );
                })}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
