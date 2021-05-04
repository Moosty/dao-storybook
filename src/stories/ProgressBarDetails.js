import React from "react";
import {Typography} from "./index";

export const ProgressBarDetails = ({state}) => {
  return (
    <div className="w-full mb-1 flex flex-row justify-between">
      <Typography type="bodyStrong" Element="span">10.000/220.000TKN</Typography>
      <Typography type="bodyStrong" Element="span">10%</Typography>
    </div>
  )
}