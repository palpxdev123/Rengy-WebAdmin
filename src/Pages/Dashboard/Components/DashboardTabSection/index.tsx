import { useState } from "react";
import "../../../../Components/Typo/style.scss";
import "../../../../styles/_utilities.scss"

interface props {
  tabs:any[],
  Stagewiseproject:any[]
}

const StagewiseProject = ({tabs, Stagewiseproject}:props) => {
  const [active, setActive] = useState("All")
  return (
    <div className="rounded-[4px] w-[775px] bg-white mt-[24px]">
      <div className="p-[20px] h-[65px] border-b-[1px] border-header items-center">
        <div className="flex justify-between">
          <p className=" pr-[8px] hthree text-secondary">Stage Wise Projects</p>
          <p className=" pr-[8px] view_all sidehtwo">View All</p>
        </div>
      </div>
      <div className="m-[19px] p-[4px] rounded-[40px] main-bg flex justify-between items-center scrollbarHidden overflow-x-scroll">
        {
          tabs?.map((item)=>(
            <div onClick={()=>setActive(item)} className={` hfive text-secondary ${active === item && "bg-[white]"} py-[6px] px-[12px] min-w-[170px] flex justify-center items-center rounded-[42px]`}>
              {item}
            </div>
          ))
        }
      </div>
      <div className="my-[16px] ">
        {
          Stagewiseproject?.map((item)=>(
            <div className="px-[20px] pb-[20px]">
              <div className=" p-[20px] main-bg rounded-[4px]">

              <section className="flex justify-between items-center">
                <p className="hfour text-secondary">{item?.project_name}</p>
                <div className="flex justify-center items-center">
                  <p className="border-r-[1px] pr-[8px] borderwe text-light-secondary text-four">Request ID<span className="hfive text-secondary">#REQ-1230</span></p>
                  <div className="ml-[8px] bg-chip-stage1 py-[4px] px-[8px] rounded-[40px] text-five text-secondary">{item?.stage}</div>
                </div>
              </section>
              <section className="w-[401px] flex justify-between items-center ">
                <div>
                  <p className="text-light-secondary text-four">Expected Delivery by</p>
                  <p className="text-secondary hfive">{item?.expected_delivery_by}</p>
                </div>
                <div>
                  <p className="text-light-secondary text-four">Requested by</p>
                  <p className="text-secondary hfive">{item?.requested_by}</p>
                </div>
              </section>
              </div>
            </div>
          ))
        }
      </div>
    </div>


      
  );
};

export default StagewiseProject;
