import React from "react";
import {ProgressBarDetails} from "./ProgressBarDetails";

export const ProgressBar = ({state, className, totalRaised,targetAmount, current, target, unit}) => {
  return (
    <div className={[
      "relative",
      className,
    ].join(" ")
    }>
      <ProgressBarDetails  target={target} current={current} state={state} unit={unit} />
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-textPlaceHolder">
        <div style={{ width: `${(current / target) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeButtonBgSecondary"></div>
        {/*<div style={{ width: `${(totalRaised / targetAmount) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeButtonBgSecondary"></div>*/}
      </div>
    </div>
  )
}