import React from "react";
import {LockClosedIcon} from "@heroicons/react/solid";

export const VotingFooterLeft = ({notAllowed, votingClosed,votingResult,userVote, inconclusive}) => {
  return (<>
    {notAllowed && !votingClosed &&
    < div>
      <LockClosedIcon className="h-5 w-4 text-textDisabled"/>
      This
      Voting
      isnt
      for you
    < /div>
    }
      {(votingClosed && votingResult=== "inconclusive") &&
      <span>not enough votes</span>
      }
      {(votingClosed && votingResult === "yes") &&
      <span className="w-1/2 text-successIcon  font-medium">Approved!</span>
      }
      {(votingClosed && votingResult === "no") &&
      <span className="w-1/2 text-dangerIcon  font-medium">Not Approved!</span>
      }
    </>
  )
}