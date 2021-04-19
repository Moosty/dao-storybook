import React from "react";
import {ButtonGroup} from "./ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";

export const VotingFooterRight = ({userVote, notAllowed}) => {
  return (
    <div className="flex-end">
      <div className="flex flex-row">
        {userVote === "yes" &&
        <>
          <ThumbUpIcon className="h-5 w-5 text-successIcon"/>
          <ThumbDownIcon className="h-5 w-5 text-textDisabled"/>
        </>
        }
        {userVote === "no" &&
        <>
          <ThumbUpIcon className="h-5 w-5 text-textDisabled"/>
          <ThumbDownIcon className="h-5 w-5 text-dangerIcon"/>
        </>
        }
      </div>


      {!userVote && !notAllowed &&
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