import React from "react";

export const CardFooter = ({
                             left,
                             notAllowed,
                             className,
                             right,
                             userVote,
                             bgColor = "surfaceBg",
                           }) => {
  return (
    <div className={[
      "flex",
      "h-10",
      "justify-end",
      "rounded-default",
      "items-center",
      className,
      "w-full",
      "flex-end",
      "flex-row",
      `bg-${bgColor}`,
    ].join(" ")
    }>
      {left &&
      <div className="pl-4 items-center  sm:pl-6 w-full">
        {left}
      </div>
      }
      {right &&
      <div className="flex-end justify-end">
        {right}
      </div>
        }
    </div>
  )
}
