import React from "react";
import PropTypes from "prop-types";
import {Typography} from "../Typography";
import {ClockIcon} from "@heroicons/react/solid";
import {crowdFundStates} from "./constants";

export const CrowdCardFooter = ({left, className, right, bgColor, state, time}) => (
  <div className={[
    "flex flex-end flex-row",
    "justify-between items-center",
    "rounded-default",
    "w-full h-10",
    `bg-${bgColor}`,
    className,
  ].join(" ")
  }>
    <div className="flex flex-row justify-between pr-4 w-full">
      <Typography type="bodyStrong" Element="span">
        {state === crowdFundStates.PREVIEW && "Crowdfund starts"}
        {state === crowdFundStates.PENDING && "Project starts"}
        {state === crowdFundStates.ACTIVE.ACTIVE && "Next vote"}
        {state === crowdFundStates.ACTIVE.VOTING && "Currently in voting"}

      </Typography>
      <div className="flex flex-row flex-end">
        <ClockIcon className="h-5 w-5 text-textPlaceHolder" />
        <Typography type="bodyStrong" Element="span">
          {state === crowdFundStates.PREVIEW && [time]}
          {state === crowdFundStates.PENDING && [time]}

        </Typography>

      </div>
    </div>
  </div>
)

CrowdCardFooter.propTypes = {
  className: PropTypes.string,
  left: PropTypes.func,
  right: PropTypes.func,
  bgColor: PropTypes.oneOf(["surfaceBg", "surfaceIconBg"]),
};

CrowdCardFooter.defaultProps = {
  className: "",
  bgColor: "surfaceBg"
};