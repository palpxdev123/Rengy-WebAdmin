import React, { useState } from "react"; // ✅ import useState
import "../../styles/_utilities.scss";
import "../../Components/Typo/style.scss";
import Input from "../../../Components/Input";
// import { SelectComponent } from "../../Components";
import PageLayout from "../../../Components/PageLayout";
import RequestsApprovalCard from "../../../Components/RequestsApproval";
import Buttoncomponent from "../../../Components/Button";
// import Popup from "../../"; // ✅ import your reusable Popup
import { SelectComponent, Popup} from "../../../Components";

const ApprovalManagement = () => {
  const requests = [
    {
      title: "Office Supplies Purchase",
      description: "Request for stationery items",
      projectId: "PRJ-101",
      status: "Pending" as const,
      vendor: "ABC Stationery",
      amount: "₹12,500",
      date: "2025-09-20",
      flow: "Manager → Finance → Admin",
    },
    {
      title: "Laptop Procurement",
      description: "Approval for 5 MacBooks",
      projectId: "PRJ-102",
      status: "Approved" as const,
      vendor: "XYZ Tech",
      amount: "₹4,50,000",
      date: "2025-09-18",
      flow: "IT Head → Finance → Admin",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleOk = () => {
    console.log("✅ Ok clicked");
    setIsOpen(false);
  };
  const handleCancel = () => {
    console.log("❌ Cancel clicked");
    setIsOpen(false);
  };

  return (
    <PageLayout header3={true}>
      <div className="bg-main-secondary">
        <div className="flex justify-between w-full px-[20px] py-[12px] header-border-bottom">
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
            placeholder="All Status"
            className="text-two select-text"
          />
        </div>

        <div className="mx-[20px] my-[16px]">
          {requests.map((request, index) => (
            <RequestsApprovalCard
              key={index}
              request={request}
              showHeader={false}
              className="mb-[16px] progress-bg"
              onClick={handleOpen}
            />
          ))}
        </div>
      </div>

      <div >
        <Popup
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="p-0"
          width="585px"
          Footer={<div><Buttoncomponent label="hii"/></div>}
        >
          <div>
          <h1 className="hseven text-secondary mb-[16px]">
            Approval Request Details - #APR-12344
          </h1>
          <div className="flex justify-between mb-[12px]">
            <p>Request Type</p>
            <p>Discount Approval</p>
          </div>
          <div className="flex justify-between mb-[12px]">
            <p>Request By</p>
            <p>ABC Solar Pvt. Ltd</p>
          </div>
          <div className="flex justify-between mb-[12px]">
            <p>Amount</p>
            <p>₹15,000</p>
          </div>
          <div className="flex justify-between mb-[12px]">
            <p>Role</p>
            <p>Vendor</p>
          </div>
          <div className="mb-[12px]">
            <p>Description</p>
            <p>Requesting discount to close sale (after SO is created)</p>
          </div>
          <div className="mb-[16px]">
            <p>Reason</p>
            <p>Customer negotiation required for project closure</p>
          </div>
          <div className="mb-[16px]">
            <p>Comments</p>
            <Input placeholderSymbol className="h-[90px]"/>
          </div>
          </div>
        </Popup>
      </div>
    </PageLayout>
  );
};

export default ApprovalManagement;
