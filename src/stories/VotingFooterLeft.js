import React from "react";
import {LockClosedIcon} from "@heroicons/react/solid";
import {Typography} from "./Typography";
import {InfoIcon} from "./forms/InfoIcon";

export const VotingFooterLeft = ({notAllowed, votingClosed,votingResult,userVote, inconclusive}) => {
  return (<>
    {notAllowed && !votingClosed &&
    < div className="flex flex-row items-center">

      <Typography type="body" Element="span">Read Only</Typography>
      <InfoIcon className="h-4 w-4 text-textCaption"/>
    < /div>
    }
      {(votingClosed && votingResult=== "inconclusive") &&
      <Typography type="bodyStrong" Element="span">not enough votes</Typography>
      }
      {(votingClosed && votingResult === "yes") &&
      <span className="w-1/2 text-successIcon  font-medium">Approved!</span>
      }
      {(votingClosed && votingResult === "no") &&
      <Typography className="text-dangerIcon" type="bodyStrong" Element="span">Not Approved!</Typography>

      }
    </>
  )
}