import React from "react";
import {Typography} from "./Typography";

export const ProgressDetails = ({durationProject, backers}) => {
  return (<>
    <div className="flex flex-row justify-between mb-4">
      <div className="flex flex-col text-left">
        <Typography type="body" Element="span">
          Project Duration:
          {/*{crowdFundStates.PREVIEW === state && "Project Duration:"}*/}
          {/*{crowdFundStates.OPEN === state && "Project Goal:"}*/}
          {/*{crowdFundStates.ACTIVE.ACTIVE === state && "Project Goal:"}*/}
        </Typography>
        <Typography type="bodyStrong" Element="span">{durationProject}</Typography>
      </div>
      <div className="flex flex-col text-right">
          <Typography type="body" Element="span">Total Backers:</Typography>
          <Typography type="bodyStrong" Element="span">{backers?.length || 0}</Typography>
      </div>
    </div>
    </>
  )
}