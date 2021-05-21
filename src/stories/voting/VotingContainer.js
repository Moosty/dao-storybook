import React from "react";
import {Card} from "../cards/Card";
import {VotingCardContent} from "./VotingCardContent";
import {VotingFooterLeft} from "./VotingFooterLeft";
import {VotingFooterRight} from "./VotingFooterRight";
import {VotingHeader} from "./VotingHeader";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import moment from "moment";

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
                                  readOnlyToolTip,
                                  onClickThumbUp,
                                  onClickThumbDown,
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
  const result = totalVotes > (quorum / 100) * eligibleVotes || totalVotes === eligibleVotes ?
    minYesVotes <= yes ? "yes" :
      minYesVotes <= no ? "no" : "inconclusive" :
    "inconclusive";
  const closed = end < height || totalVotes === eligibleVotes
  const startSeconds = start - height > 0 ? (start - height) * 5 : 0
  const endSeconds = end - height > 0 ? (end - height) * 5 : 0
  const timeLabel = !closed ? start > height ? `Voting starts ${moment().add(startSeconds, 'seconds').from()}` : `Voting closes ${moment().add(endSeconds, 'seconds').from()}` : null
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
      left: <VotingFooterLeft
        notAllowed={notAllowed}
        votingClosed={closed}
        votingResult={result}
        readOnlyToolTip={readOnlyToolTip}
      />,
      right: <VotingFooterRight
        votingClosed={closed}
        notAllowed={notAllowed}
        userVote={userVote}
        readOnlyToolTip={readOnlyToolTip}
        buttons={[
          {icon: <ThumbUpIcon className="h-5 w-5"/>, onClick: onClickThumbUp, disabled: start - height > 0},
          {icon: <ThumbDownIcon className="h-5 w-5"/>, onClick: onClickThumbDown, disabled: start - height > 0},
        ]}/>,
    }}
  />
}