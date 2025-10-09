import React from "react";

interface BarRowProps {
  label: string;
  value: number;
  barWidth: string; // e.g. "251px"
  barColorClass: string; // e.g. "Bargraph-1"
}

const BarRow = ({ label, value, barWidth, barColorClass }:BarRowProps) => {
  return (
    <>
    <div className="bar relative ">
      <div className="flex items-center">
        <div className={`h-[45px] ${barColorClass} w-[${barWidth}] relative`}></div>
        <p className="ms-[15px] Barlable text-ten">{label}</p>
      </div>
      <p className="absolute bottom-2 left-2 hten">{value}</p>
    </div>
    </>
    
  );
};

export default BarRow;
