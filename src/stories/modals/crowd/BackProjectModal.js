import React from "react";
import {CrowdCardContainer} from "../../crowd/CrowdCardContainer";
import {crowdFundStates} from "../../../shared/global.crowdfund";
import {Typography} from "../../Typography";
import {ButtonGroup} from "../../ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";

export const BackProjectModal = ({title}) => {

  return (
    <div className="flex flex-row">
      <CrowdCardContainer
        title="Project CoinmarketC"
        owner="lsk13212341dfs23567246sdg"
        targetAmount="10000"
        projectUrl="https://moosty.com/"
        state={crowdFundStates.PREVIEW}
        image={3}
        category={2}
      />
      <div>
        <Typography type="h2" Element="h2">Crowdfund: {title}</Typography>
        <Typography type="bodyStrong" Element="span">Thank you for backing this crowdfund! </Typography>
        <ButtonGroup
          buttons={[
            {icon: <ThumbUpIcon className="h-5 w-5"/>, onClick: () => alert('yeah!!')},
            {icon: <ThumbDownIcon className="h-5 w-5"/>, onClick: () => alert('What, why??!?')},
          ]}
        />
      </div>
    </div>
  )
}