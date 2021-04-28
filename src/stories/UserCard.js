import React from "react";
import {Card} from "./cards/Card";
import {Typography} from "./Typography";

export const UserCard = ({userName,address}) => {
  return (
    <Card>
      <div className="flex flex-row w-full">
        <img
          className="h-4 w-4 rounded-full mr-2"
          src="https://avatar.moosty.com/"
          alt=""
        />
        <div className="flex flex-col">
        <Typography type="h2" Element="h2">
          {userName}
        </Typography>
          <Typography type="body" Element="body">
            {address}
          </Typography>
        </div>
      </div>
    </Card>
  )
}