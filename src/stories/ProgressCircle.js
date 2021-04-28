import React, {useEffect, useState} from "react";
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";
import {CheckCircleIcon, MinusIcon, XCircleIcon} from "@heroicons/react/outline";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {Typography} from "./Typography";

const pathColors = {
  "votingYesNo": "#2BD67B",
  "votingCount": "#8A92A5",
  "quorumReached": "#3b81f6",
}
export const ProgressCircle = ({
                                 type,
                                 valueYes,
                                 valueNo,
                                 quorum,
                                 background,
                                 eligibleVotes,
                                 minToWin,
                                 minVotes,
                                 minYesVotes
                               }) => {

  const [quorumReached, setQuorumReached] = useState(false);
  const [quorumRotation, setQuorumRotation] = useState("rotate-0");
  // const [voteQuorumRotation, setVoteQuorumRotation] = useState("rotate-0");
  useEffect(() => {
    setQuorumReached(valueYes + valueNo > eligibleVotes * (quorum / 100))
  }, [valueYes, valueNo, quorum])

  useEffect(() => {
    setQuorumRotation(quorum < 50 ? `-rotate-${Math.floor(135 - quorum / (50 / 135))}` : `rotate-${Math.floor((quorum / (50 / 135)) - 135)}`);
    // setVoteQuorumRotation();
  }, [quorum, eligibleVotes, minToWin])
  return (
    <CircularProgressbarWithChildren
      value={type === "votingCount" ? ((valueYes + valueNo) / eligibleVotes) * 100 :
        quorumReached ? (valueYes / (valueYes + valueNo)) * 100 : (valueYes / minVotes) * 100}
      circleRatio={0.75}
      background={background}
      strokeWidth={4}
      styles={{
        ...buildStyles({
          rotation: 1 / 2 + 1 / 8,
          trailColor: "#eee",
          pathColor: pathColors[quorumReached && type === "votingCount" ? "quorumReached" : type],
        }),
        background: {
          fill: "white",
        }
      }}>
      {type === "votingCount" && <div
        className={["absolute",
          "w-full",
          "h-full",
          "mx-auto",
          "flex",
          "justify-center",
          "transform",
          quorumRotation,
        ].join(" ")}
      >
        <div className={"absolute top-6px"} style={{
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderBottom: "8px solid black",
        }}/>
      </div>}
      {type === 'votingCount' &&
      <div className="flex flex-col align-center text-center">
        <Typography
          type="ProgressNumber"
          Element="span"
          className={[
            quorumReached ? "text-themeButtonBg" : "text-textPlaceHolder",
          ].join(" ")}
        >
          {valueYes + valueNo}
        </Typography>
        <Typography type="body" className="text-textPlaceHolder uppercase">
          votes
        </Typography>

        {quorumReached ?
          <CheckCircleIcon className="w-10 h-10 mx-auto -mb-4 text-themeButtonBg"/> :
          <XCircleIcon className="w-10 h-10 mx-auto -mb-4 text-textPlaceHolder"/>}
      </div>}
      {type === 'votingYesNo' &&
      <CircularProgressbarWithChildren
        value={quorumReached ? (valueNo / (valueYes + valueNo)) * 100 : (valueNo / minVotes) * 100}
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
        <div className="absolute top-6px">
          <div style={{
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: "8px solid black",
          }}/>
        </div>
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
        {quorumReached ?
          valueNo >= minYesVotes ? <ThumbDownIcon className="w-8 h-8 mx-auto -mb-4 text-dangerIcon"/> :
            valueYes >= minYesVotes ? <ThumbUpIcon className="w-8 h-8 mx-auto -mb-4 text-successIcon"/> :
              <MinusIcon className="w-8 h-8 mx-auto -mb-4 text-textPlaceHolder"/> :
          <MinusIcon className="w-8 h-8 mx-auto -mb-4 text-textPlaceHolder"/>
        }
      </CircularProgressbarWithChildren>}
    </CircularProgressbarWithChildren>
  );
};