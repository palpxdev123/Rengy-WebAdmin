import React from "react";
import { Graph, GraphDown, CardSuccess } from "../../../../assets/Images/index";
import "../../../../Components/Typo/style.scss";
import "../../../../styles/_utilities.scss";

interface FlatCardProps {
  value: any;
  percentage?: string;
  label: string;
  isPositive: boolean;
  imageSource?: string;
}

const FlatCard: React.FC<FlatCardProps> = ({
  value,
  percentage,
  label,
  isPositive,
  imageSource,
}) => {
  return (
    <div className={`w-full flex justify-between items-center dashboardcard p-[16px] rounded-[8px] h-[130px] w-[100%] ${isPositive ? "" : "cardbgpending cardboredrpending"}`}>
      <div className="flex flex-col gap-[8px] w-[161px]">
        <h1 className="heleven">{value}</h1>
        <p className="htwelve  w-[135px]">{label}</p>
        <p
          className={`hthirteen ${isPositive ? "view-text" : "decrease-color"}`}
        >
          {percentage}
        </p>
      </div>
      {isPositive && <img src={CardSuccess} alt="Graph" />}
    </div>
  );
};

export default FlatCard;
