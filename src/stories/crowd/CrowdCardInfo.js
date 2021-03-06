import React from "react";
import {Typography} from "../Typography";
import {Chip} from "../smallElements/Chip";
import {categories} from "../../shared/global.crowdfund";
import {ExternalLinkIcon} from "@heroicons/react/solid";

export const CrowdCardInfo = ({category, title, projectUrl}) => {
  return (
    <div className="flex flex-row  justify-between h-20">
      <div className="flex flex-col">
        <Typography type="h4" Element="span">{title}</Typography>
        <div className="flex flex-row items-center">
          <ExternalLinkIcon className="h-3 w-3 mr-1" />
        <Typography type="link" Element="span">{projectUrl}</Typography>
        </div>

      </div>
      <Chip category={categories[category || 0]}/>
    </div>
  )
}