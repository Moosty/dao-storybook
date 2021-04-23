import React from "react";
import {ProgressCircle} from "./ProgressCircle";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/outline";
import {Typography} from "./Typography";

export const VotingCardContent = ({closed, openLabel, valueYes, valueNo, quorum, eligibleVotes}) => {
  return (
    <div className="flex flex-col w-full">
    <div className="flex flex-row justify-between space-x-4 w-full">
      <div className="w-1/2 p-2">
    <ProgressCircle
      type="votingCount"
      valueNo={valueNo}
      valueYes={valueYes}
      eligibleVotes={eligibleVotes}
      quorum={quorum}/>
      </div>
      <div className="w-1/2 p-2">
  <ProgressCircle
    type="votingYesNo"
    valueNo={valueNo}
    valueYes={valueYes}
    quorum={quorum}/>
      </div>
    </div>




    </div>
  )
}