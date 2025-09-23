import React from "react";
import "../../styles/_utilities.scss";
import "../Typo/style.scss";
import SelectComponent from "../Select";
import Buttoncomponent from "../Button";

interface ApprovalRequest {
  title: string;
  description: string;
  projectId: string;
  status: "Pending" | "Approved" | "Rejected";
  vendor: string;
  amount: string;
  date: string;
  flow: string;
}

interface RequestsApprovalCardProps {
  request: ApprovalRequest;
}

const RequestsApprovalCard: React.FC<RequestsApprovalCardProps> = ({
  request,
}) => {
  const statusClasses = {
    Pending: "pending-bg text-five",
    Approved: "approved-bg text-five",
    Rejected: "rejected-bg text-five",
  };

  return (
    <div className="w-[760px] h-auto bg-main-secondary mt-[16px]">
      {/* Header */}
      <div className="h-[60px] border-bottom-second p-[20px] flex justify-between items-center">
        <div className="flex items-center w-[233px] justify-between">
          <h1 className="hfour text-secondary">Approval Requests</h1>
          <p className="sidehtwo view-text">View all</p>
        </div>
        <SelectComponent placeholder="This week" />
      </div>

      {/* Request Info */}
      <div className="flex p-[20px] justify-between items-center">
        <div>
          <h1 className="hfour text-secondary">{request.title}</h1>
          <p className="text-four text-light-secondary">
            {request.description}
          </p>
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
            {request.status}
          </span>
        </div>
      </div>

      {/* Vendor / Amount / Date */}
      <div className="flex justify-between items-center p-[20px]">
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
      <div className="flex justify-between items-center px-[20px]">
        <h1 className="view-text hfour">View Details</h1>
        <div className="flex gap-[16px]">
            <Buttoncomponent type="primary" label="Reject"/>
            <Buttoncomponent  type="secondary" label="Approve" />
          {/* <button className="hfour button-text-secondary border-main-primary px-[20px] py-[10px] rounded-[4px] w-[125px] h-[40px] flex justify-center items-center">
            Reject
          </button>
          <button className="hfour button-text bg-main-primary px-[20px] py-[10px] rounded-[4px] w-[125px] h-[40px] flex justify-center items-center border-none">
            Approve
          </button> */}
        </div>
      </div>

      {/* Approval Flow */}
      <div className="mt-[12px] flex ps-[20px] pb-[20px]">
        <h1 className="hfive text-light-secondary">Approval Flow: </h1>
        <span className="text-four text-light-secondary">{request.flow}</span>
      </div>
    </div>
  );
};

export default RequestsApprovalCard;
