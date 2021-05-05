import React from "react";
import {Typography} from "./index";

export const ProgressBarDetails = ({state,percentage,targetAmount, totalRaised, current, target, unit}) => {
  return (
    <div className="w-full mb-1 flex flex-row justify-between items-center">
      <Typography type="body" Element="span">
        <Typography type="h3" Element="span" className="text-themeNavBarBg">{current}</Typography>/{target}
        <Typography type="bodyStrong" Element="span"> {unit}</Typography></Typography>
      <Typography type="bodyStrong" Element="span">{((current / target) * 100).toFixed(2)}%</Typography>
    </div>
  )
}