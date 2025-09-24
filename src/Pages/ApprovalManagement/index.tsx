import React from "react";
import "../../styles/_utilities.scss";
import "../../Components/Typo/style.scss";
import Input from "../../Components/Input";
import { SelectComponent } from "../../Components";

const ApprovalManagement = () => {

  return (
    <>
      <div className="h-[56px] bg-[red]"></div>
      <div className="flex mx-[24px] mt-[24px] mb-[26px] justify-between ">
        <h1>Approval Management</h1>
        <div className="flex gap-[8px]">
          <span className="flex justify-between items-center text-five pt-[4px] pb-[4px] pl-[8px] pr-[8px] rounded-[40px] approved-bg ">
            Approved
          </span>
          <span className="flex justify-between items-center text-five pt-[4px] pb-[4px] pl-[8px] pr-[8px] rounded-[40px] pending-bg">
            3 Pending
          </span>
          <span className="flex justify-between items-center text-five pt-[4px] pb-[4px] pl-[8px] pr-[8px] rounded-[40px] rejected-bg">
            0 Rejected
          </span>
        </div>
      </div>
      <div className="w-[760px] mx-[24px] bg-main-secondary">
        <div className="flex justify-between">
          <Input
            search
            style={{
              width: "250px",
              height: "36px",
              padding: "8px 0px 8px 0px",
            }}
            placeholder="Search requests"
            className="text-seven"
          />
          <SelectComponent
            placeholder="All Status" className="text-two select-text"
          />
        </div>
              <div className="flex px-[40px] py-[20px] justify-between items-center">
        <div>
          <h1 className="hfour text-secondary">Discount Approval</h1>
          <p className="text-four text-light-secondary">
            Requesting discount to close sale (after SO is created)
          </p>
        </div>
        <div className="flex gap-[8px] items-center">
          <p className="text-four">Project ID</p>
          <p className="hfive">#PRJ-1230</p>
          <div className="border-r-[1px] h-[12px] borderwe"></div>
          <span
            className="flex justify-between items-center pt-[4px] pb-[4px] pl-[8px] pr-[8px] rounded-[40px]"
              
          >
            Pending
          </span>
        </div>
      </div>
      </div>
    </>
  );
};

export default ApprovalManagement;
