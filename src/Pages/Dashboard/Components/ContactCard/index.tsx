import React from "react";
import { CiFolderOn } from "react-icons/ci";
import "../../../../styles/_utilities.scss";
import "../../../../Components/Typo/style.scss"

const ConatctDashboardCard = () => {
  const dashboardContact = [
    {
      partner_type: "Vendors",
      count: 45,
    },
    {
      partner_type: "End Customers",
      count: 22,
    },
    {
      partner_type: "Finance & Banks",
      count: 22,
    },
    {
      partner_type: "Delivery Partners",
      count: 32,
    },
  ];

  const dataset = [
    {
      period: "ABC Capital",
      notification_type: "Ankit Sharma",
      mobile: "+91 9980556655",
      email: "ankit@gmail.com",
    },
    {
      period: "ABC Capital",
      notification_type: "Ankit Sharma",
      mobile: "+91 9980556655",
      email: "ankit@gmail.com",
    },
    {
      period: "ABC Capital",
      notification_type: "Ankit Sharma",
      mobile: "+91 9980556655",
      email: "ankit@gmail.com",
    },
    {
      period: "ABC Capital",
      notification_type: "Ankit Sharma",
      mobile: "+91 9980556655",
      email: "ankit@gmail.com",
    },
    {
      period: "ABC Capital",
      notification_type: "Ankit Sharma",
      mobile: "+91 9980556655",
      email: "ankit@gmail.com",
    },
    {
      period: "ABC Capital",
      notification_type: "Ankit Sharma",
      mobile: "+91 9980556655",
      email: "ankit@gmail.com",
    },
  ];

  return (
    <div className="bg-white w-[368px] h-[426px] rounded-[4px] ">
      <div className="menu-active rounded-[4px]">
        <div className="p-[20px] flex justify-between border-b-[1px] border-header items-center">
          <div className="flex">
            <p className="hthree text-secondary">Contacts</p>
          </div>
        </div>
        <div className="px-[20px] py-[11px] flex gap-[12px]">
          {dashboardContact?.map((item) => (
            <div className="flex flex-col justify-between">
              <p className="search-icon text-three">{item?.partner_type}</p>
              <p className="mt-[4px] hone text-secondary">{item?.count}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[20px] h-[250px] overflow-y-scroll">
        <p className="hthree text-secondary">Vendors</p>
        {dataset?.map((value) => (
          <div className="flex py-[12px] gap-[12px] items-center border-b-[1px] border-header last:border-b-0">
            <div className="h-[40px] w-[40px] rounded-[100%] flex justify-center icon-background items-center view_all">
              <CiFolderOn size={20} color="view_all" />
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="">
                <p className="text-one text-secondary">{value?.period}</p>
                <p className="search-icon text-two">{value?.notification_type}</p>
              </div>
              <div className="">
                <p className="search-icon text-two">{value?.mobile}</p>
                <p className="search-icon text-two">{value?.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConatctDashboardCard;
