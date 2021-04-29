import React from "react";
import {Typography} from "./Typography";

export const crowdFundStates = {
  PREVIEW: "preview",
  OPEN: "open",
  PENDING: "pending",
  ACTIVE: "active",
  FAILED: "failed",
  ENDED: "ended",
  CANCELED: "canceled",

}

export const ProgressDetails = ({state}) => {
  return (<>
    <div className="flex flex-row justify-between">
      <div className="flex flex-col text-left">
        {crowdFundStates.OPEN === state && <>
        <Typography type="body" Element="span">Project Goal:</Typography>
          <Typography type="bodyStrong" Element="span">0/
            990000 CFT
          </Typography>
        </>
        }
        {crowdFundStates.ACTIVE === state && <>
          <Typography type="body" Element="span">Project Duration:</Typography>
          <Typography type="bodyStrong" Element="span">3/12 Months</Typography>
        </>
        }
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