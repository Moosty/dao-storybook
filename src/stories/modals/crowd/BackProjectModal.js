import React, {useRef, useState} from "react";
import {crowdFundStates} from "../../../shared/global.crowdfund";
import {Typography} from "../../Typography";
import {ButtonGroup} from "../../ButtonGroup";
import {ThumbDownIcon, ThumbUpIcon} from "@heroicons/react/solid";
import {CrowdCardHeader} from "../../crowd/CrowdCardHeader";
import {CrowdCardContent} from "../../crowd/CrowdCardContent";
import {Button, FormElement, SimpleInput} from "../../index";
import {ModalFooter} from "../ModalFooter";

export const BackProjectModal = ({
                                   title,
                                   onClickClaim,
                                   claimed,
                                   votedText,
                                   onClickYesVote,
                                   onClickNoVote,
                                   category,
                                   image,
                                   userName,
                                   userAddress,
                                   state,
                                   projectUrl,
                                   vote,
                                   claim,
                                   cancel,
                                   ctaButton,
                                   iconCancel,
                                   cancelLabel,
                                   onClose,
                                   voted,
                                   register,
                                   registerError,
                                   onClickRegister,
                                   back,
                                   backError,
                                   onClickBack,
                                   targetAmount,
                                 }) => {
  const cancelButtonRef = useRef();
  const [backAmount, setBackAmount] = useState(0)
  const [date, setDate] = useState()
  return (
    <div className="flex flex-col">
      <CrowdCardHeader
        userAddress={userAddress || "TEST-lsk13212341dfs23567246sdg"}
        userName={userName || "TEST-Raphael"}
        state={state || crowdFundStates.ACTIVE.VOTING}
      />
      <CrowdCardContent
        modal
        title={title || "TEST-Project CoinmarketC"}
        owner={userAddress || "TEST-lsk13212341dfs23567246sdg"}
        targetAmount={targetAmount || "1000"}
        projectUrl={projectUrl || "https://moosty.com/"}
        state={state || crowdFundStates.ACTIVE.VOTING}
        image={image}
        category={category}
      />
      <div className="mx-auto bg-surfaceBg w-full py-4 px-4 ">
        <Typography className="text-center" type="h2" Element="h2">
          {vote && "Make a vote"}
          {claim && "Claim your funding"}
          {cancel && "Cancel this project"}
          {claimed && "Already Claimed!"}
          {back && "Back crowdfunding"}
          {register && "Start project"}

        </Typography>
        <Typography className="text-center mb-4" type="bodyStrong" Element="p">
          {vote && "Decide if the project deserves the next round of funding."}
          {claim && "The crowd decided you deserve the next round of funding."}
          {cancel && "Are you sure you want to cancel the project? the remaining funds will be paid back to the investors."}
          {back && "How much would you like to donate to this crowdfund?"}
          {register && "Choose a date to start on your project."}
        </Typography>
        <div className="flex justify-around my-4 mx-4">
          {claim && <Button label="Claim" onClick={onClickClaim}/>}
          {cancel && <Button label="End the project"/>}
          {register && <div className={"flex flex-col w-full"}>
            <FormElement errorMessage={registerError} label={"Project start date"}>
              <SimpleInput onChange={setDate} datePicker/>
            </FormElement>
            <Button label={"Register a start date"} onClick={() => onClickRegister && onClickRegister(date)}/>
          </div>}
          {vote && <ButtonGroup
            buttons={[
              {icon: <ThumbUpIcon className="h-5 w-5"/>, onClick: onClickYesVote},
              {icon: <ThumbDownIcon className="h-5 w-5"/>, onClick: onClickNoVote},
            ]}
          />}
          {voted && <Typography className="text-center" type="h2" Element="h2">
            {votedText}
          </Typography>}
          {back && <div className={"flex flex-col w-full"}>
            <FormElement errorMessage={backError} label={"LSK amount to donate"}>
              <SimpleInput onChange={setBackAmount} placeHolder={"100"} number/>
            </FormElement>
            <Button label={"Back crowdfund"} onClick={() => onClickBack && onClickBack(backAmount)}/>
          </div>}
        </div>
      </div>
      <ModalFooter
        ctaButton={ctaButton}
        iconCancel={iconCancel}
        cancelLabel={cancelLabel}
        onClose={onClose}
        ref={cancelButtonRef}/>
    </div>
  )
}