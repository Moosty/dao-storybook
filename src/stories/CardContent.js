import React from "react";


export const CardContent = ({children, className}) => {
  return (
    <div className={[
      className,
      "px-4",
      "bg-cardBg",
      "w-full",
      "py-10",
      "sm:p-20",
      ].join(" ")}>
      {children}
      </div>

      )
    }


