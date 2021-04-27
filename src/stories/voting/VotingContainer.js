import React from "react";
import {Card} from "../cards/Card";
import {VotingCardContent} from "./VotingCardContent";
import {VotingFooterLeft} from "./VotingFooterLeft";
import {VotingFooterRight} from "./VotingFooterRight";

export const VotingContainer = ({
                                  dao,
                                  title,
                                  user,
                                  end,
                                  notAllowed,
                                  userVote,
                                  quorum,
                                  minToWin,
                                  yes,
                                  no,
                                  eligibleVotes,
                                  closed,
                                  result
                                }) => {
  // todo result berekenen
  // todo time + votes closed berekenen
  return <Card
    className={"w-card"}
    header={{
      dao,
      title,
      user,
      openLabel: "2 days left to close",
      closed: end > 0,
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