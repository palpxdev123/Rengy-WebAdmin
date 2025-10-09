import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Layout from "../Layout";
import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../../Utils/AuthProvider";
import { SidebarItems } from "../../Utils/Interface/AdminSidebar";
import { Login } from "../Pages";
import {Dashboard} from '../Pages'
import Layout from "../CRM Layout";

const RouteConfiguration = () => {
  const { isAuthenticate, setAuthenticate } = useContext(AuthContext);


  useEffect(() => {
    const handleStorageChange = () => {
      setAuthenticate(!!localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  

  const routerRender = (sidebarData: any) => 
    sidebarData?.map((item: any)=>{
      return(
        <Route path={item?.route} element={item?.element} >
          {item?.children && routerRender(item?.children)}
        </Route>
      )
    })
    

    

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/login" element={isAuthenticate ? <Navigate to={"/dashboard"} replace /> : <Login />} />
          {isAuthenticate ? (
            <Route>
              <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />}></Route>
                {
                  routerRender(SidebarItems)
                }
              </Route>
            </Route>
          ) : (
            <Route path="*" element={isAuthenticate ? <Navigate to={'/dashboard'} replace /> : <Navigate to={'/login'} replace />}></Route>
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteConfiguration;
