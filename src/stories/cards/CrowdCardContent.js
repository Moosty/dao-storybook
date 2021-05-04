import React from "react";
import {Typography} from "../Typography";
import {Button} from "../Button";
import {Chip} from "../Chip";
import {ProgressBar} from "../ProgressBar";
import {ProgressDetails} from "../ProgressDetails";
import {ClockIcon} from "@heroicons/react/solid";
import {categories, projectImages} from "../crowd/constants";
import {AvatarUser} from "./AvatarUser";


export const CrowdCardContent = ({
                                   gradient,
                                   title='Project X ',
                                   subTitle="this is a subtitle",
                                   category="default",
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
                                   userAddress,

}) => {
  return (
    <div className="flex flex-col space-y-2">
    <div className="relative ">
        <img
          className="w-full h-24 object-cover"
          src={projectImages[image || 0]}
          alt=""
        />
      {gradient &&
      <div className="absolute inset-0 bg-themeButtonBgSecondary" style={{mixBlendMode: 'multiply'}}
           aria-hidden="true"/>
      }

    </div>
      <div className={["px-4",
    "flex-grow",
    "bg-cardBg",
    "w-full",
    "py-2",
        "space-y-2",
      ].join(" ")}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <Typography type="h4" Element="span">{title}</Typography>

          </div>
          <Chip category={categories[category || 0]} />
        </div>


        <ProgressDetails state={state} />
        <ProgressBar />
        <div className="flex flex-row justify-between">
          <Typography type="bodyStrong" Element="span">
            Next vote:
          </Typography>
          <div className="flex flex-row">
            <ClockIcon className="h-5 w-5 text-textPlaceHolder" />
            <Typography type="bodyStrong" Element="span">
              In a day
            </Typography>

          </div>
        </div>

      </div>
    </div>
  )
}