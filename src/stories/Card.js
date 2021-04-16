import React from "react";
import {CardHeader} from "./CardHeader";
import {CardFooter} from "./CardFooter";
import {CardContent} from "./CardContent";


export const Card = ({className, cardNo, cardYes}) => {
  return (
    <div className={[
      className,
      "m-4",
      "flex",
      "flex-row",
      "bg-cardBg",
      "shadow-defaultPrimary",
      "overflow-hidden",
      "rounded-lg",
      "divide-y",
      "w-full",
      "rounded-md",
    ].join(" ")}>

      <div className={[
        cardNo && "bg-dangerIcon shadow-cardNo",
        cardYes && "shadow-cardYes bg-successIcon ",
        "bg-formBorder",
        "w-1",
        "h-full",
      ].join(" ")}
      >

      </div>
      <div className={[
        "divide-gray-200",
        "w-full",
      ].join(" ")}>
        <CardHeader/>
        <CardContent />
      <CardFooter />
      </div>
    </div>
  )
}


