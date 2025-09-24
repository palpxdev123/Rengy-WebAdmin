import { type ReactNode } from "react";
import Header from "../../Layout/Header";
import Notification from "../Notification";
import FlatCard from "../../Pages/Dashboard/Components/Cards";
import ContactCard from "../ContactCard";
import ContactArea from "../../Pages/Dashboard/Components/ContactsArea";

interface props {
  title: String;
  children?: ReactNode;
  header2?: any;
  DashboardCardvalue: any[];
  ContactData:any[]
}

const PageLayout = ({
  title,
  children,
  header2,
  DashboardCardvalue,
  ContactData
}: props) => {
  return (
    <div>
      <Header title={title} header2={header2} />

      <div
        className={`p-[24px] ${
          header2 ? "h-[calc(100vh-116px)]" : "h-[calc(100vh-56px)]"
        } overflow-y-scroll flex flex-col justify-between`}
      >
        <div className="flex justify-between gap-[24px]">
          {DashboardCardvalue?.map((item) => (
            <FlatCard
              value={item?.value}
              percentage={item?.percentage}
              label={item?.label}
            />
          ))}
        </div>
        <div className="flex justify-between gap-[24px] py-[24px]  w-[100%]">
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
