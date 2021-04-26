import {Paper} from "./Paper";
import {allMembers} from "../fixtures/members";
import {Typography} from "./Typography";
import {IconButton} from "./IconButton";
import {DotsVerticalIcon} from "@heroicons/react/solid";
import React from "react";

export const MemberCard =({address,name}) => {
  return (

  <Paper className="w-full flex-row items-center flex justify-between py-4 px-2 ">
    <div className="items-center flex  flex-row px-4 py-2">
      <img
        className="h-10 w-10 rounded-full mr-2"
        src={`https://avatar.moosty.com/${address}`}
        alt=""
      />
      <div className="flex flex-col">
        <Typography type="body" Element="body">{name}</Typography>
        <Typography type="bodyStrong" Element="body">{address}</Typography>

      </div>

    </div>
    <IconButton className="mx-auto">
      <DotsVerticalIcon className="h-5 w-5 "/>
    </IconButton>


  </Paper>
  )
}