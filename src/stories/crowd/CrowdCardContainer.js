import React from "react";
import {Card} from "../cards/Card";
import {CrowdCardHeader} from "./CrowdCardHeader";
import {CrowdCardContent} from "./CrowdCardContent";
import {CrowdCardFooter} from "./CrowdCardFooter";
import PropTypes from "prop-types";
import {CROWDFUNDSTATELIST, crowdFundStates} from "../../shared/global.crowdfund";

export const CrowdCardContainer = ({
                                     project,
                                     id,
                                     totalRaised,
                                     percentage,
                                     budget = 80,
                                     title,
                                     category,
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
                                     time,
                                     gradient,
                                     subTitle,
                                     backOnClick,
                                   }) => {
  return (<Card
      header={{
        children: <CrowdCardHeader
          username={owner}
          userAddress={owner}
          state={state}
        />
      }}
      content={{
        children: <CrowdCardContent {...{
          gradient,
          budget,
          totalRaised,
          title,
          subTitle,
          category,
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
          time,
          percentage,
          backOnClick,
        }}
        />
      }}
      footer={{
        center: <CrowdCardFooter
          time={time || "one day"}
          state={state}
          closeDate={closeDate}/>
      }}
    />
  )
}

CrowdCardContainer.propTypes = {
  state: PropTypes.oneOf(CROWDFUNDSTATELIST),
};

CrowdCardContainer.defaultProps = {
  state: crowdFundStates.PREVIEW,
};