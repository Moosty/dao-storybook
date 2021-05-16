import React from "react";
import {Typography} from "../Typography";
import {ProgressBar} from "../ProgressBar";
import {ProgressDetails} from "../ProgressDetails";
import {crowdFundStates} from "../../shared/global.crowdfund";
import {CrowdCardImage} from "./CrowdCardImage";
import {CrowdCardInfo} from "./CrowdCardInfo";


export const CrowdCardContent = ({
                                   gradient,
                                   modal,
                                   unit = "LSK",
                                   totalRaised = 100,
                                   title = 'Project X ',
                                   category = "default",
                                   targetAmount,
                                   durationProject,
                                   projectUrl,
                                   image,
                                   state,
                                   budget,
                                   amountOfDays = 10,
                                   currentDay = 2,
                                 }) => {
  return (
    <div className="flex   flex-col space-y-2">
      <CrowdCardImage className="w-full h-24" image={image} gradient={gradient}/>
      <div className={["px-4",
        "flex-grow",
        "h-full",
        "bg-cardBg",
        "w-full",
        "py-2",
        "space-y-2",
        "flex",
        "flex-col",
        "justify-between",
      ].join(" ")}>
        <CrowdCardInfo title={title} category={category} projectUrl={projectUrl}/>
        {!modal &&
        <div>
          <ProgressDetails classname="flex-end justify-items-end" durationProject={durationProject} state={state}
                           totalRaised={totalRaised}/>
          {(state === crowdFundStates.PREVIEW || state === crowdFundStates.OPEN) && <>
            <ProgressBar classname="flex-end" target={targetAmount} current={totalRaised} unit={unit} state={state}/>
          </>
          }
          {(state !== crowdFundStates.PREVIEW && state !== crowdFundStates.OPEN) && <>
            <Typography type="bodyStrong" Element="span">Project Time Progress</Typography>
            <ProgressBar classname="flex-end" unit="Days" target={durationProject} current={totalRaised} state={state}/>
            <Typography type="bodyStrong" Element="span">Budget used</Typography>
            <ProgressBar classname="flex-end" unit="LSK" target={totalRaised} current={budget} state={state}/>
            <Typography type="bodyStrong" Element="span">Time untill next payout</Typography>
            <ProgressBar classname="flex-end" unit="Days" target={amountOfDays} current={currentDay} state={state}/>
          </>
          }
        </div>
        }
      </div>
    </div>
  )
}