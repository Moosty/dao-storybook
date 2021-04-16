import React from "react";
import {Button} from "./Button";

export const CardFooter = () => {
  return (
    <div className="flex w-full flex-row bg-surfaceBg">
      <div className="pl-4 items-center  sm:pl-6 w-full">
        Votes
      </div>
      <div className="flex-end">
        <Button label="Vote" size="medium"/>
      </div>
    </div>
  )
}