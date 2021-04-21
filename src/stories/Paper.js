import React from "react";

export const Paper = ({className, children}) => {
  return (
    <div className={[
      className,
      "flex",
      "flex-row",
      "bg-cardBg",
      "shadow-defaultPrimary",
      "overflow-hidden",
      "rounded-default",
      "divide-y",
      "",
    ].join(" ")}>
      {children}
    </div>
  )
}