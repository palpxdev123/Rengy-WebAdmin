import React from "react";
import "./style.scss";
import { TbArrowsDoubleNwSe } from "react-icons/tb";

const Steper = () => {
  return (
    <>
      <div>
        <div className="mb-[18px]">
          <div className="flex items-center gap-[9px] mb-[18px]">
            <div className="circle">
              <TbArrowsDoubleNwSe />
            </div>
            <p>Waiting for Documents</p>
          </div>
          <div className="flex flex-col gap-[2.67px] ps-[13px]">
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
          </div>
        </div>
        <div className="mb-[18px]">
          <div className="flex items-center gap-[9px] mb-[18px]">
            <div className="circle">02</div>
            <p>Documents Hold</p>
          </div>
          <div className="flex flex-col gap-[2.67px] ps-[13px]">
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
          </div>
        </div>
        <div className="mb-[18px]">
          <div className="flex items-center gap-[9px] mb-[18px]">
            <div className="circle">03</div>
            <p>Docs Submitted</p>
          </div>
          <div className="flex flex-col gap-[2.67px] ps-[13px]">
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
          </div>
        </div>
        <div className="mb-[18px]">
          <div className="flex items-center gap-[9px] mb-[18px]">
            <div className="circle">04</div>
            <p>A/C Statement Pending</p>
          </div>
          <div className="flex flex-col gap-[2.67px] ps-[13px]">
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
          </div>
        </div>
        <div className="mb-[18px]">
          <div className="flex items-center gap-[9px] mb-[18px]">
            <div className="circle">05</div>
            <p>Back End Verification</p>
          </div>
          <div className="flex flex-col gap-[2.67px] ps-[13px]">
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
          </div>
        </div>
        <div className="mb-[18px]">
          <div className="flex items-center gap-[9px] mb-[18px]">
            <div className="circle">06</div>
            <p>Approved</p>
          </div>
          <div className="flex flex-col gap-[2.67px] ps-[13px]">
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
          </div>
        </div>
                <div className="mb-[18px]">
          <div className="flex items-center gap-[9px] mb-[18px]">
            <div className="circle">07</div>
            <p>Post Approval Process</p>
          </div>
          <div className="flex flex-col gap-[2.67px] ps-[13px]">
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
            <div className="blackdot"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steper;
