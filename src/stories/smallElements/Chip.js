import React from "react";
import {Typography} from "../Typography";

export const Chip = ({category}) => {
  return (
    <div className="flex flex-row h-6 items-center rounded-default py-1 px-2 bg-themeNavBarBg">
      <Typography className="text-themeButtonTextPrimary" type="caption" Element="span">
        {category}
      </Typography>
    </div>)
}