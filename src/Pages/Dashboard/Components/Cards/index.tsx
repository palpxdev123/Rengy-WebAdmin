import React from "react";
import { Card } from "antd";
import { Graph } from "../../../../assets/Images/index";

const FlatCard: React.FC = () => (
  <Card
    bordered={false}
    style={{
      width: 211,
      height: 92,
      boxShadow: "none",
      background: "#f9fafb", // light gray bg
    }}
    bodyStyle={{ padding: 16 }} // 👈 custom body padding
  >
    <div className="flex justify-between items-center mb-[8px]">
      <p style={{ fontSize: 14, color: "#67606E" }}>Total Active Users</p>
      <img src={Graph} alt="Graph" />
    </div>
    <div className="flex justify-between items-center">
      <h3 style={{ margin: 0, fontSize: 24 }}>2847</h3>
      <p style={{ color: "green",fontSize: 14 }}>+12.5%</p>
    </div>
  </Card>
);

export default FlatCard;
