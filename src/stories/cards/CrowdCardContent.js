import React from "react";
import {Typography} from "../Typography";
import {Button} from "../Button";
import {Chip} from "../Chip";
import {ProgressBar} from "../ProgressBar";
import {ProgressDetails} from "../ProgressDetails";
import {ClockIcon} from "@heroicons/react/solid";
import {categories, crowdFundStates, projectImages} from "../crowd/constants";
import {AvatarUser} from "./AvatarUser";
import {CrowdCardImage} from "../crowd/CrowdCardImage";
import {CrowdCardInfo} from "../crowd/CrowdCardInfo";


export const CrowdCardContent = ({
                                   gradient,
                                   unit = "LSK",
                                   totalRaised = 100,
                                   percentage,
                                   title = 'Project X ',
                                   subTitle = "this is a subtitle",
                                   category = "default",
                                   owner,
                                   targetAmount,
                                   durationProject,
                                   projectUrl,
                                   image,
                                   closeDate,
                                   closeDateFull,
                                   state,
                                   budget,
                                   backers,
                                   donatedAmount,
                                   message,
                                   viewer,
                                   maxVoteWeight,
                                   notVoteWeight,
                                   ownerMessage,
                                   voteResult,
                                   userName,
                                   time,
                                   userAddress,

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
        <div>
            <ProgressDetails classname="flex-end justify-items-end" durationProject={durationProject} state={state}
                             totalRaised={totalRaised}/>
          {(state === crowdFundStates.OPEN || state === crowdFundStates.PREVIEW) && <>

            <ProgressBar classname="flex-end" target={targetAmount} current={totalRaised} unit={unit} state={state}/>
          </>
          }
          {(state !== crowdFundStates.OPEN && state !== crowdFundStates.PREVIEW )&& <>
          <Typography type="bodyStrong" Element="span">Project Time Progress</Typography>
            <ProgressBar classname="flex-end" unit="Days" target={durationProject} current={totalRaised} state={state}/>

          <Typography type="bodyStrong" Element="span">Budget used</Typography>
          <ProgressBar classname="flex-end" unit="LSK" target={totalRaised} current={budget} state={state}/>
          <Typography type="bodyStrong" Element="span">Time untill next payout</Typography>
          <ProgressBar classname="flex-end" unit="Days" target={10} current={2} state={state}/>
          </>
          }
        </div>

      </div>
    </div>
  )
}