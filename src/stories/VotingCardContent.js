import React from "react";
import {ProgressCircle} from "./ProgressCircle";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/outline";
import {Typography} from "./Typography";

export const VotingCardContent = ({closed, openLabel,minReqYesVotes, valueYes, valueNo, quorum, eligibleVotes,minReqVotes}) => {
  return (
    <div className="flex flex-col w-full">
    <div className="flex flex-row justify-between space-x-4 w-full">
      <div className="w-1/2 p-2 flex-col flex">
    <ProgressCircle
      type="votingCount"
      valueNo={valueNo}
      valueYes={valueYes}
      eligibleVotes={eligibleVotes}
      quorum={quorum}/>
        <Typography className="text-center" type="caption" Element="span">
          Minimum required votes:   <Typography type="bodyStrong" Element="span">
          {(quorum /100 ) * eligibleVotes}
          </Typography>
        </Typography>
      </div>
      <div className="w-1/2 p-2 flex-col flex">
  <ProgressCircle
    type="votingYesNo"
    valueNo={valueNo}
    valueYes={valueYes}
    quorum={quorum}/>
        <Typography className="text-center" type="caption" Element="span">
          Minimum required yes votes: <Typography type="bodyStrong" Element="span">{(((quorum /100 ) * eligibleVotes)/2)+1}</Typography>
        </Typography>
      </div>
    </div>




    </div>
  )
}