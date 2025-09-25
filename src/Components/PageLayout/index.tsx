import { type ReactNode } from "react";
import Header from "../../Layout/Header";
import Notification from "../Notification";
import FlatCard from "../../Pages/Dashboard/Components/Cards";

import ContactArea from "../../Pages/Dashboard/Components/ContactsArea";
import { Graph, GraphDown } from "../../assets/Images";

interface props {
  title: String;
  children?: ReactNode;
  header2?: any;
  DashboardCardvalue?: any[];
  ContactData?:any[];
   header3?: any;
}

const PageLayout = ({
  title,
  children,
  header2,
  DashboardCardvalue,
  ContactData,
  header3
}: props) => {

  return (
    <div>
      <Header title={title} header2={header2} header3={header3}/>

      <div
        className={`p-[24px] ${
          header2 ? "h-[calc(100vh-116px)]" : "h-[calc(100vh-56px)]"
        } overflow-y-scroll flex flex-col justify-between`}
      >
        {DashboardCardvalue && <div className="flex justify-between gap-[24px] pb-[24px]">
          {DashboardCardvalue?.map((item) => (
            <FlatCard
              value={item?.value}
              percentage={item?.percentage}
              label={item?.label}
              isPositive={item?.percentage >= 0}
              imageSource={item?.percentage ? item?.percentage >= 0 ? Graph : GraphDown : item?.imageSource}
            />
          ))}
        </div>}
        <div className="flex justify-between gap-[24px]   w-[100%]">
          <div className="w-[68%]">{children}</div>
          <div className="w-[30%] ">
            <Notification />
            <ContactArea  ContactData={ContactData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
