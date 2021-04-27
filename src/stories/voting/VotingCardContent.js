import React from "react";
import PropTypes from "prop-types";
import {VotingDial} from "./VotingDial";

export const VotingCardContent = ({valueYes, valueNo, quorum, eligibleVotes, minToWin}) => (
  <div className="flex flex-row justify-between space-x-4 w-full">
    <VotingDial
      dialType={"votingCount"}
      quorum={quorum}
      eligibleVotes={eligibleVotes}
      valueYes={valueYes}
      valueNo={valueNo}
      minToWin={minToWin}
    />
    <VotingDial
      dialType={"votingYesNo"}
      quorum={quorum}
      eligibleVotes={eligibleVotes}
      valueYes={valueYes}
      valueNo={valueNo}
      minToWin={minToWin}
    />
  </div>
)

VotingCardContent.propTypes = {
  valueYes: PropTypes.number,
  valueNo: PropTypes.number,
  quorum: PropTypes.number,
  eligibleVotes: PropTypes.number,
  minToWin: PropTypes.number,
}

VotingCardContent.defaultProps = {
  valueYes: 0,
  valueNo: 0,
  quorum: 50,
  eligibleVotes: 100,
  minToWin: 50,
}
