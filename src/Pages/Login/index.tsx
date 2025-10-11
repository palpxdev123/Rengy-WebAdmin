import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Utils/AuthProvider";
import { useNavigate } from "react-router-dom";
import { encryptData } from "../../../Utils/CommonFunctions";
import { useLogin } from "../../Hook/CommonAPI/commonapi";
import { RengyLogoimg } from "../../assets/Images";
import { Input } from "../../Components";
import "../../styles/_utilities.scss"

interface stateValue {
  username: string;
  password: string;
}

const Login = () => {
  const { setAuthenticate } = useContext(AuthContext);

  const { mutate: loginApi } = useLogin();

  const navigate = useNavigate();
  const [pageData, setPageData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event?.target;
    setPageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    setAuthenticate(true),
    navigate("/dashboard");

    // loginApi(pageData, {
    //   onSuccess: (data) => {
    //     // console?.log(data?.data?.[0]?.user?.usertype, "SUCCESS");

    //     setAuthenticate(true),
    //       localStorage.setItem("accessToken", data?.data?.[0]?.accessToken),
    //       localStorage.setItem("refreshToken", data?.data?.[0]?.refreshToken),
    //       localStorage.setItem(
    //         "userType",
    //         encryptData(`${data?.data?.[0]?.user?.usertype}`)
    //       ),
    //       navigate("/dashboard");
    //   },
    //   onError: (data: any) => {
    //     console?.log(data?.response?.data?.message, "error");
    //   },
    // });
  };
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] login-bg">
      <div className="flex flex-col gap-5 w-[659px] bg-main-secondary justify-center items-center pt-[64px] pb-[53px]">
        <img src={RengyLogoimg} alt="Logo" className="mb-[24px]" />
        <h1 className="hnine mb-[47px]">Welcome Team Member </h1>
        <p className="text-nine mb-[69px]">Sign in to your Admin Panel</p>
        <Input
        name="username"
          placeholder="Username"
          inputClass=" !border-none !shadow-none !border-bottom-second "
          onChange={handleChange}
          value={pageData?.username}
        />
        <Input name="password" placeholder="Password"
        inputClass=" !border-none !shadow-none " onChange={handleChange}
          value={pageData?.password} />
        <p>Forgot Password? Click here </p>
      </div>

      <button
        onClick={
          () => 
            handleLogin()
          //   {
          //   setAuthenticate(true), localStorage.setItem("accessToken", encryptData("selva")), navigate("/dashboard");
          // }
        }
      >
        Login
      </button>
    </div>
  );
};

export default Login;
