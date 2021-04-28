import React from "react";
import {Typography} from "./Typography";
import {Button} from "./Button";

export const DaoInvitation = ({dao, id, onClick}) => {
  return (
    <div className="w-full p-2 bg-surfaceBg flex flex-col">
      <Typography type="bodyStrong" Element="span" >You are invited for:</Typography>
      <div className="items-center flex my-2 flex-row">
        <img
          className="h-6 w-6 rounded-full mr-2"
          src={`https://avatar.moosty.com/${id}`}
        />
        <Typography className="w-48" type="body" Element="span">{dao}</Typography>
      </div>
      <Button onClick={() => onClick} label="Accept invite" size="small" secondary/>
    </div>
  )
}