import React from "react";
import {Typography} from "../Typography";
import {AvatarUser} from "./AvatarUser";
import {VotingState} from "./VotingState";

export const CrowdCardHeader = ({userName="raphael", userAddress="123l", time="2 days left"}) => {
  return (
    <div className="bg-cardBg flex flex-col px-4 py-2  sm:px-6">
      <div className="flex flex-row justify-between">
        <AvatarUser name={userName} address={userAddress}/>
        <Typography type="bodyStrong" Element="span">{time}</Typography>

      </div>


    </div>
  )
}