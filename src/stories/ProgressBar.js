import React from "react";
import {ProgressBarDetails} from "./ProgressBarDetails";

export const ProgressBar = ({state, className}) => {
  return (
    <div className={[
      "relative",
      className,
    ].join(" ")
    }>
      <ProgressBarDetails state={state} />
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-textPlaceHolder">
        <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-themeButtonBgSecondary"></div>
      </div>
    </div>
  )
}