import React from "react";
import { Graph, GraphDown } from "../../../../assets/Images/index"; // ✅ Add a "down" image

interface FlatCardProps {
  value: number;       
  percentage: number;   
  label: string;    
}

const FlatCard: React.FC<FlatCardProps> = ({ value, percentage, label }) => {
  const isPositive = percentage >= 0;

  return (
    <div
      style={{
        width: 211,
        height: 92,
        boxShadow: "none",
        background: "#ffffff",
        borderRadius: "4px",
        padding: "16px",
      }}
    >
      <div className="flex justify-between items-center mb-[8px]">
        <p style={{ fontSize: 14, color: "#67606E" }}>{label}</p>
        <img src={isPositive ? Graph : GraphDown} alt="Graph" />
      </div>

      <div className="flex justify-between items-center">
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
          {value}
        </h1>
        <p
          style={{
            color: isPositive ? "#148057" : "#FF1111", 
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {isPositive ? `+${percentage}%` : `${percentage}%`}
        </p>
      </div>
    </div>
  );
};

export default FlatCard;
