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
      className="z-10"
      strokeWidth={4}
      styles={{
        ...buildStyles({
          rotation: 1 / 2 + 1 / 8,
          trailColor: "#eee",
          pathColor: pathColors[type],
        }),
        background: {
          fill: "",
        }
      }}>
      {type === 'votingCount' &&
      <div className="flex flex-col align-center text-center">
        <span className="text-lg font-black text-textPlaceHolder">{totalVotes}</span>
        <span className=" text-textPlaceHolder">votes</span>
      </div>}
      {type === 'votingYesNo' &&
      <CircularProgressbarWithChildren
        value={quorumReached ? (valueNo / (valueYes + valueNo)) * 100 : (valueNo / quorum) * 100}
        className="transform -rotate-90 z-50 "

        counterClockwise={true}
        circleRatio={0.75}
        strokeWidth={20}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: "",
          trailColor: "#eee",
          pathColor: pathColors[type],
        })}
      >
        <div className="flex flex-row">
          <div className="flex flex-col align-center text-center">
            <span className="text-lg text-successIcon">{valueYes}</span>
            <span className="text-xs text-textBody">Yes</span>
          </div>
          <div className="flex flex-col align-center text-center">
            <span className="text-lg text-dangerIcon">{valueNo}</span>
            <span className="text-xs text-textBody">no</span>
          </div>
        </div>
      </CircularProgressbarWithChildren>}
    </CircularProgressbarWithChildren>
  );
};