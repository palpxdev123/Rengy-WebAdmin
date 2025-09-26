import "../../styles/_utilities.scss";
import { BiDockRight } from "react-icons/bi";
import { SidebarItems } from "../../../Utils/Interface/AdminSidebar";
import { NavLink, useLocation } from "react-router-dom";
import { RengyLogo } from "../../assets/Images";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useEffect } from "react";
import"../../Components/Typo/style.scss";

const Sidebar = ({ toggle, setToggle }: any) => {
  const location = useLocation();

  useEffect(() => {
    SidebarItems.forEach((menu: any) => {
      if (
        menu.children?.some((child: any) => child.route === location.pathname)
      ) {
        setToggle([{ title: menu.title, open: true }]);
      }
    });
  }, []);
  
  const recursionFunction = (items: any, child: string, title: any) => {
    return (
      <div
        className={`flex flex-col gap-[8px] text-one ${
          child === "child" && "ml-[12px] "
        }`}
      >
        {items?.map((menu: any) => {
          return (
            <>
              {!menu?.children && menu?.title ? (
                <NavLink to={menu?.route} className="gap-y-[8px]">
                  {({ isActive }) => (
                    <div
                      onClick={() =>
                        child
                          ? setToggle((prev: any)=>{

                            return prev?.map((value: any)=>({
                              ...value,
                              ...(value?.title === title ? {open: true} : {open: false} )
                            }))
                          })

                          :

                          setToggle((prev: any)=>{

                            return prev?.map((value: any)=>({
                              ...value,
                              open: false
                            }))
                          })
                          
                      }
                      className={`${
                        isActive
                          ? child === "child"
                            ? "border-l-[2px] rounded-[4px] menu-active-border menu-active-bg text-white"
                            : "menu-active text-secondary"
                          : "text-white"
                      } py-[10px] px-[12px] rounded-[4px] flex gap-[8px] items-center transition-all duration-100 ease-in-out`}
                    >
                      {menu?.icon}
                      {menu?.title}
                    </div>
                  )}
                </NavLink>
              ) : (
                <>
                  <div
                    onClick={() => {
                      setToggle((prev: any[]) => {
                        const exists = prev.find(
                          (item) => item.title === menu.title
                        );
                        if (exists) {
                          return toggle?.filter((value: any)=>value?.title !== menu?.title)
                        } else {
                          return [...prev, { title: menu.title, open: false }];
                        }
                      });
                    }}
                    className={`${
                      toggle?.some((value: any)=>(value?.title === menu?.title && value?.open))
                        ? "menu-active text-secondary"
                        : "text-white"
                    } py-[10px] px-[12px] rounded-[4px] flex justify-between  cursor-pointer items-center transition-all duration-100 ease-in-out`}
                  >
                    <div className="flex items-center gap-[8px] text-two">
                      {menu?.icon}
                      {menu?.title}{" "}
                    </div>
                    <div>
                      {toggle?.some((value: any)=>value?.title === menu?.title) ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </div>
                  </div>
                  {toggle?.some((value: any)=>value?.title === menu?.title) &&
                    recursionFunction(menu?.children, "child", menu?.title)}
                </>
              )}
            </>
          );
        })}
      </div>
    );
  };

  return (
    <aside
      className={`${
        toggle?.layout ? "w-[100px]" : "w-[240px]"
      }  bg-main-primary`}
    >
      <div className="h-[56px] header-border-bottom  px-[24px] py-[12px] flex justify-between items-center">
        <img src={RengyLogo} />
        <BiDockRight
          // onClick={()=>setToggle((prev: any)=>({...prev, layout: !prev?.layout}))}
          size={16}
          className="menu-text-active cursor-pointer"
        />
      </div>
      <div className="px-[16px] py-[20px]">
        {recursionFunction(SidebarItems, "", "")}
      </div>
    </aside>
  );
};
export default Sidebar;
 