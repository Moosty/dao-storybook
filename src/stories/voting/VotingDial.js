import React from "react";
import {ProgressCircle} from "../ProgressCircle";
import {Typography} from "../Typography";
import PropTypes from "prop-types";

export const VotingDial = ({dialType, valueNo, valueYes, eligibleVotes, quorum, minToWin}) => {
  const minVotes = Math.ceil((quorum / 100) * eligibleVotes) === (quorum / 100) * eligibleVotes ?
    (quorum / 100) * eligibleVotes + 1 :
    Math.ceil((quorum / 100) * eligibleVotes)
  const totalVotes = valueNo + valueYes;
  const minYesVotes = totalVotes > minVotes ?
    Math.ceil((minToWin / 100) * totalVotes) === (minToWin / 100) * totalVotes ?
      (minToWin / 100) * totalVotes + 1 :
      Math.ceil((minToWin / 100) * totalVotes) :
    Math.ceil((minToWin / 100) * minVotes) === (minToWin / 100) * minVotes ?
      (minToWin / 100) * minVotes + 1 :
      Math.ceil((minToWin / 100) * minVotes)

  return (<div className="w-1/2 p-2 flex-col flex">
    <ProgressCircle
      type={dialType}
      valueNo={valueNo}
      valueYes={valueYes}
      eligibleVotes={eligibleVotes}
      quorum={quorum}
      minYesVotes={minYesVotes}
      minToWin={minToWin}
      minVotes={minVotes}
    />
    <Typography className="text-center" type="caption" Element="span">
      {dialType === "votingCount" && "Minimum required votes: "}
      {dialType === "votingYesNo" && "Minimum required yes votes: "}
      <Typography type="bodyStrong" Element="span">
        {dialType === "votingCount" && minVotes}
        {dialType === "votingYesNo" && minYesVotes}
      </Typography>
    </Typography>
  </div>)
}

VotingDial.propTypes = {
  dialType: PropTypes.oneOf(["votingCount", "votingYesNo"]),
  minToWin: PropTypes.number,
  valueNo: PropTypes.number,
  valueYes: PropTypes.number,
  eligibleVotes: PropTypes.number,
  quorum: PropTypes.number,
}

VotingDial.defaultProps = {
  dialType: "votingCount",
  minToWin: 13,
  valueNo: 0,
  valueYes: 0,
  eligibleVotes: 100,
  quorum: 50,
}
