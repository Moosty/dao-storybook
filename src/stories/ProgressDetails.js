import React from "react";
import {Typography} from "./Typography";
import {crowdFundStates} from "./crowd/constants";


export const ProgressDetails = ({state}) => {
  return (<>
    <div className="flex flex-row justify-between">
      <div className="flex flex-col text-left">

        <Typography type="body" Element="span">
          {crowdFundStates.PREVIEW === state && "Preview:"}
          {crowdFundStates.OPEN === state && "Project Goal:"}
          {crowdFundStates.ACTIVE.ACTIVE === state && "Project Goal:"}
        </Typography>
          <Typography type="bodyStrong" Element="span">0/
            990000 CFT
          </Typography>


      </div>
      <div className="flex flex-col text-right">
        {crowdFundStates.OPEN === state && <>
          <Typography type="body" Element="span">Total Backers:</Typography>
          <Typography type="bodyStrong" Element="span">64
          </Typography>
        </>
        }
        {crowdFundStates.ACTIVE === state && <>
          <Typography type="body" Element="span">Total raised:</Typography>
          <Typography type="bodyStrong" Element="span">10000 CFT
          </Typography>
        </>
        }

      </div>
    </div>
    </>
  )
}