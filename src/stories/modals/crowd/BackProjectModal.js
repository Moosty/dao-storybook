import React, {useRef} from "react";
import {crowdFundStates} from "../../../shared/global.crowdfund";
import {Typography} from "../../Typography";
import {ButtonGroup} from "../../ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {CrowdCardHeader} from "../../cards/CrowdCardHeader";
import {CrowdCardContent} from "../../cards/CrowdCardContent";
import {Button} from "../../index";
import {ModalFooter} from "../ModalFooter";

export const BackProjectModal = ({vote, claim, cancel, registerStartDate, ctaButton, iconCancel, cancelLabel, onClose}) => {
  const cancelButtonRef = useRef();

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
      <div className="mx-auto bg-surfaceBg w-full py-4 px-4 ">
        <Typography  className="text-center" type="h2" Element="h2">
          {vote && "Make a vote"}
          {claim && "Claim your funding"}
          {cancel && "Cancel this project"}
        </Typography>
        <Typography className="text-center mb-4" type="bodyStrong" Element="p">
          {vote && "Decide if the project deserves the next round of funding."}
          {claim && "The crowd decided you deserve the next round of funding."}
          {cancel && "Are you sure you want to cancel the project? the remaining funds will be paid back to the investors."}
        </Typography>
        <div className="flex justify-around my-4 mx-4">
          {claim &&
            <Button label="Claim" />
          }
          {cancel &&
          <Button label="End the project" />}

          {registerStartDate &&
          <Button label="Register a start date" />}
          {vote &&
          <ButtonGroup
            buttons={[
              {icon: <ThumbUpIcon className="h-5 w-5"/>, onClick: () => alert('yeah!!')},
              {icon: <ThumbDownIcon className="h-5 w-5"/>, onClick: () => alert('What, why??!?')},
            ]}
          />
          }
        </div>
      </div>
      <ModalFooter ctaButton={ctaButton} iconCancel={iconCancel} cancelLabel={cancelLabel} onClose={onClose} ref={cancelButtonRef}/>
    </div>
  )
}