import React from "react";
import {ProgressCircle} from "./ProgressCircle";


export const CardContent = ({children, className}) => {
  return (
    <div className={[
      className,
      "px-4",
      "flex-grow",
      "bg-cardBg",
      "w-full",
      "py-10",
    ].join(" ")}>
      <div className={[
        className,
        "flex",
        "row",
        "justify-around"

      ].join(" ")}>
        <div className="w-1/2 p-2">
          <ProgressCircle
            type="votingCount"
            valueYes={24}
            totalVotes={567}
            valueNo={60}
            quorum={40}/>
        </div>
        <div className="w-1/2 p-2">
          <ProgressCircle
            type="votingYesNo"
            valueYes={24}
            totalVotes={567}
            valueNo={60}
            quorum={40}/>
        </div>

      </div>
      <ProgressCircle
        type="votingYesNo"
        valueYes={24}
        totalVotes={567}
        valueNo={60}
        quorum={40}/>

    </div>

  )
}


