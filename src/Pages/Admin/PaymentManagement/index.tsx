import { Buttoncomponent } from "../../../Components";
import PageLayout from "../../../Components/PageLayout";

const PaymentManagement = () => {
  const steps = [
    "waiting for document",
    "Documents Hold",
    "Docs Submitted",
    "AC Statement Pending",
    "Backend Verification",
    "Approved",
    "Post Approval Process",
    "Disbursed",
    "Disbursed",
  ];

  const widthcalc = (360 / 500) * 100;
  return (
    <PageLayout title={"Stepper checkup"} header2={true}>
      <div className="m-[40px]">
        {steps?.map((value, index) => (
          <div className="flex justify-center gap-[9px] max-w-fit">
            <div className="max-w-fit flex flex-col justify-center items-center ">
              <div className="flex felx-col justify-center items-center">
                <div className="rounded-[50px] border w-[29px] h-[29px] flex justify-center items-center">
                  0{index + 1}
                </div>
              </div>
              {index + 1 !== steps?.length && (
                <div className="flex flex-col gap-[2.6px] my-[18px]">
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                </div>
              )}
            </div>
            <div>{value}</div>
          </div>
        ))}
      </div>
      <div className="m-[40px]">
        {steps?.map((value, index) => (
          <div className="flex justify-center gap-[9px] max-w-fit">
            <div className="max-w-fit flex flex-col justify-center items-center ">
              <div className="flex felx-col justify-center items-center">
                <div className="rounded-[50px] border w-[29px] h-[29px] flex justify-center items-center">
                  0{index + 1}
                </div>
              </div>
              {index + 1 !== steps?.length && (
                <div className="flex flex-col gap-[2.6px] my-[18px]">
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                  <div className="w-[2.6px] h-[2.6px] bg-black rounded-[50px]"></div>
                </div>
              )}
            </div>
            <div>{value}</div>
          </div>
        ))}
      </div>
      {/* <div className="relative">
        <div className="bg-[red] h-[4px] w-[100%] absolute"></div>
        <div
          className={`bg-[green] h-[4px]  absolute z-10`}
          style={{ width: `${widthcalc}%` }}
        ></div>
      </div> */}
      {/* 
       */}
       <svg >

    <polyline
      fill="none"
      stroke="blue"
      stroke-width="2"
      points="0,150 100,50 200,120 300,70 400,100"
    />

    <circle cx="0" cy="150" r="4"></circle>
    <circle cx="100" cy="50" r="4"></circle>
    <circle cx="200" cy="120" r="4"></circle>
    <circle cx="300" cy="70" r="4"></circle>
    <circle cx="400" cy="100" r="4"></circle>
  </svg>
    </PageLayout>
  );
};

export default PaymentManagement;
