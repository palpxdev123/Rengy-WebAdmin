import { Profile } from "../../assets/Images";

interface props {
  title: String;
  viewAllAction: () => void;
  items: any[];
}

const ContactCard = ({ title, viewAllAction, items }: props) => {
  return (
    <div className="bg-white w-[368px] h-[303px] rounded-[4px] ">
      <div className="p-[20px] flex justify-between border-b-[1px] border-header items-center">
        <div className="flex">
          <p className="pr-[8px]">{title}</p>
        </div>
        <div
          onClick={() => viewAllAction()}
          className="cursor pointer view_all cursor-pointer"
        >
          View All
        </div>
      </div>
      <div className="px-[20px] pt-[17px] pb-[9px] h-[243px] overflow-y-scroll">
        {items?.map((value) => (
          <div className="flex py-[12px] gap-[12px] items-center border-b-[1px] border-header last:border-b-0">
            <div className="h-[40px] w-[40px] rounded-[100%] flex justify-center items-center view_all">
              <img src={value?.profile_pic} height={20} />
            </div>
            <div className="">
              <p>{value?.profile_name}</p>
              <div className="flex justify-center items-center">
                <p className="search-icon border-r-[1px] pr-[8px] borderwe">{value?.phone_number}</p>
                <p className="search-icon">{value?.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
