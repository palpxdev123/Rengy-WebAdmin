import React from "react";
import "../../styles/_utilities.scss";
import "../Typo/style.scss";

interface TeamData {
  name: string;
  processed: number;
  approved: number;
  approvalRate:number;
  pending:number;
}

const teams= [
  { name: "Loan Team", processed: 145, approved: 132 ,approvalRate:91, pending:13},
  { name: "Operations Team", processed: 89, approved: 76 ,approvalRate:85, pending:8},
];

const ProgressBar = () => {
  return (
    <div className=" h-[344px] bg-main-secondary">
      <div className="h-[60px] border-bottom-second p-[20px]">
        <h1 className="text-one">Team Performance</h1>
      </div>

      <div className="pt-[16px] pb-[16px] pl-[20px] pr-[20px] flex flex-col gap-[16px]">
        {teams.map((team, index) => {
          return (
            <div
              key={index}
              className="w-[720px] h-[116px] progress-bg flex flex-col justify-center p-[20px] gap-[16px] rounded-[4px]"
            >
              <div className="flex justify-between">
                <h1 className="hfour">{team.name}</h1>
                <h1 className="hfive">{team.approvalRate}% approval rate</h1>
              </div>

              <div className="relative">
                <div className="h-[6px] main-bg rounded-[30px] w-[680px] absolute"></div>
                <div
                  className="progress-bar h-[6px] rounded-[30px] absolute"
                  style={{ width: `${(team.approvalRate / 100) * 680}px` }}
                ></div>
              </div>

              <div className="flex justify-between">
                <div className="flex w-[128px] text-start">
                  <p className="search-icon text-four">Processed:</p>
                  <h1 className="hfive">{team.processed}</h1>
                </div>
                <div className="flex w-[128px] text-start">
                  <p className="search-icon text-four">Approved:</p>
                  <h1 className="hfive">{team.approved}</h1>
                </div>
                <div className="flex w-[128px] text-start">
                  <p className="search-icon text-four">Pending:</p>
                  <h1 className="hfive">{team.pending}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
