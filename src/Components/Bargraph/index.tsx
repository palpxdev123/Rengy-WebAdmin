import React from "react";
import '../../styles/_utilities.scss'

interface BarRowProps {
  label: string;
  value: number;
  barWidth: string; // e.g. "251px"
  barColor: string; // e.g. "Bargraph-1"
}

const BarRow = ({ label, value, barWidth, barColor }:BarRowProps) => {
  console.log(barColor,"gjhgjh");
  
  return (
    
    <>
    <div className="bar relative ">
      <div className="flex items-center">
             <div
          className={`h-[45px] ${barColor}`}
          style={{
            width: barWidth,
          }}
        ></div>
        <p className="ms-[15px] Barlable text-ten">{label}</p>
      </div>
      <p className="absolute bottom-2 left-2 hten">{value}</p>
    </div>
    </>
    
  );
};

export default BarRow;





