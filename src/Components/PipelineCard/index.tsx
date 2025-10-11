import React from "react";
import { FaChevronUp } from "react-icons/fa";
import {
  LocationIcon,
  DownloadPipe,
  ProfileIconPipe,
} from "../../assets/Images/";

export interface PipelineItem {
  title: string;
  leadId: string;
  name: string;
  location: string;
  status1?: string;
  status2?: string;
  lastUpdated?: string;
  source?: string;
  vendor?: string;
  finalQuotation?: string;
  projectValue?: string;
  amountPaid?: string;
  dueAmount?: string;
  buttonLabel: string;
}

interface PipelineCardProps {
  item: PipelineItem;
}

const PipelineCard: React.FC<PipelineCardProps> = ({ item }) => {
  return (
    <div className="bg-[white] p-[16px] rounded-[9px] mb-[16px]">
      <div className="flex justify-between items-center mb-[12px]">
        <p>{item.title}</p>
        <p className="pe-[4px]">
          <FaChevronUp />
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="PipeLineSecText">Lead ID : {item.leadId}</p>
          <div className="flex items-center gap-[6px]">
            <img src={ProfileIconPipe} alt="" />
            <p className="PipeLineSecText">{item?.name}</p>
          </div>
        </div>
        <div>
          <img src={DownloadPipe} alt="" />
        </div>
      </div>

      <div className="flex items-center">
        <img src={LocationIcon} alt="" />
        <p className="PipeLineSecText">{item?.location}</p>
      </div>

      <div className="PipeBorderBottom my-[12px]"></div>

      <div className="flex justify-between items-center mb-[16px]">
        {item.status1 &&  (
          <div className="flex justify-between items-center w-[100%]">
            <div className="h-[28px] px-[12px] bg-[gray] flex justify-center items-center rounded-[40px] PipeLineSecText light-bgcolor">
              {item?.status1}
            </div>
            { item.status2 && <div className="h-[28px] px-[12px] bg-[gray] flex justify-center items-center rounded-[40px] PipeLineSecText light-bgcolor">
              {item?.status2}
            </div>}
          </div>
        )}
        {item.lastUpdated && (
          <p className="PipeLineSecText">{item?.lastUpdated}</p>
        )}
      </div>

      {item.source && item.vendor && (
        <div className="flex justify-between items-center mb-[12px]">
          <p>
            Source: <span className="hthirtteen">{item?.source}</span>
          </p>
          <p>
            Vendor Assigned: <span className="hthirtteen">{item?.vendor}</span>
          </p>
        </div>
      )}

      {item?.finalQuotation && item?.projectValue && (
        <div className="flex flex-col gap-[8px]">
          <p>
            Final Quotation:
            <span className="hthirtteen">{item?.finalQuotation}</span>
          </p>
          <p>
            Project Value :{" "}
            <span className="hthirtteen">{item?.projectValue}</span>
          </p>
        </div>
      )}

      {item.projectValue && item.amountPaid && item.dueAmount && (
        <div className="flex flex-col gap-[8px]">
          <p>
            Project Value :{" "}
            <span className="hthirtteen">{item?.projectValue}</span>
          </p>
          <p>
            Amount Paid : <span className="hthirtteen">{item?.amountPaid}</span>
          </p>
          <p>
            Due Amount: <span className="hthirtteen">{item?.dueAmount}</span>
          </p>
        </div>
      )}

      <div className="flex justify-center items-center mt-[12px]">
        <div className="h-[40px] w-[326px] NewLeadbg text-white px-[16px] rounded-[8px] flex justify-center items-center">
          {item?.buttonLabel}
        </div>
      </div>
    </div>
  );
};

export default PipelineCard;
