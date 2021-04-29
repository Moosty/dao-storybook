import React from "react";
import {Card} from "../cards/Card";
import {VotingCardContent} from "./VotingCardContent";
import {VotingFooterLeft} from "./VotingFooterLeft";
import {VotingFooterRight} from "./VotingFooterRight";
import {VotingHeader} from "./VotingHeader";

export const VotingContainer = ({
                                  dao,
                                  title,
                                  user,
                                  start,
                                  end,
                                  notAllowed,
                                  userVote,
                                  quorum,
                                  minToWin,
                                  yes,
                                  no,
                                  eligibleVotes,
                                  height,
                                  className,
                                }) => {

  const minVotes = Math.ceil((quorum / 100) * eligibleVotes) === (quorum / 100) * eligibleVotes ?
    (quorum / 100) * eligibleVotes + 1 :
    Math.ceil((quorum / 100) * eligibleVotes)
  const totalVotes = no + yes;
  const minYesVotes = totalVotes > minVotes ?
    Math.ceil((minToWin / 100) * totalVotes) === (minToWin / 100) * totalVotes ?
      (minToWin / 100) * totalVotes + 1 :
      Math.ceil((minToWin / 100) * totalVotes) :
    Math.ceil((minToWin / 100) * minVotes) === (minToWin / 100) * minVotes ?
      (minToWin / 100) * minVotes + 1 :
      Math.ceil((minToWin / 100) * minVotes)
  const result = totalVotes > quorum || totalVotes === eligibleVotes ?
    minYesVotes <= yes ? "yes" :
      minYesVotes <= no ? "no" : "inconclusive" :
    "inconclusive";
  const closed = end > height || totalVotes === eligibleVotes
  // todo calculate time to close or open
  const timeLabel = !closed ? start > height ? "Voting starts at: ~" : "2 days left to close" : null
  return <Card
    className={`w-card ${className}`}
    result={closed ? result : "inconclusive"}
    header={{
      children: <VotingHeader {...{
        dao,
        title,
        user,
        openLabel: timeLabel,
        closed,
      }}/>
    }}
    content={{
      children: <VotingCardContent
        quorum={quorum}
        minToWin={minToWin}
        valueYes={yes}
        valueNo={no}
        eligibleVotes={eligibleVotes}
      />
    }}
    footer={{
      left: <VotingFooterLeft notAllowed={notAllowed} votingClosed={closed} votingResult={result}/>,
      right: <VotingFooterRight votingClosed={closed} notAllowed={notAllowed} userVote={userVote}/>,
    }}
  />
}