import React from "react";
import {ProgressCircle} from "./ProgressCircle";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/outline";
import {Typography} from "./Typography";

export const VotingCardContent = ({closed, open}) => {
  return (
    <div className="flex flex-col w-full">
    <div className="flex flex-row justify-between space-x-4 w-full">
      <div className="w-1/2">
    <ProgressCircle
      type="votingCount"
      valueNo={20}
      valueYes={30}
      totalVotes={50}
      quorum={20}/>
      </div>
      <div className="w-1/2">
  <ProgressCircle
    type="votingYesNo"
    valueNo={20}
    valueYes={30}
    totalVotes={50}
    quorum={20}/>
      </div>
    </div>

      <div className="flex flex-row items-center">
        {closed ? <>
        <LockClosedIcon className="h-5 w-5 text-textPlaceHolder mr-1"/>
          <Typography type="caption" Element="span">
          Closed
          </Typography>
        </>
          :
     <>
        <LockOpenIcon className="h-5 w-5 text-textPlaceHolder mr-1"/>
          <Typography type="caption" Element="span">
            4 days to close
          </Typography>
        </>

        }
      </div>


    </div>
  )
}