import React from "react";
import { Graph, GraphDown } from "../../../../assets/Images/index";
import "../../../../Components/Typo/style.scss";
import "../../../../styles/_utilities.scss";

interface FlatCardProps {
  value: any;
  percentage: number;
  label: string;
  isPositive: boolean;
  imageSource: string
}

const FlatCard: React.FC<FlatCardProps> = ({
  value,
  percentage,
  label,
  isPositive,
  imageSource
}) => {
  return (
    <div
      style={{
        // width: 211,
        height: 92,
        boxShadow: "none",
        background: "#ffffff",
        borderRadius: "4px",
        padding: "16px",
      }}
      className="w-full"
    >
      <div className="flex justify-between items-center mb-[8px]">
        <p className="text-one text-light-secondary">{label}</p>
        <img src={imageSource} alt="Graph" />
      </div>

      <div className="flex justify-between items-center ">
        <h1 style={{ margin: 0 }} className="hone text-secondary">
          {value}
        </h1>
        {percentage && (
          <p
            className={`text-one ${
              isPositive ? "view-green" : "decrease-color"
            }`}
          >
            {isPositive ? `+${percentage}%` : `${percentage}%`}
          </p>
        )}
      </div>
    </div>
  );
};

export default FlatCard;
