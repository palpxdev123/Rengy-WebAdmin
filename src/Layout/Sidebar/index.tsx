import "../../styles/_utilities.scss";
import { BiDockRight } from "react-icons/bi";
import { SidebarItems } from "../../../Utils/Interface/AdminSidebar";
import { NavLink, useLocation } from "react-router-dom";
import { RengyLogo } from "../../assets/Images";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useEffect } from "react";
import "../../Components/Typo/style.scss";

const Sidebar = ({ toggle, setToggle, sidebarSlide, setSlide }: any) => {
  const location = useLocation();

  useEffect(() => {
    SidebarItems.forEach((menu: any) => {
      if (
        menu.children?.some((child: any) => child.route === location.pathname)
      ) {
        setToggle([{ title: menu.title, open: true }]);
        metaTitle(menu.title);
      }
    });
  }, []);
  

  const metaTitle = (title: string) => {
    const titleQuery: any = document?.getElementById("rengyTitle");
    titleQuery.innerText = `Rengy-${title}`;
  };

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
                      onClick={() => {
                        metaTitle(menu?.title);
                        child
                          ? setToggle((prev: any) => {
                              return prev?.map((value: any) => ({
                                ...value,
                                ...(value?.title === title
                                  ? { open: true }
                                  : { open: false }),
                              }));
                            })
                          : setToggle((prev: any) => {
                              return prev?.map((value: any) => ({
                                ...value,
                                open: false,
                              }));
                            });
                      }}
                      className={`${
                        isActive
                          ? child === "child"
                            ? "border-l-[2px] rounded-[4px] menu-active-border menu-active-bg text-white"
                            : "menu-active text-secondary"
                          : "text-white"
                      } py-[10px] px-[12px] rounded-[4px] flex gap-[8px] items-center transition-all duration-100 ease-in-out`}
                    >
                      {menu?.icon}
                      {!sidebarSlide ? menu?.title : null}
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
                          return toggle?.filter(
                            (value: any) => value?.title !== menu?.title
                          );
                        } else {
                          return [...prev, { title: menu.title, open: false }];
                        }
                      });
                    }}
                    className={`${
                      toggle?.some(
                        (value: any) =>
                          value?.title === menu?.title && value?.open
                      )
                        ? "menu-active text-secondary"
                        : "text-white"
                    } py-[10px] px-[12px] rounded-[4px] flex justify-between  cursor-pointer items-center transition-all duration-300 ease-in-out`}
                  >
                    <div className="flex items-center gap-[8px] text-two ">
                      {menu?.icon}
                      {!sidebarSlide ? menu?.title : null}
                    </div>
                    {!sidebarSlide && (
                      <div>
                        {toggle?.some(
                          (value: any) => value?.title === menu?.title
                        ) ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    )}
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      toggle?.some((value: any) => value?.title === menu?.title)
                        ? "max-h-[500px] opacity-100 mt-[4px]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {recursionFunction(menu?.children, "child", menu?.title)}
                  </div>
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
        sidebarSlide ? "w-[100px]" : "w-[240px]"
      }  bg-main-primary h-[100vh] overflow-y-scroll transition-all ease-in-out duration-300 `}
    >
      <div
        className={`h-[56px] header-border-bottom  px-[24px] py-[12px] flex justify-between items-center fixed ${
          sidebarSlide ? "w-[100px]" : "w-[240px]"
        } bg-main-primary`}
      >
        {!sidebarSlide && <img src={RengyLogo} />}
        <BiDockRight
          // onClick={()=>setToggle((prev: any)=>({...prev, layout: !prev?.layout}))}  
          onClick={() => setSlide((prev: any) => !prev)}
          size={16}
          className="menu-text-active cursor-pointer"
        />
      </div>
      <div className="px-[16px] py-[20px] mt-[56px]">
        {recursionFunction(SidebarItems, "", "")}
      </div>
    </aside>
  );
};
export default Sidebar;
