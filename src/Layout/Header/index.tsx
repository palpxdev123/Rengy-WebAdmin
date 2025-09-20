import { useContext } from "react";
import Input from "../../Components/Input";
import Profile from "../../assets/images/profile.png";
import { FaAngleDown } from "react-icons/fa6";
import { AuthContext } from "../../../Utils/AuthProvider";
const Header = () => {
  const { setAuthenticate} = useContext(AuthContext)
  return (
    <header className="h-[56px] bg-main-secondary py-[12px] px-[24px] header-border-bottom flex justify-between items-center">
      <p>Overview</p>
      <div className="flex gap-24 justify-center items-center">
        <Input placeholder="Search" search />
        <div className="flex justify-center items-center gap-8">
         <img src={Profile} alt="" height={32} width={32}/>
         <p>Rajesh B</p>
         <FaAngleDown/>
        </div>
        <div>
          <button className="cursor-pointer" onClick={()=>{setAuthenticate(false), localStorage.clear()}}>Logout</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
