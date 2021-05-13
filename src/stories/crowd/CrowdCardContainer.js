import React from "react";
import {Card} from "../cards/Card";
import {CrowdCardHeader} from "../cards/CrowdCardHeader";
import {CrowdCardContent} from "../cards/CrowdCardContent";
import {CrowdCardFooter} from "./CrowdCardFooter";
import PropTypes from "prop-types";
import {Button} from "../Button";
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



                                   }) => {
  return (<Card

      header={{children: <CrowdCardHeader username={owner} userAddress={owner} state={state}/>}}
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
        }}
        />
      }}
      footer={{center: <CrowdCardFooter time={time = "one day"} state={state} closeDate={closeDate}/>}}
    />
  )
}

// resultaat = array met alle crowdfundSTATES
// crowdfundstates = object met alle opties
// array maken van crowdfundstates  --> Object.keys(crowdFundStates) = [lijst van keys]
// keys van object omzetten naar array ARRAY.map()
// daarna mappen door keys: crowdFundStates[key]
// Object.keys(crowdFundStates).map(key => typeOf crowdFundStates[key] === "string" ? crowdFundStates[key] : Object.values(crowdFunStates[key])).flat()


CrowdCardContainer.propTypes = {
  state: PropTypes.oneOf(CROWDFUNDSTATELIST),
};

CrowdCardContainer.defaultProps = {
 state: crowdFundStates.PREVIEW,
};