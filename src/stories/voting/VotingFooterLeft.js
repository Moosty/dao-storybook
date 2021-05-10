import React from "react";
import {Typography} from "../Typography";
import {InfoIcon} from "../forms/InfoIcon";
import PropTypes from "prop-types";
import {Tooltip} from "../Tooltip";

export const VotingFooterLeft = ({notAllowed, votingClosed, votingResult, readOnlyToolTip}) => (<>
    {notAllowed && !votingClosed &&
      <div className="flex flex-row items-center">
        <Typography type="body" Element="span">Read Only</Typography>
        <Tooltip description={readOnlyToolTip} dark><InfoIcon className="h-4 w-4 text-textCaption"/></Tooltip>
      </div>}
    {(votingClosed && votingResult === "inconclusive") &&
      <Typography type="bodyStrong" Element="span">
        Not enough votes
      </Typography>}
    {(votingClosed && votingResult === "yes") &&
      <span className="w-1/2 text-successIcon font-medium">
        Approved!
      </span>}
    {(votingClosed && votingResult === "no") &&
      <Typography className="text-dangerIcon" type="bodyStrong" Element="span">
        Not Approved!
      </Typography>}
  </>
)

VotingFooterLeft.prototypes = {
  notAllowed: PropTypes.bool,
  votingClosed: PropTypes.bool,
  votingResult: PropTypes.oneOf(["inconclusive", "yes", "no"]),
}

VotingFooterLeft.defaultProps = {
  notAllowed: false,
  votingClosed: false,
  votingResult: "inconclusive",
}