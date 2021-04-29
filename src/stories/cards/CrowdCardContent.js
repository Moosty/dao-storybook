import React from "react";
import {Typography} from "../Typography";
import {Button} from "../Button";
import {Chip} from "../Chip";
import {ProgressBar} from "../ProgressBar";
import {ProgressDetails} from "../ProgressDetails";
import {ClockIcon} from "@heroicons/react/solid";

export const CrowdCardContent = ({gradient,state, title='Project X ',
                                   subTitle="this is a subtitle", category="default"}) => {
  return (
    <div className="flex flex-col space-y-2">
    <div className="relative ">
        <img
          className="w-full h-24 object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
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
            <Typography type="bodyStrong" Element="span">{subTitle}</Typography>

          </div>
          <Chip category={category} />
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