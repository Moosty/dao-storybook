import React from "react";
import {Typography} from "../Typography";
import {Button} from "../Button";
import {Chip} from "../Chip";
import {ProgressBar} from "../ProgressBar";
import {ProgressDetails} from "../ProgressDetails";
import {ClockIcon} from "@heroicons/react/solid";
import {categories, projectImages} from "../crowd/constants";
import {AvatarUser} from "./AvatarUser";
import {CrowdCardImage} from "../crowd/CrowdCardImage";
import {CrowdCardInfo} from "../crowd/CrowdCardInfo";


export const CrowdCardContent = ({
                                   gradient,
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
      <CrowdCardImage image={image} gradient={gradient}/>
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
        <ProgressDetails classname="flex-end justify-items-end" durationProject={durationProject} state={state} totalRaised={totalRaised}/>
        <ProgressBar  classname="flex-end" targetAmount={targetAmount} totalRaised={totalRaised}  state={state}/>
        </div>

      </div>
    </div>
  )
}