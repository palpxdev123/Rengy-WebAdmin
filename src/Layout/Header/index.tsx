import { useContext } from "react";
import Input from "../../Components/Input";
import Profile from "../../assets/images/profile.png";
import { FaAngleDown } from "react-icons/fa6";
import { AuthContext } from "../../../Utils/AuthProvider";
import SelectComponent from "../../Components/Select";
import"../../Components/Typo/style.scss";
import '../../styles/_utilities.scss'

interface props {
  title: String;
  header2: boolean;
  header3: boolean;
}

const Header = ({ title, header2, header3 }: props) => {
  const { setAuthenticate } = useContext(AuthContext);
  return (
    <>
    <header className="h-[56px] bg-main-secondary py-[12px] px-[24px] header-border-bottom flex justify-between items-center">
      <p className="text-secondary htwo">{title}</p>
      <div className="flex gap-24 justify-center items-center">
        <Input size="small" placeholder="Search" search inputClass="w-[250px]" />
        <div className="flex justify-center items-center gap-8">
         <img src={Profile} alt="" height={32} width={32}/>
         <p className="text-one text-secondary">Rajesh B</p>
         <FaAngleDown/>
        </div>
        <div>
          <button className="cursor-pointer" onClick={()=>{setAuthenticate(false), localStorage.clear()}}>Logout</button>
        </div>
      </div>
      
    </header>
    {header2 && <header className="h-[60px]">
      <div className="px-[24px] py-[12px] bg-main-secondary flex justify-between items-center">
        <SelectComponent size="small" onChange={(name, value)=>""} name="header2"  options={[{label: "All", value: "all"}]} />
        <SelectComponent size="small" name="header22" onChange={(name, value)=>""} calender={true}  value={"Today"} options={[{label: "Today", value: "today"}]} className="h-[36px]" />
      </div>
    </header>}

      {header3 && (
        <header className="h-[60px]">
          <div className="px-[24px] pt-[24px] pb-[26px]  flex justify-between items-center">
            <h1 className="height">Approval Management</h1>
            <div className="flex gap-[8px]">
              <div className="px-[8px] py-[4px] approved-bg rounded-[40px] text-five">Approved</div>
              <div className="px-[8px] py-[4px] bg-[red] pending-bg rounded-[40px] text-five">3 Pending</div>
              <div className="px-[8px] py-[4px] bg-[red] rejected-bg rounded-[40px] text-five">0 Rejected</div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
export default Header;
