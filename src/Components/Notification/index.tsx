import { CiFolderOn } from "react-icons/ci";

import "./style.scss";

const Notification = () => {
  const notification_structure = [
    {
      period: "Today",
      data: [
        {
          notification_type: "New project request",
          created_at: "10 AM",
          icon: <CiFolderOn />
        },
        {
          period: "Today",
          notification_type: "Vendor Docsinfra Uploaded",
          created_at: "10 AM",
        },
      ],
    },

    {
      period: "Yesterday",
      data: [
        {
          period: "Yesterday",
          notification_type: "SLA Approved Load",
          created_at: "10:30 AM",
        },
        {
          period: "Yesterday",
          notification_type: "Missing documents flagged",
          created_at: "11:30 AM",
        },
      ],
    },
  ];
  return (
    <div className="bg-white w-[368px] h-[426px] rounded-[4px] ">
      <div className="p-[20px] flex justify-between border-b-[1px] border-header items-center">
        <div className="flex">
          <p className="border-r-[1px] pr-[8px] borderwe">Notifications</p>
          <p className="pl-[8px] search-icon">14 unreads</p>
        </div>
        <p className="cursor pointer view_all cursor-pointer">View All</p>
      </div>
      <div className="px-[20px] pt-[17px] pb-[9px]">
        {
            notification_structure?.map((items)=>(
                <>
                <p className="search-icon">{items?.period}</p>
                <div className="pt-[4px]">
                    {
                    items?.data?.map((value)=>(
                        <div className="flex py-[12px] gap-[12px] items-center border-b-[1px] border-header last:border-b-0">
                            <div className="h-[40px] w-[40px] rounded-[100%] flex justify-center icon-background items-center view_all">
                                <CiFolderOn size={20} color="view_all" />
                            </div>
                            <div className="">
                                <p>{value?.notification_type}</p>
                                 <p className="search-icon">{value?.created_at}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
                </>
                
            ))
        }
      </div>
    </div>
  );
};

export default Notification;
