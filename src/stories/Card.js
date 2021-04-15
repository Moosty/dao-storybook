import React from "react";
import {CardHeader} from "./CardHeader";
import {Button} from "./Button";


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
      ].join(" ")}>
        <CardHeader/>
        <div className="px-4 py-5 sm:p-6">test2</div>
        <div className="flex w-full flex-row h-10 bg-surfaceBg">
          <div className="px-4 py-4 sm:px-6 w/full">
            Votes
          </div>
          <div className="  flex-end">
            <Button label="Vote"/>
          </div>
        </div>
      </div>
    </div>
  )
}


