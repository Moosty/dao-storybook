import React from "react";
import {CrowdCardImage} from "./crowd/CrowdCardImage";
import {Typography} from "./Typography";
import {CashIcon, TrashIcon, UsersIcon} from "@heroicons/react/outline";
import {crowdFundStates, PROJECT_LIFECYCLE, userRoles} from "../shared/global.crowdfund";
import {Button} from "./Button";
import PropTypes from "prop-types";
import {IconButton} from "./IconButton";
import moment from "moment";

export const AccountProjectSingleItem = ({
                                           image,
                                           gradient,
                                           id,
                                           title,
                                           targetAmount,
                                           totalRaised,
                                           state,
                                           backers,
                                           userRole,
                                           account,
                                           onClickRegister,
                                           onClickVote,
                                           claim,
                                           onClickCancel,
                                           onClickClaim,
                                           durationProject,
                                           budget,
                                           unit = "LSK",
                                           startDate = "12-07-2021",
                                           onClickClaimOwner,
                                           claimed,
                                           startProject = 0,
                                           lastHeight = 46,
                                         }) => {


  const blocksSinceStartProject = lastHeight - startProject
  const currentPeriod = Math.floor((blocksSinceStartProject / PROJECT_LIFECYCLE.PERIOD_BLOCKS)) // IN BLOCKS
  const startVoting = (startProject + (currentPeriod * PROJECT_LIFECYCLE.PERIOD_BLOCKS) + (PROJECT_LIFECYCLE.PERIOD_BLOCKS - PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD - PROJECT_LIFECYCLE.VOTE_BLOCKS)) - lastHeight
  const startVotingSeconds = startVoting * PROJECT_LIFECYCLE.BLOCK_TIME
  const endVoting = startVoting + PROJECT_LIFECYCLE.VOTE_BLOCKS;
  const endVotingSeconds = endVoting * PROJECT_LIFECYCLE.BLOCK_TIME;

  const currentBlockThisPeriod = (lastHeight - startProject) - ((currentPeriod) * PROJECT_LIFECYCLE.PERIOD_BLOCKS)
  const blocksLeftThisPeriod = (PROJECT_LIFECYCLE.PERIOD_BLOCKS - currentBlockThisPeriod)
  const blocksFirstPhase = PROJECT_LIFECYCLE.PERIOD_BLOCKS - (PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD + PROJECT_LIFECYCLE.VOTE_BLOCKS)

  const timeLabel = blocksLeftThisPeriod > (PROJECT_LIFECYCLE.VOTE_BLOCKS + PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD + (blocksFirstPhase / 2)) ? "New period started" :
    startVotingSeconds > 0 ?
      `Voting starts ${moment().add(startVotingSeconds, 'seconds').from()}` :
      blocksLeftThisPeriod > (PROJECT_LIFECYCLE.VOTE_BEFORE_END_PERIOD + (PROJECT_LIFECYCLE.VOTE_BLOCKS / 2)) ? "vote is open " :
        endVotingSeconds > 0 ?
          `Voting closes ${moment().add(endVotingSeconds, 'seconds').from()}` :
          "Show voting results"

  return (
    <div>
      <li key={id}>
        <a className="block hover:bg-gray-50">
          <div className="flex flex-row  items-center py-2">
            <div className="flex flex-row items-center w-1/2">
              <CrowdCardImage className="w-16 h-16 mr-2 rounded-default" image={image} gradient={gradient}/>
              <div className="flex flex-col w-full mx-4">
                <div className="flex flex-row">
                  <Typography type="bodyStrong" Element="span" className="mr-2">{title}</Typography>
                  <Typography type="caption" Element="span">{state}</Typography>
                </div>
                targetAmount: {targetAmount} totalraised:{totalRaised}{unit} durationproject:{durationProject} budget:{budget}
              </div>
            </div>
            <div className=" items-center flex flex-row justify-between w-1/2">
              <div className=" items-center ">
                <div className="flex flex-col item-center">
                  <p className="flex  text-sm text-gray-500 mr-2">
                    <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    {backers && backers.length}
                  </p>
                  <p className="flex items-center text-sm text-gray-500 ">
                    <CashIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    {targetAmount}
                  </p>
                </div>
              </div>

              <div className="  items-center flex flex-row">
                {userRole === userRoles.OWNER && state === crowdFundStates.PENDING &&
                <Button label="Register Start Date" size="small" onClick={onClickRegister}/>}
                {userRole === userRoles.OWNER && state === crowdFundStates.ACTIVE.PENDING &&
                <Typography type="bodyStrong" Element="span">Starts on: {startDate}</Typography>}
                {userRole === userRoles.OWNER && state === crowdFundStates.ACTIVE.CLAIMING &&
                <Button label="Claim" size="small" onClick={onClickClaimOwner} disabled={!!claimed}/>}
                {(userRole === userRoles.BACKER && state === crowdFundStates.ACTIVE.VOTING) &&
                <Button onClick={onClickVote} size="small" label="Vote"/>}
                {(userRole === userRoles.BACKER && state === crowdFundStates.CANCELED && state === crowdFundStates.FAILED) &&
                <Button label="Claim" type="small" onClick={onClickClaim}/>}
                {account && <div className="ml-4">
                  {account?.chain?.crowd?.funded.find(project => project.crowdfund === id)?.amount}
                </div>}
                <Typography type="caption" Element="span" className=" ml-4">{timeLabel}</Typography>
                <IconButton className="" onClick={onClickCancel}>
                  <TrashIcon className="h-5 w-5 mx-auto"/>
                </IconButton>
              </div>
            </div>
          </div>
        </a>
      </li>
    </div>
  )
}


AccountProjectSingleItem.propTypes = {
  userRole: PropTypes.oneOf(userRoles),
};

AccountProjectSingleItem.defaultProps = {
  userRole: userRoles.GUEST,
};