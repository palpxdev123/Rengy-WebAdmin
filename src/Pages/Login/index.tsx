import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Utils/AuthProvider";
import { useNavigate } from "react-router-dom";
import { encryptData } from "../../../Utils/CommonFunctions";
import { useLogin } from "../../Hook/CommonAPI/commonapi";

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
          // setAuthenticate(true),
          // navigate("/dashboard");

    loginApi(pageData, {
      onSuccess: (data) => {
        // console?.log(data?.data?.[0]?.user?.usertype, "SUCCESS");

        setAuthenticate(true),
          localStorage.setItem("accessToken", data?.data?.[0]?.accessToken),
          localStorage.setItem("refreshToken", data?.data?.[0]?.refreshToken),
          localStorage.setItem("userType", encryptData(`${data?.data?.[0]?.user?.usertype}`)),
          navigate("/dashboard");
      },
      onError: (data: any) => {
        console?.log(data?.response?.data?.message, "error");
      },
    });
  };
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-5">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={pageData?.username}
        />
        <input
          name="password"
          value={pageData?.password}
          type="password"
          onChange={handleChange}
        />
      </div>
      <button
        onClick={
          () => handleLogin()
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
