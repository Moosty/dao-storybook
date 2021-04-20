import React, { useEffect, useState } from "react";

import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";


const pathColors = {
  "votingYesNo": "#2dec00",
  "votingCount": "#3b81f6",

}
export const ProgressCircle = ({type, value, valueYes, valueNo, quorum, background, totalVotes}) => {

  const [quorumReached, setQuorumReached] = useState(false);

  useEffect(() => {
    setQuorumReached(valueYes + valueNo >= quorum)
  }, [valueYes, valueNo, quorum])

  return (
    <CircularProgressbarWithChildren
      value={type === "votingCount" ? (totalVotes / quorum) * 100 :
        quorumReached ? (valueYes / (valueYes + valueNo)) * 100 : (valueYes / quorum) * 100}
      circleRatio={0.75}
      background={background}
      strokeWidth={4}
      styles={{
        ...buildStyles({
          rotation: 1 / 2 + 1 / 8,
          trailColor: "#eee",
          pathColor: pathColors[type],
        }),
        background: {
          fill: "white",
        }
      }}>
      {type === 'votingCount' &&
      <div className="flex flex-col align-center text-center">
        <span className="text-lg font-black text-blue-400">{totalVotes}</span>
        <span className="text-xs text-gray-300">votes</span>
      </div>}
      {type === 'votingYesNo' &&
      <CircularProgressbarWithChildren
        value={quorumReached ? (valueNo / (valueYes + valueNo)) * 100 : (valueNo / quorum) * 100}
        className="transform -rotate-90"

        counterClockwise={true}
        circleRatio={0.75}
        strokeWidth={4}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          trailColor: "transparent",
          strokeLinecap: "",
          pathColor: "#FF3D00",
        })}
      >
        <div className="flex flex-row">
          <div className="flex flex-col align-center text-center">
            <span className="text-lg font-black" style={{color: "#2dec00"}}>{valueYes}</span>
            <span className="text-xs text-gray-300">votes</span>
          </div>
          <div className="flex flex-col align-center text-center">
            <span className="text-lg font-black" style={{color: "#FF3D00"}}>{valueNo}</span>
            <span className="text-xs text-gray-300">votes</span>
          </div>
        </div>
      </CircularProgressbarWithChildren>}
    </CircularProgressbarWithChildren>
  );
};