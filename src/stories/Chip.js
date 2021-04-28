import React from "react";
import {LockClosedIcon, LockOpenIcon} from "@heroicons/react/outline";
import {Typography} from "./Typography";

export const Chip = ({category}) => {
  return (<div className="flex flex-row justify-between">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row items-center rounded-default py-1 px-2 bg-themeNavBarBg">
          <Typography className="text-themeButtonTextPrimary" type="caption" Element="span">
            {category}
          </Typography>
        </div>

      </div>


  </div>)
}