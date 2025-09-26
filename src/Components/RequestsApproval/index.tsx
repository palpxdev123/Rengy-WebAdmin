import React from "react";
import "../../styles/_utilities.scss";
import "../Typo/style.scss";
import SelectComponent from "../Select";
import Buttoncomponent from "../Button";
import { GoPencil } from "react-icons/go";


interface RequestsApprovalCardProps {
  request: {
    status:string,
    title: string,
    // project:string,
    description:string,
    projectId:string,
    flow:string,
    vendor:string,
    date:string,
    amount:string,
  };
  showHeader?: boolean;
  showActions?: boolean; 
  className?: string;    
  onClick?:any;
  data?:any;
}

const RequestsApprovalCard = ({
  data,
  request,
  onClick,
  showHeader = true,
  showActions,
  className = "",
}:RequestsApprovalCardProps) => {
  const statusClasses:any = {
    Pending: "pending-bg text-five",
    Approved: "approved-bg text-five",
    Rejected: "rejected-bg text-five",
  };

  const displayStatus =
    request.status === "Approved" ? "Approval" : request.status;

  const shouldShowActions =
    request.status === "Approved" ? false : showActions ?? true;

  return (
    <div className={`h-auto bg-main-secondary mt-[16px] ${className}`}>
      {/* ✅ Header (optional) */}
      {showHeader && (
        <div className="h-[60px] border-bottom-second p-[20px] flex justify-between items-center mb-[16px]">
          <div className="flex items-center w-[233px] justify-between">
            <h1 className="hfour text-secondary">Approval Requests</h1>
            <p className="sidehtwo view-text">View all</p>
          </div>
          <SelectComponent  onChange={()=>""}
              name="week"
              size="small"
                value={"week"}
                options={[{ label: "This week", value: "week" }]} placeholder="This week" />
        </div>
      )}

      {/* Request Info */}
      <div  className={`progress-bg ${showHeader ? "px-[40px]" : "px-[20px]"}`}>
      <div className="flex py-[20px] justify-between items-center">
        <div>
          <h1 className="hfour text-secondary">
            <p className="flex gap-[8px] items-center" >
              {request.title}
              {request.status === "Approved" && (
                <GoPencil size={20} className="view-text cursor-pointer" />
              )}
            </p>
          </h1>
          <p className="text-four text-light-secondary">{request.description}</p>
        </div>
        <div className="flex gap-[8px] items-center">
          <p className="text-four">Project ID</p>
          <p className="hfive">{request.projectId}</p>
          <div className="border-r-[1px] h-[12px] borderwe"></div>
          <span
            className={`flex justify-between items-center pt-[4px] pb-[4px] pl-[8px] pr-[8px] rounded-[40px] ${
              statusClasses[request.status]
            }`}
          >
            {displayStatus}
          </span>
        </div>
      </div>

      {/* Vendor / Amount / Date */}
      <div className="flex justify-between items-center py-[20px]">
        <div>
          <p className="text-four mb-[6px] text-light-secondary">
            Vendors/Operation Team
          </p>
          <h1 className="hfive">{request.vendor}</h1>
        </div>
        <div className="w-[128px]">
          <p className="text-four mb-[6px] text-light-secondary">
            Request Amount
          </p>
          <h1 className="hfive">{request.amount}</h1>
        </div>
        <div className="w-[128px]">
          <p className="text-four mb-[6px] text-light-secondary">
            Request Date
          </p>
          <h1 className="hfive">{request.date}</h1>
        </div>
      </div>

      {/* Actions */}
      
        <div className="flex justify-between items-center">
          <h1 className="view-text hfour cursor-pointer"  onClick={onClick}>View Details</h1>
          {shouldShowActions && (
          <div className="flex gap-[16px]">
            <Buttoncomponent type="primary" label="Reject" />
            <Buttoncomponent type="secondary" label="Approve" />
          </div>
          )}
        </div>
      

      {/* Approval Flow */}
      <div className="mt-[12px] flex pb-[20px]">
        <h1 className="hfive text-light-secondary">Approval Flow: </h1>
        <span className="text-four text-light-secondary">{request.flow}</span>
      </div>
      </div>
    </div>
  );
};

export default RequestsApprovalCard;
