import React from "react";
import {CrowdCardContainer} from "../../crowd/CrowdCardContainer";
import {crowdFundStates} from "../../../shared/global.crowdfund";
import {Typography} from "../../Typography";
import {ButtonGroup} from "../../ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {CrowdCardHeader} from "../../cards/CrowdCardHeader";
import {CrowdCardInfo} from "../../crowd/CrowdCardInfo";
import {CrowdCardContent} from "../../cards/CrowdCardContent";
import {CrowdCardImage} from "../../crowd/CrowdCardImage";

export const BackProjectModal = ({title, modalState}) => {

  return (
    <div className="flex flex-col">
      <CrowdCardHeader
        owner="lsk13212341dfs23567246sdg"
        state={crowdFundStates.ACTIVE.VOTING}
      />
      <CrowdCardContent
        modal
        title="Project CoinmarketC"
        owner="lsk13212341dfs23567246sdg"
        targetAmount="10000"
        projectUrl="https://moosty.com/"
        state={crowdFundStates.ACTIVE.VOTING}
        image={3}
        category={2}
      />
      <div className="mx-auto bg-surfaceBg w-full py-4 ">a
        <Typography  className="text-center" type="h2" Element="h2">
          Make a vote
        </Typography>
        <Typography className="text-center mb-4" type="bodyStrong" Element="p">
          Decide if the project deserves the next round of funding.</Typography>
        <div className="flex justify-around my-4">
          <ButtonGroup
            buttons={[
              {icon: <ThumbUpIcon className="h-5 w-5"/>, onClick: () => alert('yeah!!')},
              {icon: <ThumbDownIcon className="h-5 w-5"/>, onClick: () => alert('What, why??!?')},
            ]}
          />
        </div>

      </div>
    </div>
  )
}