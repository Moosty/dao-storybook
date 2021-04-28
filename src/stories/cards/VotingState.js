import React from "react";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/outline";
import {Typography} from "../Typography";

export const VotingState = ({isOpen, label}) => {
  return (<div className="flex flex-row justify-between">
    {isOpen ?
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row items-center rounded-default py-1 px-2 bg-themeButtonBg">
          <LockOpenIcon className="h-5 w-5 text-white mr-1"/>
          <Typography className="text-themeButtonTextPrimary" type="caption" Element="span">
            Open
          </Typography>
        </div>
        <div className="justify-end">
          <Typography type="caption" Element="span">
            {label}
          </Typography>
        </div>
      </div> :
      <div className="flex flex-row items-center rounded-default py-1 px-2 bg-surfaceBg">
        <LockClosedIcon className="h-5 w-5 text-textCaption mr-1"/>
        <Typography className="text-textCaption" type="caption" Element="span">
          Closed
        </Typography>
      </div>
    }
  </div>)
}