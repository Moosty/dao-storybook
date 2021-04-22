import React, { useEffect, useState } from "react";

import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import {Typography} from "./Typography";
import {CheckCircleIcon} from "@heroicons/react/outline";


const pathColors = {
  "votingYesNo": "#2dec00",
  "votingCount": "#3b81f6",

}
export const ProgressCircle = ({type, value, valueYes, valueNo, quorum,  background, totalVotes}) => {

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
        <Typography type="ProgressNumber" Element="span" className="text-textPlaceHolder">{totalVotes}</Typography>
        <Typography type="body" className="text-textPlaceHolder uppercase">votes</Typography>
        <CheckCircleIcon className="w-10 h-10 mx-auto -mb-4 text-textPlaceHolder"/>
      </div>}
      {type === 'votingYesNo' &&
      <CircularProgressbarWithChildren
        value={quorumReached ? (valueNo / (valueYes + valueNo)) * 100 : (valueNo / quorum) * 100}
        className="transform -rotate-90 w-full "

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
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col align-center text-center">
            <Typography type="ProgressNumber" Element="span" className="text-successIcon">{valueYes}</Typography>
            <Typography type="body" className="text-textPlaceHolder uppercase">Yes</Typography>
          </div>
          <div className="flex flex-col align-center text-center">
            <Typography type="ProgressNumber" Element="span" className="text-dangerIcon">{valueNo}</Typography>
            <Typography type="body" className="text-textPlaceHolder uppercase">No</Typography>
          </div>

        </div>
        <CheckCircleIcon className="w-10 h-10 mx-auto -mb-4 text-successIcon"/>

      </CircularProgressbarWithChildren>}
    </CircularProgressbarWithChildren>
  );
};