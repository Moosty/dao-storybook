import React from "react";
import {Typography} from "../Typography";
import {Chip} from "../Chip";
import {categories} from "./constants";

export const CrowdCardInfo = ({category, title}) => {
  return (
    <div className="flex flex-row h-full flex-grow justify-between">
      <div className="flex flex-col">
        <Typography type="h4" Element="span">{title}</Typography>

      </div>
      <Chip category={categories[category || 0]}/>
    </div>
  )
}