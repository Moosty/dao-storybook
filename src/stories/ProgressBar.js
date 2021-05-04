import React from "react";
import {ProgressBarDetails} from "./ProgressBarDetails";

export const ProgressBar = ({state, className, totalRaised,targetAmount}) => {
  return (
    <div className={[
      "relative",
      className,
    ].join(" ")
    }>
      <ProgressBarDetails  targetAmount={targetAmount} totalRaised={totalRaised} state={state} />
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-textPlaceHolder">
        <div style={{ width: `${(totalRaised / targetAmount) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeButtonBgSecondary"></div>
      </div>
    </div>
  )
}