import React from "react";
import {Typography} from "./index";

export const ProgressBarDetails = ({state,percentage,targetAmount, totalRaised}) => {
  return (
    <div className="w-full mb-1 flex flex-row justify-between">
      <Typography type="bodyStrong" Element="span">{totalRaised}/{targetAmount}TKN</Typography>
      <Typography type="bodyStrong" Element="span">{((totalRaised / targetAmount) * 100).toFixed(2)}%</Typography>
    </div>
  )
}