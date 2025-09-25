import React, { useState } from "react";
import "../../../styles/index.scss";
import "../../../Components/Typo/style.scss";
import Input from "../../../Components/Input";
import PageLayout from "../../../Components/PageLayout";
import RequestsApprovalCard from "../../../Components/RequestsApproval";
import Buttoncomponent from "../../../Components/Button";
import { SelectComponent, Popup } from "../../../Components";
import TextArea from "antd/es/input/TextArea";

const ApprovalManagement = () => {
  const requests = [
    {
      requestId: "APR-101",
      title: "Office Supplies Purchase",
      description: "Request for stationery items",
      projectId: "PRJ-101",
      status: "Pending" as const,
      vendor: "ABC Stationery",
      amount: "₹12,500",
      date: "2025-09-20",
      flow: "Manager → Finance → Admin",
      role: "Vendor",
      reason: "Monthly office needs",
    },
    {
      requestId: "APR-102",
      title: "Laptop Procurement",
      description: "Approval for 5 MacBooks",
      projectId: "PRJ-102",
      status: "Approved" as const,
      vendor: "XYZ Tech",
      amount: "₹4,50,000",
      date: "2025-09-18",
      flow: "IT Head → Finance → Admin",
      role: "IT Procurement",
      reason: "New hires require laptops",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const handleOpen = (request: any) => {
    setSelectedRequest(request);
    setIsOpen(true);
  };

  const handleOk = () => setIsOpen(false);
  const handleCancel = () => setIsOpen(false);

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
              onClick={() => handleOpen(request)}
            />
          ))}
        </div>
      </div>

      {/* ✅ Popup for selected request */}
      <Popup
        open={isOpen}
        className="p-0"
        width="585px"
        onOk={handleOk}
        onCancel={handleCancel}
        Footer={
          false
        }
      >
        {selectedRequest && (
          <div>
            <div className="border-bottom-second mb-[16px]">
              <h1 className="hseven text-secondary mb-[16px]">
                Approval Request Details - #{selectedRequest.requestId}
              </h1>

              {[
                { label: "Request Type", value: selectedRequest.title },
                { label: "Request By", value: selectedRequest.vendor },
                { label: "Amount", value: selectedRequest.amount },
                { label: "Role", value: selectedRequest.role },
              ].map((item, index) => (
                <div className="flex justify-between mb-[12px]" key={index}>
                  <p className="text-four text-light-secondary">{item.label}</p>
                  <p className="hfive text-secondary">{item.value}</p>
                </div>
              ))}

              <div className="mb-[12px]">
                <p className="mb-[4px] text-four text-light-secondary">
                  Description
                </p>
                <p className="hfive text-secondary">
                  {selectedRequest.description}
                </p>
              </div>

              <div className="mb-[16px]">
                <p className="mb-[4px] text-four text-light-secondary">
                  Reason
                </p>
                <p className="hfive text-secondary">{selectedRequest.reason}</p>
              </div>
            </div>

            <div className="mb-[16px]">
              <p className="mb-[6px] text-four text-light-secondary">
                Comments
              </p>
              <TextArea
                className="!h-[90px] textarea-text text-eight textarea-border !px-[12px] !py-[13px]"
                placeholder="Add comments (optional)"

              />
            </div>
            <div className="flex gap-[16px] justify-end">
            <Buttoncomponent label="Reject" />
            <Buttoncomponent type="secondary" label="Approve" />
          </div>
          </div>
        )}
      </Popup>
    </PageLayout>
  );
};

export default ApprovalManagement;
