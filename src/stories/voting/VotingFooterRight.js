import React from "react";
import {ButtonGroup} from "../ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {Typography} from "../Typography";
import {InfoIcon} from "../forms/InfoIcon";
import PropTypes from "prop-types";
import {Tooltip} from "../Tooltip";

export const VotingFooterRight = ({userVote, notAllowed, votingClosed, readOnlyToolTip, buttons}) => (
  <div className={[
    "flex-end",
    !userVote && !notAllowed && !votingClosed ? "pr-0" : "pr-4",
  ].join(" ")}>
    <div className="flex flex-row">
      {(!votingClosed && userVote === "yes") && <>
        <span className="flex flex-row p-4">
          <ThumbUpIcon className="h-5 w-5 text-successIcon mr-2"/>
          <ThumbDownIcon className="h-5 w-5 text-textDisabled"/>
        </span>
      </>}
      {(!votingClosed && userVote === "no") && <>
        <span className="flex flex-row p-4">
          <ThumbUpIcon className="h-5 w-5 text-textDisabled mr-2"/>
          <ThumbDownIcon className="h-5 w-5 text-dangerIcon"/>
        </span>
      </>}
    </div>
    {votingClosed && !notAllowed && !userVote &&
    <Typography className="" type="body" Element="span">
      You didn't vote
    </Typography>}
    {(votingClosed && !notAllowed && userVote === "yes") &&
    <Typography className="flex flex-row items-center" type="body" Element="span">
      Your vote <ThumbUpIcon className="h-5 w-5 text-successIcon mx-2"/>
    </Typography>}
    {(votingClosed && !notAllowed && userVote === "no") &&
    <Typography className="flex flex-row items-center" type="body" Element="span">
      Your vote <ThumbDownIcon className="h-5 w-5 text-dangerIcon mx-2"/>
    </Typography>}
    {(votingClosed && notAllowed) && <div className="flex flex-row items-center">
      <Typography type="body" Element="span">
        Read Only
      </Typography>
      <Tooltip description={readOnlyToolTip} dark><InfoIcon className="h-4 w-4 text-textCaption"/></Tooltip>
    </div>}
    {!userVote && !notAllowed && !votingClosed && <Tooltip description="DAOs are all about participation. Talk with the other members & vote." dark>
      <ButtonGroup
      buttons={buttons}
    /></Tooltip>}
  </div>
)

VotingFooterRight.prototypes = {
  votingClosed: PropTypes.bool,
  notAllowed: PropTypes.bool,
  userVote: PropTypes.oneOf([null, "yes", "no"]),
}

VotingFooterRight.defaultProps = {
  notAllowed: false,
  votingClosed: false,
  votingResult: null,
}