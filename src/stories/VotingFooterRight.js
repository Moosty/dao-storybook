import React from "react";
import {ButtonGroup} from "./ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {VotingFooterLeft} from "./VotingFooterLeft";

export const VotingFooterRight = ({userVote, notAllowed, votingResult, votingClosed}) => {
  return (
    <div className={[
      "flex-end",
      !userVote && !notAllowed && !votingClosed ? "pr-0" : "pr-4",

      ].join(" ")}>
      <div className="flex flex-row">

        {(!votingClosed && userVote === "yes" ) &&
        <><span className="flex flex-row p-4">
          <ThumbUpIcon className="h-5 w-5 text-successIcon mr-2"/>
          <ThumbDownIcon className="h-5 w-5 text-textDisabled"/>
          </span>
        </>
        }
        {(!votingClosed && userVote === "no") &&
        <><span className="flex flex-row p-4">
          <ThumbUpIcon className="h-5 w-5 text-textDisabled mr-2"/>
          <ThumbDownIcon className="h-5 w-5 text-dangerIcon"/>
        </span>
        </>
        }
      </div>
      {votingClosed && !notAllowed && !userVote &&
      <span className="w-full">You didn't vote</span>
      }
      {(votingClosed && !notAllowed && userVote === "yes") &&
      <span className="w-full text-textDisabled  font-medium">Your vote <ThumbUpIcon className="h-5 w-5 text-successIcon mr-2"/></span>
      }
      {(votingClosed && !notAllowed && userVote === "no") &&
      <span className="w-full text-textDisabled font-medium">Your vote  <ThumbDownIcon className="h-5 w-5 text-dangerIcon mr-2"/></span>
      }
      {(votingClosed && notAllowed) &&
      <span className="w-full font-medium">Read only</span>
      }


      {!userVote && !notAllowed && !votingClosed &&
      <ButtonGroup
        buttons={[
          {icon: <ThumbUpIcon className="h-5 w-5"/>},
          {icon: <ThumbDownIcon className="h-5 w-5"/>},
        ]}
      />
      }
    </div>
  )
}