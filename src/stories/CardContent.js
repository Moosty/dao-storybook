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


    </div>

  )
}


