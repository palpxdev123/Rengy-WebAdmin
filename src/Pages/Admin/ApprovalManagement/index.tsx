import "../../../styles/index.scss";
import "../../../Components/Typo/style.scss";
import Input from "../../../Components/Input";
import PageLayout from "../../../Components/PageLayout";
import RequestsApprovalCard from "../../../Components/RequestsApproval";
import { SelectComponent, Popup } from "../../../Components";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import Steper from "../../Loan/Contact/Component/Steper";

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

  return (
    <PageLayout header2={false} header3={true} title={"Approval Management"}>
      <div className="bg-main-secondary">
        <div className="flex justify-between w-full px-[20px] py-[12px] header-border-bottom">
          <Input
            search
            size="small"
            placeholder="Search requests"
            inputClass="text-seven w-[250px]"
          />
          <SelectComponent
          name="approve"
          size="small"
          onChange={(name, value)=>console.log(name, value)
          }
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
      <Steper/>

      {/* ✅ Popup for selected request */}
      <Popup
        open={isOpen}
        className="p-0"
        width="585px"
        setOpen={setIsOpen}
        footerLeftButtonlabel="Reject"
        footerRightButtonlabel="Approve"
        footerRightButtonOnclick={() => alert("User Updated")}
        Footer={true}
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
          </div>
        )}
      </Popup>
    </PageLayout>
  );
};

export default ApprovalManagement;
