import React from "react";
import {Button} from "./Button";
import {ButtonGroup} from "./ButtonGroup";

export const CardFooter = ({buttonLabel="vote", footerNotice, isOpen, buttonGroup, icon}) => {
  return (
    <div className="flex w-full flex-row bg-surfaceBg">
      <div className="pl-4 items-center  sm:pl-6 w-full">
        {footerNotice}
      </div>
      {isOpen &&
      < div className="flex-end">
        <Button buttonGroup={buttonGroup} icon={icon} label={buttonLabel} size="medium"/>
        <ButtonGroup />
        </div>
      }
    </div>
  )
}