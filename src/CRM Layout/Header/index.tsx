import React from "react";
import "../../styles/_utilities.scss";
import { Headericon,Headerimage   } from "../../assets/Images/index";
import { Input } from "../../Components";
import { VscBell } from "react-icons/vsc";
import { IoIosMenu } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="h-[80px] header-border flex justify-between items-center py-[28px] px-[40px]">
        <div className="flex gap-[16px] items-center ">
          <img src={Headericon} style={{ height: "16px", width: "16px" }} />
          <p className="font-bold">Sales CRM</p>
        </div>
        <div className="flex items-center gap-[32px]">
          <Input
            search
            placeholder="Search"
            size="small"
            inputClass="!h-[40px] !w-[160px] input-bg search-text"
          />
          <div className="flex gap-[8px]">
            <div className="h-[40px] w-[40px] input-bg flex items-center justify-center rounded-[8px]"><VscBell size={20}/></div>
            <div className="h-[40px] w-[40px] input-bg flex items-center justify-center rounded-[8px]"><IoIosMenu size={20}/></div>
          </div>
          <div className=" ">
            <img src={Headerimage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
