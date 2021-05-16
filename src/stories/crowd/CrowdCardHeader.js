import React from "react";
import {Typography} from "../Typography";
import {AvatarUser} from "../cards/AvatarUser";
import {VotingState} from "../cards/VotingState";

export const CrowdCardHeader = ({userName="raphael", userAddress="123l",state}) => {
  return (
    <div className="bg-cardBg flex flex-col px-4 py-2  sm:px-6">
      <div className="flex flex-row justify-between">
        <AvatarUser name={userName} address={userAddress}/>
        <Typography type="bodyStrong" Element="span">{state}</Typography>

      </div>


    </div>
  )
}