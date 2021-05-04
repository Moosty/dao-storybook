import React from "react";
import {CrowdCard} from "../cards/CrowdCard";
import {Card} from "../cards/Card";
import {CrowdCardHeader} from "../cards/CrowdCardHeader";
import {CrowdCardContent} from "../cards/CrowdCardContent";
import {CardFooter} from "../cards/CardFooter";
import {CrowdCardFooter} from "./CrowdCardFooter";

export const CrowdCardContainer = ({
                                     project,
                                     id,
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
        }}
        />
      }}
      footer={{center: <CrowdCardFooter time={time = "one day"} state={state} closeDate={closeDate}/>}}
    />
  )
}