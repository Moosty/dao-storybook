import React from "react";
import {Button} from "./Button";

export const CardFooter = ({buttonLabel="vote", footerNotice, isOpen}) => {
  return (
    <div className="flex w-full flex-row bg-surfaceBg">
      <div className="pl-4 items-center  sm:pl-6 w-full">
        {footerNotice}
      </div>
      {isOpen &&
      < div className="flex-end">
        <Button label={buttonLabel} size="medium"/>
        </div>
      }
    </div>
  )
}