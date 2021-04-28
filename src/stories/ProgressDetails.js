import React from "react";
import {Typography} from "./Typography";

export const ProgressDetails = ({}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col text-left">
        <Typography type="body" Element="span">Project Duration:</Typography>
        <Typography type="bodyStrong" Element="span">3/12 Months</Typography>
      </div>
      <div className="flex flex-col text-right">
       <Typography type="body" Element="span">Total raised:</Typography>
        <Typography type="bodyStrong" Element="span">10000 CFT
        </Typography>

      </div>
    </div>
  )
}